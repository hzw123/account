package cn.mauth.account.server;

import cn.mauth.account.common.bean.AppUserAccessToken;
import cn.mauth.account.common.domain.sys.SysAppInfo;
import cn.mauth.account.common.domain.sys.SysUserInfo;
import cn.mauth.account.common.util.JwtUtil;
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

    public String getToken(AppUserAccessToken token)throws Exception{

        String username=token.getUsername();

        String password=token.getPassword();

        String clientId=token.getClientId();

        Long appId=0L;

        if(StringUtils.isNotEmpty(username))
            throw new Exception("username not null");
        if(StringUtils.isNotEmpty(password))
            throw new Exception("password not null");
        if(StringUtils.isNotEmpty(clientId))
            throw new Exception("clientId not null");
        try{
            appId=Long.valueOf(clientId);
        }catch (Exception e){
            throw new Exception("clientId 转换 Long fail ,clientId:"+clientId);
        }

        SysUserInfo userInfo=sysUserInfoDao.findByLoginName(username);

        if(!DigestUtil.md5Hex(password+userInfo.getSalt()).equals(userInfo.getPwd())){
            throw new Exception("Password mistake");
        }

        SysAppInfo app=sysAppInfoDao.findById(appId).get();

        if(app==null){
            throw new Exception("Could not find clientId:"+appId);
        }

        if(app.getUserInfoId()!=userInfo.getId()){
            throw new Exception("用户和应用不匹配");
        }

        return JwtUtil.sign(username,password,clientId);
    }
}
