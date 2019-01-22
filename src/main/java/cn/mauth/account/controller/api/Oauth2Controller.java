package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.*;
import cn.mauth.account.common.domain.sys.SysUserInfo;
import cn.mauth.account.common.util.JwtUtil;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.server.Oauth2Server;
import cn.mauth.account.server.RedisUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Api("oauth2")
@RestController
@RequestMapping("/api/oauth2")
public class Oauth2Controller {

    @Autowired
    private Oauth2Server server;

    @PutMapping("/mobile")
    @ApiOperation(value = "第三方应用为其用户更换手机号")
    public String mobile(Parameters param,AppUserMobile appUserMobile){
        return null;
    }

    @GetMapping("/synLoginHtm")
    @ApiOperation(value = "获取用于登录记账系统及记账社区的HTML")
    public Object synLoginHtml(Parameters param){
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

        return null;
    }

    /**
     * 验证手机验证码是否正确
     * @param mobile 手机号
     * @param vericode 验证码
     * @return
     */
    @GetMapping("/vericode")
    @ApiOperation(value = "验证手机验证码是否正确")
    public String vericode(String mobile,String vericode){

        return null;
    }

    /**
     * 发送手机验证码
     * @param tempid 短信类别
     * @return
     */
    @PostMapping("/vericode")
    @ApiOperation(value = "发送手机验证码")
    public Object vericode(String tempid){

        Map<String,Object> result=new HashMap<>();
        result.put("mobile","");
        return result;
    }


    @GetMapping("/profile")
    @ApiOperation(value = "获取用户资料")
    public SysUserInfo profile(String access_token){

        if(StringUtils.isNotEmpty(access_token)){

            String sign=RedisUtil.getSign(access_token);

            String account= JwtUtil.getAccount(sign);

            return server.findByAccount(account);
        }

        return SessionUtils.getCurrentUser();
    }

    @GetMapping("/token")
    @ApiOperation(value = "验证access_token是否有效")
    public Result token(String access_token){
        try{
            JwtUtil.verifyToken(access_token);
            return Result.success("token:"+access_token+"依然有效");
        }catch (Exception e){
            String error=e.getMessage();
            if(StringUtils.isEmpty(error)){
                error="token:"+access_token+"没有通过验证";
            }
            return Result.error(error);
        }
    }

    @PostMapping("/token")
    @ApiOperation(value = "获取单独用户授权access_token")
    public Result getToken(AppUserAccessToken app){
        try{
            return Result.success(server.getToken(app));
        }catch (Exception e){
            return Result.error(e.getMessage());
        }
    }

    @PutMapping("/token")
    @ApiOperation(value = "刷新用户单独授权access_token")
    public Result refresh(String access_token){
        try {

            String token=JwtUtil.refreshSign(access_token);

            return Result.success(token);
        }catch (Exception e){
            return Result.error(e.getMessage());
        }

    }

    @DeleteMapping("/token")
    @ApiOperation(value = "删除个人授权的access_token")
    public Result deleteToken(String access_token){

        if(RedisUtil.delete(access_token)){
            return Result.success("删除token:"+access_token+"成功");
        }

        return Result.error("删除token:"+access_token+"没有成功");
    }


}
