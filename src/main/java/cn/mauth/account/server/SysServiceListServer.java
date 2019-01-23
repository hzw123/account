package cn.mauth.account.server;

import cn.mauth.account.common.domain.sys.SysService;
import cn.mauth.account.common.domain.sys.SysServiceList;
import cn.mauth.account.common.util.PageInfo;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.SysServiceDao;
import cn.mauth.account.dao.SysServiceListDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SysServiceListServer {

    @Autowired
    private SysServiceListDao dao;

    @Autowired
    private SysServiceDao sysServiceDao;

    public PageInfo<SysServiceList> listForPage(int pageCurrent, int pageSize, SysServiceList sysServiceList) {

        Page<SysServiceList> page=this.dao.findAll(((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();

            if(StringUtils.isNotEmpty(sysServiceList.getName()))
                list.add(cb.like(root.get("name"),PageUtil.like(sysServiceList.getName())));

            if(sysServiceList.getQuery()>0 &&sysServiceList.getState()>=0)
                list.add(cb.equal(root.get("state"),sysServiceList.getState()));

            if(sysServiceList.getAccountId()!=null&&sysServiceList.getAccountId()>0)
                list.add(cb.equal(root.get("accountId"),sysServiceList.getAccountId()));

            if(!SessionUtils.isAdmin()){
                list.add(cb.equal(root.get("userInfoId"),SessionUtils.getUserInfoId()));
            }else{
                if(sysServiceList.getUserInfoId()!=null&&sysServiceList.getUserInfoId()>0)
                    list.add(cb.equal(root.get("userInfoId"),sysServiceList.getUserInfoId()));
            }


            return cb.and(list.toArray(new Predicate[list.size()]));
        }),PageUtil.getPageable(pageCurrent,pageSize));

        return PageUtil.of(page);
    }

    public int save(SysServiceList sysServiceList){
        sysServiceList.setGmtCreate(new Date());
        sysServiceList.setGmtModified(new Date());

        if(sysServiceList.getServiceId()>0){
            SysService sysService=sysServiceDao.findById(sysServiceList.getServiceId()).get();

            sysServiceList.setSysService(sysService);
        }

        sysServiceList.setUserInfoId(SessionUtils.getUserInfoId());
        this.dao.save(sysServiceList);
        return 1;
    }

    public int deleteById(long id){
        this.dao.deleteById(id);
        return 1;
    }

    public SysServiceList getById(long id){
        return this.dao.findById(id).get();
    }

    public List<SysService> findAllOfSysServicel(){
        return this.sysServiceDao.findAll();
    }
}
