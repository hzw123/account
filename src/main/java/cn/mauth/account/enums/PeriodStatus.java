package cn.mauth.account.enums;

public enum PeriodStatus {
    NO(0,"没有凭证或期间未启用"),
    HAS(1,"期间有凭证"),
    CHANGE_OUT(2,"已经完成结转损益"),
    CHECK_OUT(3,"已结账"),
    RE_CHECK_OUT(4,"反结账");

    private int code;

    private String desc;

    PeriodStatus(int code, String desc) {
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
