package cn.mauth.account.common.domain.settings;

import javax.persistence.*;
import java.io.Serializable;

/**
 * 辅助核算表
 */
@Entity
public class AssistAccounting implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;//核算实体ID
    private int asId;//账套ID
    private int typeName;//账套ID
    private String num;//辅助核算用户编码
    private String name;//辅助核算项名称
    private int status;//辅助核算类别
    @Column(columnDefinition = "text")
    private String ExtraInfo;//该辅助核算的额外信息

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

    public int getTypeName() {
        return typeName;
    }

    public void setTypeName(int typeName) {
        this.typeName = typeName;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getExtraInfo() {
        return ExtraInfo;
    }

    public void setExtraInfo(String extraInfo) {
        ExtraInfo = extraInfo;
    }
}
