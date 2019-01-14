<style type="text/css">
/**
*这里写单独的css样式
*/
.select-list ul li{
	list-style-type: none;
	float: left;
}
</style>



<!-- 右边内容 -->
<div class="wrap-fluid">
    <div class="container-fluid paper-wrap bevel tlbr">

        <!-- 结束标题 通用-->
        <div class="content-wrap">
            <!-- 结束内容 -->
            <div class="row">
                <div class="col-sm-12">
                <!-- 搜索条件 -->
                
                	 <div class="nest" id="inlineClose">
                            <div class="title-alt">
                                <h6>搜索条件</h6>
                                <div class="titleClose">
                                    <a class="gone" href="#inlineClose">
                                        <span class="entypo-cancel"></span>
                                    </a>
                                </div>
                                <div class="titleToggle">
                                    <a class="nav-toggle-alt" href="#search_div">
                                        <span class="entypo-up-open"></span>
                                    </a>
                                </div>
                            </div>

                            <div class="body-nest" id="search_div">
                                <div class="form_left">
                                    <form role="form" class="form-inline">
                                        <div class="form-group">
                                            <label for="exampleInputEmail2" class="sr-only">角色名字</label>
                                            <input type="text" name="searchTxt" placeholder="角色名字"class="form-control">
                                        </div>
                                        <button onclick="$.table.search(this)" class="btn btn-success" type="button"><i class="fa fa-search"></i>&nbsp;搜索</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                	<!-- END搜索条件 -->
                    <!-- 空白页开始-->
                    <div class="nest" id="Blank_PageClose">
                        <div class="title-alt">
                            <h6>表单</h6>
                            <div class="titleClose">
                                <a class="gone" href="#Blank_PageClose">
                                    <span class="entypo-cancel"></span>
                                </a>
                            </div>
                            <div class="titleToggle">
                                <a class="nav-toggle-alt" href="#Blank_Page_Content">
                                    <span class="entypo-up-open"></span>
                                </a>
                            </div>
                        </div>
                        
                        <div class="body-nest" id="Blank_Page_Content">
                            <!-- 工具条 -->
                            <div class="btn-group hidden-xs" id="exampleTableEventsToolbar" role="group">
                            	<button onclick="$.operate.add()" type="button" class="btn btn-primary">
                                    <span class="entypo-plus-squared"></span>&nbsp;&nbsp;新增
                                </button>
                               <button onclick="$.operate.batRemove()" type="button" class="btn btn-info">
                                    <span class="entypo-trash"></span>&nbsp;&nbsp;删除
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
            </div>
        </div>
    </div>
</div>


<script type="text/javascript">
<!-- jquery-'export 表格导出插件 -->

<!-- 导出 -->
var dataUrl="/RoleController/list";
var removeUrl="/RoleController/remove";
var createUrl="/RoleController/add";
var updateUrl="/RoleController/edit/{id";
var exportUrl="/RoleController/export";
  var options = {
		dataUrl: dataUrl,
        createUrl: createUrl,
        updateUrl: updateUrl,
        removeUrl:removeUrl,
        exportUrl: exportUrl,
        sortName: "roleSort",
        modalName: "角色",
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
			    field: 'name',
			    title: '角色名称'
			},
			{
			    title: '操作',
			    formatter: function (value, row, index) {
			        var id = row.id;
			        var actions = [];
			        actions.push('<a class="btn btn-success btn-xs"  href="#" onclick="$.operate.edit(\'' + row.id + '\')"><i class="fa fa-edit"></i>编辑</a> ');
			        actions.push('<a class="btn btn-danger btn-xs" href="#" onclick="$.operate.remove(\'' + row.id + '\')"><i class="fa fa-remove"></i>删除</a>');
			        return actions.join('');
			
			        //return '<a class="btn btn-xs btn-danger" onclick="delPermission(' + "" + id + "" + ')"><i class="fa fa-remove"></i>删除</a>';
			    }
			}]
  };
    $(function(){
        var oTab=$.table.oTableInit(options);
        oTab.Init();
    })
</script>
