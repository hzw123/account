package cn.mauth.account.common.util;

import cn.mauth.account.exception.CustomException;
import com.alibaba.fastjson.JSON;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

public final class HttpUtils {

    public static HttpServletRequest getRequest(){
        return ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();
    }

    public static HttpSession getSession(){
        return HttpUtils.getRequest().getSession();
    }

    public static boolean isUser(){
        Object obj=getSession().getAttribute(Constants.Session.ACCOUNT);
        return obj!=null;
    }

    public static void login(String account){
        HttpUtils.getSession().setAttribute(Constants.Session.ACCOUNT,account);
    }

    public static void logout(){
        getSession().removeAttribute(Constants.Session.ACCOUNT);
    }

    public static String getAccount(){
        Object obj=getSession().getAttribute(Constants.Session.ACCOUNT);
        return obj!=null?obj.toString():null;
    }

    public static void setSessionIndex(String sessionIndex){
        HttpUtils.getSession().setAttribute(Constants.Session.SESSION_INDEX,sessionIndex);
    }

    public static String getSessionIndex(){
        Object obj=HttpUtils.getSession().getAttribute(Constants.Session.SESSION_INDEX);
        return obj!=null?obj.toString():null;
    }

    public static void sendCall(ServletResponse res,int httpStatus,String message){
        HttpServletResponse response=(HttpServletResponse) res;

        response.setStatus(httpStatus);

        response.setCharacterEncoding("UTF-8");

        response.setContentType("application/json; charset=utf-8");

        PrintWriter out = null;

        try {

            out = response.getWriter();

            String data = JSON.toJSONString(Result.of(httpStatus,message));

            out.append(data);
            return;
        } catch (IOException e) {

            String error="直接返回Response信息出现IOException异常:";

            throw new CustomException(error+e.getMessage());

        } finally {

            if (out != null) {
                out.close();
            }
        }
    }

}
