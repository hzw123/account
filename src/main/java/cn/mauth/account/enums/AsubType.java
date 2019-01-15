package cn.mauth.account.enums;

public enum AsubType {

    ASSETS(1,"资产"),
    LIABILITIES(2,"负债"),
    COMMON(3,"共同"),
    INTERESTS(4,"权益"),
    COST(4,"成本"),
    LOSS(5,"损益");
    private int code;

    private String desc;

    AsubType(int code, String desc) {
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
