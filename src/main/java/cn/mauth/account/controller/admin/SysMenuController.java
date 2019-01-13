package cn.mauth.account.controller.admin;

import cn.mauth.account.common.base.BaseController;
import cn.mauth.account.common.domain.SysMenu;
import cn.mauth.account.enums.StatusIdEnum;
import cn.mauth.account.server.SysMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 菜单信息
 */
@Controller
@RequestMapping(value = "/admin/sysMenu")
public class SysMenuController extends BaseController {

	private final static String TARGETID = "admin-sysMenu";

	@Autowired
	private SysMenuService service;

	/**
	 * 菜单列出
	 */
	@RequestMapping("/list")
	public void list(@ModelAttribute SysMenu qo, ModelMap modelMap) {
		modelMap.put("list", service.toTreeNode(service.findAll()));
		modelMap.put("bean", qo);
	}

	@RequestMapping(value = "/add")
	public void add(@ModelAttribute SysMenu qo, ModelMap modelMap) {
		modelMap.put("bean", qo);
	}

	@ResponseBody
	@RequestMapping(value = "/save")
	public String save(@ModelAttribute SysMenu qo) {
		if (service.save(qo) > 0) {
			return success(TARGETID);
		}
		return error("添加失败");
	}

	@ResponseBody
	@RequestMapping(value = "/save/sub")
	public Long saveSub(@ModelAttribute SysMenu qo) {
		return service.save(qo);
	}

	@ResponseBody
	@RequestMapping(value = "/delete")
	public String delete(@RequestParam(value = "id") Long id) {
		int result = service.deleteById(id);
		if (result > 0) {
			return delete(TARGETID);
		} else if (result == -1) {
			return error("删除失败，请先删除子菜单");
		}
		return error("删除失败");
	}

	@RequestMapping(value = "/edit")
	public void edit(@RequestParam(value = "id") Long id, ModelMap modelMap) {
		modelMap.put("bean", service.getById(id));
	}

	@ResponseBody
	@RequestMapping(value = "/update")
	public String update(@ModelAttribute SysMenu qo) {
		if (service.updateById(qo) > 0) {
			return success(TARGETID);
		}
		return error("修改失败");
	}

	@RequestMapping(value = "/view")
	public void view(@RequestParam(value = "id") Long id, ModelMap modelMap) {
		modelMap.put("bean", service.getById(id));
	}

	@ModelAttribute
	public void enums(ModelMap modelMap) {
		modelMap.put("statusIdEnums", StatusIdEnum.values());
	}

}
