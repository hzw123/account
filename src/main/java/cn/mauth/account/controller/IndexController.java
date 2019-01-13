package cn.mauth.account.controller;

import java.util.List;

import cn.mauth.account.common.domain.SysMenu;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.server.SysMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

	@Autowired
	private SysMenuService sysMenuService;


	@RequestMapping("/index")
	public void index(ModelMap modelMap) throws Exception{
		List<SysMenu> menuList = sysMenuService.loadMenus();
		if (menuList == null || menuList.isEmpty()) {
			throw new Exception("没权限");
		}
		modelMap.put("menuList", menuList);
		SessionUtils.setMenuAndRole(menuList);
	}

	@RequestMapping("/context")
	public void context(ModelMap modelMap) {
		modelMap.put("javaVersion", System.getProperty("java.version"));
		modelMap.put("osName", System.getProperty("os.name"));
	}

}
