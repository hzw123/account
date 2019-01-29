package cn.mauth.account.controller.api;

import cn.mauth.account.common.base.BaseApi;
import cn.mauth.account.common.domain.settings.Subject;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.dao.AccountSetDao;
import cn.mauth.account.dao.SubjectDao;
import cn.mauth.account.server.SubjectServer;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Api("科目信息")
@RestController
@RequestMapping("/api/accounting/subject")
public class SubjectController extends BaseApi {

    @Autowired
    private SubjectServer server;

    @Autowired
    private AccountSetDao accountSetDao;

    @GetMapping
    @ApiOperation(value = "获取账套下所有科目")
    public Result findByAisId(Long accountId,Long subId){

        if(accountId==null)
            return Result.error("账套为空");

        List<Subject> page=this.server.findAll((root, query, cb) -> {

            List<Predicate> list=new ArrayList<>();

            if(accountId!=null && accountId>0)
                list.add(cb.equal(root.get("accountId"),accountId));

            if(subId!=null && subId>0)
                list.add(cb.equal(root.get("id"),subId));


            return cb.and(list.toArray(new Predicate[list.size()]));
        });

        return Result.success(page);
    }

    @PostMapping
    @ApiOperation(value = "添加科目")
    public Result<String> save(Subject subject){

        String message;
        if(subject.getAccountId()==0){
            message="没有设置账套ID";

            return Result.error(message);
        }
        if(accountSetDao.getOne(subject.getAccountId())==null){
            message="账套ID不正确";

            return Result.error(message);
        }

        this.server.save(subject);

        message="科目添加成功" ;

        return Result.success(message);
    }

    @PostMapping("/batch")
    @ApiOperation(value = "批量添加科目")
    public Result batchSave(List<Subject> list){

        for (Subject subject:list) {
            if(subject.getAccountId()==0)
                return Result.error("账套ID不能为空");
            if(accountSetDao.getOne(subject.getAccountId())==null)
                return Result.error("账套ID不正确");
        }

        this.server.saveAll(list);


        return Result.success();
    }

    @PutMapping
    @ApiOperation(value = "批量修改科目")
    public Result batchUpdate(List<Subject> list){

        this.server.saveAll(list);

        String message="批量修改成功";

        logger.info(message);

        return Result.success(message);
    }

    @DeleteMapping
    @ApiOperation(value = "批量删除科目")
    public Result delete(Long accountId,Long subId){

        String message=null;

        if(accountId==null)
            accountId=0L;

        if(subId==null)
            subId=0L;

        try{

            if(subId>0&&accountId>0){

                this.server.deleteByIdAndAccountId(subId,accountId);

                message="根据id:"+subId+"和accountId:"+accountId+"删除成功";
            }else if(accountId>0){

                this.server.deleteByAccountId(accountId);

                message="根据accountId:"+accountId+"删除成功";;
            }else if (subId>0){

                this.server.deleteById(subId);

                message="根据id:"+subId+"删除成功";
            }

        }catch (Exception e){

            logger.error(e.getMessage());

            return Result.error(e.getMessage());
        }


        logger.info(message);

        return Result.success(message);
    }
}
