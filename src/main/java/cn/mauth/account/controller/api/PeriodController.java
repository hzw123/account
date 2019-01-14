package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.Body;
import cn.mauth.account.common.domain.settings.Period;
import cn.mauth.account.dao.PeriodDao;
import io.swagger.annotations.Api;
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
    public List<Period> load(Body body){
        String token=body.getAccessToken();
        if(StringUtils.isEmpty(token))
            return null;

        return this.dao.findAll((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();
            if(body.getAsId()>0)
                list.add(cb.equal(root.get("asId"),body.getAsId()));
            if(StringUtils.isNotEmpty(body.getStart()));
                list.add(cb.equal(root.get(""),body.getStart()));
             if(StringUtils.isNotEmpty(body.getEnd()));
                list.add(cb.equal(root.get(""),body.getEnd()));
            return cb.and(list.toArray(new Predicate[list.size()]));
        });
    }
}
