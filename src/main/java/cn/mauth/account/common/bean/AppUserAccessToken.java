package cn.mauth.account.common.bean;

import java.io.Serializable;

public class AppUserAccessToken implements Serializable {

    private static final long serialVersionUID = 1L;
    private int appId;//第三方应用ID
    private String userId;//已与第三方应用关联的用户ID
    private String password;//第三方应用的用户密码

    public int getAppId() {
        return appId;
    }

    public void setAppId(int appId) {
        this.appId = appId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
