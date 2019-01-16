package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.settings.Currency;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CurrencyDao extends BaseDao<Currency,Long>{

}
