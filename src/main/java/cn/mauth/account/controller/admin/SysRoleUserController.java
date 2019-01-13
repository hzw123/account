package cn.mauth.account.controller.admin;

import java.util.List;

import cn.mauth.account.common.base.BaseController;
import cn.mauth.account.common.domain.SysRoleUser;
import cn.mauth.account.enums.StatusIdEnum;
import cn.mauth.account.server.SysRoleService;
import cn.mauth.account.server.SysRoleUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 角色用户关联表
 *
 * @author mauth
 * @since 2017-12-26
 */
@Controller
@RequestMapping(value = "/admin/sysRoleUser")
public class SysRoleUserController extends BaseController {

	private final static String TARGETID = "admin-sysRoleUser";

	@Autowired
	private SysRoleUserService service;

	@Autowired
	private SysRoleService sysRoleService;


	@RequestMapping(value = "/set")
	public void set(@ModelAttribute SysRoleUser qo, ModelMap modelMap) {
		List<SysRoleUser> list = service.findByUserInfoId(qo.getUserInfoId());
		modelMap.put("roleUserList", list);
		modelMap.put("roleList", sysRoleService.listRoleForUserInfo(qo, list));
		modelMap.put("bean", qo);
	}

	@ResponseBody
	@RequestMapping(value = "/save")
	public String save(@ModelAttribute SysRoleUser qo, @RequestParam(value = "ids") String ids) {
		if (service.save(qo, ids) > 0) {
			return success(TARGETID);
		}
		return error("添加失败");
	}
	
	@ModelAttribute
	public void enums(ModelMap modelMap) {
		modelMap.put("statusIdEnums", StatusIdEnum.values());
	}

}
