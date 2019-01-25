<#include "/macro/base.ftl" />
<div class="bjui-pageHeader">
	<form id="pagerForm" data-toggle="ajaxsearch" action="${base}/admin/voucher/list" method="post">
		<@pageHeadr />
		<div class="bjui-searchBar">
            <input type="hidden" name="query" value="1">

			<label>货币代码：</label>
			<input type="text" name="code" value="" class="form-control" size="10">&nbsp;

			<label>货币名称：</label>
			<input type="text" name="name" value="" class="form-control" size="10">&nbsp;

			<label for="status">启用状态：</label>
			<select name="status" data-toggle="selectpicker" class="form-control" size="10">
				<option value="-1">--全部--</option>
				<option value="0">停用</option>
				<option value="1">启用</option>
			</select>&nbsp;

			<button type="submit" class="btn-default" data-icon="search">查询</button>&nbsp;

			<a class="btn btn-orange" href="javascript:;" data-toggle="reloadsearch" data-clear-query="true" data-icon="undo">清空查询</a>

			<br />
		<@shiro.hasPermission name="/admin/voucher/add">
			<a href="${base}/admin/voucher/add" class="btn btn-default" data-toggle="dialog" data-icon="plus" data-id="voucher-add" data-options="{title:'添加', height:300}">添加 </a>
		</@shiro.hasPermission>
		</div>
	</form>
</div>
<div class="bjui-pageContent tableContent">
	<table class="table table-bordered table-hover table-top" data-toggle="tablefixed" data-selected-multi="true">
		<thead>
			<tr>
				<th width="30">序号</th>
				<th>日期</th>
				<th>凭证字号</th>
                <th>附件数量</th>
				<th>制单人</th>
				<th>审核人</th>
				<th>审核信息</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<#if page??>
			<#list page.list as bean>
			<tr>
				<td align="center">${bean_index+1}</td>
                <td>${(bean.vchDate?string('yyyy-MM-dd HH:mm:ss'))!}</td>
				<td>${bean.name!}-${bean.num}</td>
				<td>${bean.attachments}</td>
				<td>${bean.preparedBy!}</td>
				<td>${bean.approvedBy!}</td>
				<td>
					<#if bean.approveStatus==0>
						未审核
					<#else>
						被审核
					</#if>
				</td>
				<td>
					<@shiro.hasPermission name="/admin/voucher/view">
						<a href="${base}/admin/voucher/view?id=${bean.id}" class="btn btn-blue" data-toggle="dialog" data-id="voucher-view" data-options="{title:'查看', height:350}">查看 </a>
					</@shiro.hasPermission>

					<@shiro.hasPermission name="/admin/voucher/edit">
						<a href="${base}/admin/voucher/edit?id=${bean.id}" class="btn btn-green" data-toggle="dialog" data-id="voucher-edit" data-options="{title:'修改', height:300}">修改 </a>
					</@shiro.hasPermission>

					<@shiro.hasPermission name="/admin/voucher/delete">
						<a href="${base}/admin/voucher/delete?id=${bean.id}" class="btn btn-red" data-toggle="doajax" data-id="voucher-delete" data-confirm-msg="确定要删除吗？">删除</a>
					</@shiro.hasPermission>
				</td>
			</tr>
			</#list>
			</#if>
		</tbody>
	</table>
</div>
<@pageFooter />
