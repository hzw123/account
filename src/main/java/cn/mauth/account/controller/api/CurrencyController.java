package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.domain.settings.Currency;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.dao.CurrencyDao;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/settings/currency")
public class CurrencyController {

    @Autowired
    private CurrencyDao dao;

    @GetMapping
    @ApiOperation(value = "获取账套外币信息")
    public Result get(Pageable pageable){
        return Result.success(this.dao.findAll(PageUtil.getPageable(pageable)));
    }

    @PostMapping
    @ApiOperation(value = "添加新的外币核算内容")
    public Result save(Currency currency){
        currency=this.dao.save(currency);
        return Result.success(currency);
    }

    @PutMapping
    @ApiOperation(value = "修改外币核算项目")
    public Result update(Currency currency){
        this.dao.save(currency);

        return Result.SUCCESS;
    }

    @DeleteMapping
    @ApiOperation(value = "删除外币核算",notes = "删除外币核算")
    public Result delete(Parameters param){
        Long fcId=param.getFcId();

        this.dao.deleteById(fcId);

        return Result.success();
    }


}
