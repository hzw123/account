package cn.mauth.account.enums;

import java.io.Serializable;

public enum TxVerifyTypeEnum implements Serializable {

	SECRET(1, "支付密码"), SECRET_VBR(2, "支付密码+动态码");

	private Integer code;

	private String desc;

	private TxVerifyTypeEnum(Integer code, String desc) {
		this.code = code;
		this.desc = desc;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}



}
