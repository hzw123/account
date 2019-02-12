<#include "/macro/base.ftl" />
<div class="bjui-pageHeader">
	<form id="pagerForm" data-toggle="ajaxsearch" action="${base}/admin/statistics/ledger" method="post">
		<@pageHeadr />
		<div class="bjui-searchBar">
            <input type="hidden" name="query" value="1">

			<#--<label>科目编码：</label>-->
			<#--<input type="text" name="code" value="${bean.code!}" class="form-control" size="10">&nbsp;-->

			<button type="submit" class="btn-default" data-icon="search">查询</button>&nbsp;

			<a class="btn btn-orange" href="javascript:;" data-toggle="reloadsearch" data-clear-query="true" data-icon="undo">清空查询</a>
			<br />
		</div>
	</form>
</div>
<div class="bjui-pageContent tableContent">
	<table class="table table-bordered table-hover table-top" data-toggle="tablefixed" data-selected-multi="true">
		<thead>
			<tr>
				<th width="30">序号</th>
                <th>科目编码</th>
                <th>科目名称</th>
				<th>借方</th>
				<th>贷方</th>
			</tr>
		</thead>
		<tbody>
			<#if list??>
			<#list list as bean>
			<tr>
				<td align="center">${bean_index+1}</td>
				<td>${bean.subCode!}</td>
				<td>${bean.subName!}</td>
				<td>${bean.debit}</td>
				<td>${bean.credit}</td>
			</tr>
			</#list>
			</#if>
		</tbody>
	</table>
</div>
<@pageFooter />
