package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.sys.SysService;
import cn.mauth.account.common.domain.sys.SysServiceList;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.SysServiceDao;
import cn.mauth.account.dao.SysServiceListDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.Date;
import java.util.List;

@Service
public class SysServiceListServer extends BaseServer<SysServiceListDao,SysServiceList>{


    @Autowired
    private SysServiceDao sysServiceDao;

    public SysServiceListServer(SysServiceListDao dao) {
        super(dao);
    }

    @Override
    protected Predicate toPredicate(List<Predicate> list, SysServiceList sysServiceList, Root root, CriteriaQuery query, CriteriaBuilder cb) {

        if(StringUtils.isNotEmpty(sysServiceList.getName()))
            list.add(cb.like(root.get("name"),PageUtil.like(sysServiceList.getName())));

        if(sysServiceList.getQuery()>0 &&sysServiceList.getState()>=0)
            list.add(cb.equal(root.get("state"),sysServiceList.getState()));

        if(sysServiceList.getAccountId()!=null&&sysServiceList.getAccountId()>0)
            list.add(cb.equal(root.get("accountId"),sysServiceList.getAccountId()));

        if(!SessionUtils.isAdmin()){
            if(SessionUtils.getUserInfoId()==null){
                if(sysServiceList.getUserInfoId()!=null&&sysServiceList.getUserInfoId()>0)
                    list.add(cb.equal(root.get("userInfoId"),sysServiceList.getUserInfoId()));

            }else{
                list.add(cb.equal(root.get("userInfoId"),SessionUtils.getUserInfoId()));
            }

        }

        return this.and(list,cb);
    }


    public int save(SysServiceList sysServiceList){
        if(sysServiceList.getServiceId()>0){
            SysService sysService=sysServiceDao.findById(sysServiceList.getServiceId()).get();

            sysServiceList.setSysService(sysService);
        }

        sysServiceList.setUserInfoId(SessionUtils.getUserInfoId());
        super.save(sysServiceList);
        return 1;
    }

    @Override
    public int update(SysServiceList sysServiceList) {
        SysServiceList old=this.dao.getOne(sysServiceList.getId());
        sysServiceList.setGmtCreate(old.getGmtCreate());

        if(sysServiceList.getServiceId()>0){
            SysService sysService=sysServiceDao.findById(sysServiceList.getServiceId()).get();

            sysServiceList.setSysService(sysService);
        }

        return super.update(sysServiceList);
    }

    public List<SysService> findAllOfSysService(){
        return this.sysServiceDao.findAll();
    }
}
