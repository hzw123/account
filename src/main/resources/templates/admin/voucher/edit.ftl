<#assign base=request.contextPath /> 
<div class="bjui-pageContent">
    <form action="${base}/admin/voucher/update" data-toggle="validate" method="post">
        <input type="hidden" name="id" value="${bean.id}"/>

        <div class="form-group">
            <label class="control-label x85">凭证字：</label>
            <input type="text" name="name" value="${bean.name!}" placeholder="凭证字" size="20" data-rule="required"  >
        </div>

        <div class="form-group">
            <label class="control-label x85">凭证号：</label>
            <input type="text" name="num" value="${bean.num}" placeholder="凭证号" size="20" data-rule="required"  >
        </div>

        <div class="form-group">
            <label class="control-label x85">凭证日期：</label>
            <input type="text" name="vchDate" value="${(bean.vchDate?string('yyyy-MM-dd HH:mm:ss'))!}" placeholder="凭证日期" size="20" data-rule="required" readonly >
        </div>

        <div class="form-group">
            <label class="control-label x85">制单人：</label>
            <input type="text" name="preparedBy" value="${bean.preparedBy!}" placeholder="制单人" size="20" data-rule="required"  >
        </div>

        <div class="form-group">
            <label class="control-label x85">附件数量：</label>
            <input type="number" name="attachments" value="${bean,attachments}" placeholder="附件数量" size="20" data-rule="required"  >
        </div>

        <div class="form-group">
            <label class="control-label x85">制单人：</label>
            <input type="text" name="approvedBy" value="" placeholder="制单人" size="20" data-rule="required" >
        </div>

        <div class="form-group">
            <label class="control-label x85">制单人：</label>
            <select name="approveStatus" data-toggle="selectpicker" size="20">
                <option value="1" <#if bean.approveStatus==1 >selected</#if> >被审核</option>
                <option value="0" <#if bean.approveStatus==0 >selected</#if> >未审核</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">备注信息：</label>
            <input type="text" name="note" value="${bean.mote!}" placeholder="备注信息" size="20" data-rule="required">
        </div>

    </form>
</div>
<div class="bjui-pageFooter">
    <ul>
        <li>
            <button type="button" class="btn-close">取消</button>
        </li>
        <li>
            <button type="submit" class="btn-default">修改</button>
        </li>
    </ul>
</div>