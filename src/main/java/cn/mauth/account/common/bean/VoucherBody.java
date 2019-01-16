package cn.mauth.account.common.bean;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * 凭证信息
 */
public class VoucherBody implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String period;//期间信息（201608）
    private String vchGroup;//凭证字（记、收、付、转）
    private int vchNum;//凭证号（1、2、3、4）
    private Date vchDate;//凭证日期
    private String attachements;//附件个数
    private String note;//凭证备注
    private List<Entries> entries;//凭证行
    private String currentPeriod;//所编辑凭证期间信息（201608）
    private Set<Long> idSet;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
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

    public Date getVchDate() {
        return vchDate;
    }

    public void setVchDate(Date vchDate) {
        this.vchDate = vchDate;
    }

    public String getAttachements() {
        return attachements;
    }

    public void setAttachements(String attachements) {
        this.attachements = attachements;
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

    public String getCurrentPeriod() {
        return currentPeriod;
    }

    public void setCurrentPeriod(String currentPeriod) {
        this.currentPeriod = currentPeriod;
    }

    public Set<Long> getIdSet() {
        return idSet;
    }

    public void setIdSet(Set<Long> idSet) {
        this.idSet = idSet;
    }

    public String findIds(){
        String ids=null;
        if(this.isIds()){
            StringBuffer sb=new StringBuffer();
            idSet.forEach(id->{
                sb.append(",");
                sb.append(id);
            });
            ids=sb.toString().substring(1);
        }
        return ids;
    }

    public boolean isIds(){
        return (idSet!=null&&idSet.size()>0);
    }
}
