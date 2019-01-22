<div class="bjui-pageContent" xmlns="http://www.w3.org/1999/html">
    <div class="form-group">
		<label class="control-label">创建时间：</label>${(bean.gmtCreate?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>
 	<div class="form-group">
		<label class="control-label">修改时间：</label>${(bean.gmtModified?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>

    <div class="form-group">
		<label class="control-label">应用名称：</label>${bean.name!}
	</div>

    <div class="form-group">
		<label class="control-label">账套ID：</label>${bean.accountId!}
	</div>

    <div class="form-group">
		<label class="control-label">秘钥：</label>${bean.clientSecret!}
	</div>

	<div class="form-group">
		<label class="control-label">用户ID：</label>${bean.userInfoId!}
	</div>

    <div class="form-group">
		<label class="control-label">启用状态：</label>
		<#if bean.state==0>
			停用
		<#else>
			启用
		</#if>
	</div>

</div>
<div class="bjui-pageFooter">
    <ul>
        <li><button type="button" class="btn-close">取消</button></li>
    </ul>
</div>