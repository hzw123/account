package cn.mauth.account.shiro.service;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authz.PermissionsAuthorizationFilter;

/**
 * 通过字符串验证权限
 */
public class URLPermissionsFilter  extends PermissionsAuthorizationFilter {
	/**
     * mappedValue 访问该url时需要的权限
     * subject.isPermitted 判断访问的用户是否拥有mappedValue权限
     * 重写拦截器，只要符合配置的一个权限，即可通过
     */
    public boolean isAccessAllowed(HttpServletRequest request, HttpServletResponse response, Object mappedValue)
            throws IOException {

        Subject subject = this.getSubject(request, response);
        // DefaultFilterChainManager
        // PathMatchingFilterChainResolver
        String[] perms = (String[]) mappedValue;
        boolean isPermitted = false;
        if (perms != null && perms.length > 0) {
            for (String str : perms) {
                if (subject.isPermitted(str)) {
                    isPermitted = true;
                }
            }
        }

        return true;
    }
}
