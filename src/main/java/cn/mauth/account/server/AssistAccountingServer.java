package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.settings.AssistAccounting;
import cn.mauth.account.dao.AssistAccountingDao;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Service
public class AssistAccountingServer extends BaseServer<AssistAccountingDao,AssistAccounting>{

    public AssistAccountingServer(AssistAccountingDao dao) {
        super(dao);
    }

    @Override
    protected Predicate toPredicate(List<Predicate> list, AssistAccounting assistAccounting, Root root, CriteriaQuery query, CriteriaBuilder cb) {


        return this.and(list,cb);
    }
}
