package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.sys.SysUserInfo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SysUserInfoDao extends BaseDao<SysUserInfo,Long> {

    @Query(value = "select login_name from sys_user_info where id=:id",nativeQuery = true)
    String findLoginNameById(@Param("id") long id);

    SysUserInfo findByLoginName(String loginName);

    @Query(value = "select id from sys_user_info where login_name=:userName",nativeQuery = true)
    Long findIdByUserName(@Param("userName") String userName);

}
