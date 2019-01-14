package cn.mauth.account.common.bean;

import java.io.Serializable;

public class AppUserMobile implements Serializable {
    private static final long serialVersionUID = 1L;
    private String userId;
    private String mobile;
    private String vericode;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getVericode() {
        return vericode;
    }

    public void setVericode(String vericode) {
        this.vericode = vericode;
    }
}
