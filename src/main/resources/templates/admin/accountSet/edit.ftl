<#assign base=request.contextPath /> 
<div class="bjui-pageContent">
    <form action="${base}/admin/accountSet/update" data-toggle="validate" method="post">

        <input type="hidden" name="gmtCreate" value="${bean.gmtCreate!}"/>
        <input type="hidden" name="createBy" value="${bean.createBy}"/>

        <div class="form-group">
            <label class="control-label x85">账套ID：</label>
            <input type="text" name="id" value="${bean.id}" placeholder="账套ID" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">账套名称：</label>
            <input type="text" name="name" value="${bean.name!}" placeholder="账套名称" size="20" data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">行业：</label>
            <input type="text" name="industry" value="${bean.industry!}" placeholder="行业" size="20">
        </div>

        <div class="form-group">
            <label class="control-label x85">账套起始年份：</label>
            <input type="text" name="startDateYear" value="${bean.startDateYear!}" placeholder="账套起始年份" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">账套起始月份：</label>
            <input type="text" name="startDateMonth" value="${bean.startDateMonth!}" placeholder="账套起始月份" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">统一社会信用码：</label>
            <input type="text" name="unifiedNumber" value="${bean.unifiedNumber!}" placeholder="统一社会信用码" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">国税号：</label>
            <input type="text" name="taxNumbers" value="${bean.taxNumbers!}" placeholder="国税号" size="20" data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">税类型：</label>
            <input type="text" name="taxType" value="${bean.taxType!}" placeholder="税类型" size="20" data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">会计准则：</label>
            <select name="accountingStandard" data-toggle="selectpicker" size="20">
                <option value="LITTLE_COMPANY_STANDARD" <#if bean.accountingStandard=='LITTLE_COMPANY_STANDARD'>selected</#if> >小企业会计准则</option>
                <option value="NORMAL_COMPANY_STANDARD" <#if bean.accountingStandard=='NORMAL_COMPANY_STANDARD'>selected</#if> >企业会计准则</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">固定资产启用状态：</label>
            <select name="fixedasset" data-toggle="selectpicker" size="20">
                <option value="0" <#if bean.fixedasset==0 >selected</#if> >停用</option>
                <option value="1" <#if bean.fixedasset==1 >selected</#if> >启用</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">是否启用审核：</label>
            <select name="checkNeeded" data-toggle="selectpicker" size="20">
                <option value="0" <#if bean.checkNeeded==0 >selected</#if> >停用</option>
                <option value="1" <#if bean.checkNeeded==1 >selected</#if> >启用</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">是否启用出纳：</label>
            <select name="cashJournal" data-toggle="selectpicker" size="20">
                <option value="0" <#if bean.cashJournal==0 >selected</#if> >停用</option>
                <option value="1" <#if bean.cashJournal==1 >selected</#if> >启用</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">权限信息：</label>
            <input type="text" name="permission" value="${bean.permission!}" placeholder="国税号" size="20" data-rule="required">
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