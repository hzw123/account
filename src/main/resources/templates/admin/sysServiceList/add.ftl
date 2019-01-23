<#assign base=request.contextPath />
<div class="bjui-pageContent">
    <form action="${base}/admin/sysServiceList/save" data-toggle="validate" method="post">

        <div class="form-group">
            <label class="control-label x85">服务列表名称：</label>
            <input type="text" name="name" value="" placeholder="服务列表名称" size="20" data-rule="required">
        </div>
        
        <div class="form-group">
            <label class="control-label x85">应用Id：</label>
            <input type="number" name="appId" value="" placeholder="应用Id" size="20" data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">账套ID：</label>
            <input type="number" name="accountId" value="" placeholder="账套ID" size="20" data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">用户Id：</label>
            <input type="number" name="userInfoId" value="" placeholder="用户Id" size="20" data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">总用户数：</label>
            <input type="number" name="totalUsers" value="" placeholder="总用户数" size="20" data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">服务：</label>
            <select name="serviceId" data-toggle="selectpicker">
                <option value="">---请选择----</option>
                <#if services?? &&services?size gt 0>
                    <#list services as bean>
                        <option value="${bean.id}">${bean.name!}</option>
                    </#list>

                </#if>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">状态：</label>
            <select name="state" data-toggle="selectpicker" size="20">
                <option value="1">启用</option>
                <option value="0">停用</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">版本：</label>
            <input type="number" name="version" value="" placeholder="版本" size="20" data-rule="required">
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