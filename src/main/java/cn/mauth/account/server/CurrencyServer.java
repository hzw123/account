package cn.mauth.account.server;


import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.settings.Currency;
import cn.mauth.account.dao.CurrencyDao;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Service
public class CurrencyServer extends BaseServer<CurrencyDao,Currency>{

    public CurrencyServer(CurrencyDao dao) {
        super(dao);
    }

    @Override
    protected Predicate toPredicate(List<Predicate> list, Currency currency, Root root, CriteriaQuery query, CriteriaBuilder cb) {

        return this.and(list,cb);
    }
}
