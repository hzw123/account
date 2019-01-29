package cn.mauth.account.controller.api;

import cn.mauth.account.common.base.BaseApi;
import cn.mauth.account.common.bean.Entries;
import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.bean.VoucherBody;
import cn.mauth.account.common.bean.VoucherParam;
import cn.mauth.account.common.domain.settings.Voucher;
import cn.mauth.account.common.domain.settings.VoucherLine;
import cn.mauth.account.common.util.DateUtil;
import cn.mauth.account.common.util.Result;
import cn.mauth.account.dao.SubjectDao;
import cn.mauth.account.enums.BalanceEnum;
import cn.mauth.account.server.AccountSetServer;
import cn.mauth.account.server.VoucherServer;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/accounting/voucher")
public class VoucherController extends BaseApi {

    @Autowired
    private VoucherServer server;

    @Autowired
    private AccountSetServer accountSetServer;

    @Autowired
    private SubjectDao subjectDao;

    @GetMapping("/page")
    @ApiOperation(value = "分页查询凭证")
    public Result page(Parameters param,Pageable pageable){

        if(!this.accountSetServer.verifyAccountId(param.getAccountId()))
            return Result.error("账套ID错误");

        Page<Voucher> page=server.findAll(server.specification(param),pageable);

        return Result.success(page);
    }

    @GetMapping
    @ApiOperation(value = "查询凭证")
    public Result load(Parameters param){

        if(!this.accountSetServer.verifyAccountId(param.getAccountId()))
            return Result.error("账套ID错误");

        List<Voucher> list=server.findAll(server.specification(param));

        return Result.success(list);
    }


    @PostMapping
    @ApiOperation(value = "提交凭证")
    public Result save(Long accountId, VoucherBody body){

        String message=null;
        if(!accountSetServer.verifyAccountId(accountId)){

            message="账套ID:"+accountId+"错误";

            logger.info(message);

            return Result.error(message);
        }


        if(StringUtils.isEmpty(body.getVchGroup())){
            message="凭证字不能为空";

            logger.info(message);

            return Result.error(message);
        }

        if(StringUtils.isEmpty(body.getVchDate())){
            message="凭证字日期不能为空";

            logger.info(message);

            return Result.error(message);
        }

        if(StringUtils.isEmpty(body.getPreparedBy())){
            message="制单人不能为空";

            logger.info(message);

            return Result.error(message);
        }

        if(!this.isVail(body.getEntries())){
            message="凭证参数不正确";

            logger.info(message);

            return Result.error(message);
        }

        Voucher voucher=new Voucher();

        voucher.setAccountId(accountId);

        this.copy(voucher,body);

        this.server.save(voucher);

        message="凭证保存成功";

        logger.info(message);

        return Result.success(message);
    }

    private void copy(Voucher voucher,VoucherBody body){

        voucher.setName(body.getVchGroup());

        voucher.setNum(body.getVchNum());

        voucher.setVchDate(DateUtil.parseYM(body.getVchDate()));

        voucher.setPreparedBy(body.getPreparedBy());

        voucher.setAttachments(body.getAttachments());

        voucher.setNote(body.getNote());

        List<Entries> list=body.getEntries();

        VoucherLine line=null;

        for (Entries entries:list) {
            line=new VoucherLine();
            line.setExp(entries.getExp());
            line.setCur(entries.getCur());
            line.setSubCode(entries.getSubCode());
            line.setAmount(entries.getAmount());
            line.setRate(entries.getRate());
            if(entries.getDc()==1){
                line.setDc(BalanceEnum.DEBIT);
            }else{
                line.setDc(BalanceEnum.CREDIT);
            }

        }

    }

    private boolean isVail(List<Entries> list){
        boolean flag=false;
        if(list!=null&&list.size()==2){
            Entries entries1=list.get(0);
            Entries entries2=list.get(1);
            if(this.isEntries(entries1)&&this.isEntries(entries2)){
                int add=entries1.getDc()+entries2.getDc();
                if(add==0)
                    flag=true;
            }
        }
        return flag;
    }

    private boolean isEntries(Entries entries){
        if(entries.getAmount()<=0)
            return false;
        if(StringUtils.isEmpty(entries.getCur()))
            return false;
        if(StringUtils.isEmpty(entries.getExp()))
            return false;
        if(StringUtils.isEmpty(entries.getSubCode()))
            return false;
        if(!(entries.getDc()==1||entries.getDc()==-1))
            return false;
        if(this.subjectDao.countByCode(entries.getSubCode())<=0)
            return false;
        return true;
    }

    @DeleteMapping
    @ApiOperation(value = "删除凭证")
    public Result delete(Long accountId, VoucherParam body){

        String message=null;

        if(!accountSetServer.verifyAccountId(accountId)){

            message="账套ID:"+accountId+"错误!";

            logger.error(message);

            return Result.error(message);
        }


        if(this.server.deleteVoucher(body)){

            message="凭证删除成功!";
            logger.info(message);

            return Result.success(message);
        }else{
            message="凭证删除失败!";

            logger.error(message);

            return Result.error(message);
        }

    }


    @PutMapping
    @ApiOperation(value = "更新凭证")
    public Result update(Long accountId,Voucher voucher){

        String message=null;

        if(!accountSetServer.verifyAccountId(accountId)){

            message="账套ID:"+accountId+"错误";

            logger.error(message);

            return Result.error(message);
        }

        Voucher old=this.server.getById(voucher.getId());

        if(old==null){
            message="没有找到Id:"+voucher.getId()+"的凭证";

            logger.error(message);

            return Result.error(message);
        }

        this.server.update(voucher);

        message="凭证id:"+voucher.getId()+"更新成功";

        logger.info(message);

        return Result.success(message);
    }


    @DeleteMapping("/voucherExtra")
    @ApiOperation(value = "删除凭证")
    public Result voucherExtra(Long accountId,VoucherParam body){

        String message=null;

        if(!accountSetServer.verifyAccountId(accountId)){
            message="账套ID:"+accountId+"错误";

            logger.error(message);

            return Result.error(message);
        }

        if(this.server.deleteVoucher(body)){
            message="凭证删除成功";

            logger.info(message);

            return Result.success(message);
        }else {
            message="凭证删除失败";

            logger.error(message);

            return Result.error(message);
        }


    }

}
