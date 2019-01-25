package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.settings.AccountSet;
import cn.mauth.account.common.util.DateUtil;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.AccountSetDao;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Service
public class AccountSetServer extends BaseServer<AccountSetDao,AccountSet>{


    public AccountSetServer(AccountSetDao dao) {
        super(dao);
    }


    @Override
    protected Predicate toPredicate(List<Predicate> list, AccountSet accountSet, Root root, CriteriaQuery query, CriteriaBuilder cb) {
        return this.and(list,cb);
    }

    @Override
    public int save(AccountSet accountSet) {

        accountSet.setCreateBy(SessionUtils.getUserInfoId().intValue());
        accountSet.setStartDateMonth(DateUtil.getNowMonth());
        accountSet.setStartDateYear(DateUtil.getNowYear());
        return super.save(accountSet);
    }
}
