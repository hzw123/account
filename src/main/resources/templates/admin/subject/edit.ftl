<#assign base=request.contextPath /> 
<div class="bjui-pageContent">
    <form action="${base}/admin/subject/update" data-toggle="validate" method="post">
        <input type="hidden" name="id" value="${bean.id}"/>

        <input type="hidden" name="gmtCreate" value="${bean.gmtCreate!}"/>

        <div class="form-group">
            <label class="control-label x85">科目编码：</label>
            <input type="text" name="code" value="${bean.code!}" placeholder="科目编码" size="20" data-rule="required" readonly >
        </div>

        <div class="form-group">
            <label class="control-label x85">科目名称：</label>
            <input type="text" name="name" value="${bean.name!}" placeholder="科目名称" size="20" data-rule="required" >
        </div>

        <div class="form-group">
            <label class="control-label x85">上级科目：</label>
            <select name="parentId" data-toggle="selectpicker" size="20">
                <option value="0" <#if bean.parentId==0>selected</#if>>无上级科目</option>
                <#if bean.parentId!=0>
                    <option value="${bean.parentId}">上级科目</option>
                </#if>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">科目类别：</label>
            <select name="subType" data-toggle="selectpicker" size="20" readonly>
                <option value="ASSETS" <#if bean.subType=='ASSETS'>selected</#if>>资产</option>
                <option value="LIABILITIES" <#if bean.subType=='LIABILITIES'>selected</#if>>负债</option>
                <option value="COMMON" <#if bean.subType=='COMMON'>selected</#if>>共同</option>
                <option value="EQUITY" <#if bean.subType=='EQUITY'>selected</#if>>权益</option>
                <option value="COST" <#if bean.subType=='COST'>selected</#if>>成本</option>
                <option value="LOSS" <#if bean.subType=='LOSS'>selected</#if>>损益</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">科目类别具体名称：</label>
            <input type="text" name="groupName" value="${bean.groupName!}" placeholder="科目类别具体名称" size="20"  data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">余额方向：</label>
            <select name="dc" data-toggle="selectpicker" size="20" >
                <option value="DEBIT" <#if bean.dc=='DEBIT'>selected</#if>>借</option>
                <option value="CREDIT" <#if bean.dc=='CREDIT'>selected</#if>>贷</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">科目名称：</label>
            <select name="deleted" data-toggle="selectpicker">
                <option value="1" >启用</option>
                <option value="0" <#if bean.deleted?string('1','0')=='0'>selected</#if>>禁止</option>
            </select>
        </div>
       <div class="form-group">
           <label class="control-label x85">外币核算：</label>
           <input type="text" name="currency" value="${bean.currency!}" placeholder="外币核算" size="20"  data-rule="required">
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