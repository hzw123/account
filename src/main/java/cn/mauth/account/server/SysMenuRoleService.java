package cn.mauth.account.server;


import cn.mauth.account.common.domain.sys.SysMenuRole;
import cn.mauth.account.dao.SysMenuRoleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Date;
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

	@Transactional
	public int save(SysMenuRole qo, String ids) {
		if (StringUtils.hasText(ids)) {
			this.dao.deleteByRoleId(qo.getRoleId());
			String[] menuIds = ids.split(",");
			SysMenuRole entity=null;
			Date time=new Date();
			List<SysMenuRole> menuRoles=new ArrayList<>();
			for (String id : menuIds) {
				entity = new SysMenuRole();
				entity.setGmtCreate(time);
				entity.setGmtModified(time);
				entity.setStatusId(1);
				entity.setMenuId(Long.valueOf(id));
				entity.setRoleId(qo.getRoleId());
				menuRoles.add(entity);
			}
			if(menuRoles.size()>0)
				this.dao.saveAll(menuRoles);
		}
		return 1;
	}

}
