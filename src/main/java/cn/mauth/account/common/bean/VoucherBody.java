package cn.mauth.account.common.bean;

import cn.mauth.account.common.domain.settings.VoucherLine;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 凭证信息
 */
public class VoucherBody implements Serializable {
    private static final long serialVersionUID = 1L;

    private int vid;//所编辑凭证id
    private String period;//期间信息（201608）
    private String vgName;//凭证字（记、收、付、转）
    private String vNum;//凭证号（1、2、3、4）
    private Date vDate;//凭证日期
    private String attachements;//附件个数
    private String note;//凭证备注
    private List<VoucherLine> lines;//凭证行
    private String currentPeriod;//所编辑凭证期间信息（201608）

    public int getVid() {
        return vid;
    }

    public void setVid(int vid) {
        this.vid = vid;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getVgName() {
        return vgName;
    }

    public void setVgName(String vgName) {
        this.vgName = vgName;
    }

    public String getvNum() {
        return vNum;
    }

    public void setvNum(String vNum) {
        this.vNum = vNum;
    }

    public Date getvDate() {
        return vDate;
    }

    public void setvDate(Date vDate) {
        this.vDate = vDate;
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

    public List<VoucherLine> getLines() {
        return lines;
    }

    public void setLines(List<VoucherLine> lines) {
        this.lines = lines;
    }

    public String getCurrentPeriod() {
        return currentPeriod;
    }

    public void setCurrentPeriod(String currentPeriod) {
        this.currentPeriod = currentPeriod;
    }
}
