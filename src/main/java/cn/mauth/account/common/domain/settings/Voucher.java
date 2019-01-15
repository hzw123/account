package cn.mauth.account.common.domain.settings;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 凭证
 */
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Voucher implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;//凭证ID
    private String vgName;//凭证字
    private int vNum;//凭证号
    @Column(columnDefinition = "datetime")
    private Date vDate;//凭证日期
    private String preparedBy;//制单人
    private int attachments;//附件数量
    private String approvedBy;//审核人
    private int approveStatus;//审核信息（1表示被审核）
    @Column(columnDefinition = "text")
    private String note;//备注信息
    @CreatedDate
    @Column(columnDefinition = "datetime")
    private String created_date;//创建时间
    @LastModifiedDate
    @Column(columnDefinition = "datetime")
    private String modified_date;//修改时间
    @OneToMany(fetch = FetchType.EAGER)
    private List<VoucherLine> lines;//凭证行

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getVgName() {
        return vgName;
    }

    public void setVgName(String vgName) {
        this.vgName = vgName;
    }

    public int getvNum() {
        return vNum;
    }

    public void setvNum(int vNum) {
        this.vNum = vNum;
    }

    public Date getvDate() {
        return vDate;
    }

    public void setvDate(Date vDate) {
        this.vDate = vDate;
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

    public String getCreated_date() {
        return created_date;
    }

    public void setCreated_date(String created_date) {
        this.created_date = created_date;
    }

    public String getModified_date() {
        return modified_date;
    }

    public void setModified_date(String modified_date) {
        this.modified_date = modified_date;
    }

    public List<VoucherLine> getLines() {
        return lines;
    }

    public void setLines(List<VoucherLine> lines) {
        this.lines = lines;
    }
}
