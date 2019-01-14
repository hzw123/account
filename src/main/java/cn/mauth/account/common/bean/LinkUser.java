package cn.mauth.account.common.bean;

import java.io.Serializable;

public class LinkUser implements Serializable {
    private static final long serialVersionUID = 1L;
    /** 第三方应用APPID*/
    private int appId;
    /** 第三方应用secret*/
    private String appSecret;
    /** 用户授权码*/
    private String code;
    /** 手机号*/
    private String mobile;
    /** 组织机构ID*/
    private int orgId;
    /** 第三方应用用户ID*/
    private String userId;
    /** 第三方应用用户密码*/
    private String password;

    public int getAppId() {
        return appId;
    }

    public void setAppId(int appId) {
        this.appId = appId;
    }

    public String getAppSecret() {
        return appSecret;
    }

    public void setAppSecret(String appSecret) {
        this.appSecret = appSecret;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public int getOrgId() {
        return orgId;
    }

    public void setOrgId(int orgId) {
        this.orgId = orgId;
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
