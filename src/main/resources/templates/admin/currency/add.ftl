<#assign base=request.contextPath />
<div class="bjui-pageContent">
    <form action="${base}/admin/currency/save" data-toggle="validate" method="post">

        <div class="form-group">
            <label class="control-label x85">货币编码：</label>
            <input type="text" name="code" value="" placeholder="货币代码" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">货币名称：</label>
            <input type="text" name="name" value="" placeholder="货币名称" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">初始汇率：</label>
            <input type="text" name="rate" value="1.00" placeholder="初始汇率" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">启用状态：</label>
            <select name="status" data-toggle="selectpicker" size="20">
                <option value="1">启用</option>
                <option value="0">停用</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">是否本位币：</label>
            <select name="standard" data-toggle="selectpicker" size="20">
                <option value="0">外币</option>
                <option value="1">本位币</option>
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