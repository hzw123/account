<#assign base=request.contextPath />
<div class="bjui-pageContent">
    <form action="${base}/admin/accountSet/save" data-toggle="validate" method="post">

        <div class="form-group">
            <label class="control-label x85">账套名称：</label>
            <input type="text" name="name" value="" placeholder="账套名称" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">到期时间：</label>
            <input type="text" name="expirationTime" value="" placeholder="到期时间(格式yyyy-MM-dd HH:mm:ss)" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">用户数：</label>
            <input type="number" name="userCount" value="" placeholder="用户数" size="20"  data-rule="required">
        </div>

    </form>
</div>
<div class="bjui-pageFooter">
    <ul>
        <li>
            <button type="button" class="btn-close">取消</button>
        </li>
        <li>
            <button type="submit" class="btn-default">添加</button>
        </li>
    </ul>
</div>