<div class="bjui-pageContent" xmlns="http://www.w3.org/1999/html">
    <div class="form-group">
		<label class="control-label">创建时间：</label>${(bean.gmtCreate?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>

    <div class="form-group">
		<label class="control-label">用户ID：</label>${bean.userInfoId!}
	</div>

    <div class="form-group">
		<label class="control-label">登录名：</label>${bean.loginName!}
	</div>

    <div class="form-group">
		<label class="control-label">登录IP：</label>${bean.loginIp!}
	</div>

    <div class="form-group">
		<label class="control-label">上次登录IP：</label>${bean.lastLoginIp!}
	</div>

    <div class="form-group">
		<label class="control-label">上次登录时间：</label>${(bean.lastLoginTime?string('yyyy-MM-dd HH:mm:ss'))!}
	</div>
    <div class="form-group">
		<label class="control-label">单点登录用户：</label>${(bean.singleName)!}
	</div>
</div>
<div class="bjui-pageFooter">
    <ul>
        <li><button type="button" class="btn-close">取消</button></li>
    </ul>
</div>