package cn.mauth.account.common.domain.settings;

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
@EntityListeners(AuditingEntityListener.class)
public class Period implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private int asId;//账套ID
    private int pid;//期间ID
    private boolean IsActive;//是否当前期间
    private int year;//年
    private int sn;//年内期数
    @Column(columnDefinition = "datetime")
    @CreatedDate
    private Date startDate;//
    @Column(columnDefinition = "datetime")
    @LastModifiedDate
    private Date endDate;//期间开始时间
    private PeriodStatus Status=PeriodStatus.NO;//状态
    private int fsStatus;//期间结束时间

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getAsId() {
        return asId;
    }

    public void setAsId(int asId) {
        this.asId = asId;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public boolean isActive() {
        return IsActive;
    }

    public void setActive(boolean active) {
        IsActive = active;
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public PeriodStatus getStatus() {
        return Status;
    }

    public void setStatus(PeriodStatus status) {
        Status = status;
    }

    public int getFsStatus() {
        return fsStatus;
    }

    public void setFsStatus(int fsStatus) {
        this.fsStatus = fsStatus;
    }
}
