package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.SysMenuRole;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SysMenuRoleDao extends BaseDao<SysMenuRole,Long>{

    List<SysMenuRole> findByRoleId(long roleId);

    void deleteByRoleId(long roleId);
}
