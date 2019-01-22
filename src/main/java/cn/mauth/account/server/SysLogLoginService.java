package cn.mauth.account.server;

import cn.mauth.account.common.domain.sys.SysLogLogin;
import cn.mauth.account.common.util.PageInfo;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.SysLogLoginDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

/**
 * 用户登陆日志 
 */
@Service
public class SysLogLoginService {

	@Autowired
	private SysLogLoginDao dao;

	public PageInfo<SysLogLogin> listForPage(int pageCurrent, int pageSize, SysLogLogin qo) {

		Page<SysLogLogin> page=this.dao.findAll((root, query, cb) -> {
			List<Predicate> list=new ArrayList<>();

			Long userInfoId=qo.getUserInfoId();

			if(userInfoId!=null && userInfoId>0)
				list.add(cb.equal(root.get("userInfoId"),userInfoId));

			if(StringUtils.isNotEmpty(qo.getLastLoginIp()))
				list.add(cb.like(root.get("lastLoginIp"),PageUtil.like(qo.getLastLoginIp())));

			if(StringUtils.isNotEmpty(qo.getLoginIp()))
				list.add(cb.like(root.get("loginIp"),PageUtil.like(qo.getLoginIp())));

			if(StringUtils.isNotEmpty(qo.getLoginName()))
				list.add(cb.like(root.get("loginName"),PageUtil.like(qo.getLoginName())));

			/** 判断是否是管理员*/
			if(!SessionUtils.isAdmin())
				list.add(cb.equal(root.get("userInfoId"),SessionUtils.getUserInfoId()));


			Predicate[] predicates=new Predicate[list.size()];
			return cb.and(list.toArray(predicates));
		},PageUtil.getPageable(pageCurrent,pageSize));

		return PageUtil.of(page);
	}

	public int save(SysLogLogin qo) {
		this.dao.save(qo);
		return 1;
	}

	public int deleteById(Long id) {
		this.dao.deleteById(id);
		return 1;
	}

	public SysLogLogin getById(Long id) {
		return this.dao.findById(id).get();
	}

	public int updateById(SysLogLogin qo) {
		this.dao.save(qo);
		return 1;
	}
	
}
