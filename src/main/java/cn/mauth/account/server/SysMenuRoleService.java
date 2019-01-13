package cn.mauth.account.server;


import cn.mauth.account.common.domain.SysMenuRole;
import cn.mauth.account.dao.SysMenuRoleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * 菜单角色关联表
 */
@Service
public class SysMenuRoleService {

	@Autowired
	private SysMenuRoleDao dao;

	public List<SysMenuRole> findByRoleId(Long roleId) {
		return this.dao.findByRoleId(roleId);
	}

	public int save(SysMenuRole qo, String ids) {
		if (StringUtils.hasText(ids)) {
			this.dao.deleteByRoleId(qo.getRoleId());
			String[] menuIds = ids.split(",");
			SysMenuRole entity=null;
			for (String id : menuIds) {
				entity = new SysMenuRole();
				entity.setMenuId(Long.valueOf(id));
				entity.setRoleId(qo.getRoleId());
				this.dao.save(entity);
			}
		}
		return 1;
	}

}
