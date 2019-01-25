package cn.mauth.account.controller.api;

import cn.mauth.account.common.domain.settings.Subject;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.dao.SubjectDao;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Api("科目信息")
@RestController
@RequestMapping("/api/settings/subject")
public class SubjectController {

    @Autowired
    private SubjectDao dao;

    @GetMapping
    @ApiOperation(value = "获取账套下所有科目")
    public Result findByAisId(Long accountId,Long subId,Pageable pageable){

        Page<Subject> page=this.dao.findAll((root, query, cb) -> {

            List<Predicate> list=new ArrayList<>();

            if(accountId!=null && accountId>0)
                list.add(cb.equal(root.get("accountId"),accountId));

            if(subId!=null && subId>0)
                list.add(cb.equal(root.get("id"),subId));


            return cb.and(list.toArray(new Predicate[list.size()]));
        }, PageUtil.getPageable(pageable));

        return Result.success(page);
    }

    @PostMapping
    @ApiOperation(value = "批量添加科目")
    public Result<String> batchSave(List<Subject> list){

        this.dao.saveAll(list);

        return Result.SUCCESS;
    }

    @PutMapping
    @ApiOperation(value = "批量修改科目")
    public Result<String> batchUpdate(List<Subject> list){

        this.dao.saveAll(list);

        return Result.SUCCESS;
    }

    @DeleteMapping
    @ApiOperation(value = "批量修改科目")
    public Result<String> delete(Long accountId,Long subId){
        if(accountId==null)
            accountId=0L;
        if(subId==null)
            subId=0L;
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
