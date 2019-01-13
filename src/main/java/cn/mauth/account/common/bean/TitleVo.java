package cn.mauth.account.common.bean;

import java.io.Serializable;

/**
 * 设置通用标题
 */
public class TitleVo implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String title;//正标题
	private String parenttitle;//父级标题
	private String isMsg="no";//是都添加欢迎语 默认为no
	private String msgHtml;//欢迎语内容 默认内容为""
	private String isControl="yes";//控件下拉列表点击  默认yes
	private String isribbon="yes";//控件彩带 默认yes

	/**
	 * 设置通用标题
	 * @param title 标题
	 * @param parenttitle 父标题
	 * @param isMsg 是否开启内容
	 * @param msgHtml 内容html
	 * @param isControl 是否开启小控件
	 * @param isribbon 是都开启彩带
	 * @ClassName: TitleVo
	 * @author fuce
	 * @date 2018年8月26日
	 */
	public TitleVo(String title, String parenttitle, String isMsg,
			String msgHtml, String isControl, String isribbon) {
		super();
		this.title = title;
		this.parenttitle = parenttitle;
		this.isMsg = isMsg;
		if(isMsg.equals("yes")){
			this.msgHtml = msgHtml;
		}else{
			this.msgHtml = "";
		}
		
		this.isControl = isControl;
		this.isribbon = isribbon;
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

	public String getIsMsg() {
		return isMsg;
	}

	public void setIsMsg(String isMsg) {
		this.isMsg = isMsg;
	}

	public String getMsgHtml() {
		return msgHtml;
	}

	public void setMsgHtml(String msgHtml) {
		this.msgHtml = msgHtml;
	}

	public String getIsControl() {
		return isControl;
	}

	public void setIsControl(String isControl) {
		this.isControl = isControl;
	}

	public String getIsribbon() {
		return isribbon;
	}

	public void setIsribbon(String isribbon) {
		this.isribbon = isribbon;
	}
}
