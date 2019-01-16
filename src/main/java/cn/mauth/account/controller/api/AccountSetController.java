package cn.mauth.account.controller.api;

import cn.mauth.account.common.domain.settings.AccountSet;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.dao.AccountSetDao;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings/accountSet")
public class AccountSetController {

    @Autowired
    private AccountSetDao dao;

    @GetMapping
    @ApiOperation(value = "通过账套信息获取")
    public Page<AccountSet> loadAccountSet(String accessToken, Pageable pageable){


        return this.dao.findAll(PageUtil.getPageable(pageable));
    }

    @PostMapping
    @ApiOperation(value = "创建账套")
    public Object save(String accessToken,AccountSet accountSet){

        this.dao.save(accountSet);

        return Result.SUCCESS;
    }

    @PutMapping
    @ApiOperation(value = "修改账套信息")
    public Object update(String accessToken,AccountSet accountSet){

        this.dao.save(accountSet);

        return Result.SUCCESS;
    }

    @DeleteMapping
    @ApiOperation(value = "删除账套")
    public Object delete(String accessToken,Long accountId){

        this.dao.deleteById(accountId);

        return Result.SUCCESS;
    }
}
