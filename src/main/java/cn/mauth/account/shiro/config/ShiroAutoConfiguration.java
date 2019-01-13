package cn.mauth.account.shiro.config;

import cn.mauth.account.shiro.service.MyShiroRealm;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.cache.CacheManager;
import org.apache.shiro.cache.MemoryConstrainedCacheManager;
import org.apache.shiro.mgt.RememberMeManager;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.CookieRememberMeManager;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.apache.shiro.web.servlet.Cookie;
import org.apache.shiro.web.servlet.SimpleCookie;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.LinkedHashMap;
import java.util.Map;


/**
 * 权限配置文件
 */
@Configuration
@EnableConfigurationProperties(ShiroProperties.class)
public class ShiroAutoConfiguration {

	private final ShiroProperties properties;

	public ShiroAutoConfiguration(ShiroProperties properties) {
		this.properties = properties;
	}

	@Bean(name = {"ShiroFilterFactoryBean"})
	@ConditionalOnMissingBean({ShiroFilterFactoryBean.class})
	public ShiroFilterFactoryBean shiroFilterFactoryBean(SecurityManager securityManager) {
		ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
		shiroFilterFactoryBean.setSecurityManager(securityManager);
		//登录
		shiroFilterFactoryBean.setLoginUrl(this.properties.getLoginUrl());
		//首页
		shiroFilterFactoryBean.setSuccessUrl(this.properties.getSuccessUrl());
		//错误页面，认证不通过跳转
		shiroFilterFactoryBean.setUnauthorizedUrl(this.properties.getUnauthorizedUrl());

		//页面权限控制
		Map<String, String> map = this.properties.getFilterChainDefinitionMap();
		Map<String, String> filterChainDefinitionMap = new LinkedHashMap<>();

		for (Map.Entry<String,String> entry:map.entrySet()) {
			if(entry.getValue().contains(",")){
				String[] var=entry.getValue().split(",");
				int var1=var.length;
				for (int i=0;i<var1;++i){
					filterChainDefinitionMap.put(var[i],entry.getKey());
				}
			}else {
				filterChainDefinitionMap.put(entry.getValue(), entry.getKey());
			}
		}


		shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);

		return shiroFilterFactoryBean;
	}

	/**
	 * web应用管理配置
	 * @param shiroRealm
	 * @param cacheManager
	 * @param manager
	 * @return
	 */
	@Bean
	public DefaultWebSecurityManager securityManager(Realm shiroRealm,CacheManager cacheManager,RememberMeManager manager) {
		DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
		securityManager.setCacheManager(cacheManager);
		securityManager.setRememberMeManager(manager);//记住Cookie
		securityManager.setRealm(shiroRealm);
		return securityManager;
	}

	/**
	 * 加密算法
	 * @return
	 */
	@Bean
	public HashedCredentialsMatcher hashedCredentialsMatcher() {
		HashedCredentialsMatcher hashedCredentialsMatcher = new HashedCredentialsMatcher();
		hashedCredentialsMatcher.setHashAlgorithmName("MD5");//采用MD5 进行加密
		hashedCredentialsMatcher.setHashIterations(1);//加密次数
		return hashedCredentialsMatcher;
	}

	/**
	 * 我的配置
	 * @return
	 */
	@Bean
	public RememberMeManager rememberMeManager() {
		Cookie cookie = new SimpleCookie("rememberMe");
        cookie.setHttpOnly(true);//通过js脚本将无法读取到cookie信息
        cookie.setMaxAge(60 * 60 * 24);//cookie保存一天
		CookieRememberMeManager manager=new CookieRememberMeManager();
		manager.setCookie(cookie);
		return manager;
	}

	/**
	 * 缓存配置
	 * @return
	 */
	@Bean
	public CacheManager cacheManager() {
		MemoryConstrainedCacheManager cacheManager=new MemoryConstrainedCacheManager();//使用内存缓存
		return cacheManager;
	}

	/**
	 * 配置realm，用于认证和授权
	 * @return
	 */
	@Bean
	public AuthorizingRealm shiroRealm() {
		MyShiroRealm shiroRealm = new MyShiroRealm();
		//校验密码用到的算法
//		shiroRealm.setCredentialsMatcher(hashedCredentialsMatcher);
		return shiroRealm;
	}


	/**
	 * 启用shiro注解
	 * 加入注解的使用，不加入这个注解不生效
	 * @param securityManager
	 * @return
	 */
    @Bean
    public AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor(SecurityManager securityManager) {
        AuthorizationAttributeSourceAdvisor advisor = new AuthorizationAttributeSourceAdvisor();
        advisor.setSecurityManager(securityManager);
        return advisor;
    }
    

}
