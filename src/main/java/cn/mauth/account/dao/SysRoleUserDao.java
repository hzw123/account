package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.sys.SysRoleUser;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SysRoleUserDao extends BaseDao<SysRoleUser,Long>{

    List<SysRoleUser> findByUserInfoId(long userInfoId);

    void deleteByUserInfoId(long userInfoId);
}
