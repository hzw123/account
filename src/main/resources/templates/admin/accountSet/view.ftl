<div class="bjui-pageContent" xmlns="http://www.w3.org/1999/html">
    <div class="form-group">
		<label class="control-label">创建时间：</label>${(bean.gmtCreate?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>
 	<div class="form-group">
		<label class="control-label">修改时间：</label>${(bean.gmtModified?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>

    <div class="form-group">
        <label class="control-label">账套ID：</label>${bean.id!}
    </div>

    <div class="form-group">
		<label class="control-label">账套名称：</label>${bean.name!}
	</div>

    <div class="form-group">
		<label class="control-label">行业：</label>${bean.industry!}
	</div>

    <div class="form-group">
		<label class="control-label">省：</label>${bean.level1!}&nbsp;
		<label class="control-label">市：</label>${bean.level2!}&nbsp;
		<label class="control-label">县/区：</label>${bean.level3!}&nbsp;
	</div>

    <div class="form-group">
		<label class="control-label">账套起始年份：</label>${bean.startDateYear!}
	</div>

    <div class="form-group">
		<label class="control-label">账套起始月份：</label>${bean.startDateMonth!}
	</div>

    <div class="form-group">
		<label class="control-label">统一社会信用码：</label>${bean.unifiedNumber!}
	</div>

    <div class="form-group">
		<label class="control-label">国税号：</label>${bean.taxNumbers!}
	</div>

	<div class="form-group">
		<label class="control-label">税类型：</label>${bean.taxType!}
	</div>

	<div class="form-group">
		<label class="control-label">会计准则：</label>${bean.accountingStandard!}
	</div>

    <div class="form-group">
		<label class="control-label">固定资产启用状态：</label>
		<#if bean.fixedasset==0>
			停用
		<#else>
			启用
		</#if>
	</div>

    <div class="form-group">
		<label class="control-label">是否启用审核：</label>
		<#if bean.checkNeeded==0>
			停用
		<#else>
			启用
		</#if>
	</div>

    <div class="form-group">
		<label class="control-label">是否启用出纳：</label>
		<#if bean.cashJournal==0>
			停用
		<#else>
			启用
		</#if>
	</div>

    <div class="form-group">
        <label class="control-label">权限信息：</label>${bean.permission!}
    </div>

    <div class="form-group">
        <label class="control-label">createBy：</label>${bean.createBy!}
    </div>

</div>
<div class="bjui-pageFooter">
    <ul>
        <li><button type="button" class="btn-close">取消</button></li>
    </ul>
</div>