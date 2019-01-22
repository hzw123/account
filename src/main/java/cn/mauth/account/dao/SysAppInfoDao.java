package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.sys.SysAppInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SysAppInfoDao extends BaseDao<SysAppInfo,Long>{

    List<SysAppInfo> findByUserInfoId(Long uid);

    SysAppInfo findByAccountId(Long accountId);
}
