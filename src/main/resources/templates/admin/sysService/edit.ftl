<#assign base=request.contextPath /> 
<div class="bjui-pageContent">
    <form action="${base}/admin/sysService/update" data-toggle="validate" method="post">
        <input type="hidden" name="id" value="${bean.id}"/>
        <div class="form-group">
            <label class="control-label x85">服务号：</label>
            <input type="text" name="serverNo" value="${bean.serverNo!}" placeholder="服务号" size="20" data-rule="required">
        </div>
        <div class="form-group">
            <label class="control-label x85">服务名称：</label>
            <input type="text" name="name" value="${bean.name!}" placeholder="服务名称" size="20" data-rule="required">
        </div>
        <div class="form-group">
            <label class="control-label x85">服务类型：</label>
            <input type="text" name="type" value="${bean.type!}" placeholder="服务类型" size="20" data-rule="required">
        </div>
        <div class="form-group">
            <label class="control-label x85">启用状态：</label>
            <select name="state" data-toggle="selectpicker" size="20">
                <option value="0" <#if bean.state==0>selected</#if> >停用</option>
                <option value="1" <#if bean.state==1>selected</#if> >启用</option>
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
            <button type="submit" class="btn-default">修改</button>
        </li>
    </ul>
</div>