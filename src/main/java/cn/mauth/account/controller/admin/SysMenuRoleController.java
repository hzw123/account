package cn.mauth.account.controller.admin;

import java.util.List;

import cn.mauth.account.common.base.BaseController;
import cn.mauth.account.common.domain.SysMenu;
import cn.mauth.account.common.domain.SysMenuRole;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.server.SysMenuRoleService;
import cn.mauth.account.server.SysMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import com.xiaoleilu.hutool.util.CollectionUtil;

/**
 * 菜单角色关联表
 *
 * @author mauth
 * @since 2017-12-26
 */
@Controller
@RequestMapping(value = "/admin/sysMenuRole")
public class SysMenuRoleController extends BaseController {

	private final static String TARGETID = "admin-sysMenuRole";

	@Autowired
	private SysMenuRoleService service;

	@Autowired
	private SysMenuService sysMenuService;

	@RequestMapping(value = "/set", method = RequestMethod.GET)
	public void setGet(@ModelAttribute SysMenuRole qo, ModelMap modelMap) {
		List<SysMenuRole> list = service.findByRoleId(qo.getRoleId());
		List<SysMenu> menus=sysMenuService.loadAll();
		SessionUtils.setMenuAndRole(menus);
		modelMap.put("bean", qo);
		modelMap.put("ids", this.getIds(list));
		modelMap.put("menus", menus);
	}


	@ResponseBody
	@RequestMapping(value = "/save")
	public String save(@ModelAttribute SysMenuRole qo, @RequestParam(value = "ids") String ids) {
		if (service.save(qo, ids) > 0) {
			return success(TARGETID);
		}
		return error("添加失败");
	}

	private String getIds(List<SysMenuRole> list) {
		StringBuilder sb = new StringBuilder();
		if (CollectionUtil.isNotEmpty(list)) {
			for (SysMenuRole p : list) {
				sb.append(p.getId()).append(",");
			}
			sb = sb.delete(sb.length() - 1, sb.length());
		}
		return sb.toString();
	}

}
