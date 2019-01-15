package cn.mauth.account.common.bean;

import java.io.Serializable;

public class AccessToken implements Serializable {

    private static final long serialVersionUID = 1L;

    private String accessToken;
    private int expiresIn;

    public AccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public AccessToken(String accessToken, int expiresIn) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public int getExpiresIn() {
        return expiresIn;
    }

    public void setExpiresIn(int expiresIn) {
        this.expiresIn = expiresIn;
    }
}
