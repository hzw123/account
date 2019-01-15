package cn.mauth.account.common.bean;

import java.io.Serializable;

public class VoucherResult implements Serializable {
    private static final long serialVersionUID = 1L;

    private int vId;//凭证id
    private String vNum;//凭证号
    private String vg;//凭证字
    private String period;//期间信息

    public Integer getvId() {
        return vId;
    }

    public void setvId(Integer vId) {
        this.vId = vId;
    }

    public String getvNum() {
        return vNum;
    }

    public void setvNum(String vNum) {
        this.vNum = vNum;
    }

    public String getVg() {
        return vg;
    }

    public void setVg(String vg) {
        this.vg = vg;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }
}
