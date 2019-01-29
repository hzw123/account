package cn.mauth.account.common.bean;

import java.io.Serializable;

public class Entries implements Serializable{

    private static final long serialVersionUID = 1L;

    private String subCode;//科目编码
    private String exp;//摘要
    private double amount;//本位币金额
    private String cur;//货币编码
    private double rate;//货币兑换率
    private int dc;

    public String getSubCode() {
        return subCode;
    }

    public void setSubCode(String subCode) {
        this.subCode = subCode;
    }

    public String getExp() {
        return exp;
    }

    public void setExp(String exp) {
        this.exp = exp;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getCur() {
        return cur;
    }

    public void setCur(String cur) {
        this.cur = cur;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public int getDc() {
        return dc;
    }

    public void setDc(int dc) {
        this.dc = dc;
    }
}
