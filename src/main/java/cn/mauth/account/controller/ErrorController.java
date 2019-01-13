package cn.mauth.account.controller;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/error")
public class ErrorController {

    /****页面测试****/
    @GetMapping("/404")
    public String Out404(){

        return "/error/404";
    }

    @GetMapping("/403")
    public String Out403(){

        return "/error/403";
    }
    @GetMapping("/500")
    public String Out500(){

        return "/error/500";
    }

    /**
     * 权限测试跳转页面
     * @return
     */
    @GetMapping("/qx")
    @RequiresPermissions("system:user:asd")
    public String Outqx(){

        return "/error/500";
    }
}
