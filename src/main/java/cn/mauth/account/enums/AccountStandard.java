package cn.mauth.account.enums;

public enum AccountStandard {
    LITTLE_COMPANY_STANDARD(1,"小企业会计准则"),
    NORMAL_COMPANY_STANDARD(2,"企业会计准则"),
    FOLK_COMPANY_STANDARD(3,"");

    private int code;

    private String desc;

    AccountStandard(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
