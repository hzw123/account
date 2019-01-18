package cn.mauth.account.shiro.filter;

import java.io.IOException;
import java.util.Set;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.CollectionUtils;
import org.apache.shiro.web.filter.authz.RolesAuthorizationFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * 通过角色验证权限
 */
public class ExtendRolesAuthorizationFilter  extends RolesAuthorizationFilter{
    private static final Logger log= LoggerFactory.getLogger(ExtendRolesAuthorizationFilter.class);

    public boolean isAccessAllowed(HttpServletRequest request, HttpServletResponse response, Object mappedValue) throws IOException {

        log.warn(ExtendRolesAuthorizationFilter.class.toString());
        Subject subject = getSubject(request, response);
        String[] rolesArray = (String[]) mappedValue;

        if (rolesArray == null || rolesArray.length == 0) {
            //no roles specified, so nothing to check - allow access.
            return true;
        }
        //AbstractFilter
        Set<String> roles = CollectionUtils.asSet(rolesArray);

        boolean flag=false;
        for(String role: roles){
            if(subject.hasRole(role)){
                flag=true;
                break;
            }
        }
        return true;
    }
}
