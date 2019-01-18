package cn.mauth.account.shiro.util;

import org.apache.shiro.authc.UsernamePasswordToken;

public class AccountingToken extends UsernamePasswordToken {
    private String code;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}
