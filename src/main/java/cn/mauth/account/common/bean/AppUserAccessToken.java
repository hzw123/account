package cn.mauth.account.common.bean;

import java.io.Serializable;

public class AppUserAccessToken implements Serializable {

    private static final long serialVersionUID = 1L;
    private String clientId;//第三方应用ID
    private String username;//已与第三方应用关联的用户ID
    private String password;//第三方应用的用户密码

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
