package cn.mauth.account.controller.api;

import cn.mauth.account.common.base.BaseApi;
import cn.mauth.account.common.bean.*;
import cn.mauth.account.common.domain.sys.SysUserInfo;
import cn.mauth.account.common.util.JwtUtil;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.server.AuthServer;
import cn.mauth.account.server.RedisUtil;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/accounting/auth")
public class AuthController extends BaseApi {

    @Autowired
    private AuthServer server;

    @GetMapping("/profile")
    @ApiOperation(value = "获取用户资料")
    public Result profile(String access_token){

        SysUserInfo sysUserInfo=null;

        if(StringUtils.isNotEmpty(access_token)){

            String sign=RedisUtil.getSign(access_token);

            String account= JwtUtil.getAccount(sign);

            sysUserInfo=server.findByAccount(account);
        }else{
            sysUserInfo=SessionUtils.getCurrentUser();
        }

        return Result.success(sysUserInfo);
    }

    @GetMapping("/token")
    @ApiOperation(value = "验证access_token是否有效")
    public Result token(String access_token){

        String message=null;
        try{

            if(StringUtils.isEmpty(access_token)){
                message="access_token不能为空";

                logger.error(message);

                return Result.error(message);
            }

            JwtUtil.verifyToken(access_token);

            message="token:"+access_token+"依然有效";

            logger.info(message);

            return Result.success(message);
        }catch (Exception e){
            message=e.getMessage();
            if(StringUtils.isEmpty(message)){
                message="token:"+access_token+"没有通过验证";
            }
            logger.error(message);
            return Result.error(message);
        }
    }

    @PostMapping("/token")
    @ApiOperation(value = "获取单独用户授权access_token")
    public Result getToken(AppUserAccessToken app){
        try{
            return Result.success(server.getToken(app));
        }catch (Exception e){
            logger.info(e.getMessage());
            return Result.error(e.getMessage());
        }
    }

    @PutMapping("/token")
    @ApiOperation(value = "刷新用户单独授权access_token")
    public Result refresh(String access_token){

        String message=null;

        try {
            if(StringUtils.isEmpty(access_token)){

                message="access_token不能为空";

                logger.error(message);

                return Result.error(message);
            }

            String token=JwtUtil.refreshSign(access_token);

            logger.error("获得token:{}",token);

            return Result.success(token);
        }catch (Exception e){
            return Result.error(e.getMessage());
        }

    }

    @DeleteMapping("/token")
    @ApiOperation(value = "删除个人授权的access_token")
    public Result deleteToken(String access_token){

        String message=null;

        if(StringUtils.isEmpty(access_token)){
            message="access_token不能为空";

            logger.error(message);

            return Result.error(message);
        }

        if(RedisUtil.deleteToken(access_token)){

            message="删除token:"+access_token+"成功";

            return Result.success(message);
        }

        message="删除token:"+access_token+"没有成功";

        return Result.error(message);
    }


}