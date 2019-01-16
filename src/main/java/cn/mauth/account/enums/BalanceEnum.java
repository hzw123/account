package cn.mauth.account.enums;

/**
 * 借/贷
 */
public enum  BalanceEnum {

    DEBIT(1,"借"),
    CREDIT(2,"贷");
    private int code;

    private String desc;

    BalanceEnum(int code, String desc) {
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
