package cn.mauth.account.server;

import java.util.ArrayList;
import java.util.List;

import cn.mauth.account.common.domain.sys.SysAppInfo;
import cn.mauth.account.common.domain.sys.SysUserInfo;
import cn.mauth.account.common.util.Constants;
import cn.mauth.account.common.util.PageInfo;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.SysAppInfoDao;
import cn.mauth.account.dao.SysUserInfoDao;
import cn.mauth.account.enums.StatusIdEnum;
import cn.mauth.account.enums.UserTypeEnum;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import com.xiaoleilu.hutool.crypto.DigestUtil;
import com.xiaoleilu.hutool.crypto.SecureUtil;
import com.xiaoleilu.hutool.util.ObjectUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.Predicate;

/**
 * 后台用户信息
 *
 * @author mauth
 * @since 2017-12-26
 */
@Service
public class SysUserInfoService {

	@Autowired
	private SysUserInfoDao dao;
	@Autowired
	private SysAppInfoDao sysServiceDao;

	public PageInfo<SysUserInfo> listForPage(int pageCurrent, int pageSize, SysUserInfo qo) {

		Page<SysUserInfo> page=dao.findAll((root, query, cb) -> {

			List<Predicate> list=new ArrayList<>();

			/** 判断是否是管理员*/
			if(!SessionUtils.isAdmin())
				list.add(cb.equal(root.get("id"),SessionUtils.getUserInfoId()));


			if (StringUtils.isNotBlank(qo.getLoginName()))
				list.add(cb.like(root.get("loginName"),PageUtil.like(qo.getLoginName())));

			if (StringUtils.isNotBlank(qo.getMobile()))
				list.add(cb.like(root.get("mobile"),PageUtil.like(qo.getMobile())));

			if (ObjectUtil.isNotNull(qo.getUserType()))
				list.add(cb.equal(root.get("userType"),qo.getUserType()));
			cb.and(list.toArray(new Predicate[list.size()]));
			return null;

		},PageUtil.getPageable(pageCurrent,pageSize));

		return PageUtil.of(page);
	}

	public int save(SysUserInfo qo) {
		qo.setStatusId(StatusIdEnum.NORMAL.getCode()); // 默认正常状态
		qo.setSalt(SecureUtil.simpleUUID());
		qo.setPwd(DigestUtil.md5Hex(qo.getSalt() + qo.getPwd()));
		this.dao.save(qo).getId();
		return 1;
	}

	public int deleteById(Long id) {
		this.dao.deleteById(id);
		return 1;
	}

	public SysUserInfo getById(Long id) {
		return this.dao.findById(id).get();
	}

	public int updateById(SysUserInfo qo) {
		String loginName=this.dao.findLoginNameById(qo.getId());
		qo.setLoginName(loginName); // 登录名不能修改
		dao.save(qo);
		return 1;
	}

	public PageInfo<SysUserInfo> lookup(int pageCurrent, int pageSize, SysUserInfo qo) {
		Page<SysUserInfo> page=this.dao.findAll((root, query, cb) -> {
			List<Long> listIds = this.getIds();

			if (!listIds.isEmpty()) {

				return cb.and(
						cb.equal(root.get("userType"),UserTypeEnum.MERCHANTS.getCode()),
						cb.not(cb.in(root.get("id")).value(listIds))// 已经绑定的用户不再列出，防止重复
				);
			}

			return cb.equal(root.get("userType"),UserTypeEnum.MERCHANTS.getCode());
		},PageUtil.getPageable(pageCurrent,pageSize));

		return PageUtil.of(page);
	}

	private List<Long> getIds() {
		List<Long> ids = new ArrayList<>();
		List<SysAppInfo> listMch = sysServiceDao.findAll();
		if (listMch != null && !listMch.isEmpty()) {
			for (SysAppInfo mch : listMch) {
				ids.add(mch.getUserInfoId());
			}
		}
		return ids;
	}

	public SysUserInfo getUserInfoForSeesion() {
		Long userInfoId = Long.valueOf(SessionUtils.getAttribute(Constants.Session.USER_ID).toString());
		return this.getById(userInfoId);
	}

	@Transactional
	public int updatePassword(String oldPwd, String newPwd, String rePwd) {
		Long userInfoId = Long.valueOf(SessionUtils.getAttribute(Constants.Session.USER_ID).toString());
		SysUserInfo sysUserInfo = dao.findById(userInfoId).get();
		if (!newPwd.equals(rePwd)) {
			return -1;
		}

		if (sysUserInfo.getPwd().equals(DigestUtil.md5Hex(sysUserInfo.getSalt() + oldPwd))) {
			SysUserInfo user = new SysUserInfo();
			user.setSalt(SecureUtil.simpleUUID());
			user.setPwd(DigestUtil.md5Hex(user.getSalt() + newPwd));
			user.setId(userInfoId);
			dao.save(user);
			return 1;
		}
		return -1;
	}

}
