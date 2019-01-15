package cn.mauth.account.common.domain.settings;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * 科目信息CRUD
 */
@Entity
public class AccountSubject implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer id;
    /** 账套ID*/
    private int asId;
    /** 科目编码*/
    private int asubId;
    /** 父节点ID*/
    private int parent;
    /** 科目编码*/
    private int asubCode;
    /** 科目类别*/
    /**
     * 科目类别 资产1，负债2，共同3（企业会计准则），权益4，成本5，损益6
     */
    private int asubType;
    /** 科目全称*/
    private String asubName;
    /** 方向*/
    private int direction;
    /** 简拼*/
    private String acronym;
    /** 全拼*/
    private String pinyin;
    /** 数量核算单位*/
    private String measureUnit;
    /** 科目状态*/
    private int status;
    /**
     * 是否开启辅助核算 1启用 0 未启用
     */
    private int assit;
    /** 辅助核算项目*/
    private String aaTypes;
    /**
     * 科目级别
     */
    private int asubLevel;
    /** 备注*/
    private String note;
    /** 外币核算开关 停用0，启用1，默认停用*/
    private int forgeinCurrcy;
    /** 是否进行期末调汇*/
    private int pcAdjust;
    /** 外币核算值*/
    private String fcCodes;
    /** 不含父级科目名称*/
    private String simpleAsubName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getAsId() {
        return asId;
    }

    public void setAsId(int asId) {
        this.asId = asId;
    }

    public int getAsubId() {
        return asubId;
    }

    public void setAsubId(int asubId) {
        this.asubId = asubId;
    }

    public int getParent() {
        return parent;
    }

    public void setParent(int parent) {
        this.parent = parent;
    }

    public int getAsubCode() {
        return asubCode;
    }

    public void setAsubCode(int asubCode) {
        this.asubCode = asubCode;
    }

    public int getAsubType() {
        return asubType;
    }

    public void setAsubType(int asubType) {
        this.asubType = asubType;
    }

    public String getAsubName() {
        return asubName;
    }

    public void setAsubName(String asubName) {
        this.asubName = asubName;
    }

    public int getDirection() {
        return direction;
    }

    public void setDirection(int direction) {
        this.direction = direction;
    }

    public String getAcronym() {
        return acronym;
    }

    public void setAcronym(String acronym) {
        this.acronym = acronym;
    }

    public String getPinyin() {
        return pinyin;
    }

    public void setPinyin(String pinyin) {
        this.pinyin = pinyin;
    }

    public String getMeasureUnit() {
        return measureUnit;
    }

    public void setMeasureUnit(String measureUnit) {
        this.measureUnit = measureUnit;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getAssit() {
        return assit;
    }

    public void setAssit(int assit) {
        this.assit = assit;
    }

    public String getAaTypes() {
        return aaTypes;
    }

    public void setAaTypes(String aaTypes) {
        this.aaTypes = aaTypes;
    }

    public int getAsubLevel() {
        return asubLevel;
    }

    public void setAsubLevel(int asubLevel) {
        this.asubLevel = asubLevel;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getForgeinCurrcy() {
        return forgeinCurrcy;
    }

    public void setForgeinCurrcy(int forgeinCurrcy) {
        this.forgeinCurrcy = forgeinCurrcy;
    }

    public int getPcAdjust() {
        return pcAdjust;
    }

    public void setPcAdjust(int pcAdjust) {
        this.pcAdjust = pcAdjust;
    }

    public String getFcCodes() {
        return fcCodes;
    }

    public void setFcCodes(String fcCodes) {
        this.fcCodes = fcCodes;
    }

    public String getSimpleAsubName() {
        return simpleAsubName;
    }

    public void setSimpleAsubName(String simpleAsubName) {
        this.simpleAsubName = simpleAsubName;
    }
}
