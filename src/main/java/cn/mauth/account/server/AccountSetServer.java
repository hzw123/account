package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.domain.settings.AccountSet;
import cn.mauth.account.common.util.SessionUtils;
import cn.mauth.account.dao.AccountSetDao;
import org.apache.commons.lang.StringUtils;
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
        if(StringUtils.isNotEmpty(accountSet.getName()))
            list.add(cb.like(root.get("name"),this.like(accountSet.getName())));
        if(isLong(accountSet.getId()))
            list.add(cb.equal(root.get("id"),accountSet.getId()));
        return this.and(list,cb);
    }

    @Override
    public int save(AccountSet accountSet) {
        if(accountSet.getCreateBy()==0)
            accountSet.setCreateBy(SessionUtils.getUserInfoId().intValue());
        return super.save(accountSet);
    }

    @Override
    public int update(AccountSet accountSet) {

        AccountSet old=this.dao.getOne(accountSet.getId());

        accountSet.setGmtCreate(old.getGmtCreate());

        accountSet.setCreateBy(old.getCreateBy());

        return super.update(accountSet);
    }

    public boolean verifyAccountId(Long id){
        boolean flag=false;

        if(id!=null && id>0){

            if(this.dao.countById(id)>0)
                flag=true;

        }

        return flag;
    }


}
