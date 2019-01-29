<#assign base=request.contextPath />
<div class="bjui-pageContent">
    <form action="${base}/admin/subject/save" data-toggle="validate" method="post">

        <div class="form-group">
            <label class="control-label x85">科目编码：</label>
            <input type="text" name="code" value="" placeholder="货币代码" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">科目名称：</label>
            <input type="text" name="name" value="" placeholder="货币名称" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">套装ID：</label>
            <input type="text" name="accountId" value="" placeholder="套装ID" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">上级科目：</label>
            <select name="parentId" data-toggle="selectpicker" size="20">
                <option value="0">无上级科目</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">科目类别：</label>
            <select name="subType" data-toggle="selectpicker" size="20">
                <option value="ASSETS">资产</option>
                <option value="LIABILITIES">负债</option>
                <option value="COMMON">共同</option>
                <option value="EQUITY">权益</option>
                <option value="COST">成本</option>
                <option value="LOSS">损益</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">科目类别具体名称：</label>
            <input type="text" name="groupName" value="" placeholder="科目类别具体名称" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">余额方向：</label>
            <select name="dc" data-toggle="selectpicker" size="20">
                <option value="DEBIT">借</option>
                <option value="CREDIT">贷</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">外币核算：</label>
            <input type="text" name="currency" value="" placeholder="外币核算" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">状态：</label>
            <select name="deleted" data-toggle="selectpicker" size="20">
                <option value="1">已启用</option>
                <option value="0">已禁用</option>
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