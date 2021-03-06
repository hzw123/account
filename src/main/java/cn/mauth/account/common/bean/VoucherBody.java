package cn.mauth.account.common.bean;

import java.io.Serializable;
import java.util.List;

/**
 * 凭证信息
 */
public class VoucherBody implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id=0L;
    private String vchGroup;//凭证字（记、收、付、转）
    private int vchNum;//凭证号（1、2、3、4）
    private String vchDate;//凭证日期
    private int attachments;//附件个数
    private String note;//凭证备注
    private List<Entries> entries;//凭证行
    private String preparedBy;//制单人

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVchGroup() {
        return vchGroup;
    }

    public void setVchGroup(String vchGroup) {
        this.vchGroup = vchGroup;
    }

    public int getVchNum() {
        return vchNum;
    }

    public void setVchNum(int vchNum) {
        this.vchNum = vchNum;
    }

    public String getVchDate() {
        return vchDate;
    }

    public void setVchDate(String vchDate) {
        this.vchDate = vchDate;
    }

    public int getAttachments() {
        return attachments;
    }

    public void setAttachments(int attachments) {
        this.attachments = attachments;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public List<Entries> getEntries() {
        return entries;
    }

    public void setEntries(List<Entries> entries) {
        this.entries = entries;
    }

    public String getPreparedBy() {
        return preparedBy;
    }

    public void setPreparedBy(String preparedBy) {
        this.preparedBy = preparedBy;
    }

}
