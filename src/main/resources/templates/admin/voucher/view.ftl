<div class="bjui-pageContent" xmlns="http://www.w3.org/1999/html">

    <div class="form-group">
        <label class="control-label">凭证字：</label>${bean.name!}
    </div>

    <div class="form-group">
        <label class="control-label">凭证号：</label>${bean.num}
    </div>

    <div class="form-group">
		<label class="control-label">凭证日期：</label>${(bean.vchDate?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>

    <div class="form-group">
		<label class="control-label">账套ID：</label>${bean.accountId}
	</div>

    <div class="form-group">
		<label class="control-label">制单人：</label>${bean.preparedBy!}
	</div>

    <div class="form-group">
		<label class="control-label">附件数量：</label>${bean.attachments}
	</div>

    <div class="form-group">
		<label class="control-label">审核人：</label>${bean.approvedBy!}
	</div>

    <div class="form-group">
		<label class="control-label">审核信息：</label
		<#if bean.approveStatus==0>
				未审核
		<#else>
				被审核
		</#if>
	</div>

    <div class="form-group">
		<label class="control-label">备注信息：</label>${bean.note!}
	</div>

</div>
<div class="bjui-pageFooter">
    <ul>
        <li><button type="button" class="btn-close">取消</button></li>
    </ul>
</div>