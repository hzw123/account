package cn.mauth.account.common.bean;

import cn.mauth.account.enums.EntryType;
import cn.mauth.account.enums.LineType;

import java.io.Serializable;

/**
 * 获取利润表季报
 */
public class QuarterlyProfit implements Serializable{
    private static final long serialVersionUID = 1L;

    private double qutar1;//第一季度合计，只在获取季度报表中is_fullyear为真时才有值
    private double qutar2;//第二季度合计
    private double qutar3;//第三季度合计
    private double qutar4;//第四季度合计
    private double Item;//
    private int pId;//期间ID
    private int asId;//账套id
    private int statementId;//报表类型值
    private int lineId;//报表行 内部编码
    private String lineName;//报表行各项财务统计指标名称
    private LineType lineType;//行类别
    private EntryType entryType;//内部类别，只在资产负债表中用于识别资产列于负载权益列
    private int lineNumber;//显示用行号
    private String note;//计算公式文本
    private int parentId;//行与行父子关系键
    private int expand;//是否展开合并与ParentID共同用于控制显示
    private double amount;//资产复制表中表示期末余额 其他表示本期数据
    private double initalAmount;//资产负债表中表示期初余额 其他表示本年累计
    private int priority;//表内总计项目计算的优先级，越大计算越早
    private int coumType;//

    public double getQutar1() {
        return qutar1;
    }

    public void setQutar1(double qutar1) {
        this.qutar1 = qutar1;
    }

    public double getQutar2() {
        return qutar2;
    }

    public void setQutar2(double qutar2) {
        this.qutar2 = qutar2;
    }

    public double getQutar3() {
        return qutar3;
    }

    public void setQutar3(double qutar3) {
        this.qutar3 = qutar3;
    }

    public double getQutar4() {
        return qutar4;
    }

    public void setQutar4(double qutar4) {
        this.qutar4 = qutar4;
    }

    public double getItem() {
        return Item;
    }

    public void setItem(double item) {
        Item = item;
    }

    public int getpId() {
        return pId;
    }

    public void setpId(int pId) {
        this.pId = pId;
    }

    public int getAsId() {
        return asId;
    }

    public void setAsId(int asId) {
        this.asId = asId;
    }

    public int getStatementId() {
        return statementId;
    }

    public void setStatementId(int statementId) {
        this.statementId = statementId;
    }

    public int getLineId() {
        return lineId;
    }

    public void setLineId(int lineId) {
        this.lineId = lineId;
    }

    public String getLineName() {
        return lineName;
    }

    public void setLineName(String lineName) {
        this.lineName = lineName;
    }

    public LineType getLineType() {
        return lineType;
    }

    public void setLineType(LineType lineType) {
        this.lineType = lineType;
    }

    public EntryType getEntryType() {
        return entryType;
    }

    public void setEntryType(EntryType entryType) {
        this.entryType = entryType;
    }

    public int getLineNumber() {
        return lineNumber;
    }

    public void setLineNumber(int lineNumber) {
        this.lineNumber = lineNumber;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    public int getExpand() {
        return expand;
    }

    public void setExpand(int expand) {
        this.expand = expand;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getInitalAmount() {
        return initalAmount;
    }

    public void setInitalAmount(double initalAmount) {
        this.initalAmount = initalAmount;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public int getCoumType() {
        return coumType;
    }

    public void setCoumType(int coumType) {
        this.coumType = coumType;
    }
}
