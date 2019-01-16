package cn.mauth.account.controller.api;

import cn.mauth.account.common.domain.settings.AccountSubject;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.dao.AccountSubjectDao;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Api("科目信息")
@RestController
@RequestMapping("/api/settings/accountSubject")
public class AccountSubjectController {

    @Autowired
    private AccountSubjectDao dao;

    @GetMapping
    @ApiOperation(value = "获取账套下所有科目")
    public List<AccountSubject> findByAisId(String accessToken,Long accountId,Long subId){
        if(StringUtils.isEmpty(accessToken))
            return null;

        return this.dao.findAll((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();
            if(accountId>0)
                list.add(cb.equal(root.get("accountId"),accountId));
            if(subId>0)
                list.add(cb.equal(root.get("id"),subId));

            return cb.and(list.toArray(new Predicate[list.size()]));
        });
    }

    @PostMapping
    @ApiOperation(value = "批量添加科目")
    public Object batchSave(String accessToken,List<AccountSubject> list){


        return Result.SUCCESS;
    }

    @PutMapping
    @ApiOperation(value = "批量修改科目")
    public Object batchUpdate(String accessToken,List<AccountSubject> list){

        return Result.SUCCESS;
    }

    @DeleteMapping
    @ApiOperation(value = "批量修改科目")
    public Object delete(String accessToken,Long accountId,Long subId){

        try{
            if(subId>0&&accountId>0){
                this.dao.deleteByIdAndAccountId(subId,accountId);
            }else if(accountId>0){
                this.dao.deleteByAccountId(accountId);
            }else if (subId>0){
                this.dao.deleteById(subId);
            }
        }catch (Exception e){
            e.printStackTrace();
            return Result.error(e.getMessage());
        }
        return Result.SUCCESS;
    }
}
