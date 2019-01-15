package cn.mauth.account.enums;

public enum LineType {
    TYPE_LINE(0,"类别"),
    PROJECT_LINE(1,"项目"),
    EMPTY_LINE(2,"空行"),
    TOTAL_LINE(3,"总计");
    private int code;

    private String desc;

    LineType(int code, String desc) {
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
