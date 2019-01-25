package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.settings.Subject;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface SubjectDao extends BaseDao<Subject,Long>{

    @Query(value = "delete from subject where account_id=:accountId and id=:id",nativeQuery = true)
    @Modifying
    @Transactional
    int deleteByIdAndAccountId(@Param("accountId") long accountId,@Param("id")  long id);

    @Query(value = "delete from subject where account_id=:accountId ",nativeQuery = true)
    @Modifying
    @Transactional
    int deleteByAccountId(@Param("accountId") long accountId);

}
