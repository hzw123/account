<#include "../../macro/utils.ftl"/>

<!DOCTYPE html>
<html lang="zh">
<head>
    <@head/>
    <@css/>
    <@js/>
</head>

<body>
<!-- 顶部通用-->
<@topMenu/>

<!-- 左边菜单栏通用 -->
<@leftMenu/>

<div class="wrap-fluid">
    <div class="container-fluid paper-wrap bevel tlbr">
        <!-- 内容 -->
        <!--标题 通用-->
        <@title/>
        
        <div class="content-wrap">
            <!-- 结束内容 -->
            <div class="row">
                <div class="col-sm-12">
                <!-- 搜索条件 -->

                	 <div class="nest" id="inlineClose">
                            <div class="body-nest" id="search_div" style="border-bottom: #f3f3f3 solid 1px;">
                                <div class="form_left">
                                    <form role="form" class="form-inline">
                                        <div class="form-group">
                                            <label for="exampleInputEmail2" class="sr-only">用户名字</label>
                                            <input type="text" name="loginName" placeholder="用户名字"class="form-control">
                                        </div>
                                        <button onclick="$.table.search(this)" class="btn btn-success" type="button"><i class="fa fa-search"></i>&nbsp;搜索</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                	<!-- END搜索条件 -->
                    <!-- 空白页开始-->
                    <div class="nest" id="Blank_PageClose">
                        <div class="body-nest" id="Blank_Page_Content">
                            <!-- 工具条 -->
                            <div class="btn-group hidden-xs" id="exampleTableEventsToolbar" role="group">
                            	<button onclick="$.operate.add()" type="button" class="btn btn-primary">
                                    <span class="entypo-plus-squared"></span>&nbsp;&nbsp;新增
                                </button>
                               <button onclick="$.operate.batRemove()" type="button" class="btn btn-info">
                                    <span class="entypo-trash"></span>&nbsp;&nbsp;删除
                               </button>
                               <button onclick="updatePwd()" type="button" class="btn btn-danger">
                                    <span class="entypo-tools"></span>&nbsp;&nbsp;修改密码
                               </button>
                               
                               
                           </div>
                            <!-- 工具条 end-->
                           <table id="dataTable" class="table-striped footable-res footable metro-blue" data-page-size="6">
                                   
                                    
                           </table>
                           
                           
                        </div>
                    </div>
                </div>
                <!-- 空白页结束 -->
            </div>

            <!-- 页脚 通用-->
            <@footer/>
        </div>

    </div>
</div>

<!-- 右侧隐藏滑块内容 -->
<@rightHide/>

<script type="text/javascript">

<!-- 导出 -->
var dataUrl="/api/user/list";
var removeUrl="/api/user/delete";
var createUrl="/api/user/add";
var updateUrl="/api/user/edit/{id}";
var exportUrl="/api/user/export";
  var options = {
		dataUrl: dataUrl,
        createUrl: createUrl,
        updateUrl: updateUrl,
        removeUrl:removeUrl,
        exportUrl: exportUrl,
        sortName: "sort",
        modalName: "用户",
        search: false,
	    dataColumns: [
	       {
			    checkbox: true
			},
           {
			    field: 'id',
			    title: '序号'
			},
           {
			    field: 'loginName',
			    title: '登录名'
			},
           {
			    field: 'nickName',
			    title: '用户名'
			},
           {
			    field: 'email',
			    title: '邮箱'
			},
           {
			    field: 'mobile',
			    title: '手机'
			},
           {
			    field: 'addr',
			    title: '地址'
			},
           {
			    field: 'userType',
			    title: '类型'
			},
           {
			    field: 'statusId',
			    title: '状态'
			},
           {
			    title: '操作',
			    formatter: function (value, row, index) {
			        var id = row.id;
			        var actions = [];
			        actions.push('<a class="btn btn-success btn-xs"  href="#" onclick="$.operate.edit(\'' + id + '\')"><i class="fa fa-edit"></i>编辑</a> ');
			        actions.push('<a class="btn btn-danger btn-xs" href="#" onclick="$.operate.remove(\'' + id + '\')"><i class="fa fa-remove"></i>删除</a>');
			        return actions.join('');
			    }
			}]
  };
$(function(){
	var oTab=$.table.oTableInit(options);
	oTab.Init();
})
</script>


<script type="text/javascript">
	var editPwdUrl="/admin/sysUser/password/{id}";
	function updatePwd(){
		 var rows = $.common.isEmpty($.table._option.id) ? $.table.selectFirstColumns() : $.table.selectColumns($.table._option.id);
         if (rows.length == 0) {
             $.modal.alertWarning("请至少选择一条记录");
             return
         }else if(rows.length>1){
        	 $.modal.alertWarning("请选择一条记录");
        	 return
         }
         
        
         var url = editPwdUrl.replace("{id", rows.join());
         var data = {
             "id":rows.join()
         };
		 $.modal.open("修改密码", url);
	}

</script>

</body>


</html>
