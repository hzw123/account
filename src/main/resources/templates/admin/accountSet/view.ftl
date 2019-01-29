<div class="bjui-pageContent" xmlns="http://www.w3.org/1999/html">

 	<div class="form-group">
		<label class="control-label">修改时间：</label>${(bean.gmtModified?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>

    <div class="form-group">
        <label class="control-label">账套ID：</label>${bean.id!}
    </div>

    <div class="form-group">
		<label class="control-label">账套名称：</label>${bean.name!}
	</div>


    <div class="form-group">
        <label class="control-label">开通用户ID：</label>${bean.createBy!}
    </div>

    <div class="form-group">
        <label class="control-label">开通时间：</label>${(bean.gmtCreate?string('yyyy-MM-dd HH:mm:ss'))!}
    </div>

    <div class="form-group">
        <label class="control-label">到期时间：</label>${(bean.expirationTime?string('yyyy-MM-dd HH:mm:ss'))!}
    </div>

    <div class="form-group">
        <label class="control-label">用户数：</label>${bean.userCount}
    </div>

</div>
<div class="bjui-pageFooter">
    <ul>
        <li><button type="button" class="btn-close">取消</button></li>
    </ul>
</div>