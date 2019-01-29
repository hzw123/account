package cn.mauth.account.controller.api;

import cn.mauth.account.common.base.BaseApi;
import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.domain.settings.AssistAccounting;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.dao.AssistAccountingDao;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accounting/assistAccounting")
public class AssistingAccountingController extends BaseApi {

    @Autowired
    private AssistAccountingDao dao;

    @GetMapping
    @ApiOperation(value = "根据辅助核算名称获取辅助核算信息")
    public Result get(Parameters param){
        Long accountId=param.getAccountId();

        String name=param.getAssistName();

        return Result.success(this.dao.findByNameAndAccountId(name,accountId));
    }

    @PostMapping
    @ApiOperation(value = "添加辅助核算内容项")
    public Result save(AssistAccounting assistAccounting){

        this.dao.save(assistAccounting);

        return Result.success();
    }

    @PutMapping
    @ApiOperation(value = "修改辅助核算信息")
    public Result update(AssistAccounting assistAccounting){

        AssistAccounting old=this.dao.getOne(assistAccounting.getId());

        assistAccounting.setGmtCreate(old.getGmtCreate());
        this.dao.save(assistAccounting);

        return Result.success();
    }

    @DeleteMapping
    @ApiOperation(value = "删除辅助核算项目")
    public Result<String> delete(Parameters param){
        Long accountId=param.getAccountId();

        String name=param.getAssistName();

        this.dao.deleteByNameAndAccountId(name,accountId);

        return Result.success();
    }
}
