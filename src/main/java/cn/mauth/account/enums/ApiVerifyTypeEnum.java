package cn.mauth.account.enums;

import java.io.Serializable;

public enum ApiVerifyTypeEnum implements Serializable{

	SECRET(1, "秘钥"), SECRET_WHITE(2, "秘钥+白名单");

	private Integer code;

	private String desc;

	private ApiVerifyTypeEnum(Integer code, String desc) {
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
