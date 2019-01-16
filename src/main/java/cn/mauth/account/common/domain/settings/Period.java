package cn.mauth.account.common.domain.settings;

import cn.mauth.account.common.base.BaseEntity;
import cn.mauth.account.enums.PeriodStatus;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * 期间信息表
 */
@Entity
public class Period extends BaseEntity{

    private static final long serialVersionUID = 1L;

    private Long accountId;//账套ID
    private boolean isActive;//是否当前期间
    private int year;//年
    private int sn;//年内期数
    private PeriodStatus status=PeriodStatus.NO;//状态
    private int fsStatus;//期间结束时间

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getSn() {
        return sn;
    }

    public void setSn(int sn) {
        this.sn = sn;
    }

    public PeriodStatus getStatus() {
        return status;
    }

    public void setStatus(PeriodStatus status) {
        this.status = status;
    }

    public int getFsStatus() {
        return fsStatus;
    }

    public void setFsStatus(int fsStatus) {
        this.fsStatus = fsStatus;
    }
}
