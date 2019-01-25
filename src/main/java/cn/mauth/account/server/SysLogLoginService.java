package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.sys.SysLogLogin;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.SysLogLoginDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

/**
 * 用户登陆日志 
 */
@Service
public class SysLogLoginService extends BaseServer<SysLogLoginDao,SysLogLogin>{

	public SysLogLoginService(SysLogLoginDao dao) {
		super(dao);
	}

	@Override
	protected Predicate toPredicate(List<Predicate> list, SysLogLogin sysLogLogin, Root root, CriteriaQuery query, CriteriaBuilder cb) {

		Long userInfoId=sysLogLogin.getUserInfoId();

		if(userInfoId!=null && userInfoId>0)
			list.add(cb.equal(root.get("userInfoId"),userInfoId));

		if(StringUtils.isNotEmpty(sysLogLogin.getLastLoginIp()))
			list.add(cb.like(root.get("lastLoginIp"),PageUtil.like(sysLogLogin.getLastLoginIp())));

		if(StringUtils.isNotEmpty(sysLogLogin.getLoginIp()))
			list.add(cb.like(root.get("loginIp"),PageUtil.like(sysLogLogin.getLoginIp())));

		if(StringUtils.isNotEmpty(sysLogLogin.getLoginName()))
			list.add(cb.like(root.get("loginName"),PageUtil.like(sysLogLogin.getLoginName())));

		/** 判断是否是管理员*/
		if(!SessionUtils.isAdmin())
			list.add(cb.equal(root.get("userInfoId"),SessionUtils.getUserInfoId()));


		return this.and(list,cb);
	}

}
