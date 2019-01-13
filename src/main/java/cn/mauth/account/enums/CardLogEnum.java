package cn.mauth.account.enums;

import java.io.Serializable;

public enum CardLogEnum implements Serializable {

    CREATE(1,"创建"),ACTIVE(2,"激活");

    private Integer code;

    private String desc;

    private CardLogEnum(Integer code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    // 获取desc
    public static String getDesc(Integer code) {
        for (CardLogEnum em : CardLogEnum.values()) {
            if (em.getCode().equals(code)) {
                return em.getDesc();
            }
        }
        return "";
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
