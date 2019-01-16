package cn.mauth.account.common.domain.sys;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * 应用信息
 */
@Entity
public class SysAppInfo extends BaseEntity {
    private static final long serialVersionUID = 1L;
    @Column(unique = true,updatable = false,length = 30)
    private Long clientId;
    @Column(length = 50)
    private String clientSecret;
    @Column(nullable = false)
    private Long userInfoId;
    private int srot;

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }

    public Long getUserInfoId() {
        return userInfoId;
    }

    public void setUserInfoId(Long userInfoId) {
        this.userInfoId = userInfoId;
    }

    public int getSrot() {
        return srot;
    }

    public void setSrot(int srot) {
        this.srot = srot;
    }
}
