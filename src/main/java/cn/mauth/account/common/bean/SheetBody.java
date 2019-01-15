package cn.mauth.account.common.bean;

import java.io.Serializable;

public class SheetBody implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 报表期间，如2016-10
     */
    private String yearMonth;

    /**
     * 账套准则
     * 1 LittleCompanyStandard 小企业会计准则
     * 2 NormalCompanyStandard 企业会计准则
     * 3 FolkCompanyStandard
     */
    private int accountStandard;

    private int asId;//账套ID

    private boolean isClassification=false;//是否重分类
    private boolean isFullyear=false;//是否显示全年

    public String getYearMonth() {
        return yearMonth;
    }

    public void setYearMonth(String yearMonth) {
        this.yearMonth = yearMonth;
    }

    public int getAccountStandard() {
        return accountStandard;
    }

    public void setAccountStandard(int accountStandard) {
        this.accountStandard = accountStandard;
    }

    public int getAsId() {
        return asId;
    }

    public void setAsId(int asId) {
        this.asId = asId;
    }
}
