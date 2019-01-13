package cn.mauth.account.common.bean;

import org.apache.shiro.authc.UsernamePasswordToken;

public class AccountToken extends UsernamePasswordToken{
    private String code;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
