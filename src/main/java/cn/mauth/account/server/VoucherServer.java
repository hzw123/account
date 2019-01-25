package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.settings.Voucher;
import cn.mauth.account.dao.VoucherDao;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.Date;
import java.util.List;

@Service
public class VoucherServer extends BaseServer<VoucherDao,Voucher>{

    public VoucherServer(VoucherDao dao) {
        super(dao);
    }

    @Override
    protected Predicate toPredicate(List<Predicate> list, Voucher voucher, Root root, CriteriaQuery query, CriteriaBuilder cb) {
        return this.and(list,cb);
    }

    @Override
    public int save(Voucher voucher) {
        voucher.setVchDate(new Date());
        return super.save(voucher);
    }
}
