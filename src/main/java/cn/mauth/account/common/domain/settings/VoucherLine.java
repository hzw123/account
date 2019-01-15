package cn.mauth.account.common.domain.settings;

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
    private Integer id;
    private String description;//描述
    private String asubCode;//科目Code
    private double debit;//借方金额
    private double credit;//贷方金额
    private double quantity;//数量
    private double price;//单价
    private String fcCode;//外币Code
    private double fcRate;//汇率
    private double fcAmount;//原币
    private String aaCode;//辅助核算Code（1，2，3）以英文逗号隔开

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAsubCode() {
        return asubCode;
    }

    public void setAsubCode(String asubCode) {
        this.asubCode = asubCode;
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

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getFcCode() {
        return fcCode;
    }

    public void setFcCode(String fcCode) {
        this.fcCode = fcCode;
    }

    public double getFcRate() {
        return fcRate;
    }

    public void setFcRate(double fcRate) {
        this.fcRate = fcRate;
    }

    public double getFcAmount() {
        return fcAmount;
    }

    public void setFcAmount(double fcAmount) {
        this.fcAmount = fcAmount;
    }

    public String getAaCode() {
        return aaCode;
    }

    public void setAaCode(String aaCode) {
        this.aaCode = aaCode;
    }
}
