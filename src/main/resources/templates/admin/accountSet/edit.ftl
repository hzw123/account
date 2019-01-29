<#assign base=request.contextPath /> 
<div class="bjui-pageContent">
    <form action="${base}/admin/accountSet/update" data-toggle="validate" method="post">

        <div class="form-group">
            <label class="control-label x85">账套ID：</label>
            <input type="text" name="id" value="${bean.id}" placeholder="账套ID" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">账套名称：</label>
            <input type="text" name="name" value="${bean.name!}" placeholder="账套名称" size="20" data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">开通用户ID：</label>
            <input type="text" name="createBy" value="${bean.createBy}" placeholder="开通用户ID" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">开通时间：</label>
            <input type="text" name="gmtCreate" value="${(bean.gmtCreate?string('yyyy-MM-dd HH:mm:ss'))!}" placeholder="开通时间" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">到期时间：</label>
            <input type="text" name="expirationTime" value="${(bean.expirationTime?string('yyyy-MM-dd HH:mm:ss'))!}" placeholder="到期时间" size="20" data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">用户数：</label>
            <input type="number" name="userCount" value="${bean.userCount}" placeholder="用户数" size="20" data-rule="required">
        </div>

    </form>
</div>
<div class="bjui-pageFooter">
    <ul>
        <li>
            <button type="button" class="btn-close">取消</button>
        </li>
        <li>
            <button type="submit" class="btn-default">修改</button>
        </li>
    </ul>
</div>