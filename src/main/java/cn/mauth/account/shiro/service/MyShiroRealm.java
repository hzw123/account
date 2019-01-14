package cn.mauth.account.shiro.service;

import cn.mauth.account.SpringContextUtil;
import cn.mauth.account.common.domain.sys.SysLogLogin;
import cn.mauth.account.common.domain.sys.SysUserInfo;
import cn.mauth.account.common.util.Constants;
import cn.mauth.account.common.util.HttpUtils;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.SysLogLoginDao;
import cn.mauth.account.dao.SysRoleDao;
import cn.mauth.account.dao.SysUserInfoDao;
import com.alibaba.fastjson.JSON;
import com.xiaoleilu.hutool.crypto.DigestUtil;
import com.xiaoleilu.hutool.http.HttpUtil;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * 身份校验核心类
 */
@Component
public class MyShiroRealm extends AuthorizingRealm {

	private static final Logger log= LoggerFactory.getLogger(MyShiroRealm.class);

	@Autowired
	private SysUserInfoDao sysUserInfoDao;

	/**
	 * 认证登陆
	 */
	@SuppressWarnings("unused")
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		
		 //加这一步的目的是在Post请求的时候会先进认证，然后在到请求
        if (token.getPrincipal() == null) {
            return null;
        }
		String username = (String) token.getPrincipal();
		String password = new String((char[]) token.getCredentials());

		SysUserInfo sysUserInfo = sysUserInfoDao.findByLoginName(username);
		
		log.info("----->>userInfo=" + sysUserInfo.getLoginName());

		if(StringUtils.isEmpty(username)){
			throw new UnknownAccountException("没有用户！");
		}

		if (null == sysUserInfo) {
			throw new UnknownAccountException("账号不存在");
		}

		if (!sysUserInfo.getPwd().equals(DigestUtil.md5Hex(sysUserInfo.getSalt() + password))) {
			throw new UnknownAccountException("账号或者密码不正确");
		}

		if(sysUserInfo.getStatusId()==2){
			throw new LockedAccountException("账户已冻结");
		}

		if(sysUserInfo.getStatusId()==3){
			throw new AuthenticationException("账户已注销");
		}
		SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(
				username, // 用户名
				password, // 密码
				this.getName() // realm name
		);

		addLoginLog(sysUserInfo,false);

		return authenticationInfo;

		
	}
	
	 /**
     * 授权查询回调函数, 进行鉴权但缓存中无用户的授权信息时调用.
     */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		log.info("权限配置-->MyShiroRealm.doGetAuthorizationInfo()");
		if(principals == null){  
	       throw new AuthorizationException("principals should not be null");  
	    }

		if (!SecurityUtils.getSubject().isAuthenticated()) {
			doClearCache(principals);
			SecurityUtils.getSubject().logout();
			return null;
		}

		SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();
		simpleAuthorizationInfo.setStringPermissions(SessionUtils.getPermissions());
		return simpleAuthorizationInfo;
	}
	
	 /**
     * 清理缓存权限
     */
    public void clearCachedAuthorizationInfo() {
        this.clearCachedAuthorizationInfo(SecurityUtils.getSubject().getPrincipals());
    }

	public static void addLoginLog(SysUserInfo sysUserInfo, boolean flag){

		SysLogLoginDao sysLogLoginDao= SpringContextUtil.getBean(SysLogLoginDao.class);

		SysRoleDao sysRoleDao=SpringContextUtil.getBean(SysRoleDao.class);

		SysLogLogin logLogin=new SysLogLogin();

		HttpServletRequest request= HttpUtils.getRequest();
		String lastId="";
		String ip= HttpUtil.getClientIP(request);
		Date lastTime=new Date();

		if(flag){
			String account=HttpUtils.getAccount();
			logLogin.setSingleName(account);
		}

		SysLogLogin last=sysLogLoginDao.getLastSysLogLogin(sysUserInfo.getId());

		if(last!=null){
			lastId=last.getLoginIp();
			lastTime=last.getGmtCreate();
		}
		logLogin.setGmtCreate(new Date());
		logLogin.setUserInfoId(sysUserInfo.getId());
		logLogin.setLastLoginIp(lastId==""?ip:lastId);
		logLogin.setLastLoginTime(lastTime);
		logLogin.setLoginName(sysUserInfo.getLoginName());
		logLogin.setLoginIp(ip);
		sysLogLoginDao.save(logLogin);
		log.info(sysUserInfo.getNickName()+"登陆成功！");
		SessionUtils.setAttribute(Constants.Session.USER_TYPE, sysUserInfo.getUserType());
		SessionUtils.setAttribute(Constants.Session.USER_ID, sysUserInfo.getId());
		SessionUtils.setAttribute(Constants.Session.USER, JSON.toJSONString(sysUserInfo));

		if(sysRoleDao.loadByUid(sysUserInfo.getId(),Constants.ADMIN)>0){
			SessionUtils.setAttribute(false,Constants.Session.ROLE,Constants.ADMIN);
		};
    }

}
