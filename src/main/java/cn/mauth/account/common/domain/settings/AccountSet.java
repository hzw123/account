package cn.mauth.account.common.domain.settings;

import cn.mauth.account.common.base.BaseEntity;
import cn.mauth.account.enums.AccountingStandard;
import org.springframework.data.annotation.CreatedBy;

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

    private String industry;//行业
    private int level1;//省
    private int level2;//市
    private int level3;//县/区

    private String startDateYear;//账套起始年份
    private String startDateMonth;//账套起始月份

    private String unifiedNumber;//统一社会信用码
    private String taxNumbers;//国税号
    private String taxType;//税类型
    private AccountingStandard accountingStandard;//会计准则

    private int fixedasset;//固定资产启用状态
    private int checkNeeded;//是否启用审核
    private int cashJournal;//是否启用出纳

    private int permission;//权限信息
    @CreatedBy
    private int createBy;//

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public int getLevel1() {
        return level1;
    }

    public void setLevel1(int level1) {
        this.level1 = level1;
    }

    public int getLevel2() {
        return level2;
    }

    public void setLevel2(int level2) {
        this.level2 = level2;
    }

    public int getLevel3() {
        return level3;
    }

    public void setLevel3(int level3) {
        this.level3 = level3;
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

    public String getTaxType() {
        return taxType;
    }

    public void setTaxType(String taxType) {
        this.taxType = taxType;
    }

    public AccountingStandard getAccountingStandard() {
        return accountingStandard;
    }

    public void setAccountingStandard(AccountingStandard accountingStandard) {
        this.accountingStandard = accountingStandard;
    }

    public int getFixedasset() {
        return fixedasset;
    }

    public void setFixedasset(int fixedasset) {
        this.fixedasset = fixedasset;
    }

    public int getCheckNeeded() {
        return checkNeeded;
    }

    public void setCheckNeeded(int checkNeeded) {
        this.checkNeeded = checkNeeded;
    }

    public int getCashJournal() {
        return cashJournal;
    }

    public void setCashJournal(int cashJournal) {
        this.cashJournal = cashJournal;
    }

    public int getPermission() {
        return permission;
    }

    public void setPermission(int permission) {
        this.permission = permission;
    }

    public int getCreateBy() {
        return createBy;
    }

    public void setCreateBy(int createBy) {
        this.createBy = createBy;
    }
}
