<div class="bjui-pageContent" xmlns="http://www.w3.org/1999/html">
    <div class="form-group">
		<label class="control-label">创建时间：</label>${(bean.gmtCreate?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>
 	<div class="form-group">
		<label class="control-label">修改时间：</label>${(bean.gmtModified?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>

    <div class="form-group">
		<label class="control-label">服务号：</label>${bean.serverNo!}
	</div>

    <div class="form-group">
		<label class="control-label">服务名称：</label>${bean.name!}
	</div>

    <div class="form-group">
		<label class="control-label">version：</label>${bean.version!}
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