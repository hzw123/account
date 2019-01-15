package cn.mauth.account.controller.api;

import cn.mauth.account.common.bean.QuarterlyProfit;
import cn.mauth.account.common.bean.SheetBody;
import cn.mauth.account.common.bean.TaxReport;
import cn.mauth.account.common.domain.settings.CashFlowSheet;
import cn.mauth.account.dao.CashFlowSheetDao;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/statements")
public class CashFlowSheetController {

    @Autowired
    private CashFlowSheetDao dao;

    @PostMapping("/incomeSheet")
    @ApiOperation(value = "获取利润表")
    public List<CashFlowSheet> incomeSheet(String accessToken, SheetBody body){
        return null;
    }

    @PostMapping("/cashFlowSheet")
    @ApiOperation(value = "获取现金流量表")
    public List<CashFlowSheet> cashFlowSheet(String accessToken,SheetBody body){
        return null;
    }

    @PostMapping("/taxReportSheet")
    @ApiOperation(value = "获取纳税统计表")
    public List<CashFlowSheet> taxReportSheet(String accessToken,SheetBody body){
        return null;
    }

    @PostMapping("/balanceSheet")
    @ApiOperation(value = "获取资产负债表")
    public List<CashFlowSheet> balanceSheet(String accessToken,SheetBody body){
        return null;
    }

    @PostMapping("/incomeQuarter")
    @ApiOperation(value = "获取利润表季报")
    public List<QuarterlyProfit> incomeQuarter(String accessToken, SheetBody body){

        return null;
    }

    @PostMapping("/financialSummarySheet")
    @ApiOperation(value = "获取财务概要信息报表")
    public List<TaxReport> financialSummarySheet(String accessToken, SheetBody body){

        return null;
    }
}
