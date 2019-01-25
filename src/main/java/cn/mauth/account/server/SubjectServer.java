package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.settings.Subject;
import cn.mauth.account.dao.SubjectDao;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;


@Service
public class SubjectServer extends BaseServer<SubjectDao,Subject>{

    public SubjectServer(SubjectDao dao) {
        super(dao);
    }

    @Override
    protected Predicate toPredicate(List<Predicate> list, Subject subject, Root root, CriteriaQuery query, CriteriaBuilder cb) {

        return this.and(list,cb);
    }
}
