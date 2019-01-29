package cn.mauth.account.controller.admin;

import cn.mauth.account.common.base.BaseController;
import cn.mauth.account.common.domain.settings.Subject;
import cn.mauth.account.server.SubjectServer;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/admin/subject")
public class SubjectView extends BaseController{

    private final static String TARGETID = "admin-subject";

    @Autowired
    private SubjectServer service;

    @RequestMapping(value = "/list")
    public void list(@RequestParam(value = "pageCurrent", defaultValue = "1") int pageCurrent, @RequestParam(value = "pageSize", defaultValue = "10") int pageSize, @ModelAttribute Subject subject, ModelMap modelMap){
        modelMap.put("page", service.listForPage(pageCurrent, pageSize, subject));
        modelMap.put("pageCurrent", pageCurrent);
        modelMap.put("pageSize", pageSize);
        modelMap.put("bean", subject);
    }

    @RequestMapping(value = "/add")
    public void add(){

    }

    @ResponseBody
    @RequestMapping(value = "/save")
    public String save(@ModelAttribute Subject subject){

        String message=service.validation(subject);

        if(StringUtils.isNotEmpty(message))
            return error(message);

        if (service.save(subject) > 0)
            return success(TARGETID);

        return error("添加失败");
    }

    @ResponseBody
    @RequestMapping(value = "/delete")
    public String delete(@RequestParam(value = "id") Long id){

        if (service.deleteById(id) > 0)
            return delete(TARGETID);

        return error("删除失败");
    }

    @RequestMapping(value = "/edit")
    public void edit(@RequestParam(value = "id") Long id, ModelMap modelMap){
        modelMap.put("bean", service.getById(id));
    }

    @ResponseBody
    @RequestMapping(value = "/update")
    public String update(@ModelAttribute Subject subject){

        if (service.update(subject) > 0)
            return success(TARGETID);

        return error("修改失败");
    }

    @RequestMapping(value = "/view")
    public void view(@RequestParam(value = "id") Long id, ModelMap modelMap){
        modelMap.put("bean", service.getById(id));
    }
}
