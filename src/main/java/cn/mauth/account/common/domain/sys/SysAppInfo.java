package cn.mauth.account.common.domain.sys;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.*;
import java.util.List;

/**
 * 应用信息
 */
@Entity
public class SysAppInfo extends BaseEntity {
    private static final long serialVersionUID = 1L;
    @Column(unique = true,updatable = false,length = 30)
    private String name;
    @Column(length = 50)
    private String clientSecret;
    @Column(nullable = false)
    private Long userInfoId;
    private int sort;
    private int state;
    @Transient
    private int query;
    @Transient
    private List<SysServiceList> services;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public int getSort() {
        return sort;
    }

    public void setSort(int sort) {
        this.sort = sort;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public int getQuery() {
        return query;
    }

    public void setQuery(int query) {
        this.query = query;
    }

    public List<SysServiceList> getServices() {
        return services;
    }

    public void setServices(List<SysServiceList> services) {
        this.services = services;
    }
}
