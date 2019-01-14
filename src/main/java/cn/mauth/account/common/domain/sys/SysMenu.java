package cn.mauth.account.common.domain.sys;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Transient;
import java.util.List;

@Entity
public class SysMenu extends BaseEntity {

    private static final long serialVersionUID = 1L;

    private int sort;

    private int statusId;

    @Column(nullable = false)
    private Long parentId;
    @Column(nullable = false,length = 50)
    private String menuName;
    private String menuUrl;

    private String targetName;

    private String menuIcon;

    private String remark;

    @Transient
    private List<SysMenu> list;
    @Transient
    private int isShow;

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

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public String getMenuUrl() {
        return menuUrl;
    }

    public void setMenuUrl(String menuUrl) {
        this.menuUrl = menuUrl;
    }

    public String getTargetName() {
        return targetName;
    }

    public void setTargetName(String targetName) {
        this.targetName = targetName;
    }

    public String getMenuIcon() {
        return menuIcon;
    }

    public void setMenuIcon(String menuIcon) {
        this.menuIcon = menuIcon;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public List<SysMenu> getList() {
        return list;
    }

    public void setList(List<SysMenu> list) {
        this.list = list;
    }

    public int getIsShow() {
        return isShow;
    }

    public void setIsShow(int isShow) {
        this.isShow = isShow;
    }
}
