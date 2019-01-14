package cn.mauth.account.common.domain.sys;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class SysMenuRole extends BaseEntity {
    private static final long serialVersionUID = 1L;
    private int sort;
    private int statusId;
    @Column(nullable = false)
    private Long menuId;
    @Column(nullable = false)
    private Long roleId;

    public int getSort() {
        return sort;
    }

    public void setSort(int sort) {
        this.sort = sort;
    }

    public int getStatusId() {
        return statusId;
    }

    public void setStatusId(int statusId) {
        this.statusId = statusId;
    }

    public Long getMenuId() {
        return menuId;
    }

    public void setMenuId(Long menuId) {
        this.menuId = menuId;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }
}
