package cn.mauth.account.server;

import cn.mauth.account.common.domain.settings.AccountSet;
import cn.mauth.account.common.util.PageInfo;
import cn.mauth.account.common.util.PageUtil;
import cn.mauth.account.dao.AccountSetDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Service
public class AccountSetServer {

    @Autowired
    private AccountSetDao dao;

    public PageInfo<AccountSet> listForPage(int pageCurrent, int pageSize, AccountSet accountSet) {

        Page<AccountSet> page=this.dao.findAll(((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();

            return cb.and(list.toArray(new Predicate[list.size()]));
        }), PageUtil.getPageable(pageCurrent,pageSize));

        return PageUtil.of(page);
    }

    public int save(AccountSet accountSet){
        this.dao.save(accountSet);
        return 1;
    }

    public int deleteById(long id){
        this.dao.deleteById(id);
        return 1;
    }

    public AccountSet getById(long id){
        return this.dao.findById(id).get();
    }
}
