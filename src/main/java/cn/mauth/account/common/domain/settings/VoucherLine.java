package cn.mauth.account.common.domain.settings;

import cn.mauth.account.enums.BalanceEnum;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class VoucherLine implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /** 摘要*/
    @Column(nullable = false)
    private String exp;
    @Column(nullable = false)
    private String subCode;//科目编码
    @Column(nullable = false)
    private String subName;//科目名称
    private double amount;//本位币金额
    @Column(nullable = false)
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
