package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.Body;
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
    @ApiOperation(value = "获取账套下所有科目",notes = "获取账套下所有科目")
    public List<AccountSubject> findByAisId(Body body){
        String token=body.getAccessToken();
        if(StringUtils.isEmpty(token))
            return null;

        return this.dao.findAll((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();
            if(body.getAsId()>0)
                list.add(cb.equal(root.get("asId"),body.getAsId()));
            if(body.getAsubId()>0)
                list.add(cb.equal(root.get("asubId"),body.getAsId()));

            return cb.and(list.toArray(new Predicate[list.size()]));
        });
    }

    @PostMapping
    @ApiOperation(value = "批量添加科目",notes = "批量添加科目")
    public void batchSave(List<SubjectVo> list,String accessToken){

    }

    @PutMapping
    @ApiOperation(value = "批量修改科目",notes = "批量修改科目")
    public void batchUpdate(List<SubjectVo> list,String accessToken){

    }

    @PutMapping
    @ApiOperation(value = "批量修改科目",notes = "批量修改科目")
    public void delete(Body body){
        int asId=body.getAsId();
        int subId=body.getAsubId();
        if(asId>0&&subId>0){
            this.dao.deleteByAsIdAndAsubId(asId,subId);
        }else if(asId>0){
            this.dao.deleteByAsId(asId);
        }else if (subId>0){
            this.dao.deleteByAsubId(subId);
        }
    }
}
