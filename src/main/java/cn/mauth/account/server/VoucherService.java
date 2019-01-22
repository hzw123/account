package cn.mauth.account.server;

import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.bean.VoucherBody;
import cn.mauth.account.common.domain.settings.Voucher;
import cn.mauth.account.common.util.DateUtil;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.dao.VoucherDao;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Service
public class VoucherService {


    private static final Logger logger= LoggerFactory.getLogger(VoucherService.class);
    @Autowired
    private VoucherDao voucherDao;

    @Transactional
    public boolean saveVoucher(VoucherBody body){
        try {
            this.voucherDao.save(null);
        }catch (Exception e){
            logger.debug(e.getMessage());
            return false;
        }
        return true;
    }

    @Transactional
    public boolean updateVoucher(){
        try {
            this.voucherDao.save(null);
        }catch (Exception e){
            logger.debug(e.getMessage());
            return false;
        }
        return true;
    }

    @Transactional
    public boolean deleteVoucher(VoucherBody body){

        try {
            List<Voucher> list=this.voucherDao.findAll((root, query, cb) -> {
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

            this.voucherDao.deleteAll(list);
        }catch (Exception e){
            logger.debug(e.getMessage());
            return false;
        }

       return true;

    }

    public Page<Voucher> page(Parameters params,Pageable pageable){
        return this.voucherDao.findAll(((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();




            return cb.and(list.toArray(new Predicate[list.size()]));
        }),PageUtil.getPageable(pageable));
    }
}
