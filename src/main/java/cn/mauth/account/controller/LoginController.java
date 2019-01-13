package cn.mauth.account.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.mauth.account.common.base.BaseController;
import cn.mauth.account.common.bean.AccountToken;
import cn.mauth.account.common.bean.TitleVo;
import cn.mauth.account.common.util.Bjui;
import cn.mauth.account.common.util.SessionUtils;
import com.google.code.kaptcha.Constants;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import com.xiaoleilu.hutool.json.JSONUtil;

@Controller
public class LoginController extends BaseController {


	@GetMapping(value = "/")
	public String index() {
		return redirect("/index");
	}


	/**
	 * 请求到登陆界面
	 * @param req
	 * @param resp
	 * @return
	 * @throws IOException
	 */
	@GetMapping(value = "/login")
	@ApiOperation(value="请求到登陆界面",notes="请求到登陆界面")
	public String loginGet(HttpServletRequest req, HttpServletResponse resp,Model model) throws IOException {
		if (SessionUtils.isUser()) {
			return redirect("/index");
		}
		// 判断是否ajax请求
		if (req.getHeader("x-requested-with") != null && req.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
			WebUtils.getAndClearSavedRequest(req); // 清除记录的url，这里不需要
			PrintWriter out = resp.getWriter();
			Bjui bj = new Bjui();
			bj.setStatusCode(301);
			bj.setMessage("timeout");
			out.print(JSONUtil.toJsonStr(bj));
			out.flush();
			return null;
		}
		model.addAttribute("message","");

		return "login";
	}

	/**
	 * 用户登陆验证
	 * @param accountToken
	 * @param model
	 * @return
	 */
	@PostMapping(value = "/login")
	public String loginPost(AccountToken accountToken, Model model) {
		return this.login(accountToken,model);
	}

	private String login(AccountToken token, Model model){
		String scode = (String)SessionUtils.getAttribute(Constants.KAPTCHA_SESSION_KEY);
		//判断验证码
		String message="";
		if(StringUtils.isNotEmpty(token.getCode())&&scode.equals(token.getCode())){
			String userName = token.getUsername();
			Subject currentUser = SecurityUtils.getSubject();

			if(!currentUser.isAuthenticated()) {
				try {
					currentUser.login(token);

					return redirect("/index");
				}catch (UnknownAccountException uae) {
					logger.info("对用户[" + userName + "]进行登录验证..验证未通过,未知账户");
					message=uae.getMessage();
				} catch (IncorrectCredentialsException ice) {
					logger.info("对用户[" + userName + "]进行登录验证..验证未通过,错误的凭证");
					message="用户名或密码不正确";
				} catch (LockedAccountException lae) {
					logger.info("对用户[" + userName + "]进行登录验证..验证未通过,账户已锁定");
					message="账户已锁定";
				} catch (ExcessiveAttemptsException eae) {
					logger.info("对用户[" + userName + "]进行登录验证..验证未通过,错误次数过多");
					message="用户名或密码错误次数过多";
				} catch (AuthenticationException ae) {
					//通过处理Shiro的运行时AuthenticationException就可以控制用户登录失败或密码错误时的情景
					logger.info("对用户[" + userName + "]进行登录验证..验证未通过,堆栈轨迹如下");
					ae.printStackTrace();
					message="用户名或密码不正确";
				}
			}
		}else{
			message="验证码不正确";
		}

		model.addAttribute("message",message);

		return "login";
	}

	@RequestMapping(value = "/timeout", method = { RequestMethod.GET, RequestMethod.POST })
	public void timeout() { }


	@RequestMapping("/admin/index")
	public void adminIndex(ModelMap modelMap){
		setTitle(modelMap, new TitleVo("首页", "首页", "yes","欢迎进入", "yes", "no"));
	}
}
