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
	<h3>服务列表</h3>
    <table class="table table-bordered table-hover table-top" data-selected-multi="true">
        <thead>
        <tr>
            <th>服务列表名称</th>
            <th>应用ID</th>
            <th>账套ID</th>
            <th>用户ID</th>
            <th>服务号</th>
            <th>服务名</th>
            <th>启用状态</th>
        </tr>
        </thead>
        <tbody>
			<#if bean.services??>
			<#list bean.services as service>
			<tr>
                <td>${service.name!}</td>
                <td>${service.appId}</td>
                <td>${service.accountId}</td>
                <td>${service.userInfoId}</td>
                <td>${service.sysService.serverNo!}</td>
                <td>${service.sysService.name!}</td>
                <td>
					<#if service.state==0>
                        停用
					<#else>
						启用
					</#if>
                </td>
            </tr>
			</#list>
			</#if>
        </tbody>
    </table>

</div>
<div class="bjui-pageFooter">
    <ul>
        <li><button type="button" class="btn-close">取消</button></li>
    </ul>
</div>