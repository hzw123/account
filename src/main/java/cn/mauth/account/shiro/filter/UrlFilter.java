package cn.mauth.account.shiro.filter;

import cn.mauth.account.common.util.Bjui;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.filter.AccountFilter;
import com.alibaba.fastjson.JSON;
import org.apache.shiro.SecurityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class UrlFilter extends AccountFilter{

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain filterChain) throws IOException, ServletException {
        logger.warn("into UrlFilter");

        HttpServletRequest request=(HttpServletRequest) req;

        HttpServletResponse response=(HttpServletResponse) res;

        if(!SecurityUtils.getSubject().isAuthenticated()){
            response.sendRedirect("/");
            return;
        }

        String uri = request.getServletPath();

        try{
            if (!checkUri(uri)) {
                logger.error("没此权限，当前访问路径为：{}", uri);
                response.setContentType("text/html;charset=UTF-8");

                PrintWriter out = response.getWriter();

                Bjui bj = new Bjui();

                bj.setStatusCode(300);

                bj.setMessage("没此权限，请联系管理员！");

                out.print(JSON.toJSONString(bj));

                out.flush();

                out.close();
            }else {
                filterChain.doFilter(request,response);
            }
        }catch (IOException e){
            logger.error(e.getMessage());
        }

    }

    private static Boolean checkUri(String uri) {

        if(uri.equals("/admin/index"))
            return true;

        if (StringUtils.hasText(uri) && uri.endsWith("/")) {
            uri = uri.substring(0, uri.length() - 1);
        }

        for (String s : SessionUtils.getPermissions()) {

            if (s.contains(uri)) {
                return true;
            }
        }

        return false;
    }
}
