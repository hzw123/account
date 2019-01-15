package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.bean.SubjectVo;
import cn.mauth.account.common.domain.settings.AccountSubject;
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
    public List<AccountSubject> findByAisId(Parameters param){
        String token=param.getAccessToken();
        if(StringUtils.isEmpty(token))
            return null;

        return this.dao.findAll((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();
            if(param.getAsId()>0)
                list.add(cb.equal(root.get("asId"),param.getAsId()));
            if(param.getAsubId()>0)
                list.add(cb.equal(root.get("asubId"),param.getAsId()));

            return cb.and(list.toArray(new Predicate[list.size()]));
        });
    }

    @PostMapping
    @ApiOperation(value = "批量添加科目")
    public void batchSave(Parameters param,List<SubjectVo> list){

    }

    @PutMapping
    @ApiOperation(value = "批量修改科目")
    public void batchUpdate(Parameters param,List<SubjectVo> list){

    }

    @DeleteMapping
    @ApiOperation(value = "批量修改科目")
    public void delete(Parameters param){
        int asId=param.getAsId();
        int subId=param.getAsubId();
        if(asId>0&&subId>0){
            this.dao.deleteByAsIdAndAsubId(asId,subId);
        }else if(asId>0){
            this.dao.deleteByAsId(asId);
        }else if (subId>0){
            this.dao.deleteByAsubId(subId);
        }
    }
}
