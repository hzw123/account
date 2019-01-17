package cn.mauth.account.filter;

import cn.mauth.account.common.bean.JwtToken;
import cn.mauth.account.common.util.Constants;
import cn.mauth.account.common.util.JwtUtil;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.exception.CustomException;
import cn.mauth.account.server.RedisUtil;
import com.alibaba.fastjson.JSON;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.web.filter.authc.BasicHttpAuthenticationFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * JWT过滤
 */
public class JwtFilter extends BasicHttpAuthenticationFilter{

    private static final String ACCESS_TOKEN="access_token";

    private static final Logger logger = LoggerFactory.getLogger(JwtFilter.class);

    @Override
    protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object mappedValue) {

        // 判断用户是否想要登入
        if (this.isLoginAttempt(request, response)) {

            try {

                this.executeLogin(request, response);

            } catch (Exception e) {

                // 认证出现异常，传递错误信息msg
                String msg = e.getMessage();

                // 获取应用异常(该Cause是导致抛出此throwable(异常)的throwable(异常))
                Throwable throwable = e.getCause();

                if (throwable != null && throwable instanceof SignatureVerificationException) {

                    // 该异常为JWT的AccessToken认证失败(Token或者密钥不正确)
                    msg = "Token或者密钥不正确(" + throwable.getMessage() + ")";

                } else if (throwable != null && throwable instanceof TokenExpiredException) {

                    // 该异常为JWT的AccessToken已过期，判断RefreshToken未过期就进行AccessToken刷新
                    if (this.refreshToken(request, response)) {

                        return true;
                    } else {

                        msg = "Token已过期(" + throwable.getMessage() + ")";
                    }

                } else {

                    // 应用异常不为空
                    if (throwable != null) {

                        // 获取应用异常msg
                        msg = throwable.getMessage();
                    }
                }
                /**
                 * 错误两种处理方式
                 * 1. 将非法请求转发到/401的Controller处理，抛出自定义无权访问异常被全局捕捉再返回Response信息
                 * 2. 无需转发，直接返回Response信息
                 * 一般使用第二种(更方便)
                 */
                // 直接返回Response信息
                this.response401(request, response, msg);

                return false;
            }
        }

        return true;
    }

    /**
     * 这里我们详细说明下为什么重写
     * 可以对比父类方法，只是将executeLogin方法调用去除了
     * 如果没有去除将会循环调用doGetAuthenticationInfo方法
     */
    @Override
    protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {

        this.sendChallenge(request, response);

        return false;
    }

    /**
     * 检测Header里面是否包含Authorization字段，有就进行Token登录认证授权
     */
    @Override
    protected boolean isLoginAttempt(ServletRequest request, ServletResponse response) {

        String token = request.getParameter(ACCESS_TOKEN);

        return this.isToken(token);
    }

    private boolean isToken(String token){
        if(StringUtils.isNotEmpty(token) && JwtUtil.verify(token)){

            String currentTimeMillisRedis=RedisUtil.getCurrentTimeMillis(token);

            if(StringUtils.isNotEmpty(currentTimeMillisRedis) &&
                    currentTimeMillisRedis.equals(JwtUtil.getCurrentTimeMillis(token))){
                return true;
            }
        }

        return false;
    }

    /**
     * 进行AccessToken登录认证授权
     */
    @Override
    protected boolean executeLogin(ServletRequest request, ServletResponse response) throws Exception {


        String token=this.getToken(request);

        JwtToken jwtToken=this.getJwtToken(token);

        // 提交给UserRealm进行认证，如果错误他会抛出异常并被捕获
        this.getSubject(request, response).login(jwtToken);

        // 如果没有抛出异常则代表登入成功，返回true
        return true;
    }



    /**
     * 此处为AccessToken刷新，进行判断RefreshToken是否过期
     * 未过期就返回新的access_token且继续正常访问
     * @param request
     * @param response
     * @return
     */
    private boolean refreshToken(ServletRequest request, ServletResponse response) {

        // 拿到当前Header中Authorization的AccessToken(Shiro中getAuthzHeader方法已经实现)
        String token = this.getToken(request);


        // 判断Redis中token是否存在
        String str=Constants.Redis.PREFIX_SHIRO_ACCESS_TOKEN + token;

        if (RedisUtil.exists(str)) {

            String currentTimeMillisRedis = RedisUtil.getString(str);

            if (JwtUtil.getClaim(token, Constants.Jwt.CURRENT_TIME_MILLIS).equals(currentTimeMillisRedis)) {

                // 刷新AccessToken，设置时间戳为当前最新时间戳
                token = JwtUtil.refreshSign(token);

                // 将新刷新的AccessToken再次进行Shiro的登录
                JwtToken jwtToken = this.getJwtToken(token);

                // 提交给UserRealm进行认证，如果错误他会抛出异常并被捕获，如果没有抛出异常则代表登入成功，返回true
                this.getSubject(request, response).login(jwtToken);

                // 最后将刷新的AccessToken存放在Response的Header中的Authorization字段返回
                HttpServletResponse httpServletResponse = (HttpServletResponse) response;

                httpServletResponse.setHeader("Authorization", token);

                httpServletResponse.setHeader("Access-Control-Expose-Headers", "Authorization");

                return true;
            }

        }

        return false;
    }

    /**
     * 无需转发，直接返回Response信息
     */
    private void response401(ServletRequest req, ServletResponse resp, String msg) {

        HttpServletResponse httpServletResponse = (HttpServletResponse) resp;

        httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());

        httpServletResponse.setCharacterEncoding("UTF-8");

        httpServletResponse.setContentType("application/json; charset=utf-8");

        PrintWriter out = null;

        try {

            out = httpServletResponse.getWriter();

            String data = JSON.toJSONString(Result.of(HttpStatus.UNAUTHORIZED.value(),"无权访问(Unauthorized):" + msg));

            out.append(data);

        } catch (IOException e) {

            String error="直接返回Response信息出现IOException异常:";

            logger.error(error, e);

            throw new CustomException(error,e);

        } finally {

            if (out != null) {
                out.close();
            }
        }
    }

    /**
     * 对跨域提供支持
     */
    @Override
    protected boolean preHandle(ServletRequest request, ServletResponse response) throws Exception {

        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        httpServletResponse.setHeader("Access-control-Allow-Origin", httpServletRequest.getHeader("Origin"));
        httpServletResponse.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
        httpServletResponse.setHeader("Access-Control-Allow-Headers", httpServletRequest.getHeader("Access-Control-Request-Headers"));

        // 跨域时会首先发送一个OPTIONS请求，这里我们给OPTIONS请求直接返回正常状态
        if (httpServletRequest.getMethod().equals(RequestMethod.OPTIONS.name())) {

            httpServletResponse.setStatus(HttpStatus.OK.value());

            return false;
        }

        return super.preHandle(request, response);
    }

    private String getToken(ServletRequest req){
        String token=req.getParameter(ACCESS_TOKEN);

        return token;
    }

    private JwtToken getJwtToken(String token){

        String account=JwtUtil.getAccount(token);;
        String password=JwtUtil.getPassword(token);
        String clientId=JwtUtil.getClientId(token);

        return new JwtToken(account,password,clientId,token);
    }

}
