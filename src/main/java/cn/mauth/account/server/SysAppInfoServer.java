package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.sys.SysAppInfo;
import cn.mauth.account.common.domain.sys.SysServiceList;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.SysAppInfoDao;
import cn.mauth.account.dao.SysServiceListDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class SysAppInfoServer extends BaseServer<SysAppInfoDao,SysAppInfo>{


    @Autowired
    private SysServiceListDao sysServiceListDao;

    public SysAppInfoServer(SysAppInfoDao dao) {
        super(dao);
    }

    @Override
    protected Predicate toPredicate(List<Predicate> list, SysAppInfo sysAppInfo, Root root, CriteriaQuery query, CriteriaBuilder cb) {

        if (sysAppInfo.getQuery() > 0)
            if (sysAppInfo.getState() != -1)
                list.add(cb.equal(root.get("state"), sysAppInfo.getState()));

        if (StringUtils.isNotEmpty(sysAppInfo.getName()))
            list.add(cb.like(root.get("name"), PageUtil.like(sysAppInfo.getName())));

        return this.and(list,cb);
    }

    public int save(SysAppInfo sysAppInfo){
        sysAppInfo.setClientSecret(UUID.randomUUID().toString().replace("-",""));
        sysAppInfo.setUserInfoId(SessionUtils.getUserInfoId());
        this.dao.save(sysAppInfo);
        return 1;
    }


    public List<SysServiceList> find(SysServiceList sysServiceList){
        return this.sysServiceListDao.findAll((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();

            if(sysServiceList.getAppId()!=null&&sysServiceList.getAppId()>0)
                list.add(cb.equal(root.get("appId"),sysServiceList.getAppId()));

            if(sysServiceList.getUserInfoId()!=null&&sysServiceList.getUserInfoId()>0)
                list.add(cb.equal(root.get("userInfoId"), sysServiceList.getUserInfoId()));

            if(sysServiceList.getAccountId()!=null&&sysServiceList.getAccountId()>0)
                list.add(cb.equal(root.get("accountId"),sysServiceList.getAccountId()));

            if(sysServiceList.getSysService()!=null && StringUtils.isNotEmpty(sysServiceList.getSysService().getServerNo()))
                list.add(cb.like(root.join("sysService").get("serverNo"),sysServiceList.getSysService().getServerNo()));

            return cb.and(list.toArray(new Predicate[list.size()]));
        });
    }

    @Transactional
    @Override
    public int deleteById(long id) {
        this.sysServiceListDao.deleteByAppId(id);
        return super.deleteById(id);
    }

    @Override
    public int update(SysAppInfo sysAppInfo) {
        SysAppInfo old=this.dao.getOne(sysAppInfo.getId());

        sysAppInfo.setGmtCreate(old.getGmtCreate());
        return super.update(sysAppInfo);
    }
}
