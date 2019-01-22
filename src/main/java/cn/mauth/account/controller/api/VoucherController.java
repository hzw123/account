package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.bean.VoucherBody;
import cn.mauth.account.common.domain.settings.Voucher;
import cn.mauth.account.server.VoucherService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/voucher")
public class VoucherController {

    @Autowired
    private VoucherService service;

    @PostMapping("/voucher")
    @ApiOperation(value = "提交凭证")
    public List<Voucher> save(Long accountId, VoucherBody body){

        this.service.saveVoucher(body);

        return null;
    }

    @DeleteMapping("/voucher")
    public Object delete(Long accountId, VoucherBody body){
        this.service.deleteVoucher(body);

        return null;
    }


    @PutMapping("/voucher")
    public Object update(Long accountId,VoucherBody body){

        return this.service.updateVoucher();
    }

    @GetMapping("/voucher")
    @ApiOperation(value = "查询凭证")
    public Page<Voucher> page(Parameters params,Pageable pageable){

        Long accountId=params.getAccountId();
        String start=params.getStart();
        String end=params.getEnd();
        int startNum=params.getStartVNum();
        int endNum=params.getEndVNum();
        Long vid=params.getVid();

        if(vid>0){
            return null;//返回凭证数量
        }

        return this.service.page(params,pageable);
    }

    @DeleteMapping("/voucherExtra")
    @ApiOperation(value = "删除凭证",notes = "删除凭证")
    public String voucherExtra(Long accountId,VoucherBody body){

        this.service.deleteVoucher(body);

        return null;
    }

}
