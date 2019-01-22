<#assign base=request.contextPath />
<div class="bjui-pageContent">
    <form action="${base}/admin/sysAppInfo/save" data-toggle="validate" method="post">

        <div class="form-group">
            <label class="control-label x85">应用名称：</label>
            <input type="text" name="name" value="" placeholder="应用名称" size="20">
        </div>
        
        <div class="form-group">
            <label class="control-label x85">账套ID：</label>
            <input type="number" name="accountId" value="" placeholder="账套ID" size="20">
        </div>

        <div class="form-group">
            <label class="control-label x85">启用状态：</label>
            <select name="state" data-toggle="selectpicker" size="20">
                <option value="0">停用</option>
                <option value="1">启用</option>
            </select>
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