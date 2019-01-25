<div class="bjui-pageContent" xmlns="http://www.w3.org/1999/html">
    <div class="form-group">
		<label class="control-label">创建时间：</label>${(bean.gmtCreate?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>
 	<div class="form-group">
		<label class="control-label">修改时间：</label>${(bean.gmtModified?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>

    <div class="form-group">
        <label class="control-label">科目编码：</label>${bean.code!}
    </div>

    <div class="form-group">
        <label class="control-label">科目名称：</label>${bean.name!}
    </div>

    <div class="form-group">
		<label class="control-label">科目类别：</label>
		<#if bean.subType=='ASSETS'>资产
		<#elseif bean.subType=='LIABILITIES'>负债
		<#elseif bean.subType=='COMMON'>共同
		<#elseif bean.subType=='EQUITY'>权益
		<#elseif bean.subType=='COST'>成本
		<#elseif bean.subType=='LOSS'>损益
		</#if>
	</div>

    <div class="form-group">
        <label class="control-label">科目类别详细：</label>${bean.groupName!}
    </div>

    <div class="form-group">
		<label class="control-label">状态：</label>
		<#if bean.dc=='DEBIT'>
			借
		<#else>
			贷
		</#if>
	</div>

    <div class="form-group">
        <label class="control-label">外币核算：</label>${bean.currency!}
    </div>

    <div class="form-group">
		<label class="control-label">状态：</label>
		${bean.deleted?string('已启用','已禁用')}
	</div>

</div>
<div class="bjui-pageFooter">
    <ul>
        <li><button type="button" class="btn-close">取消</button></li>
    </ul>
</div>