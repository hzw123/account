package cn.mauth.account.shiro.filter;

import cn.mauth.account.common.util.HttpUtils;
import cn.mauth.account.common.util.JwtUtil;
import cn.mauth.account.exception.CustomException;
import cn.mauth.account.server.RedisUtil;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authz.AuthorizationFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

public class JwtAuthorizationFilter extends AuthorizationFilter {

    private static final String ACCESS_TOKEN="access_token";

    private static final Logger logger= LoggerFactory.getLogger(JwtAuthorizationFilter.class);

    @Override
    protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object o) {

        logger.warn("\ninto JwtAuthenticationFilter");


        Subject subject=this.getSubject(request,response);

        if(subject.isAuthenticated())
            return true;

        if(this.isGetToken(request))
            return true;

        try {

            this.verifyToken(request);

            return true;
        }catch (Exception e){

            String msg = e.getMessage();

            logger.error(e.getMessage());

            HttpUtils.sendCall(request,response,HttpStatus.UNAUTHORIZED.value(),"无权访问:"+msg);

            return false;
        }

    }

    private void verifyToken(ServletRequest request) throws Exception{


        String token = request.getParameter(ACCESS_TOKEN);

        if(StringUtils.isEmpty(token)){
            throw new Exception("not found access_token");
        }

        JwtUtil.verify(token);

        String currentTimeMillisRedis= RedisUtil.getCurrentTimeMillis(token);

        if(StringUtils.isEmpty(currentTimeMillisRedis)){
            throw new Exception("access_token expired");
        }

        if(!currentTimeMillisRedis.equals(JwtUtil.getCurrentTimeMillis(token))){
            throw new Exception("access_token 错误");
        }

    }

    private boolean isGetToken(ServletRequest request){

        HttpServletRequest req=(HttpServletRequest) request;

        String uri=req.getRequestURI();

        String method=req.getMethod();

        if(uri.equals("/api/oauth2/token")&&method.equals("GET")){
            return true;
        }

        return  false;
    }

}
