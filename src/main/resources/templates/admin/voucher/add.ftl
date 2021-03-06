<#assign base=request.contextPath />
<div class="bjui-pageContent">
    <form action="${base}/admin/voucher/save" data-toggle="validate" method="post">

        <div class="form-group">
            <label class="control-label x85">凭证字：</label>
            <input type="text" name="name" value="记" placeholder="凭证字" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">凭证号：</label>
            <input type="number" name="num" value="0" placeholder="凭证号" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">账套ID：</label>
            <input type="number" name="accountId" value="" placeholder="账套ID" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">制单人：</label>
            <input type="text" name="preparedBy" value="" placeholder="制单人" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">附件数量：</label>
            <input type="number" name="attachments" value="0" placeholder="附件数量" size="20"  >
        </div>

        <div class="form-group">
            <label class="control-label x85">审核人：</label>
            <input type="text" name="approvedBy" value="" placeholder="审核人" size="20" >
        </div>

        <div class="form-group">
            <label class="control-label x85">审核信息：</label>
            <select name="approveStatus" data-toggle="selectpicker" size="20">
                <option value="0">未审核</option>
                <option value="1">被审核</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">备注信息：</label>
            <input type="text" name="note" value="" placeholder="备注信息" size="20" >
        </div>

        <h4>-----详情1-------</h4>
        <div class="form-group">
            <label class="control-label x85">摘要：</label>
            <input type="text" name="entries[0].exp" value="" placeholder="摘要" size="20" data-rule="required">
        </div>
        <div class="form-group">
            <label class="control-label x85">科目编码：</label>
            <select name="entries[0].subCode" data-toggle="selectpicker">
                <#if list?? && list?size gt 0>
                    <#list list as code>
                        <option value="${code!}">${code!}</option>
                    </#list>
                </#if>
                <option></option>
            </select>
        </div>
        <div class="form-group">
            <label class="control-label x85">本位币金额：</label>
            <input type="number" name="entries[0].amount" value="" placeholder="本位币金额" size="20" >
        </div>
        <div class="form-group">
            <label class="control-label x85">方向：</label>
            <select name="entries[0].dc" data-toggle="selectpicker">
                <option value="DEBIT">借</option>
                <option value="CREDIT">贷</option>
            </select>
        </div>
        <div class="form-group">
            <label class="control-label x85">货币编码：</label>
            <input type="text" name="entries[0].cur" value="" placeholder="货币编码" size="20" >
        </div>
        <div class="form-group">
            <label class="control-label x85">货币兑换率：</label>
            <input type="text" name="entries[0].rate" value="" placeholder="货币兑换率" size="20" >
        </div>

        <h4>-----详情2-------</h4>
        <div class="form-group">
            <label class="control-label x85">摘要：</label>
            <input type="text" name="entries[1].exp" value="" placeholder="摘要" size="20" data-rule="required">
        </div>
        <div class="form-group">
            <label class="control-label x85">科目编码：</label>
            <select name="entries[1].subCode" data-toggle="selectpicker">
                <#if list?? && list?size gt 0>
                    <#list list as code>
                        <option value="${code!}">${code!}</option>
                    </#list>
                </#if>
                <option></option>
            </select>
        </div>
        <div class="form-group">
            <label class="control-label x85">本位币金额：</label>
            <input type="number" name="entries[1].amount" value="" placeholder="本位币金额" size="20" >
        </div>
        <div class="form-group">
            <label class="control-label x85">方向：</label>
            <select name="entries[1].dc" data-toggle="selectpicker">
                <option value="DEBIT">借</option>
                <option value="CREDIT">贷</option>
            </select>
        </div>
        <div class="form-group">
            <label class="control-label x85">货币编码：</label>
            <input type="text" name="entries[1].cur" value="" placeholder="货币编码" size="20" >
        </div>
        <div class="form-group">
            <label class="control-label x85">货币兑换率：</label>
            <input type="text" name="entries[1].rate" value="" placeholder="货币兑换率" size="20" >
        </div>
    </form>
</div>
<div class="bjui-pageFooter">
    <ul>
        <li>
            <button type="button" class="btn-close">取消</button>
        </li>
        <li>
            <button type="submit" class="btn-default">添加</button>
        </li>
    </ul>
</div>