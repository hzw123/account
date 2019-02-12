package cn.mauth.account.controller.admin;

import cn.mauth.account.common.base.BaseController;
import cn.mauth.account.common.domain.sys.SysAppInfo;
import cn.mauth.account.common.domain.sys.SysServiceList;
import cn.mauth.account.server.SysAppInfoServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 应用服务中心
 */
@Controller
@RequestMapping("/admin/sysAppInfo")
public class SysAppInfoController extends BaseController{

    private final static String TARGETID = "admin-sysAppInfo";

    @Autowired
    private SysAppInfoServer service;

    @RequestMapping(value = "/list")
    public void list(@RequestParam(value = "pageCurrent", defaultValue = "1") int pageCurrent, @RequestParam(value = "pageSize", defaultValue = "10") int pageSize, @ModelAttribute SysAppInfo sysAppInfo, ModelMap modelMap){
        modelMap.put("page", service.listForPage(pageCurrent, pageSize, sysAppInfo));
        modelMap.put("pageCurrent", pageCurrent);
        modelMap.put("pageSize", pageSize);
        modelMap.put("bean", sysAppInfo);
    }

    @RequestMapping(value = "/add")
    public void add(){

    }

    @ResponseBody
    @RequestMapping(value = "/save")
    public String save(@ModelAttribute SysAppInfo qo){
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
    }

    @ResponseBody
    @RequestMapping(value = "/update")
    public String update(@ModelAttribute SysAppInfo sysAppInfo){
        if (service.update(sysAppInfo) > 0) {
            return success(TARGETID);
        }
        return error("修改失败");
    }

    @RequestMapping(value = "/view")
    public void view(@RequestParam(value = "id") Long id, ModelMap modelMap){

        SysAppInfo app=service.getById(id);

//        SysServiceList param=new SysServiceList();

//        param.setAppId(app.getId());
//
//        param.setUserInfoId(app.getUserInfoId());
//
//        List<SysServiceList> list=service.find(param);
//
//        app.setServices(list);

        modelMap.put("bean", app);
    }
}
