package cn.mauth.account.controller.api;

import cn.mauth.account.common.domain.settings.AccountSet;
import cn.mauth.account.dao.AccountSetDao;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/settings/accountSet")
public class AccountSetController {

    @Autowired
    private AccountSetDao dao;

    @GetMapping
    @ApiOperation(value = "通过账套信息获取",notes = "通过账套信息获取")
    public List<AccountSet> loadAccountSet(String accessToken){

        return null;
    }

    @PostMapping
    @ApiOperation(value = "创建账套",notes = "创建账套")
    public Object save(String accessToken,AccountSet accountSet){

        this.dao.save(accountSet);
        return null;
    }

    @PutMapping
    @ApiOperation(value = "修改账套信息",notes = "修改账套信息")
    public Object update(String accessToken,AccountSet accountSet){

        this.dao.save(accountSet);
        return null;
    }

    @DeleteMapping
    @ApiOperation(value = "删除账套",notes = "删除账套")
    public Object delete(String accessToken,Integer asId){

        this.dao.deleteById(asId);
        Map<String,String> result=new HashMap<>();
        result.put("result","sample string 1");
        return result;
    }
}
