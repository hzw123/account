<#include "/macro/base.ftl" />
<div class="bjui-pageHeader">
	<form id="pagerForm" data-toggle="ajaxsearch" action="${base}/admin/sysLogLogin/list" method="post">
		<@pageHeadr />
		<div class="bjui-searchBar">
			<label>用户ID：</label>
			<input type="text" name="userInfoId" value="" class="form-control" size="10">&nbsp;
			<label>登录名：</label>
			<input type="text" name="loginName" value="" class="form-control" size="10">&nbsp;
			<label>登录IP：</label>
			<input type="text" name="loginIp" value="" class="form-control" size="10">&nbsp;

			<button type="submit" class="btn-default" data-icon="search">查询</button>&nbsp;
			<a class="btn btn-orange" href="javascript:;" data-toggle="reloadsearch" data-clear-query="true" data-icon="undo">清空查询</a>
			<br />
			<#--<a href="${base}/admin/sysLogLogin/add" class="btn btn-default" data-toggle="dialog" data-icon="plus" data-id="sysLogLogin-add" data-options="{title:'添加', height:340}">添加 </a>-->
		</div>
	</form>
</div>
<div class="bjui-pageContent tableContent">
	<table class="table table-bordered table-hover table-top" data-toggle="tablefixed" data-selected-multi="true">
		<thead>
			<tr>
				<th width="30">序号</th>
				<th>创建时间</th>
				<th>用户ID</th>
				<th>登录名</th>
				<th>登录IP</th>
				<th>上次登录IP</th>
				<th>上次登录时间</th>
				<th>单点登录用户</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<#if page??>
			<#list page.list as bean>
			<tr>
				<td align="center">${bean_index+1}</td>
				<td>${(bean.gmtCreate?string('yyyy-MM-dd HH:mm:ss'))!}</td>
				<td>${bean.userInfoId!}</td>
				<td>${bean.loginName!}</td>
				<td>${bean.loginIp!}</td>
				<td>${bean.lastLoginIp!}</td>
				<td>${(bean.lastLoginTime?string('yyyy-MM-dd HH:mm:ss'))!}</td>
				<td>${bean.singleName!}</td>
				<td>
					<a href="${base}/admin/sysLogLogin/view?id=${bean.id}" class="btn btn-blue" data-toggle="dialog" data-id="sysLogLogin-view" data-options="{title:'查看', height:250}">查看 </a>
					<#--<a href="${base}/admin/sysLogLogin/edit?id=${bean.id}" class="btn btn-green" data-toggle="dialog" data-id="sysLogLogin-edit" data-options="{title:'修改', height:340}">修改 </a>-->
					<#--<a href="${base}/admin/sysLogLogin/delete?id=${bean.id}" class="btn btn-red" data-toggle="doajax" data-id="sysLogLogin-delete" data-confirm-msg="确定要删除吗？">删除</a>-->
				</td>
			</tr>
			</#list>
			</#if>
		</tbody>
	</table>
</div>
<@pageFooter />
