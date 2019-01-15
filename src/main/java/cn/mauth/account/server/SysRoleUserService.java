package cn.mauth.account.server;

import cn.mauth.account.common.domain.sys.SysRoleUser;
import cn.mauth.account.dao.SysRoleUserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * 角色用户关联表
 *
 * @author mauth
 * @since 2017-12-26
 */
@Service
public class SysRoleUserService {

	@Autowired
	private SysRoleUserDao dao;

	@Transactional
	public int save(SysRoleUser qo, String ids) {
		if (StringUtils.hasText(ids)) {
			// 先删除旧的，再添加新的
			this.dao.deleteByUserInfoId(qo.getUserInfoId());
			// 拆分角色和平台拼接ID
			String[] roleIds = ids.split(",");
			SysRoleUser sysRoleUser=null;
			for (String roleId : roleIds) {
				sysRoleUser= new SysRoleUser();
				sysRoleUser.setRoleId(Long.parseLong(roleId));
				sysRoleUser.setUserInfoId(qo.getUserInfoId());
				this.dao.save(sysRoleUser);
			}
		}
		return 1;
	}


	public List<SysRoleUser> findByUserInfoId(Long userInfoId) {
		return this.dao.findByUserInfoId(userInfoId);
	}

}
