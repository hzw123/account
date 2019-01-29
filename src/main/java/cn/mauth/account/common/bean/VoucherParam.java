package cn.mauth.account.common.bean;

import java.io.Serializable;
import java.util.Set;

public class VoucherParam implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id=0L;
    private String vchGroup;//凭证字（记、收、付、转）
    private int vchNum;//凭证号（1、2、3、4）
    private String vchDate;//凭证日期
    private Set<Long> idSet;

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
