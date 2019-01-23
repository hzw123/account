package cn.mauth.account.server;

import cn.mauth.account.common.domain.sys.SysService;
import cn.mauth.account.common.util.PageInfo;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.dao.SysServiceDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Service
public class SysServiceServer {

    @Autowired
    private SysServiceDao dao;

    public PageInfo<SysService> listForPage(int pageCurrent, int pageSize, SysService sysService) {

        Page<SysService> page=this.dao.findAll(((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();
            if(StringUtils.isNotEmpty(sysService.getServerNo()))
                list.add(cb.like(root.get("serverNo"),PageUtil.like(sysService.getServerNo())));

            if(StringUtils.isNotEmpty(sysService.getName()))
                list.add(cb.like(root.get("name"),PageUtil.like(sysService.getName())));

            if(sysService.getQuery()>0 && sysService.getState()>=0)
                list.add(cb.equal(root.get("state"),sysService.getState()));

            if(StringUtils.isNotEmpty(sysService.getType()))
                list.add(cb.like(root.get("type"),PageUtil.like(sysService.getType())));

            return cb.and(list.toArray(new Predicate[list.size()]));
        }),PageUtil.getPageable(pageCurrent,pageSize));

        return PageUtil.of(page);
    }

    public int save(SysService sysService){
        this.dao.save(sysService);
        return 1;
    }

    public int deleteById(long id){
        this.dao.deleteById(id);
        return 1;
    }

    public SysService getById(long id){
        return this.dao.findById(id).get();
    }
}
