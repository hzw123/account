package cn.mauth.account.common.domain.settings;

import cn.mauth.account.common.base.BaseEntity;
import cn.mauth.account.enums.BalanceEnum;
import cn.mauth.account.enums.SubType;
import org.apache.commons.lang.StringUtils;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Transient;

/**
 * 科目信息
 */
@Entity
public class Subject extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /** 父节点ID*/
    private Long parentId;
    /** 科目名称*/
    @Column(nullable = false,unique = true,length = 100)
    private String name;
    /** 科目编码*/
    @Column(nullable = false,unique = true,length = 100)
    private String code;
    /** 科目类别*/
    @Column(nullable = false)
    private SubType subType;
    /** 科目类别名称*/
    private String groupName;
    /** 科目级别*/
    private int level;
    /** 余额方向，借/贷 */
    @Column(nullable = false)
    private BalanceEnum dc;
    @Transient
    private String dcDesc;//余额方向名称
    /** 账套ID*/
    private long accountId;
    /** 备注*/
    private String note;
    /** 是否明细科目*/
    private boolean isDetail;
    /** 是否禁用*/
    private boolean isDeleted;

    @Column(nullable = false)
    private String currency;//货币代码

    /** 是否开启辅助核算0 未启用 1启用 */
    private boolean assit;
    /** 辅助核算项目*/
    private String aaTypes;

    /** 数量单位编码*/
    private String qtyUnit;
    /** 使用数量辅助核算*/
    private boolean useQtyAux;

    /** 是否期末调汇*/
    private boolean isRateAdj;

    /** 外币核算值*/
    private String fcCodes;
    /** 外币核算开关*/
    private boolean isForeignCurrency;

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

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

    public SubType getSubType() {
        return subType;
    }

    public void setSubType(SubType subType) {
        this.subType = subType;
    }

    public String getGroupName() {
        return StringUtils.isNotEmpty(groupName)?groupName:(subType==null?null:subType.getDesc());
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public BalanceEnum getDc() {
        return dc;
    }

    public void setDc(BalanceEnum dc) {
        this.dc = dc;
    }

    public String getDcDesc() {

        return StringUtils.isNotBlank(dcDesc)?dcDesc:(dc==null?null:dc.getDesc());
    }

    public void setDcDesc(String dcDesc) {
        this.dcDesc = dcDesc;
    }

    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public boolean isDetail() {
        return isDetail;
    }

    public void setDetail(boolean detail) {
        isDetail = detail;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public boolean isAssit() {
        return assit;
    }

    public void setAssit(boolean assit) {
        this.assit = assit;
    }

    public String getAaTypes() {
        return aaTypes;
    }

    public void setAaTypes(String aaTypes) {
        this.aaTypes = aaTypes;
    }

    public String getQtyUnit() {
        return qtyUnit;
    }

    public void setQtyUnit(String qtyUnit) {
        this.qtyUnit = qtyUnit;
    }

    public boolean isUseQtyAux() {
        return useQtyAux;
    }

    public void setUseQtyAux(boolean useQtyAux) {
        this.useQtyAux = useQtyAux;
    }

    public boolean isRateAdj() {
        return isRateAdj;
    }

    public void setRateAdj(boolean rateAdj) {
        isRateAdj = rateAdj;
    }

    public String getFcCodes() {
        return fcCodes;
    }

    public void setFcCodes(String fcCodes) {
        this.fcCodes = fcCodes;
    }

    public boolean isForeignCurrency() {
        return isForeignCurrency;
    }

    public void setForeignCurrency(boolean foreignCurrency) {
        isForeignCurrency = foreignCurrency;
    }
}
