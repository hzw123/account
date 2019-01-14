package cn.mauth.account.common.bean;

import java.io.Serializable;

public class SubjectVo implements Serializable {
    private static final long serialVersionUID = 1L;
    private Long id;
    private int asId;
    private int asubCode;
    private String AsubName;
    /** 科目状态 启用0，停用1*/
    private int status;
    /** 数量核算开关 停用0，启用1，默认停用*/
    private int quantity;
    /** 数量核算单位*/
    private String measureUnit;
    /**
     * 是否开启辅助核算 1启用 0 未启用
     */
    private int assit;
    /** 辅助核算项目名称 如客户，项目，仅当开启辅助核算有效*/
    private String aaNames;
    /** 备注*/
    private String note;
    private int asubType;
    private int direction;
    /** 数量核算单位，如果有值则启用数量核算*/
    private String quantityUnit;
    /** 辅助核算项目 例如：客户/项目*/
    private String assistingAccounting;
    /** 外币核算项目 例如：人民币/美元*/
    private String foreignCurrency;
    /**
     * 期末调汇开关，
     * 停用0，启用1，默认为停用，
     * 仅当开启外币模式时有效
     */
    private int fcAdjust;
    /**
     * 1；外币核算code值,如usd,rmb。默认只开启rmb，
     * 2"当有值时仅限值内容,如 usd,rmb 不同于 usd，仅当开启外币模式时有效
     */
    private String fcNames;

    public int getAsId() {
        return asId;
    }

    public void setAsId(int asId) {
        this.asId = asId;
    }

    public int getAsubCode() {
        return asubCode;
    }

    public void setAsubCode(int asubCode) {
        this.asubCode = asubCode;
    }

    public String getAsubName() {
        return AsubName;
    }

    public void setAsubName(String asubName) {
        AsubName = asubName;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getMeasureUnit() {
        return measureUnit;
    }

    public void setMeasureUnit(String measureUnit) {
        this.measureUnit = measureUnit;
    }

    public int getAssit() {
        return assit;
    }

    public void setAssit(int assit) {
        this.assit = assit;
    }

    public String getAaNames() {
        return aaNames;
    }

    public void setAaNames(String aaNames) {
        this.aaNames = aaNames;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getAsubType() {
        return asubType;
    }

    public void setAsubType(int asubType) {
        this.asubType = asubType;
    }

    public int getDirection() {
        return direction;
    }

    public void setDirection(int direction) {
        this.direction = direction;
    }

    public String getQuantityUnit() {
        return quantityUnit;
    }

    public void setQuantityUnit(String quantityUnit) {
        this.quantityUnit = quantityUnit;
    }

    public String getAssistingAccounting() {
        return assistingAccounting;
    }

    public void setAssistingAccounting(String assistingAccounting) {
        this.assistingAccounting = assistingAccounting;
    }

    public String getForeignCurrency() {
        return foreignCurrency;
    }

    public void setForeignCurrency(String foreignCurrency) {
        this.foreignCurrency = foreignCurrency;
    }

    public int getFcAdjust() {
        return fcAdjust;
    }

    public void setFcAdjust(int fcAdjust) {
        this.fcAdjust = fcAdjust;
    }

    public String getFcNames() {
        return fcNames;
    }

    public void setFcNames(String fcNames) {
        this.fcNames = fcNames;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
