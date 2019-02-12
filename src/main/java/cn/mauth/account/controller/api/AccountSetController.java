package cn.mauth.account.controller.api;

import cn.mauth.account.common.base.BaseApi;
import cn.mauth.account.common.domain.settings.AccountSet;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.server.AccountSetServer;
import cn.mauth.account.server.RedisUtil;
import cn.mauth.account.server.SysUserInfoService;
import io.swagger.annotations.ApiOperation;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accounting/accountSet")
public class AccountSetController extends BaseApi{

    @Autowired
    private AccountSetServer server;

    @Autowired
    private SysUserInfoService sysUserInfoService;

    @GetMapping("/page")
    @ApiOperation(value = "分页获取账套信息")
    public Result loadAccountSet(Pageable pageable){

        return Result.success(this.server.page(PageUtil.getPageable(pageable)));
    }

    @GetMapping
    @ApiOperation(value = "获取账套信息")
    public Result load(String name,Long accountId){

        AccountSet accountSet=new AccountSet();

        accountSet.setId(accountId);

        accountSet.setName(name);

        return Result.success(this.server.findAll(accountSet));
    }

    @PostMapping
    @ApiOperation(value = "创建账套")
    public Result save(AccountSet accountSet,String access_token){

        if(!SecurityUtils.getSubject().isAuthenticated()){
            String sign= RedisUtil.getSign(access_token);

            Long id=sysUserInfoService.getId(sign);

            accountSet.setCreateBy(id);

        }

        this.server.save(accountSet);

        return Result.success("账套创建成功");
    }

    @PutMapping
    @ApiOperation(value = "修改账套信息")
    public Result update(AccountSet accountSet){

        this.server.update(accountSet);

        String message="账套Id:"+accountSet.getId()+"更新成功";

        logger.info(message);

        return Result.success(message);
    }

    @DeleteMapping
    @ApiOperation(value = "删除账套")
    public Result delete(Long accountId){

        this.server.deleteById(accountId);

        String message="账套ID:"+accountId+"删除成功";

        logger.info(message);
        return Result.success(message);
    }
}
