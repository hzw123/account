package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.settings.Subject;
import cn.mauth.account.dao.SubjectDao;
import org.apache.commons.lang.StringUtils;
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

        if(StringUtils.isNotEmpty(subject.getCode()))
            list.add(cb.like(root.get("code"),this.like(subject.getCode())));

        if(StringUtils.isNotEmpty(subject.getName()))
            list.add(cb.like(root.get("name"),this.like(subject.getName())));

        if(subject.getDc()!=null)
            list.add(cb.equal(root.get("dc"),subject.getDc()));

        if(subject.getSubType()!=null)
            list.add(cb.equal(root.get("subType"),subject.getSubType()));

        return this.and(list,cb);
    }

    @Override
    public int save(Subject subject) {
        if(StringUtils.isEmpty(subject.getCurrency())){
            subject.setCurrency("CNY");
        }
        return super.save(subject);
    }
}
