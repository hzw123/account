package cn.mauth.account.common.domain.settings;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.*;
import java.util.Date;

/**
 * 账套
 */
@Entity
public class AccountSet extends BaseEntity {

    private static final long serialVersionUID = 1L;

    @Column(length = 32)
    private String name;//账套名称

    @Column(columnDefinition = "datetime")
    private Date expirationTime;//到期时间

    private long createBy;//开通用户ID

    private int userCount;//用户数

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getExpirationTime() {
        return expirationTime;
    }

    public void setExpirationTime(Date expirationTime) {
        this.expirationTime = expirationTime;
    }


    public long getCreateBy() {
        return createBy;
    }

    public void setCreateBy(long createBy) {
        this.createBy = createBy;
    }

    public int getUserCount() {
        return userCount;
    }

    public void setUserCount(int userCount) {
        this.userCount = userCount;
    }
}
