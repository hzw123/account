package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.settings.AssistAccounting;
import org.springframework.stereotype.Repository;

@Repository
public interface AssistAccountingDao extends BaseDao<AssistAccounting,Long>{

    AssistAccounting findByNameAndAccountId(String name,Long accountId);

    void deleteByNameAndAccountId(String name,Long accountId);
}
