package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.bean.VoucherBody;
import cn.mauth.account.common.bean.VoucherResult;
import cn.mauth.account.common.domain.settings.Voucher;
import cn.mauth.account.dao.VoucherDao;
import cn.mauth.account.dao.VoucherLineDao;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/voucher")
public class VoucherController {

    @Autowired
    private VoucherDao voucherDao;
    @Autowired
    private VoucherLineDao voucherLineDao;

    @PostMapping("/voucher")
    @ApiOperation(value = "提交凭证")
    public List<Voucher> save(Parameters params, VoucherBody body){
        String token=params.getAccessToken();
        int asId=params.getAsId();
        if(StringUtils.isEmpty(token)||asId>0)
            return null;

        return null;
    }

    @DeleteMapping("/voucher")
    public String delete(Parameters params, VoucherBody body){
        String token=params.getAccessToken();
        int asId=params.getAsId();
        if(StringUtils.isEmpty(token))
            return null;


        String period=body.getPeriod();
        String vg=body.getVgName();
        String vNum=body.getvNum();

        return null;
    }


    @PutMapping("/voucher")
    public List<VoucherResult> update(Parameters params, VoucherBody body){
        String token=params.getAccessToken();
        int asId=params.getAsId();
        if(StringUtils.isEmpty(token))
            return null;

        return null;
    }

    @GetMapping("/voucher")
    @ApiOperation(value = "查询凭证")
    public List<Voucher> get(Parameters params){

        String token=params.getAccessToken();
        int asId=params.getAsId();
        String start=params.getStart();
        String end=params.getEnd();
        int startNum=params.getvNumStart();
        int endNum=params.getvNumEnd();
        int vid=params.getVid();
        if(vid>0){
            return null;//返回凭证数量
        }

        return null;
    }

    @DeleteMapping("/voucherExtra")
    @ApiOperation(value = "删除凭证",notes = "删除凭证")
    public String voucherExtra(Parameters param,VoucherBody body){
        String token=param.getAccessToken();
        int asId=param.getAsId();

        int vId=body.getVid();
        String period=body.getPeriod();

        return null;
    }

}
