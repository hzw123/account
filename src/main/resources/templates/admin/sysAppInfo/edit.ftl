<#assign base=request.contextPath /> 
<div class="bjui-pageContent">
    <form action="${base}/admin/sysAppInfo/update" data-toggle="validate" method="post">

        <input type="hidden" name="id" value="${bean.id}"/>
        <div class="form-group">
            <label class="control-label x85">应用名称：</label>
            <input type="text" name="name" value="${bean.name!}" placeholder="应用名称" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">秘钥：</label>
            <input type="text" name="clientSecret" value="${bean.clientSecret!}" placeholder="秘钥" size="20" data-rule="required" readonly>
        </div>

       <div class="form-group">
            <label class="control-label x85">用户ID：</label>
            <input type="text" name="userInfoId" value="${bean.userInfoId!}" placeholder="用户ID" size="20" data-rule="required" readonly>
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