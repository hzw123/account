package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.settings.AccountSubject;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface AccountSubjectDao extends BaseDao<AccountSubject,Long>{

    @Query(value = "delete from account_subject where as_id=:asId and asub_id=:sub_id",nativeQuery = true)
    @Modifying
    @Transactional
    int deleteByAsIdAndAsubId(@Param("asId") int asId,@Param("subId")  int subId);

    @Query(value = "delete from account_subject where as_id=:asId ",nativeQuery = true)
    @Modifying
    @Transactional
    int deleteByAsId(@Param("asId") int asId);

    @Query(value = "delete from account_subject where asub_id=:sub_id",nativeQuery = true)
    @Modifying
    @Transactional
    int deleteByAsubId(@Param("subId")  int subId);
}
