package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.domain.settings.Period;
import cn.mauth.account.dao.PeriodDao;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Api("期间信息")
@RestController
@RequestMapping("/api/settings/period")
public class PeriodController {

    @Autowired
    private PeriodDao dao;

    @GetMapping
    @ApiOperation(value = "获取一个账套的所有期间信息",notes = "获取一个账套的所有期间信息")
    public List<Period> list(Parameters param){
        String token=param.getAccessToken();
        if(StringUtils.isEmpty(token))
            return null;

        return this.dao.findAll((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();
            if(param.getAsId()>0)
                list.add(cb.equal(root.get("asId"),param.getAsId()));
            if(StringUtils.isNotEmpty(param.getStart()));
                list.add(cb.equal(root.get(""),param.getStart()));
             if(StringUtils.isNotEmpty(param.getEnd()));
                list.add(cb.equal(root.get(""),param.getEnd()));
            return cb.and(list.toArray(new Predicate[list.size()]));
        });
    }
}
