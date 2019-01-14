package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.Body;
import cn.mauth.account.common.domain.settings.IncomeSheet;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api("利润")
@RestController
@RequestMapping("/api/statements")
public class IncomeSheetController {

    @PostMapping
    @ApiOperation(value = "获取利润表",notes = "获取利润表")
    public List<IncomeSheet> incomeSheet(Body body, String accessToken){
        return null;
    }
}
