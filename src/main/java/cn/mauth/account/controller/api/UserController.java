package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.TitleVo;
import cn.mauth.account.common.domain.sys.SysUserInfo;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.dao.SysUserInfoDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/api/user")
public class UserController {

    private static final String prefix="/api/user/";

    @Autowired
    private SysUserInfoDao dao;

    @RequestMapping("view")
    public String view(Model model){
        model.addAttribute("titleVo",new TitleVo("用户管理", "用户列表", true,"用户列表", true, false));
        return prefix+"list";
    }

    @ResponseBody
    @RequestMapping("/list")
    public Page<SysUserInfo> list(SysUserInfo sysUserInfo,Pageable pageable){
        return this.dao.findAll((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();

            if(StringUtils.isNotEmpty(sysUserInfo.getLoginName()))
                list.add(cb.like(root.get("loginName"),PageUtil.like(sysUserInfo.getLoginName())));

            return cb.and(list.toArray(new Predicate[list.size()]));
        },PageUtil.getPageable(pageable));
    }
}
