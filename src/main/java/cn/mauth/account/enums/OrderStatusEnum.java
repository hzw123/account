package cn.mauth.account.enums;

import java.io.Serializable;

public enum OrderStatusEnum implements Serializable {

	CREATE(0, "创建"), WARTING(1, "处理中"), SUCCESS(2, "成功"), FAIL(3, "失败"), UNAFFIRM(9, "未确认");

	private Integer code;

	private String desc;

	private OrderStatusEnum(Integer code, String desc) {
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
