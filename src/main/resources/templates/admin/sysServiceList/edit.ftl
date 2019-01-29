<#assign base=request.contextPath /> 
<div class="bjui-pageContent">
    <form action="${base}/admin/sysServiceList/update" data-toggle="validate" method="post">

        <input type="hidden" name="id" value="${bean.id}"/>
        <div class="form-group">
            <label class="control-label x85">服务列表名称：</label>
            <input type="text" name="name" value="${bean.name!}" placeholder="服务列表名称" size="20"  data-rule="required">
        </div>

        <div class="form-group">
            <label class="control-label x85">应用ID：</label>
            <input type="number" name="appId" value="${bean.appId}" placeholder="应用ID" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">账套ID：</label>
            <input type="number" name="accountId" value="${bean.accountId}" placeholder="账套ID" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">用户Id：</label>
            <input type="number" name="userInfoId" value="${bean.userInfoId}" placeholder="用户Id" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">总用户数：</label>
            <input type="number" name="userInfoId" value="${bean.totalUsers}" placeholder="总用户数" size="20" data-rule="required" >
        </div>


        <div class="form-group">
            <label class="control-label x85">使用用户数：</label>
            <input type="number" name="usedUsers" value="${bean.usedUsers}" placeholder="使用用户数" size="20" data-rule="required" readonly>
        </div>

        <div class="form-group">
            <label class="control-label x85">服务：</label>
            <select name="serviceId" data-toggle="selectpicker">
                <option value="">---请选择----</option>
                <#if services??>
                    <#list services as service>
                        <option value="${service.id}" <#if service.id==bean.sysService.id>selected</#if>>${service.name!}</option>
                    </#list>

                </#if>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">状态：</label>
            <select name="state" data-toggle="selectpicker" size="20">
                <option value="0" <#if bean.state==0>selected</#if> >停用</option>
                <option value="1" <#if bean.state==1>selected</#if> >启用</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label x85">版本：</label>
            <input type="number" name="version" value="${bean.version}" placeholder="版本" size="20" data-rule="required" readonly>
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