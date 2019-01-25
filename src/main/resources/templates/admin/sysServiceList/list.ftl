<#include "/macro/base.ftl" />
<div class="bjui-pageHeader">
	<form id="pagerForm" data-toggle="ajaxsearch" action="${base}/admin/sysServiceList/list" method="post">
		<@pageHeadr />
		<div class="bjui-searchBar">
            <input type="hidden" name="query" value="1">

			<label>服务列表名称：</label>
			<input type="text" name="name" value="${bean.name!}" class="form-control" size="10">&nbsp;

			<label>账套ID：</label>
			<input type="number" name="accountId" value="${bean.accountId!}" class="form-control" size="10">&nbsp;

			<label for="state">启用状态：</label>
			<select name="state" data-toggle="selectpicker" class="form-control" size="10">
				<option value="-1">--全部--</option>
				<option value="0" <#if bean.state==0>selected</#if>>停用</option>
				<option value="1" <#if bean.state==1>selected</#if>>启用</option>
			</select>&nbsp;

			<button type="submit" class="btn-default" data-icon="search">查询</button>&nbsp;

			<a class="btn btn-orange" href="javascript:;" data-toggle="reloadsearch" data-clear-query="true" data-icon="undo">清空查询</a>

			<br />
		<@shiro.hasPermission name="/admin/sysServiceList/add">
			<a href="${base}/admin/sysServiceList/add" class="btn btn-default" data-toggle="dialog" data-icon="plus" data-id="sysServiceList-add" data-options="{title:'添加', height:350}">添加 </a>
		</@shiro.hasPermission>
		</div>
	</form>
</div>
<div class="bjui-pageContent tableContent">
	<table class="table table-bordered table-hover table-top" data-toggle="tablefixed" data-selected-multi="true">
		<thead>
			<tr>
				<th width="30">序号</th>
				<th>创建时间</th>
				<th>修改时间</th>
				<th>服务列表名称</th>
				<th>应用ID</th>
				<th>账套ID</th>
                <th>用户ID</th>
				<th>服务号</th>
				<th>启用状态</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<#if page??>
			<#list page.list as bean>
			<tr>
				<td align="center">${bean_index+1}</td>
				<td>${(bean.gmtCreate?string('yyyy-MM-dd HH:mm:ss'))!}</td>
				<td>${(bean.gmtModified?string('yyyy-MM-dd HH:mm:ss'))!}</td>
				<td>${bean.name!}</td>
				<td>${bean.appId}</td>
				<td>${bean.accountId}</td>
				<td>${bean.userInfoId}</td>
				<td>${bean.sysService.serverNo!}</td>
				<td>
					<#if bean.state==0>
                        停用
					<#else>
						启用
					</#if>
				</td>
				<td>
				<@shiro.hasPermission name="/admin/sysServiceList/view">
				    <a href="${base}/admin/sysServiceList/view?id=${bean.id}" class="btn btn-blue" data-toggle="dialog" data-id="sysServiceList-view" data-options="{title:'查看', height:380}">查看 </a>
				</@shiro.hasPermission>

				<@shiro.hasPermission name="/admin/sysServiceList/edit">
				    <a href="${base}/admin/sysServiceList/edit?id=${bean.id}" class="btn btn-green" data-toggle="dialog" data-id="sysServiceList-edit" data-options="{title:'修改', height:380}">修改 </a>
				</@shiro.hasPermission>

				<@shiro.hasPermission name="/admin/sysServiceList/delete">
				    <a href="${base}/admin/sysServiceList/delete?id=${bean.id}" class="btn btn-red" data-toggle="doajax" data-id="sysServiceList-delete" data-confirm-msg="确定要删除吗？">删除</a>
				</@shiro.hasPermission>
				</td>
			</tr>
			</#list>
			</#if>
		</tbody>
	</table>
</div>
<@pageFooter />
