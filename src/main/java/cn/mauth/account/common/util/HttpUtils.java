package cn.mauth.account.common.util;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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

}
