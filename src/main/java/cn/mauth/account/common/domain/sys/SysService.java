package cn.mauth.account.common.domain.sys;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;

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
    @Column(nullable = false)
    private String acountId;//账套ID
    private String version;//服务类型 totalUsers
    private int totalUsers;//总用户数
    private int usedUsers;//已使用用户数
    private int state;//启用状态（0-停用,1-启用；）
    private boolean isAdmin=false;//是否管理员

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

    public String getAcountId() {
        return acountId;
    }

    public void setAcountId(String acountId) {
        this.acountId = acountId;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public int getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(int totalUsers) {
        this.totalUsers = totalUsers;
    }

    public int getUsedUsers() {
        return usedUsers;
    }

    public void setUsedUsers(int usedUsers) {
        this.usedUsers = usedUsers;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
}
