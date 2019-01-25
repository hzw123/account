package cn.mauth.account.common.domain.settings;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.*;

/**
 * 货币
 */
@Entity
public class Currency extends BaseEntity{

    private static final long serialVersionUID = 1L;

    @Column(unique = true,nullable = false)
    private String code;//货币代码
    @Column(unique = true,nullable = false)
    private String name;//货币名称
    private double rate;//初始汇率
    private int status;//启用状态
    private boolean isStandard;//是否本位币;

    @Transient
    private int query;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public boolean isStandard() {
        return isStandard;
    }

    public void setStandard(boolean standard) {
        isStandard = standard;
    }

    public int getQuery() {
        return query;
    }

    public void setQuery(int query) {
        this.query = query;
    }
}
