package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.sys.SysMenuRole;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface SysMenuRoleDao extends BaseDao<SysMenuRole,Long>{

    List<SysMenuRole> findByRoleId(long roleId);

    @Query(value = "delete from sys_menu_role where role_id=:roleId",nativeQuery = true)
    @Modifying
    @Transactional
    void deleteByRoleId(@Param("roleId") long roleId);
}
