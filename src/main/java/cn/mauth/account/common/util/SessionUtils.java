package cn.mauth.account.common.util;

import cn.mauth.account.common.domain.SysMenu;
import cn.mauth.account.common.domain.SysUserInfo;
import com.alibaba.fastjson.JSON;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.springframework.util.StringUtils;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public final class SessionUtils {

    public static Session getSession(){
        return SecurityUtils.getSubject().getSession();
    }

    public static Session getSession(boolean var){
        return SecurityUtils.getSubject().getSession(var);
    }

    public static void setAttribute(Object key, Object value){
        SessionUtils.getSession().setAttribute(key,value);
    }

    public static void setAttribute(boolean var,Object key, Object value){
        SessionUtils.getSession(var).setAttribute(key,value);
    }

    public static Object getAttribute(Object key){
        return SessionUtils.getSession().getAttribute(key);
    }

    public static boolean isAdmin(){
        Object obj=SessionUtils.getAttribute(Constants.Session.ROLE);
        if(obj!=null && Constants.ADMIN.equals(obj.toString())){
            return true;
        }
        return false;
    }

    public static Long getUserInfoId(){
        return Long.valueOf(SessionUtils.getAttribute(Constants.Session.USER_ID).toString());
    }

    public static void setMenuAndRole(List<SysMenu> menuList){
        SessionUtils.setAttribute(false,Constants.Session.MENU, JSON.toJSONString(menuList));
        Set<String> menuSet = new HashSet<>();
        SessionUtils.listMenu(menuSet, menuList);
        SessionUtils.setAttribute(Constants.Session.PERMISSIONS, JSON.toJSONString(menuSet));
    }

    private static void listMenu(Set<String> menuSet, List<SysMenu> menuList) {
        menuList.forEach(r->{
            if(StringUtils.hasText(r.getMenuUrl()))
                menuSet.add(r.getMenuUrl());
            if(r.getList()!=null)
                SessionUtils.listMenu(menuSet, r.getList());
        });
    }

    public static Set<String> getPermissions(){
        List<String> roles = JSON.parseArray(SessionUtils.getAttribute(Constants.Session.PERMISSIONS).toString(), String.class);
        return new HashSet<>(roles);
    }

    public static SysUserInfo getCurrentUser(){
        return (SysUserInfo) SessionUtils.getAttribute(Constants.Session.USER);
    }

    public static void setAccect(String accect){
        SessionUtils.setAttribute(Constants.Session.ACCOUNT,accect);
    }

    public static String getAccount(){
        return SessionUtils.getAttribute(Constants.Session.ACCOUNT).toString();
    }

    public static boolean isUser(){
        return SessionUtils.getAttribute(Constants.Session.USER)!=null?true:false;
    }
}
