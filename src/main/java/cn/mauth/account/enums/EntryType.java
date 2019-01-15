package cn.mauth.account.enums;

public enum EntryType {
    UNKOWN(0,"未定义"),
    ASSERT_ENTRY(1,"资产类"),
    DEBIT_ENTRY(2,"负债类"),
    OWNER_ENTRY(3,"所有者权益类"),
    NetWorth_ENTRY(4,"");
    private int code;

    private String desc;

    EntryType(int code, String desc) {
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
