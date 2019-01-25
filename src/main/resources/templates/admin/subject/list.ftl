<#include "/macro/base.ftl" />
<div class="bjui-pageHeader">
	<form id="pagerForm" data-toggle="ajaxsearch" action="${base}/admin/subject/list" method="post">
		<@pageHeadr />
		<div class="bjui-searchBar">
            <input type="hidden" name="query" value="1">

			<label>科目编码：</label>
			<input type="text" name="code" value="" class="form-control" size="10">&nbsp;

			<label>科目名称：</label>
			<input type="text" name="name" value="" class="form-control" size="10">&nbsp;

			<label>余额方向：</label>
            <select name="dc" data-toggle="selectpicker" size="20">
                <option value="">--全部--</option>
                <option value="DEBIT">借</option>
                <option value="CREDIT">贷</option>
            </select>

			<label for="subType">科目类别：</label>
			<select name="subType" data-toggle="selectpicker" class="form-control" size="10">
				<option value="">--全部--</option>
                <option value="ASSETS">资产</option>
                <option value="LIABILITIES">负债</option>
                <option value="COMMON">共同</option>
                <option value="EQUITY">权益</option>
                <option value="COST">成本</option>
                <option value="LOSS">损益</option>
			</select>&nbsp;

			<button type="submit" class="btn-default" data-icon="search">查询</button>&nbsp;

			<a class="btn btn-orange" href="javascript:;" data-toggle="reloadsearch" data-clear-query="true" data-icon="undo">清空查询</a>

			<br />
		<@shiro.hasPermission name="/admin/subject/add">
			<a href="${base}/admin/subject/add" class="btn btn-default" data-toggle="dialog" data-icon="plus" data-id="subject-add" data-options="{title:'添加', height:300}">添加 </a>
		</@shiro.hasPermission>
		</div>
	</form>
</div>
<div class="bjui-pageContent tableContent">
	<table class="table table-bordered table-hover table-top" data-toggle="tablefixed" data-selected-multi="true">
		<thead>
			<tr>
				<th width="30">序号</th>
                <th>编码</th>
                <th>名称</th>
				<th>类别</th>
				<th>余额方向</th>
				<th>状态</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<#if page??>
			<#list page.list as bean>
			<tr>
				<td align="center">${bean_index+1}</td>
				<td>${bean.code!}</td>
				<td>${bean.name!}</td>
				<td>${bean.groupName!}</td>
				<td>${bean.dcDesc!}</td>
				<td>${bean.deleted?string('已启用','已禁用')}</td>
				<td>
					<@shiro.hasPermission name="/admin/subject/view">
						<a href="${base}/admin/subject/view?id=${bean.id}" class="btn btn-blue" data-toggle="dialog" data-id="subject-view" data-options="{title:'查看', height:350}">查看 </a>
					</@shiro.hasPermission>

					<@shiro.hasPermission name="/admin/subject/edit">
						<a href="${base}/admin/subject/edit?id=${bean.id}" class="btn btn-green" data-toggle="dialog" data-id="subject-edit" data-options="{title:'修改', height:300}">修改 </a>
					</@shiro.hasPermission>

					<@shiro.hasPermission name="/admin/subject/delete">
						<a href="${base}/admin/subject/delete?id=${bean.id}" class="btn btn-red" data-toggle="doajax" data-id="subject-delete" data-confirm-msg="确定要删除吗？">删除</a>
					</@shiro.hasPermission>
				</td>
			</tr>
			</#list>
			</#if>
		</tbody>
	</table>
</div>
<@pageFooter />
