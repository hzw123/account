package cn.mauth.account.controller.admin;

import cn.mauth.account.common.base.BaseController;
import cn.mauth.account.common.domain.sys.SysUserInfo;
import cn.mauth.account.enums.StatusIdEnum;
import cn.mauth.account.enums.UserTypeEnum;
import cn.mauth.account.server.SysUserInfoService;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;


/**
 * 后台用户信息
 */
@Controller
@RequestMapping(value = "/admin/sysUserInfo")
public class SysUserInfoController extends BaseController {

	private final static String TARGETID = "admin-sysUserInfo";

	@Autowired
	private SysUserInfoService service;

	@GetMapping(value = "/password")
	public void passwordGet(ModelMap modelMap) {
		modelMap.put("bean", service.getUserInfoForSeesion());
	}

	@ResponseBody
	@PostMapping(value = "/password")
	public String passwordPost(String oldPwd, String newPwd, String rePwd) {
		if (service.updatePassword(oldPwd, newPwd, rePwd) > 0) {
			// 修改成功，退出登录
			SecurityUtils.getSubject().logout();
			return ties("修改密码成功");
		}
		return error("修改密码失败");
	}

	@RequestMapping(value = "/info")
	public void info(ModelMap modelMap) {
		modelMap.put("bean", service.getUserInfoForSeesion());
	}

	@RequestMapping(value = "/lookup")
	public void lookupUser(@RequestParam(value = "pageCurrent", defaultValue = "1") int pageCurrent, @RequestParam(value = "pageSize", defaultValue = "10") int pageSize, @ModelAttribute SysUserInfo qo, ModelMap modelMap) {
		modelMap.put("page", service.lookup(pageCurrent, pageSize, qo));
		modelMap.put("pageCurrent", pageCurrent);
		modelMap.put("pageSize", pageSize);
		modelMap.put("bean", qo);
	}

	@RequestMapping(value = "/list")
	public void list(@RequestParam(value = "pageCurrent", defaultValue = "1") int pageCurrent, @RequestParam(value = "pageSize", defaultValue = "10") int pageSize, @ModelAttribute SysUserInfo qo, ModelMap modelMap) {
		modelMap.put("page", service.listForPage(pageCurrent, pageSize, qo));
		modelMap.put("pageCurrent", pageCurrent);
		modelMap.put("pageSize", pageSize);
		modelMap.put("bean", qo);
	}

	@RequestMapping(value = "/add")
	public void add() {

	}

	@ResponseBody
	@PostMapping(value = "/save")
	public String save(@ModelAttribute SysUserInfo qo) {
		if (service.save(qo) > 0) {
			return success(TARGETID);
		}
		return error("添加失败");
	}

	@ResponseBody
	@RequestMapping(value = "/delete")
	public String delete(@RequestParam(value = "id") Long id) {
		if (service.deleteById(id) > 0) {
			return delete(TARGETID);
		}
		return error("删除失败");
	}

	@RequestMapping(value = "/edit")
	public void edit(@RequestParam(value = "id") Long id, ModelMap modelMap) {
		modelMap.put("bean", service.getById(id));
	}

	@ResponseBody
	@RequestMapping(value = "/update")
	public String update(@ModelAttribute SysUserInfo qo) {
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
		modelMap.put("userTypeEnums", UserTypeEnum.values());
		modelMap.put("statusIdEnums", StatusIdEnum.values());
	}

}
