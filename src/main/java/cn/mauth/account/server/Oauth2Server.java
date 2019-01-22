package cn.mauth.account.server;

import cn.mauth.account.common.bean.AppUserAccessToken;
import cn.mauth.account.common.domain.sys.SysAppInfo;
import cn.mauth.account.common.domain.sys.SysUserInfo;
import cn.mauth.account.common.util.JwtUtil;
import cn.mauth.account.dao.AccountSetDao;
import cn.mauth.account.dao.SysAppInfoDao;
import cn.mauth.account.dao.SysUserInfoDao;
import com.xiaoleilu.hutool.crypto.DigestUtil;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Oauth2Server {

    @Autowired
    private SysUserInfoDao sysUserInfoDao;
    @Autowired
    private SysAppInfoDao sysAppInfoDao;
    @Autowired
    private AccountSetDao accountSetDao;

    public String getToken(AppUserAccessToken token)throws Exception{

        String username=token.getUsername();

        String password=token.getPassword();

        String clientId=token.getClientId();

        Long appId=0L;

        if(StringUtils.isEmpty(username))
            throw new Exception("username 不能为空");
        if(StringUtils.isEmpty(password))
            throw new Exception("password 不能为空");
        if(StringUtils.isEmpty(clientId))
            throw new Exception("clientId 不能为空");
        try{
            appId=Long.valueOf(clientId);
        }catch (Exception e){
            throw new Exception("clientId 转换 Long 失败 ,clientId:"+clientId);
        }

        SysUserInfo userInfo=sysUserInfoDao.findByLoginName(username);

        if(!DigestUtil.md5Hex(userInfo.getSalt()+password).equals(userInfo.getPwd())){
            throw new Exception("密码验证错误");
        }

        if(accountSetDao.findById(appId)==null){
            throw new Exception("client 没有找到");
        }

        SysAppInfo app=sysAppInfoDao.findByAccountId(appId);

        if(app==null){
            throw new Exception("没有找到装套为："+appId+"的应用");
        }

        if(app.getUserInfoId()!=userInfo.getId()){
            throw new Exception("用户和应用不匹配");
        }

        return JwtUtil.token(username,password,clientId);
    }

    public SysUserInfo findByAccount(String account){
        return sysUserInfoDao.findByLoginName(account);
    }
}
