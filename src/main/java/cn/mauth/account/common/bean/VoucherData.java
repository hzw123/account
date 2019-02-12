package cn.mauth.account.common.bean;

import java.io.Serializable;

public class VoucherData implements Serializable {
    private static final long serialVersionUID = 1L;

    private String subCode;
    private String subName;
    private double debit;
    private double credit;

    public VoucherData() {
    }

    public VoucherData(String subCode, String subName, double debit, double credit) {
        this.subCode = subCode;
        this.subName = subName;
        this.debit = debit;
        this.credit = credit;
    }

    public String getSubCode() {
        return subCode;
    }

    public void setSubCode(String subCode) {
        this.subCode = subCode;
    }

    public String getSubName() {
        return subName;
    }

    public void setSubName(String subName) {
        this.subName = subName;
    }

    public double getDebit() {
        return debit;
    }

    public void setDebit(double debit) {
        this.debit = debit;
    }

    public double getCredit() {
        return credit;
    }

    public void setCredit(double credit) {
        this.credit = credit;
    }
}
