package cn.mauth.account.enums;

import java.io.Serializable;

public enum ResultEnum implements Serializable {

	ERROR(999, "正常"), SUCCESS(200, "冻结");

	private Integer code;

	private String desc;

	private ResultEnum(Integer code, String desc) {
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
