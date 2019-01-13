package cn.mauth.account.server;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import cn.mauth.account.common.domain.SysMenu;
import cn.mauth.account.common.util.Constants;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.SysMenuDao;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


/**
 * 菜单信息
 */
@Component
public class SysMenuService {

	@Autowired
	private SysMenuDao dao;

	public Long save(SysMenu sysMenu) {
		dao.save(sysMenu);
		return 1L;
	}

	public int deleteById(Long id) {
		int ret=0;
		int count = dao.countByParentId(id);
		if (count>0) {
			ret= -1;
		}else{
			dao.deleteById(id);
		}
		return ret;
	}

	public SysMenu getById(Long id) {
		SysMenu vo = new SysMenu();
		SysMenu record = this.dao.findById(id).get();
		BeanUtils.copyProperties(record, vo);
		return vo;
	}

	public int updateById(SysMenu qo) {
		SysMenu record = new SysMenu();
		BeanUtils.copyProperties(qo, record);
		this.dao.save(record);
		return 1;
	}

	public List<SysMenu> findAll() {
		return this.dao.findAll();
	}


	public List<SysMenu> loadAll() {

		List<SysMenu> menuList = this.dao.findAll();

		return this.toTreeNode(menuList);
	}


	public List<SysMenu> loadMenus(){
		Long userInfoId = Long.valueOf(SessionUtils.getAttribute(Constants.Session.USER_ID).toString());
		return this.toTreeNode(this.dao.loadmenus(userInfoId));
	}

	/**
	 * 递归获取菜单(角色关联菜单)
	 */
	public List<SysMenu> toTreeNode(List<SysMenu> menus){
		Map<Long,List<SysMenu>> map=new LinkedHashMap<>();
		menus.forEach(r->{
			r.setIsShow(1);
			List<SysMenu> list=null;
			if(map.get(r.getParentId())==null){
				list=new ArrayList<>();
			}else{
				list=map.get(r.getParentId());
			}
			list.add(r);
			map.put(r.getParentId(),list);
		});

		List<SysMenu> sysMenus=map.get(0L);
		sysMenus.sort((a,b)->{
			return a.getSort()>b.getSort()?1:0;
		});

		sysMenus.forEach(r->{
			this.recursiveMenu(r,map);
		});

		return sysMenus;
	}

	private void recursiveMenu(SysMenu sysMenu,Map<Long,List<SysMenu>> map){
		List<SysMenu> list=map.get(sysMenu.getId());
		if(list!=null){

			list.sort((a,b)->{
				return a.getSort()>b.getSort()?1:0;
			});

			list.forEach(r->{
				this.recursiveMenu(r,map);
			});

			sysMenu.setList(list);
		}
	}

}
