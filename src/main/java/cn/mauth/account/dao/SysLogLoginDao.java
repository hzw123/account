package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.sys.SysLogLogin;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SysLogLoginDao extends BaseDao<SysLogLogin,Long>{

    @Query(value = "select *from sys_log_login where user_info_id=:userInfoId ORDER BY gmt_create desc LIMIT 1",nativeQuery = true)
    SysLogLogin getLastSysLogLogin(@Param("userInfoId") long userInfoId);
}
