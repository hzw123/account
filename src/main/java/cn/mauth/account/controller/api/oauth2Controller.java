package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.*;
import cn.mauth.account.common.domain.sys.SysUserInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Api("oauth2")
@RestController
@RequestMapping("/api/oauth2")
public class oauth2Controller {

    @PutMapping("/mobile")
    @ApiOperation(value = "第三方应用为其用户更换手机号")
    public String mobile(Parameters param,AppUserMobile appUserMobile){
        String token=param.getAccessToken();
        return null;
    }

    @GetMapping("/synLoginHtm")
    @ApiOperation(value = "获取用于登录记账系统及记账社区的HTML")
    public Object synLoginHtml(Parameters param){
        String token=param.getAccessToken();
        return null;
    }

    @PostMapping("/LinkUser")
    @ApiOperation(value = "绑定现有用户到第三方应用")
    public String linkUser(LinkUser linkUser){
        return null;
    }

    @GetMapping("/appInfo")
    @ApiOperation(value = "根据appid获取该第三方的基本信息")
    public AppInfo appInfo(Parameters param){
        String token=param.getAccessToken();

        return null;
    }

    /**
     * 验证手机验证码是否正确
     * @param accessToken
     * @param mobile 手机号
     * @param vericode 验证码
     * @return
     */
    @GetMapping("/vericode")
    @ApiOperation(value = "验证手机验证码是否正确")
    public String vericode(String accessToken,String mobile,String vericode){

        return null;
    }

    /**
     * 发送手机验证码
     * @param accessToken
     * @param tempid 短信类别
     * @return
     */
    @PostMapping("/vericode")
    @ApiOperation(value = "发送手机验证码")
    public Object vericode(String accessToken,String tempid){

        Map<String,Object> result=new HashMap<>();
        result.put("mobile","");
        return result;
    }

    @PutMapping("/vericode")
    @ApiOperation(value = "第三方应用为其用户修改密码")
    public String Password(String accessToken,AppUserPwd body){

        return null;
    }

    @GetMapping("/profile")
    @ApiOperation(value = "获取用户资料")
    public SysUserInfo profile(String accessToken){

        return null;
    }

    @GetMapping("/token")
    @ApiOperation(value = "验证access_token是否有效")
    public String token(String accessToken){

        return null;
    }

    @PostMapping("/token")
    @ApiOperation(value = "获取单独用户授权access_token")
    public AccessToken getToken(AppUserAccessToken token){


        return new AccessToken("");
    }

    @PutMapping("/token")
    @ApiOperation(value = "刷新用户单独授权access_token")
    public AccessToken refresh(AppUserAccessToken token){


        return new AccessToken("");
    }

    @DeleteMapping("/token")
    @ApiOperation(value = "删除个人授权的access_token")
    public Object deleteToken(String accessToken,@RequestParam(value = "appId",defaultValue = "0") Integer appId){


        Map<String,Object> result=new HashMap<>();
        result.put("result","ok");
        return result;
    }





}
