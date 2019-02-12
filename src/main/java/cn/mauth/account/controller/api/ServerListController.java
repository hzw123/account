//package cn.mauth.account.controller.api;
//
//import cn.mauth.account.common.base.BaseApi;
//import cn.mauth.account.common.domain.sys.SysServiceList;
//import cn.mauth.account.common.util.JwtUtil;
//import cn.mauth.account.common.util.Result;
//import cn.mauth.account.common.util.SessionUtils;
//import cn.mauth.account.server.RedisUtil;
//import cn.mauth.account.server.SysServiceListServer;
//import cn.mauth.account.server.SysUserInfoService;
//import io.swagger.annotations.ApiOperation;
//import org.apache.shiro.SecurityUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/accounting/service")
//public class ServerListController extends BaseApi{
//
//    @Autowired
//    private SysServiceListServer server;
//
//    @Autowired
//    private SysUserInfoService sysUserInfoService;
//
//    @GetMapping
//    @ApiOperation("获取服务信息")
//    public Result load(String access_token){
//        SysServiceList sysServiceList=new SysServiceList();
//
//        if(SecurityUtils.getSubject().isAuthenticated()){
//            if(!SessionUtils.isAdmin()){
//                sysServiceList.setUserInfoId(SessionUtils.getUserInfoId());
//            }
//        }else {
//
//            String sign=RedisUtil.getSign(access_token);
//
//            Long appId=Long.valueOf(JwtUtil.getClientId(sign));
//
//            Long id=sysUserInfoService.getId(sign);
//
//            sysServiceList.setUserInfoId(id);
//
//            sysServiceList.setAppId(appId);
//
//        }
//
//        List<SysServiceList> list=server.findAll(sysServiceList);
//
//        return Result.success(list);
//    }
//}
