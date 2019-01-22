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

        logger.warn("\ntoken 验证");

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

        JwtUtil.verifyToken(token);

        logger.info("token：{}, 验证通过",token);
    }

    private boolean isGetToken(ServletRequest request){

        HttpServletRequest req=(HttpServletRequest) request;

        String uri=req.getRequestURI();

        String method=req.getMethod();

        if(uri.equals("/api/oauth2/token") && (method.equals("POST")||method.equals("GET"))){
            return true;
        }

        return  false;
    }

}
