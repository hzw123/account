package cn.mauth.account.enums;

import java.io.Serializable;

public enum TradeTypeEnum implements Serializable {

	ADD(1, "入账"), SUBTRACT(2, "出账");

	private Integer code;

	private String desc;

	private TradeTypeEnum(Integer code, String desc) {
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
