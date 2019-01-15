package cn.mauth.account.common.bean;

import java.io.Serializable;

public class Parameters implements Serializable {

    private static final long serialVersionUID = 1L;

    private String accessToken;//授权信息
    private int asId;//账套id
    private int asubId;
    private int vid;//凭证id
    private int fcId;//
    private String area;//开始期间（201610）
    private String start;//结束期间（201611)
    private String end;
    private int vNumStart;//开始凭证号（1）
    private int vNumEnd;//结束凭证号（10）

    private String assistName;//辅助核算名称
    private int aaeId;//辅助核算类别项编码

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
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

    public int getVid() {
        return vid;
    }

    public void setVid(int vid) {
        this.vid = vid;
    }

    public int getFcId() {
        return fcId;
    }

    public void setFcId(int fcId) {
        this.fcId = fcId;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public int getvNumStart() {
        return vNumStart;
    }

    public void setvNumStart(int vNumStart) {
        this.vNumStart = vNumStart;
    }

    public int getvNumEnd() {
        return vNumEnd;
    }

    public void setvNumEnd(int vNumEnd) {
        this.vNumEnd = vNumEnd;
    }

    public String getAssistName() {
        return assistName;
    }

    public void setAssistName(String assistName) {
        this.assistName = assistName;
    }

    public int getAaeId() {
        return aaeId;
    }

    public void setAaeId(int aaeId) {
        this.aaeId = aaeId;
    }
}
