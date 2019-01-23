<#assign base=request.contextPath />
<div class="bjui-pageContent">
    <form action="${base}/admin/accountSet/save" data-toggle="validate" method="post">

        <div class="form-group">
            <label class="control-label x85">账套名称：</label>
            <input type="text" name="name" value="" placeholder="账套名称" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">行业：</label>
            <input type="text" name="industry" value="" placeholder="行业" size="20" data-rule="required">
        </div>

        <div class="form-group">
            <label control-label x85>省：</label>
            <input type="text" name="level1" value="" placeholder="省" size="7"  data-rule="required">&nbsp;

            <label>市：</label>
            <input type="text" name="level2" value="" placeholder="市" size="7"  data-rule="required">&nbsp;

            <label>县/区：</label>
            <input type="text" name="level3" value="" placeholder="县/区" size="7"  data-rule="required">&nbsp;
        </div>

        <div class="form-group">
            <label class="control-label x85">统一社会信用码：</label>
            <input type="text" name="unifiedNumber" value="" placeholder="统一社会信用码" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">国税号：</label>
            <input type="text" name="taxNumbers" value="" placeholder="国税号" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">税类型：</label>
            <input type="text" name="taxType" value="" placeholder="税类型" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">会计准则：</label>
            <select name="accountingStandard" data-toggle="selectpicker" class="form-control" size="10">
                <option value="LITTLE_COMPANY_STANDARD">小企业会计准则</option>
                <option value="LITTLE_COMPANY_STANDARD">企业会计准则</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">固定资产启用状态：</label>
            <select name="fixedasset" data-toggle="selectpicker" size="20">
                <option value="1">启用</option>
                <option value="0">停用</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">是否启用审核：</label>
            <select name="checkNeeded" data-toggle="selectpicker" size="20">
                <option value="1">启用</option>
                <option value="0">停用</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">是否启用出纳：</label>
            <select name="cashJournal" data-toggle="selectpicker" size="20">
                <option value="1">启用</option>
                <option value="0">停用</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">权限信息：</label>
            <input type="number" name="permission" value="" placeholder="权限信息" size="20"  data-rule="required">
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