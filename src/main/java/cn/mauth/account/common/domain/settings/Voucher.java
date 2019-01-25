package cn.mauth.account.common.domain.settings;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 凭证
 */
@Entity
public class Voucher implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;
    @Column(nullable = false)
    private String name;//凭证字
    private int num;//凭证号
    @Column(columnDefinition = "datetime")
    private Date vchDate;//凭证日期
    @Column(nullable = false)
    private String preparedBy;//制单人
    @Column(nullable = false)
    private Long accountId;//账套Id
    private int attachments;//附件数量
    private String approvedBy;//审核人
    private int approveStatus;//审核信息（1表示被审核）
    @Column(columnDefinition = "text")
    private String note;//备注信息
    @OneToMany(cascade = {CascadeType.ALL},fetch = FetchType.EAGER)
    private List<VoucherLine> entries;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public Date getVchDate() {
        return vchDate;
    }

    public void setVchDate(Date vchDate) {
        this.vchDate = vchDate;
    }

    public String getPreparedBy() {
        return preparedBy;
    }

    public void setPreparedBy(String preparedBy) {
        this.preparedBy = preparedBy;
    }

    public int getAttachments() {
        return attachments;
    }

    public void setAttachments(int attachments) {
        this.attachments = attachments;
    }

    public String getApprovedBy() {
        return approvedBy;
    }

    public void setApprovedBy(String approvedBy) {
        this.approvedBy = approvedBy;
    }

    public int getApproveStatus() {
        return approveStatus;
    }

    public void setApproveStatus(int approveStatus) {
        this.approveStatus = approveStatus;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public List<VoucherLine> getEntries() {
        return entries;
    }

    public void setEntries(List<VoucherLine> entries) {
        this.entries = entries;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }
}
