package cn.mauth.account.server;

import cn.mauth.account.common.domain.sys.SysAppInfo;
import cn.mauth.account.common.domain.sys.SysServiceList;
import cn.mauth.account.common.util.PageInfo;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.SysAppInfoDao;
import cn.mauth.account.dao.SysServiceListDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class SysAppInfoServer {

    @Autowired
    private SysAppInfoDao dao;

    @Autowired
    private SysServiceListDao sysServiceListDao;

    public PageInfo<SysAppInfo> listForPage(int pageCurrent, int pageSize, SysAppInfo sysAppInfo) {

        Page<SysAppInfo> page=this.dao.findAll(((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();

            return cb.and(list.toArray(new Predicate[list.size()]));
        }), PageUtil.getPageable(pageCurrent,pageSize));

        return PageUtil.of(page);
    }

    public int save(SysAppInfo sysAppInfo){
        sysAppInfo.setClientSecret(UUID.randomUUID().toString().replace("-",""));
        sysAppInfo.setUserInfoId(SessionUtils.getUserInfoId());
        this.dao.save(sysAppInfo);
        return 1;
    }

    public int deleteById(long id){
        this.dao.deleteById(id);
        return 1;
    }

    public SysAppInfo getById(long id){
        return this.dao.findById(id).get();
    }

    public Page<SysServiceList> find(SysServiceList sysServiceList, Pageable pageable){
        return this.sysServiceListDao.findAll((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();

            if(sysServiceList.getAppId()>0)
                list.add(cb.equal(root.get("appId"),sysServiceList.getAppId()));

            if(!SessionUtils.isAdmin()) {
                list.add(cb.equal(root.get("userInfoId"), SessionUtils.getUserInfoId()));

            }else{
                if(sysServiceList.getUserInfoId()>0)
                    list.add(cb.equal(root.get("userInfoId"), sysServiceList.getUserInfoId()));
            }

            if(sysServiceList.getAccountId()>0)
                list.add(cb.equal(root.get("accountId"),sysServiceList.getAccountId()));

            if(sysServiceList.getSysService()!=null && StringUtils.isNotEmpty(sysServiceList.getSysService().getServerNo()))
                list.add(cb.like(root.join("sysService").get("serverNo"),sysServiceList.getSysService().getServerNo()));

            return cb.and(list.toArray(new Predicate[list.size()]));
        },PageUtil.getPageable(pageable));
    }
}
