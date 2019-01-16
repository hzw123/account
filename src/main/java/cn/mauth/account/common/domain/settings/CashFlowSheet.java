package cn.mauth.account.common.domain.settings;

import cn.mauth.account.enums.EntryType;
import cn.mauth.account.enums.LineType;

import javax.persistence.*;
import java.io.Serializable;

/**
 * 现金流量表
 */
@Entity
public class CashFlowSheet implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String amount1;//只在资产负债表使用，用于存储重分类前期末余额
    private String initalAmount1;//只在资产负债表使用，用于存储重分类前年初余额
    private String createdManually;//只在调整表中使用，存储是否手动调整改行值
    private Long pId;//期间ID
    private Long account;//账套id
    private int statementId;//报表类型值
    private int lineId;//报表行 内部编码
    private String lineName;//报表行各项财务统计指标名称
    private LineType lineType;//行类别
    private EntryType entryType;//内部类别，只在资产负债表中用于识别资产列于负载权益列
    private int lineNumber;//显示用行号
    private String note;//计算公式文本
    private Long parentId;//行与行父子关系键
    private int expand;//是否展开合并与ParentID共同用于控制显示
    private double amount;//资产复制表中表示期末余额 其他表示本期数据
    private double initalAmount;//资产负债表中表示期初余额 其他表示本年累计
    private int priority;//表内总计项目计算的优先级，越大计算越早
    private int coumType;//
    private double Item;//

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAmount1() {
        return amount1;
    }

    public void setAmount1(String amount1) {
        this.amount1 = amount1;
    }

    public String getInitalAmount1() {
        return initalAmount1;
    }

    public void setInitalAmount1(String initalAmount1) {
        this.initalAmount1 = initalAmount1;
    }

    public String getCreatedManually() {
        return createdManually;
    }

    public void setCreatedManually(String createdManually) {
        this.createdManually = createdManually;
    }

    public Long getpId() {
        return pId;
    }

    public void setpId(Long pId) {
        this.pId = pId;
    }

    public Long getAccount() {
        return account;
    }

    public void setAccount(Long account) {
        this.account = account;
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

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
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

    public double getItem() {
        return Item;
    }

    public void setItem(double item) {
        Item = item;
    }
}
