package cn.mauth.account.controller.admin;

import cn.mauth.account.common.base.BaseController;
import cn.mauth.account.common.domain.sys.SysServiceList;
import cn.mauth.account.server.SysServiceListServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/admin/sysServiceList")
public class SysServiceListController extends BaseController{

    private final static String TARGETID = "admin-sysServiceList";

    @Autowired
    private SysServiceListServer service;

    @RequestMapping(value = "/list")
    public void list(@RequestParam(value = "pageCurrent", defaultValue = "1") int pageCurrent, @RequestParam(value = "pageSize", defaultValue = "10") int pageSize, @ModelAttribute SysServiceList sysServiceList, ModelMap modelMap){
        modelMap.put("page", service.listForPage(pageCurrent, pageSize, sysServiceList));
        modelMap.put("pageCurrent", pageCurrent);
        modelMap.put("pageSize", pageSize);
        modelMap.put("bean", sysServiceList);
    }

    @RequestMapping(value = "/add")
    public void add(Model model){
        model.addAttribute("services",this.service.findAllOfSysServicel());
    }

    @ResponseBody
    @RequestMapping(value = "/save")
    public String save(@ModelAttribute SysServiceList qo){
        if (service.save(qo) > 0) {
            return success(TARGETID);
        }
        return error("添加失败");
    }

    @ResponseBody
    @RequestMapping(value = "/delete")
    public String delete(@RequestParam(value = "id") Long id){
        if (service.deleteById(id) > 0) {
            return delete(TARGETID);
        }
        return error("删除失败");
    }

    @RequestMapping(value = "/edit")
    public void edit(@RequestParam(value = "id") Long id, ModelMap modelMap){
        modelMap.put("bean", service.getById(id));
        modelMap.put("services",this.service.findAllOfSysServicel());
    }

    @ResponseBody
    @RequestMapping(value = "/update")
    public String update(@ModelAttribute SysServiceList sysServiceList){
        if (service.save(sysServiceList) > 0) {
            return success(TARGETID);
        }
        return error("修改失败");
    }

    @RequestMapping(value = "/view")
    public void view(@RequestParam(value = "id") Long id, ModelMap modelMap){
        modelMap.put("bean", service.getById(id));
    }
}
