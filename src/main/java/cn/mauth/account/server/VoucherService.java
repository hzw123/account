package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.bean.VoucherBody;
import cn.mauth.account.common.domain.settings.Voucher;
import cn.mauth.account.common.util.DateUtil;
import cn.mauth.account.dao.VoucherDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Service
public class VoucherService extends BaseServer<VoucherDao,Parameters>{


    public VoucherService(VoucherDao dao) {
        super(dao);
    }

    @Override
    protected Predicate toPredicate(List<Predicate> list, Parameters param, Root root, CriteriaQuery query, CriteriaBuilder cb) {
        String start=param.getStart();
        String end=param.getEnd();
        int startNum=param.getStartVNum();
        int endNum=param.getEndVNum();

        if(this.isLong(param.getAccountId()))
            list.add(cb.equal(root.get("accountId"),param.getAccountId()));

        if(this.isLong(param.getVid()))
            list.add(cb.equal(root.get("id"),param.getVid()));

        if(startNum>0)
            list.add(cb.gt(root.get("num"),startNum));

        if(endNum>startNum && endNum>0)
            list.add(cb.ge(root.get("num"),endNum));


        return this.and(list,cb);
    }

    @Transactional
    public boolean saveVoucher(VoucherBody body){
        try {
            this.dao.save(null);
        }catch (Exception e){
            logger.debug(e.getMessage());
            return false;
        }
        return true;
    }


    @Transactional
    public boolean updateVoucher(){
        try {
            this.dao.save(null);
        }catch (Exception e){
            logger.debug(e.getMessage());
            return false;
        }
        return true;
    }

    @Transactional
    public boolean deleteVoucher(VoucherBody body){

        try {
            List<Voucher> list=this.dao.findAll((root, query, cb) -> {
                List<Predicate> param=new ArrayList<>();
                if(StringUtils.isNotEmpty(body.getPeriod()))
                    param.add(cb.equal(root.get("vchDate"), DateUtil.parseYM(body.getPeriod())));


                if(StringUtils.isNotEmpty(body.getVchGroup()))
                    param.add(cb.equal(root.get("name"), body.getPeriod()));

                if(body.getVchNum()>0)
                    param.add(cb.equal(root.get("num"),body.getVchNum()));

                if(body.isIds())
                    param.add(cb.in(root.get("id")).value(body.getIdSet()));

                return cb.and(param.toArray(new Predicate[param.size()]));
            });

            this.dao.deleteAll(list);
        }catch (Exception e){
            logger.debug(e.getMessage());
            return false;
        }

       return true;

    }

}
