package cn.mauth.account.enums;

import java.io.Serializable;

public enum BillTypeEnum implements Serializable {

	PAY(1, "支付单"), RECHAREGE(2, "充值单"), REFUND(3, "退款单"), TX(4, "提现单");

	private Integer code;

	private String desc;

	private BillTypeEnum(Integer code, String desc) {
		this.code = code;
		this.desc = desc;
	}

	// 获取desc
	public static String getDesc(Integer code) {
		for (BillTypeEnum em : BillTypeEnum.values()) {
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
