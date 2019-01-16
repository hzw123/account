package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.domain.settings.AssistAccounting;
import cn.mauth.account.dao.AssistAccountingDao;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/setting/assistAccounting")
public class AssistingAccountingController {

    @Autowired
    private AssistAccountingDao dao;

    @GetMapping
    @ApiOperation(value = "根据辅助核算名称获取辅助核算信息")
    public List<AssistAccounting> get(Parameters param){
        String token=param.getAccessToken();
        Long accountId=param.getAccountId();
        String name=param.getAssistName();
        return null;
    }

    @PostMapping
    @ApiOperation(value = "添加辅助核算内容项")
    public Object save(String accessToken,AssistAccounting assistAccounting){

        this.dao.save(assistAccounting);

        return null;
    }

    @PutMapping
    @ApiOperation(value = "修改辅助核算信息")
    public Object update(String accessToken,AssistAccounting assistAccounting){

        this.dao.save(assistAccounting);

        return null;
    }

    @DeleteMapping
    @ApiOperation(value = "删除辅助核算项目")
    public Object delete(Parameters param){
        String token=param.getAccessToken();
        Long accountId=param.getAccountId();
        String name=param.getAssistName();

        return null;
    }
}
