package cn.mauth.account.common.domain.sys;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Transient;

/**
 * 服务
 */
@Entity
public class SysService extends BaseEntity{

    private static final long serialVersionUID = 1L;

    @Column(nullable = false,unique = true,length = 32)
    private String serverNo;//服务号
    @Column(nullable = false,unique = true,length = 100)
    private String name;//服务名称
    private String version;//服务类型 totalUsers
    private int state;//启用状态（0-停用,1-启用；）
    @Transient
    private int query;

    public String getServerNo() {
        return serverNo;
    }

    public void setServerNo(String serverNo) {
        this.serverNo = serverNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
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
}
