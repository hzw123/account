package cn.mauth.account.common.bean;

import java.io.Serializable;

/**
 * 设置通用标题
 */
public class TitleVo implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String title;//正标题
	private String parenttitle;//父级标题
	private boolean isMsg;//是都添加欢迎语 默认为false
	private String msgHtml;//欢迎语内容 默认内容为""
	private boolean isControl=true;//控件下拉列表点击  默认true
	private boolean isRibbon=true;//控件彩带 默认true

	/**
	 * 设置通用标题
	 * @param title 标题
	 * @param parenttitle 父标题
	 * @param isMsg 是否开启内容
	 * @param msgHtml 内容html
	 * @param isControl 是否开启小控件
	 * @param isRibbon 是都开启彩带
	 * @ClassName: TitleVo
	 * @author fuce
	 * @date 2018年8月26日
	 */
	public TitleVo(String title, String parenttitle, boolean isMsg,
			String msgHtml, boolean isControl, boolean isRibbon) {
		super();
		this.title = title;
		this.parenttitle = parenttitle;
		this.isMsg = isMsg;
		if(isMsg){
			this.msgHtml = msgHtml;
		}else{
			this.msgHtml = "";
		}
		
		this.isControl = isControl;
		this.isRibbon = isRibbon;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getParenttitle() {
		return parenttitle;
	}

	public void setParenttitle(String parenttitle) {
		this.parenttitle = parenttitle;
	}

	public boolean isMsg() {
		return isMsg;
	}

	public void setMsg(boolean msg) {
		isMsg = msg;
	}

	public String getMsgHtml() {
		return msgHtml;
	}

	public void setMsgHtml(String msgHtml) {
		this.msgHtml = msgHtml;
	}

	public boolean isControl() {
		return isControl;
	}

	public void setControl(boolean control) {
		isControl = control;
	}

	public boolean isRibbon() {
		return isRibbon;
	}

	public void setRibbon(boolean ribbon) {
		isRibbon = ribbon;
	}
}
