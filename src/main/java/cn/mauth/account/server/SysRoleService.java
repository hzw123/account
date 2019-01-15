package cn.mauth.account.server;

import cn.mauth.account.common.domain.sys.SysRole;
import cn.mauth.account.common.domain.sys.SysRoleUser;
import cn.mauth.account.common.util.PageInfo;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.dao.SysRoleDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * 角色信息
 */
@Service
public class SysRoleService {

	@Autowired
	private SysRoleDao dao;

	public PageInfo<SysRole> listForPage(int pageCurrent, int pageSize, SysRole qo) {
		
		Page<SysRole> page=this.dao.findAll(PageUtil.getPageable(pageCurrent,pageSize));
		
		return PageUtil.of(page);
	}


	public int save(SysRole qo) {
		this.dao.save(qo);
		return 1;
	}

	public int deleteById(Long id) {
		dao.deleteById(id);
		return 1;
	}

	public SysRole getById(Long id) {
		SysRole vo = new SysRole();
		SysRole record = this.dao.findById(id).get();
		BeanUtils.copyProperties(record, vo);
		return vo;
	}

	public int updateById(SysRole qo) {
		dao.save(qo);
		return 1;
	}

	public List<SysRole> listRoleForUserInfo(SysRoleUser qo, List<SysRoleUser> list) {

		List<SysRole> sysRolelist = dao.findAll((root, query, cb) -> {
			if(StringUtils.isNotEmpty(qo.getRoleName()))
				return cb.like(root.get("roleName"),PageUtil.like(""));

			return null;
		});

		for (SysRole roleVO : sysRolelist) {
			Integer isShow = 0;
			for (SysRoleUser roleUserVo : list) {
				if (roleVO.getId().equals(roleUserVo.getRoleId())) {
					isShow = 1;
					break;
				}
			}
			roleVO.setIsShow(isShow);
		}
		return sysRolelist;
	}

}
