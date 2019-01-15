package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.domain.settings.Currency;
import cn.mauth.account.dao.CurrencyDao;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/settings/currency")
public class CurrencyController {

    @Autowired
    private CurrencyDao dao;

    @GetMapping
    @ApiOperation(value = "获取账套外币信息",notes = "获取账套外币信息")
    public List<Currency> get(Parameters param){

        String token=param.getAccessToken();
        int asId=param.getAsId();

        return this.dao.findByAsId(asId);
    }

    @PostMapping
    @ApiOperation(value = "添加新的外币核算内容",notes = "添加新的外币核算内容")
    public Currency save(Parameters param,Currency currency){
        String token=param.getAccessToken();

        return this.dao.save(currency);
    }

    @PutMapping
    @ApiOperation(value = "修改外币核算项目",notes = "修改外币核算项目")
    public Currency update(Parameters param,Currency currency){
        String token=param.getAccessToken();

        return this.dao.save(currency);
    }

    @DeleteMapping
    @ApiOperation(value = "删除外币核算",notes = "删除外币核算")
    public Object delete(Parameters param){
        String token=param.getAccessToken();

        int asId=param.getAsId();
        int fcId=param.getFcId();

        return null;
    }


}
