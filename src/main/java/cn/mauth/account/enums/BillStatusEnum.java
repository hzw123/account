package cn.mauth.account.enums;

import java.io.Serializable;

public enum BillStatusEnum implements Serializable {

	SUCCESS(1, "成功"), EX(2, "异常");

	private Integer code;

	private String desc;

	private BillStatusEnum(Integer code, String desc) {
		this.code = code;
		this.desc = desc;
	}

	// 获取desc
	public static String getDesc(Integer code) {
		for (BillStatusEnum em : BillStatusEnum.values()) {
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
