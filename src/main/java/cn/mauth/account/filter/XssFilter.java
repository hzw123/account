package cn.mauth.account.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

/**
 * 防止XSS攻击的过滤器
 * 
 * @author mauth
 */
@WebFilter(filterName = "xssFilter", urlPatterns = "/admin/*")
public class XssFilter extends AccountFilter {
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		XssHttpServletRequestWrapper xssRequest = new XssHttpServletRequestWrapper((HttpServletRequest) request);
		chain.doFilter(xssRequest, response);
	}

}
