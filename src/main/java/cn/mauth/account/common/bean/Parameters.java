package cn.mauth.account.common.bean;

import java.io.Serializable;

public class Parameters implements Serializable {

    private static final long serialVersionUID = 1L;

    private String accessToken;//授权信息
    private Long accountId;//账套Id
    private Long subId;//科目Id
    private Long vid;//凭证id
    private Long fcId;//

    private String start;//开始期间（201610）
    private String end;//结束期间（201611)

    private int startVNum;//开始凭证号（1）
    private int endVNum;//结束凭证号（10）

    private String assistName;//辅助核算名称
    private String assistCode;//辅助核算类别项编码

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public Long getSubId() {
        return subId;
    }

    public void setSubId(Long subId) {
        this.subId = subId;
    }

    public Long getVid() {
        return vid;
    }

    public void setVid(Long vid) {
        this.vid = vid;
    }

    public Long getFcId() {
        return fcId;
    }

    public void setFcId(Long fcId) {
        this.fcId = fcId;
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

    public int getStartVNum() {
        return startVNum;
    }

    public void setStartVNum(int startVNum) {
        this.startVNum = startVNum;
    }

    public int getEndVNum() {
        return endVNum;
    }

    public void setEndVNum(int endVNum) {
        this.endVNum = endVNum;
    }

    public String getAssistName() {
        return assistName;
    }

    public void setAssistName(String assistName) {
        this.assistName = assistName;
    }

    public String getAssistCode() {
        return assistCode;
    }

    public void setAssistCode(String assistCode) {
        this.assistCode = assistCode;
    }
}
