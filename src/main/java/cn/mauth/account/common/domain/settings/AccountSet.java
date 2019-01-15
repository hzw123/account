package cn.mauth.account.common.domain.settings;

import cn.mauth.account.enums.AccountingStandard;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * 账套
 */
@Entity
@EntityListeners(AuditingEntityListener.class)
public class AccountSet implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;//账套id

    @Column(length = 32)
    private String name;//账套名称

    private int currentAs;//
    private String industry;//行业
    private String industryName;//
    private int taxType;//税类型
    private String unifiedNumber;//统一社会信用码
    private String taxNumbers;//国税号
    private AccountingStandard accountingStandard;//会计准则
    private int checkNeeded;//是否启用审核
    private String fixedasset;//固定资产启用状态
    private int cashJournal;//是否启用出纳

    @Column(columnDefinition = "datetime")
    private Date startDate;//
    private String startDateYear;//账套起始年份
    private String startDateMonth;//账套起始月份

    @Column(columnDefinition = "datetime")
    private Date asCurrentDate;//为当前日期
    private String asCurrentDateYear;//
    private String asCurrentDateMonth;//

    private int adLevel0;//
    private int adLevel1;//省
    private int adLevel2;//市
    private int adLevel3;//县/区

    private int asubLength;//
    private String taxPayerName;//纳税人名称
    private String taxAdId;//税收广告标识

    @CreatedBy
    private int createBy;//

    @CreatedDate
    @Column(columnDefinition = "datetime")
    private Date createDate;//

    @LastModifiedBy
    private int modifyBy;//

    @LastModifiedDate
    @Column(columnDefinition = "datetime")
    private Date modifyDate;//

    private int usedBy;//

    @Column(columnDefinition = "datetime")
    private Date usedDate;//

    private int permission;//权限信息

    private boolean isChangedStartDate;//更改开始日期


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCurrentAs() {
        return currentAs;
    }

    public void setCurrentAs(int currentAs) {
        this.currentAs = currentAs;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getIndustryName() {
        return industryName;
    }

    public void setIndustryName(String industryName) {
        this.industryName = industryName;
    }

    public int getTaxType() {
        return taxType;
    }

    public void setTaxType(int taxType) {
        this.taxType = taxType;
    }

    public String getUnifiedNumber() {
        return unifiedNumber;
    }

    public void setUnifiedNumber(String unifiedNumber) {
        this.unifiedNumber = unifiedNumber;
    }

    public String getTaxNumbers() {
        return taxNumbers;
    }

    public void setTaxNumbers(String taxNumbers) {
        this.taxNumbers = taxNumbers;
    }

    public AccountingStandard getAccountingStandard() {
        return accountingStandard;
    }

    public void setAccountingStandard(AccountingStandard accountingStandard) {
        this.accountingStandard = accountingStandard;
    }

    public int getCheckNeeded() {
        return checkNeeded;
    }

    public void setCheckNeeded(int checkNeeded) {
        this.checkNeeded = checkNeeded;
    }

    public String getFixedasset() {
        return fixedasset;
    }

    public void setFixedasset(String fixedasset) {
        this.fixedasset = fixedasset;
    }

    public int getCashJournal() {
        return cashJournal;
    }

    public void setCashJournal(int cashJournal) {
        this.cashJournal = cashJournal;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getStartDateYear() {
        return startDateYear;
    }

    public void setStartDateYear(String startDateYear) {
        this.startDateYear = startDateYear;
    }

    public String getStartDateMonth() {
        return startDateMonth;
    }

    public void setStartDateMonth(String startDateMonth) {
        this.startDateMonth = startDateMonth;
    }

    public Date getAsCurrentDate() {
        return asCurrentDate;
    }

    public void setAsCurrentDate(Date asCurrentDate) {
        this.asCurrentDate = asCurrentDate;
    }

    public String getAsCurrentDateYear() {
        return asCurrentDateYear;
    }

    public void setAsCurrentDateYear(String asCurrentDateYear) {
        this.asCurrentDateYear = asCurrentDateYear;
    }

    public String getAsCurrentDateMonth() {
        return asCurrentDateMonth;
    }

    public void setAsCurrentDateMonth(String asCurrentDateMonth) {
        this.asCurrentDateMonth = asCurrentDateMonth;
    }

    public int getAdLevel0() {
        return adLevel0;
    }

    public void setAdLevel0(int adLevel0) {
        this.adLevel0 = adLevel0;
    }

    public int getAdLevel1() {
        return adLevel1;
    }

    public void setAdLevel1(int adLevel1) {
        this.adLevel1 = adLevel1;
    }

    public int getAdLevel2() {
        return adLevel2;
    }

    public void setAdLevel2(int adLevel2) {
        this.adLevel2 = adLevel2;
    }

    public int getAdLevel3() {
        return adLevel3;
    }

    public void setAdLevel3(int adLevel3) {
        this.adLevel3 = adLevel3;
    }

    public int getAsubLength() {
        return asubLength;
    }

    public void setAsubLength(int asubLength) {
        this.asubLength = asubLength;
    }

    public String getTaxPayerName() {
        return taxPayerName;
    }

    public void setTaxPayerName(String taxPayerName) {
        this.taxPayerName = taxPayerName;
    }

    public String getTaxAdId() {
        return taxAdId;
    }

    public void setTaxAdId(String taxAdId) {
        this.taxAdId = taxAdId;
    }

    public int getCreateBy() {
        return createBy;
    }

    public void setCreateBy(int createBy) {
        this.createBy = createBy;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public int getModifyBy() {
        return modifyBy;
    }

    public void setModifyBy(int modifyBy) {
        this.modifyBy = modifyBy;
    }

    public Date getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(Date modifyDate) {
        this.modifyDate = modifyDate;
    }

    public int getUsedBy() {
        return usedBy;
    }

    public void setUsedBy(int usedBy) {
        this.usedBy = usedBy;
    }

    public Date getUsedDate() {
        return usedDate;
    }

    public void setUsedDate(Date usedDate) {
        this.usedDate = usedDate;
    }

    public int getPermission() {
        return permission;
    }

    public void setPermission(int permission) {
        this.permission = permission;
    }

    public boolean isChangedStartDate() {
        return isChangedStartDate;
    }

    public void setChangedStartDate(boolean changedStartDate) {
        isChangedStartDate = changedStartDate;
    }
}
