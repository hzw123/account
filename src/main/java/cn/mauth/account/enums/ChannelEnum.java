package cn.mauth.account.enums;

import java.io.Serializable;

public enum ChannelEnum implements Serializable {

	API(1, "API"), WEB(2, "WEB"), APP(3, "APP");

	private Integer code;

	private String desc;

	private ChannelEnum(Integer code, String desc) {
		this.code = code;
		this.desc = desc;
	}

	// 获取desc
	public static String getDesc(Integer code) {
		for (ChannelEnum em : ChannelEnum.values()) {
			if (em.getCode().equals(code)) {
				return em.getDesc();
			}
		}
		return "";
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
