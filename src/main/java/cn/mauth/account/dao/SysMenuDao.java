package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.sys.SysMenu;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SysMenuDao extends BaseDao<SysMenu,Long>{

    List<SysMenu> findByParentId(Long parentId);

    int countByParentId(long parentid);

    @Query(value = "select *from sys_menu " +
            "where id in(" +
            "select menu_id from sys_menu_role " +
            "where role_id in (" +
            "select role_id from sys_role_user " +
            "where user_info_id=:uid) " +
            "ORDER BY id asc)",nativeQuery = true)
    List<SysMenu> loadMenus(@Param("uid") long uid);

    @Query(value = "select *from sys_menu " +
            "where id in(" +
            "select menu_id from sys_menu_role " +
            "where role_id=:roleId)",nativeQuery = true)
    List<SysMenu> loadByRoleId(@Param("roleId") long roleId);

    @Query(value = "select parent_id from sys_menu where id=:id",nativeQuery = true)
    Long findParentIdById(@Param("id")long id);

}
