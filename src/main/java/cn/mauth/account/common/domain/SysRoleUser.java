package cn.mauth.account.common.domain;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Transient;

@Entity
public class SysRoleUser extends BaseEntity {
    private static final long serialVersionUID = 1L;

    @Column(nullable = false)
    private Integer sort;
    @Column(nullable = false)
    private Integer statusId;
    @Column(nullable = false)
    private Long roleId;
    @Column(nullable = false)
    private Long userInfoId;
    @Transient
    private String roleName;

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    public Integer getStatusId() {
        return statusId;
    }

    public void setStatusId(Integer statusId) {
        this.statusId = statusId;
    }


    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public Long getUserInfoId() {
        return userInfoId;
    }

    public void setUserInfoId(Long userInfoId) {
        this.userInfoId = userInfoId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @Override
    public String toString() {
        return "SysRoleUser{" +
                "sort=" + sort +
                ", statusId=" + statusId +
                ", roleId=" + roleId +
                ", userInfoId=" + userInfoId +
                ", roleName='" + roleName + '\'' +
                ", id=" + id +
                ", gmtCreate=" + gmtCreate +
                ", gmtModified=" + gmtModified +
                '}';
    }
}
