package cn.mauth.account.common.domain;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Transient;

@Entity
public class SysRole extends BaseEntity {
    private static final long serialVersionUID = 1L;

    private Integer sort;

    private Integer statusId;

    @Column(nullable = false,unique = true)
    private String roleName;

    private String remark;

    @Transient
    private Integer isShow;

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

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName == null ? null : roleName.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Integer getIsShow() {
        return isShow;
    }

    public void setIsShow(Integer isShow) {
        this.isShow = isShow;
    }

    @Override
    public String toString() {
        return "SysRole{" +
                "sort=" + sort +
                ", statusId=" + statusId +
                ", roleName='" + roleName + '\'' +
                ", remark='" + remark + '\'' +
                ", isShow=" + isShow +
                ", id=" + id +
                ", gmtCreate=" + gmtCreate +
                ", gmtModified=" + gmtModified +
                '}';
    }
}
