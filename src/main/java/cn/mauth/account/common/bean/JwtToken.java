package cn.mauth.account.common.bean;

import org.apache.shiro.authc.UsernamePasswordToken;

public class JwtToken extends UsernamePasswordToken {
    private String code;
    private String token;
    private String clientId;

    public JwtToken(String username, String password,String token, String clientId) {
        super(username, password);
        this.token = token;
        this.clientId = clientId;
    }


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }
}
