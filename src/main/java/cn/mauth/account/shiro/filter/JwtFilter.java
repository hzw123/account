package cn.mauth.account.shiro.filter;

import cn.mauth.account.common.util.HttpUtils;
import cn.mauth.account.common.util.JwtUtil;
import cn.mauth.account.filter.AccountFilter;
import cn.mauth.account.server.RedisUtil;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class JwtFilter extends AccountFilter {

    private static final String ACCESS_TOKEN="access_token";

    private static final Logger logger= LoggerFactory.getLogger(JwtFilter.class);

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {

        logger.warn("\ninto JwtFilter");

        if(SecurityUtils.getSubject().isAuthenticated()||this.isGetToken(request)){
            filterChain.doFilter(request,response);
            return;
        }

        try {

            this.verifyToken(request);

            filterChain.doFilter(request,response);
        }catch (Exception e){

            String msg = e.getMessage();

            logger.error(e.getMessage());

            HttpUtils.sendCall(request,response,HttpStatus.UNAUTHORIZED.value(),"无权访问:"+msg);

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
