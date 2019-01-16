package cn.mauth.account.common.domain.settings;

import cn.mauth.account.enums.BalanceEnum;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class VoucherLine implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /** 摘要*/
    private String exp;
    private String subCode;//科目编码
    private String subName;//科目名称
    private double amount;//本位币金额
    private double amountFor;//原币金额
    private BalanceEnum dc;
    private String cur;//货币编码
    private double rate;//货币兑换率

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getExp() {
        return exp;
    }

    public void setExp(String exp) {
        this.exp = exp;
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

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getAmountFor() {
        return amountFor;
    }

    public void setAmountFor(double amountFor) {
        this.amountFor = amountFor;
    }

    public BalanceEnum getDc() {
        return dc;
    }

    public void setDc(BalanceEnum dc) {
        this.dc = dc;
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
}