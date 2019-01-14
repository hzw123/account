package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.sys.SysRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SysRoleDao extends BaseDao<SysRole,Long>{

    @Query(value = "select role_name  from sys_role where id=:id",nativeQuery = true)
    String findRoleNameById(@Param("id") long id);


    @Query(value = "select  r.* from " +
            "sys_role r," +
            "sys_role_user ru " +
            "where " +
            "r.id=ru.role_id " +
            "and ru.user_info_id=:uid " +
            "GROUP BY r.id",nativeQuery = true)
    List<SysRole> findByUid(@Param("uid") long uid);

    @Query(value = "select count(1) from sys_role " +
            "where id in(" +
            "select role_id from sys_role_user " +
            "where user_info_id=:uid) " +
            "and role_name=:roleName",nativeQuery = true)
    int loadByUid(@Param("uid")long uid,@Param("roleName") String roleName);
}
