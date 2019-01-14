package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.AppUserMobile;
import cn.mauth.account.common.bean.LinkUser;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

@Api("oauth2")
@RestController
@RequestMapping("/api/oauth2")
public class oauth2Controller {

    @PutMapping("/mobile")
    @ApiOperation(value = "第三方应用为其用户更换手机号",notes = "第三方应用为其用户更换手机号")
    public AppUserMobile mobile(AppUserMobile appUserMobile){
        return null;
    }

    @GetMapping("/synLoginHtml")
    @ApiOperation(value = "获取用于登录记账系统及记账社区的HTML",notes = "获取用于登录记账系统及记账社区的HTML")
    public Object synLoginHtml(String access_token,String area){
        return null;
    }

    @PostMapping("/LinkUser")
    @ApiOperation(value = "绑定现有用户到第三方应用",notes = "绑定现有用户到第三方应用")
    public Object linkUser(LinkUser linkUser){
        return null;
    }

}
