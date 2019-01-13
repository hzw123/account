package cn.mauth.account.common.base;

import cn.mauth.account.common.bean.TitleVo;
import cn.mauth.account.common.util.AjaxResult;
import cn.mauth.account.common.util.Bjui;
import com.alibaba.fastjson.JSON;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;

import java.text.MessageFormat;
import java.text.SimpleDateFormat;
import java.util.Date;


/**
 * 控制基础类，所以controller都应该继承这个类
 */
public class BaseController{


	public static final Logger logger= LoggerFactory.getLogger(BaseController.class);
	public static final String TEXT_UTF8 = "text/html;charset=UTF-8";
	public static final String JSON_UTF8 = "application/json;charset=UTF-8";
	public static final String XML_UTF8 = "application/xml;charset=UTF-8";

	/**
	 * 将前台传递过来的日期格式的字符串，自动转化为Date类型
	 */
	@InitBinder
	public void initBinder(WebDataBinder binder) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		dateFormat.setLenient(false);
		binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
	}


	public static String redirect(String format, Object... arguments) {
		return new StringBuffer("redirect:").append(MessageFormat.format(format, arguments)).toString();
	}

	/**
	 * 成功提示，关闭当前对话框，并对tabid进行刷新
	 * 
	 * @param targetId
	 *            需要刷新的tabid或者dialogid
	 * 
	 * @return json字符串
	 */
	protected static String success(String targetId) {
		return bjui(Bjui.OK, Bjui.CLOSE, targetId, "操作成功");
	}

	/**
	 * 成功提示，关闭当前对话框，并对tabid进行刷新
	 * 
	 * @param targetId
	 *            需要刷新的tabid或者dialogid
	 * @param message
	 *            提示信息
	 * 
	 * @return json字符串
	 */
	protected static String success(String targetId, String message) {
		return bjui(Bjui.OK, Bjui.CLOSE, targetId, message);
	}

	/**
	 * 删除成功提示，不关闭当前对话框
	 * 
	 * @param targetId
	 *            需要刷新的tabid或者dialogid
	 * @return
	 */
	protected static String delete(String targetId) {
		return delete(targetId, "操作成功");
	}

	/**
	 * 删除成功提示，不关闭当前对话框
	 * 
	 * @param targetId
	 *            需要刷新的tabid或者dialogid
	 * @param message
	 *            提示信息
	 * @return
	 */
	protected static String delete(String targetId, String message) {
		return bjui(Bjui.OK, Bjui.OPEN, targetId, message);
	}

	/**
	 * 信息提示，不关闭当前对话框
	 * 
	 * @param targetId
	 *            需要刷新的tabid或者dialogid
	 *            提示信息
	 * @return
	 */

	protected static String ties(String targetId) {
		return bjui(Bjui.OK, Bjui.OPEN, targetId, "");
	}
	protected static String ties(String targetId, String message) {
		return bjui(Bjui.OK, Bjui.OPEN, targetId, message);
	}

	/**
	 * 错误提示，不关闭当前对话框，自定义提示信息
	 * 
	 * @param message
	 *            提示信息
	 * @return
	 */
	protected static String error(String message) {
		return bjui(Bjui.ER, Bjui.OPEN, "", message);
	}

	/**
	 * 删除成功提示，不关闭当前对话框
	 * 
	 *            需要刷新的tabid或者dialogid
	 * @param message
	 *            提示信息
	 * @return
	 */
	private static String bjui(int statusCode, Boolean closeCurrent, String targetId, String message) {
		Bjui bj = new Bjui();
		bj.setStatusCode(statusCode);
		bj.setCloseCurrent(closeCurrent);
		bj.setTabid(targetId);
		bj.setMessage(message);
		return JSON.toJSONString(bj);
	}


	/**
	 * 响应返回结果
	 *
	 * @param rows 影响行数
	 * @return 操作结果
	 */
	protected AjaxResult toAjax(int rows) {
		return rows > 0 ? ok() : fail();
	}

	/**
	 * 返回成功
	 */
	public AjaxResult ok() {
		return AjaxResult.success();
	}

	/**
	 * 返回失败消息
	 */
	public AjaxResult fail() {
		return AjaxResult.error();
	}

	/**
	 * 返回成功消息
	 */
	public AjaxResult ok(String message) {
		return AjaxResult.success(message);
	}


	/**
	 * 返回失败消息
	 */
	public AjaxResult fail(String message) {
		return AjaxResult.error(message);
	}

	/**
	 * 返回错误码消息
	 */
	public AjaxResult error(int code, String message) {
		return AjaxResult.error(code, message);
	}

	/**
	 * 返回object数据
	 */
	public AjaxResult retobject(int code, Object  data) {
		return AjaxResult.successData(code, data);
	}


	/**
	 * 设置标题通用方法
	 * @param modelMap
	 */
	public void setTitle(ModelMap modelMap, TitleVo titleVo){
		//标题
		modelMap.put("titleVo",titleVo);
//		model.addAttribute("parenttitle",titleVo.getParenttitle());
//		//是否打开欢迎语
//		model.addAttribute("isMsg",titleVo.isMsg());
//		//欢迎语
//		model.addAttribute("msgHTML",titleVo.getMsgHtml());
//		//小控件
//		model.addAttribute("isControl",titleVo.isControl());
//		model.addAttribute("isribbon", titleVo.isIsribbon());
	}

}
