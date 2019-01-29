package cn.mauth.account.server;


import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.settings.Currency;
import cn.mauth.account.dao.CurrencyDao;
import org.apache.commons.lang.StringUtils;
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

        if(StringUtils.isNotEmpty(currency.getCode()))
            list.add(cb.like(root.get("code"),this.like(currency.getCode())));

        if(StringUtils.isNotEmpty(currency.getName()))
            list.add(cb.like(root.get("name"),this.like(currency.getName())));

        return this.and(list,cb);
    }

    @Override
    public int update(Currency currency) {

        Currency old=this.dao.getOne(currency.getId());
        currency.setGmtCreate(old.getGmtCreate());

        return super.update(currency);
    }

    public String validation(Currency currency){
        if(StringUtils.isEmpty(currency.getName()))
            return "货币名称不能为空";
        if(StringUtils.isEmpty(currency.getCode()))
            return "货币编码不能不能为空";
        if(this.dao.countByCode(currency.getCode())>0)
            return "货币编码:"+currency.getCode()+"以及使用";
       if(this.dao.countByCode(currency.getName())>0)
            return "货币名称:"+currency.getName()+"以及使用";

        return null;
    }
}
