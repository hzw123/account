<#assign base=request.contextPath />
<div class="bjui-pageContent">
    <form action="${base}/admin/sysServer/save" data-toggle="validate" method="post">

        <div class="form-group">
            <label class="control-label x85">服务号：</label>
            <input type="text" name="serverNo" value="" placeholder="服务号" size="20" data-rule="required">
        </div>
        <div class="form-group">
            <label class="control-label x85">服务名称：</label>
            <input type="text" name="name" value="" placeholder="服务名称" size="20" data-rule="required">
        </div>
        <div class="form-group">
            <label class="control-label x85">服务类型：</label>
            <input type="text" name="type" value="" placeholder="服务类型" size="20" data-rule="required">
        </div>
        <div class="form-group">
            <label class="control-label x85">启用状态：</label>
            <select name="state" data-toggle="selectpicker" size="20">
                <option value="-1">全部</option>
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