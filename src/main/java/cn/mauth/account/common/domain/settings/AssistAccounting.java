package cn.mauth.account.common.domain.settings;

import cn.mauth.account.common.base.BaseEntity;

import javax.persistence.*;

/**
 * 辅助核算表
 */
@Entity
public class AssistAccounting extends BaseEntity{

    private static final long serialVersionUID = 1L;

    @Column(nullable = false,unique = true,length = 100)
    private String name;//辅助核算项名称

    @Column(nullable = false,unique = true,length = 100)
    private String code;//辅助核算用户编码

    private Long accountId;//账套ID

    private int type;//辅助核算类别

    private String typeName;//辅助核算类别名称

    @Column(columnDefinition = "text")
    private String extraInfo;//该辅助核算的额外信息

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getExtraInfo() {
        return extraInfo;
    }

    public void setExtraInfo(String extraInfo) {
        this.extraInfo = extraInfo;
    }
}
