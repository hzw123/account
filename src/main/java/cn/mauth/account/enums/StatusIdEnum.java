package cn.mauth.account.enums;

import java.io.Serializable;

public enum StatusIdEnum implements Serializable {

	NORMAL(1, "正常"), FREEZE(2, "冻结"), CANCEL(3, "注销");

	private Integer code;

	private String desc;

	private StatusIdEnum(Integer code, String desc) {
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
