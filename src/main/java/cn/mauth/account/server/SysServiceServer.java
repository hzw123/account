package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.sys.SysService;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.dao.SysServiceDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Service
public class SysServiceServer extends BaseServer<SysServiceDao,SysService>{

    public SysServiceServer(SysServiceDao dao) {
        super(dao);
    }

    @Override
    protected Predicate toPredicate(List<Predicate> list, SysService sysService, Root root, CriteriaQuery query, CriteriaBuilder cb) {
        if(StringUtils.isNotEmpty(sysService.getServerNo()))
            list.add(cb.like(root.get("serverNo"),PageUtil.like(sysService.getServerNo())));

        if(StringUtils.isNotEmpty(sysService.getName()))
            list.add(cb.like(root.get("name"),PageUtil.like(sysService.getName())));

        if(sysService.getQuery()>0 && sysService.getState()>=0)
            list.add(cb.equal(root.get("state"),sysService.getState()));

        if(StringUtils.isNotEmpty(sysService.getType()))
            list.add(cb.like(root.get("type"),PageUtil.like(sysService.getType())));

        return this.and(list,cb);
    }

}
