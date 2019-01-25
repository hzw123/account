<#include "/macro/base.ftl" />
<div class="bjui-pageHeader">
	<form id="pagerForm" data-toggle="ajaxsearch" action="${base}/admin/accountSet/list" method="post">
		<@pageHeadr />
		<div class="bjui-searchBar">
            <input type="hidden" name="query" value="1">

			<label>账套名称：</label>
			<input type="text" name="name" value="" class="form-control" size="10">&nbsp;

			<label>行业：</label>
			<input type="number" name="industry" value="" class="form-control" size="10">&nbsp;

			<label for="accountingStandard">会计准则：</label>
			<select name="accountingStandard" data-toggle="selectpicker" class="form-control" size="10">
				<option value="">--全部--</option>
				<option value="LITTLE_COMPANY_STANDARD">小企业会计准则</option>
				<option value="LITTLE_COMPANY_STANDARD">企业会计准则</option>
			</select>&nbsp;

			<button type="submit" class="btn-default" data-icon="search">查询</button>&nbsp;

			<a class="btn btn-orange" href="javascript:;" data-toggle="reloadsearch" data-clear-query="true" data-icon="undo">清空查询</a>

			<br />
		<@shiro.hasPermission name="/admin/accountSet/add">
			<a href="${base}/admin/accountSet/add" class="btn btn-default" data-toggle="dialog" data-icon="plus" data-id="accountSet-add" data-options="{title:'添加', height:500}">添加 </a>
		</@shiro.hasPermission>
		</div>
	</form>
</div>
<div class="bjui-pageContent tableContent">
	<table class="table table-bordered table-hover table-top" data-toggle="tablefixed" data-selected-multi="true">
		<thead>
			<tr>
				<th width="30">序号</th>
				<th>账套ID</th>
				<th>账套名称</th>
				<th>行业</th>
				<th>统一社会信用码</th>
				<th>国税号</th>
				<th>税类型</th>
				<th>会计准则</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<#if page??>
			<#list page.list as bean>
			<tr>
				<td align="center">${bean_index+1}</td>
				<td>${bean.id!}</td>
				<td>${bean.name!}</td>
				<td>${bean.industry!}</td>
				<td>${bean.unifiedNumber!}</td>
				<td>${bean.taxNumbers!}</td>
				<td>${bean.taxType!}</td>
				<td>${bean.standard!}</td>
				<td>
					<@shiro.hasPermission name="/admin/accountSet/view">
						<a href="${base}/admin/accountSet/view?id=${bean.id}" class="btn btn-blue" data-toggle="dialog" data-id="accountSet-view" data-options="{title:'查看', height:500}">查看 </a>
					</@shiro.hasPermission>

					<@shiro.hasPermission name="/admin/accountSet/edit">
						<a href="${base}/admin/accountSet/edit?id=${bean.id}" class="btn btn-green" data-toggle="dialog" data-id="accountSet-edit" data-options="{title:'修改', height:500}">修改 </a>
					</@shiro.hasPermission>

					<@shiro.hasPermission name="/admin/accountSet/delete">
						<a href="${base}/admin/accountSet/delete?id=${bean.id}" class="btn btn-red" data-toggle="doajax" data-id="accountSet-delete" data-confirm-msg="确定要删除吗？">删除</a>
					</@shiro.hasPermission>
				</td>
			</tr>
			</#list>
			</#if>
		</tbody>
	</table>
</div>
<@pageFooter />
