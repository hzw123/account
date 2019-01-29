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

        if(subject.getAccountId()>0)
            list.add(cb.equal(root.get("accountId"),subject.getAccountId()));

        return this.and(list,cb);
    }

    @Override
    public int save(Subject subject) {
        if(StringUtils.isEmpty(subject.getCurrency())){
            subject.setCurrency("CNY");
        }
        return super.save(subject);
    }

    @Override
    public int update(Subject subject) {

        Subject old=this.dao.getOne(subject.getId());

        subject.setGmtCreate(old.getGmtCreate());

        return super.update(subject);
    }

    @Override
    public String validation(Subject subject) {
        if(StringUtils.isEmpty(subject.getName()))
            return "科目名称不能为空";
        if(StringUtils.isEmpty(subject.getCode()))
            return "科目编码不能为空";
        if(this.dao.countByCode(subject.getCode())>0)
            return "科目编码:"+subject.getCode()+"已经使用";
        if(this.dao.countByName(subject.getName())>0)
            return "科目名称:"+subject.getName()+"已经使用";
        if(subject.getSubType()==null)
            return "科目类别不能为空";
        if(subject.getDc()==null)
            return "余额方向不能为空";
        return super.validation(subject);
    }


    public int deleteByIdAndAccountId(long accountId,long id){
        this.dao.deleteByIdAndAccountId(accountId,id);
        return 1;
    }


    public int deleteByAccountId(long accountId){
        this.dao.deleteByAccountId(accountId);
        return 1;
    }

}
