package cn.mauth.account.controller.api;

import cn.mauth.account.common.base.BaseApi;
import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.domain.settings.Currency;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.server.CurrencyServer;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accounting/currency")
public class CurrencyController extends BaseApi {

    @Autowired
    private CurrencyServer server;

    @GetMapping("/page")
    @ApiOperation(value = "分页获取账套外币信息")
    public Result page(Currency currency,Pageable pageable){
        return Result.success(this.server.page(currency,pageable));
    }

    @GetMapping
    @ApiOperation(value = "获取账套外币信息")
    public Result load(Currency currency){
        return Result.success(this.server.findAll(currency));
    }

    @PostMapping
    @ApiOperation(value = "添加新的外币")
    public Result save(Currency currency){

        String message=this.server.validation(currency);

        if(StringUtils.isNotEmpty(message)){
            logger.error(message);
            return Result.error(message);
        }

        this.server.save(currency);

        message="添加新的外币成功";

        return Result.success(message);
    }

    @PutMapping
    @ApiOperation(value = "修改外币信息")
    public Result update(Currency currency){

        this.server.update(currency);

        String message="外币:"+currency.getId()+"更新成功";

        logger.info(message);

        return Result.success(message);
    }

    @DeleteMapping
    @ApiOperation(value = "删除外币核算",notes = "删除外币核算")
    public Result delete(Parameters param){
        Long id=param.getFcId();

        this.server.deleteById(id);

        String message="外币id:"+param.getFcId()+"删除成功";

        logger.info(message);

        return Result.success(message);
    }


}
