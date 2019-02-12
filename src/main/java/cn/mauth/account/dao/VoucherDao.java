package cn.mauth.account.dao;

import cn.mauth.account.common.base.BaseDao;
import cn.mauth.account.common.domain.settings.Voucher;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VoucherDao extends BaseDao<Voucher,Long>{


    @Query(value = "select " +
            "sub_code as subCode," +
            "sub_name as subName," +
            "sum(if(dc=1,amount,0)) as debit," +
            "sum(if(dc=0,amount,0)) as credit " +
            "from voucher_line " +
            "where id in (" +
            "select entries_id from voucher_entries where voucher_id in (" +
            "select id from voucher where account_id=:accountId)) " +
            "GROUP by sub_code " +
            "order by id asc",
            nativeQuery = true)
    List<Object[]> statisticalData(@Param("accountId") Long accountId);

    @Query(value = "select " +
            "sub_code as subCode," +
            "sub_name as subName," +
            "sum(if(dc=1,amount,0)) as debit," +
            "sum(if(dc=0,amount,0)) as credit " +
            "from voucher_line " +
            "GROUP by sub_code " +
            "order by id asc",
            nativeQuery = true)
    List<Object[]> statisticalData();

//    @Query(value = "select " +
//            "sub_code as subCode," +
//            "sub_name as subName," +
//            "sum(if(dc=1,amount,0)) as debit," +
//            "sum(if(dc=0,amount,0)) as credit " +
//            "from voucher_line " +
//            "where id in (" +
//            "select entries_id from voucher_entries where voucher_id in (" +
//            "select id from voucher where account_id=:accountId " +
//            "and )) " +
//            "GROUP by sub_code " +
//            "order by id asc",
//            nativeQuery = true)
//    List<Object[]> statisticalDataByTime(@Param("accountId") Long accountId,String start,String end);
}
