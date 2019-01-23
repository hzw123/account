<div class="bjui-pageContent" xmlns="http://www.w3.org/1999/html">
    <div class="form-group">
		<label class="control-label">创建时间：</label>${(bean.gmtCreate?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>
 	<div class="form-group">
		<label class="control-label">修改时间：</label>${(bean.gmtModified?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>

    <div class="form-group">
		<label class="control-label">服务列表名称：</label>${bean.name!}
	</div>

    <div class="form-group">
		<label class="control-label">应用Id：</label>${bean.appId}
	</div>

    <div class="form-group">
		<label class="control-label">账套ID：</label>${bean.accountId}
	</div>

    <div class="form-group">
        <label class="control-label">用户ID：</label>${bean.userInfoId!}
    </div>

	<#if bean.sysService??>
	    <div class="form-group">
            <label class="control-label">服务名称：</label>${bean.sysService.name!}
        </div>

		<div class="form-group">
       		 <label class="control-label">服务号：</label>${bean.sysService.serverNo!}
		</div>

		<div class="form-group">
       		 <label class="control-label">服务名称：</label>${bean.sysService.ytpe!}
		</div>
		<div class="form-group">
            <label class="control-label">服务状态：</label>
			<#if bean.sysService.state==0>
				停用
			<#else>
				启用
			</#if>
        </div>
	</#if>

    <div class="form-group">
		<label class="control-label">总用户数：</label>${bean.totalUsers}
	</div>

    <div class="form-group">
		<label class="control-label">使用用户数：</label>${bean.usedUsers}
	</div>

    <div class="form-group">
		<label class="control-label">状态：</label>
		<#if bean.state==0>
			停用
		<#else>
			启用
		</#if>
	</div>

    <div class="form-group">
        <label class="control-label">状态：</label>${bean.version}
    </div>

</div>
<div class="bjui-pageFooter">
    <ul>
        <li><button type="button" class="btn-close">取消</button></li>
    </ul>
</div>