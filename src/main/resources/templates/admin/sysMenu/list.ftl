<#include "/macro/base.ftl" />
<div class="bjui-pageHeader" xmlns="http://www.w3.org/1999/html">
    <form id="pagerForm" data-toggle="ajaxsearch" action="${base}/admin/sysMenu/list" method="post">
        <div class="bjui-searchBar">
            <button type="submit" class="btn-default" data-icon="search">查询</button>&nbsp;
        </div>
    </form>
    <div class="bjui-searchBar">
        <br />
        <a href="${base}/admin/sysMenu/add?parentId=0" class="btn btn-default" data-toggle="dialog" data-icon="plus" data-id="sysMenu-add" data-options="{title:'添加', height:320, width:425}">添加一级菜单 </a>
    </div>
</div>
<div class="bjui-pageContent tableContent">
    <div class="clearfix">
        <div style="float:left; width:350px; height:400px;border: 2px solid #ddd; overflow:auto;">
            <#if list??>
            <ul id="privilege" class="ztree" data-toggle="ztree" data-options="{expandAll:false,onClick:'ZtreeClick',maxAddLevel:5}" data-add-hover-dom="edit" data-remove-hover-dom="edit" data-on-remove="M_NodeRemove" >
                <#list list as bean>
                    <li data-id="${bean.id}" data-pid="${bean.parentId!}" data-url="${bean.menuUrl!}" data-targetname="${bean.targetName!}" data-menuicon="${bean.menuIcon!}" data-sort="${bean.sort!}" data-remark="${bean.remark!}" data-status="${bean.statusId!}">${bean.menuName!}</li>
                </#list>
            </ul>
            </#if>
        </div>
        <div id="ztree-detail" style="display:none; margin-left:450px; margin-top:50px;width:500px; height:240px;">
             <div class="bs-example" data-content="详细信息">
                 <div class="form-group">
                     <label for="j_menu_name" class="control-label x85">菜单名称：</label>
                     <input type="text" class="form-control validate[required] required" name="m.privilegename" id="j_menu_name" size="35" placeholder="菜单名称" />
                 </div>
                 <div class="form-group">
                     <label for="j_menu_url" class="control-label x85">菜单URL：</label>
                     <input type="text" class="form-control" name="m.privilege" id="j_menu_url" size="35" placeholder="菜单URL" />
                 </div>
                 <div class="form-group">
                     <label for="j_menu_targetname" class="control-label x85">目标名称：</label>
                     <input type="text" class="form-control" name="m.targetName" id="j_menu_targetname" size="35" placeholder="目标名称" />
                 </div>
                 <div class="form-group">
                     <label for="j_menu_menuicon" class="control-label x85">图标：</label>
                     <input type="text" class="form-control" name="m.menuIcon" id="j_menu_menuicon" size="35" placeholder="图标" />
                 </div>
                 <div class="form-group">
                     <label for="j_menu_sort" class="control-label x85">排序：</label>
                     <input type="text" class="form-control" name="m.sort" id="j_menu_sort" size="35" placeholder="排序" />
                 </div>
                <div class="form-group">
                    <label for="j_menu_statusId" class="control-label x85">状态：</label>
                    <select id="j_menu_statusId" class="form-control" name="m.statusId" style="text-align: center;width:150px;">
                        <option value="0">停用</option>
                        <option value="1">启用</option>
                    </select>
                 </div>

                 <div class="form-group">
                     <label for="j_menu_remark" class="control-label x85">备注：</label>
                     <input type="text" class="form-control" name="m.remark" id="j_menu_remark" size="35" placeholder="备注" />
                 </div>
                 </br>

                 <div class="form-group" style="padding-top:8px; border-top:1px #DDD solid;">
                     <label class="control-label x85"></label>
                     <button class="btn btn-green" onclick="Update();">修改菜单</button>
                 </div>
             </div>
         </div>
     </div>
</div>

<script type="text/javascript">

// 单击事件
function ZtreeClick(event, treeId, treeNode) {
    event.preventDefault();
    var $detail = $('#ztree-detail');
    if ($detail.attr('tid') == treeNode.tId) {return;}
    if (treeNode.name) {$('#j_menu_name').val(treeNode.name)}
    if (treeNode.url) {$('#j_menu_url').val(treeNode.url)} 
    if (treeNode.targetname) {$('#j_menu_targetname').val(treeNode.targetname)}
    if (treeNode.menuicon) {$('#j_menu_menuicon').val(treeNode.menuicon)} 
    if (treeNode.sort) {$('#j_menu_sort').val(treeNode.sort)} 
    if (treeNode.remark) {$('#j_menu_remark').val(treeNode.remark)}

    if(treeNode.status!=undefined){
        for(var i=0;i<2;i++){
            var option=$('#j_menu_statusId').children("option").get(i);
            if(option.value==treeNode.status){
                $(option).attr("selected","selected");
                break;
            }
        }
    }


    $detail.attr('tid', treeNode.tId);
    $detail.show();
}

// 添加修改事件
function Update() {
    var zTree  = $.fn.zTree.getZTreeObj("privilege")
    var name   = $('#j_menu_name').val()
    var url    = $('#j_menu_url').val()
    var targetName = $('#j_menu_targetname').val()
    var menuIcon = $('#j_menu_menuicon').val()
    var sort = $('#j_menu_sort').val()
    var remark = $('#j_menu_remark').val()
    var statusId = $('#j_menu_statusId').val()

    if ($.trim(name).length == 0) {
        $(this).alertmsg('error', '菜单名称不能为空！')
        return;
    }
    
    var upNode = zTree.getSelectedNodes()[0]
    if (!upNode) {
        $(this).alertmsg('error', '未选中任何菜单！')
        return;
    }
    
    if(typeof(upNode.id) == "undefined"){
        // 添加
        $.ajax({
            type:'post',
            url:'${base}/admin/sysMenu/save/sub',
            data:{
                parentId:upNode.pId,
                menuName:name,
                menuUrl:url,
                targetName:targetName,
                menuIcon:menuIcon,
                sort:sort,
                statusId:statusId,
                remark:remark
            },
            dataType:'json',
            success:function(id){
                upNode.id    = id;
                upNode.pid    = upNode.id;
                upNode.name   = name;
                upNode.url    = url;
                upNode.targetname = targetName;
                upNode.menuicon   = menuIcon;
                upNode.sort   = sort;
                upNode.remark = remark;
                upNode.statusId = statusId;
                zTree.updateNode(upNode);
            },
            error:function(){
                $(this).alertmsg('error', '网络繁忙，请重试！')
            }
        })
    }else{
        // 修改
        $.ajax({
            type:'post',
            url:'${base}/admin/sysMenu/update',
            data:{
                id:upNode.id,
                menuName:name,
                menuUrl:url,
                targetName:targetName,
                menuIcon:menuIcon,
                sort:sort,
                statusId:statusId,
                remark:remark
            },
            dataType:'json',
            success:function(){
                upNode.name   = name;
                upNode.url    = url;
                upNode.targetname = targetName;
                upNode.menuicon   = menuIcon;
                upNode.sort   = sort;
                upNode.remark = remark;
                upNode.statusId = statusId;
                zTree.updateNode(upNode)
            },
            error:function(){
                $(this).alertmsg('error', '网络繁忙，请重试！')
            }
        })
    }
    $(this).alertmsg('ok', '修改成功');
}

// 删除事件
function M_NodeRemove (event, treeId, treeNode) {
    $.ajax({
        type:'get',
        url:'${base}/admin/sysMenu/delete?id='+treeNode.id,
        dataType:'json',
        success:function(msg){
            if(msg.statusCode == '200'){
                $(this).alertmsg('ok', '删除成功');
            }else{
                $(this).alertmsg('error', '删除失败')
            }
        },
        error:function(){
            $(this).alertmsg('error', '网络失败，请重试！')
        }
    })
}
</script>
