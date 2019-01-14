package cn.mauth.account.common.bean;

import java.io.Serializable;

public class Body implements Serializable {
    private static final long serialVersionUID = 1L;
    /** access_token*/
    private String accessToken;
    /** 账套ID*/
    private int asId;
    private int asubId;
    private String area;
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

    private String start;
    private String end;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public int getAsId() {
        return asId;
    }

    public void setAsId(int asId) {
        this.asId = asId;
    }

    public int getAsubId() {
        return asubId;
    }

    public void setAsubId(int asubId) {
        this.asubId = asubId;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

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

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }
}
