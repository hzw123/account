package cn.mauth.account.controller.admin;

import cn.mauth.account.server.VoucherServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/admin/statistics")
public class AccountStatisticsView {

    @Autowired
    private VoucherServer voucherServer;

    @RequestMapping("/ledger")
    public void ledger(ModelMap modelMap,Long accountId,String start,String end){
        modelMap.put("list",voucherServer.statisticalData(accountId,start,end));
    }
}
