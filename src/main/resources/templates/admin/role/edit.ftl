<style type="text/css">

body {
	 color: #9ea7b3;
    font-family: "Open Sans", Arial, sans-serif!important;
    font-size: 13px!important;
    line-height: 20px;
    overflow-x: hidden!important;
    min-height: 100%;
    z-index: -2;
    margin: 0px !important;
    background-image: none;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
label.error {
    position: absolute;
    right: 18px;
    top: 5px;
    color: #ef392b;
    font-size: 12px;
}
</style>

</head>

<body>

<div class="content-wrap">
	<div class="row">
		<div class="col-sm-12">
			<div class="nest" id="elementClose">
				<div class="">
				</div>
				<div class="body-nest" id="element">
					<div class="panel-body">
						<form  class="form-horizontal m" id="form-edit" th:object="${TsysRole}">
							<input id="id" name="id" type="hidden" th:value="*{id"/>
							<div class="form-group">
								<!-- 验证用 -->
								<input class="form-control" type="hidden" id="checkname" th:value="*{name"/>
			
								<label class="col-sm-3 control-label ">角色名称：</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="name" name="name" th:value="*{name"/>
								</div>
							</div>
							<div class="form-group">
								<input type="hidden" name="prem" id="prem">
								<label class="col-sm-3 control-label ">权限配置：</label>
								<div class="col-sm-8">
									<div id="tree"></div> 
								</div>
							</div>
							<div class="form-group">
								<div class="form-control-static col-sm-offset-9">
									<button type="submit" class="btn btn-primary">提交</button>
									<button onclick="$.modal.close()" class="btn btn-danger" type="button">关闭</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<script type="text/javascript">
$("#form-edit").validate({
	rules:{
		name:{
			required:true,
			minlength: 2,
			maxlength: 20,
			remote: {
                url: "/RoleController/checkNameUnique",
                type: "post",
                dataType: "json",
                dataFilter: function(data, type) {
                	if($("#checkname").val()==$("#name").val())
                		return true;
                	else{
                		if (data == "0")
	                    	return true;
	                    else 
	                    	return false;
                	}
                }
            }
		}
	},
	messages: {
        "name": {
            remote: "角色已经存在"
        }
    },
	submitHandler:function(form){
		edit();
	}
});

function edit() {
	var x=$('#tree').treeview('getChecked');
	var prem=selectNodeIdArr(x);
	$("#prem").val(prem.join(","));
	var dataFormJson=$("#form-edit").serialize();
	$.ajax({
		cache : true,
		type : "POST",
		url : "/RoleController/edit",
		data :dataFormJson,
		async : false,
		error : function(request) {
			$.modal.alertError("系统错误");
		},
		success : function(data) {
			$.operate.saveSuccess(data);
		}
	});
}
</script>



<script type="text/javascript">
/***权限配置***/

function getTree() {

	var tree = [];
	$.ajax({
		url: "/PremissionController/getCheckPrem",
		type:"post",
		async : false,
		cache : true,
		data:{"roleId":$("#id").val()},
		error : function(request) {
			$.modal.alertError("系统错误");
		},
		success : function(data) {
			if(!$.common.isEmpty(data)&&data.key==200){
				tree.push(data.data);
			}
		}
		
		
	})
    return tree;
}

/**
 * 获取子节点
 */
function getChildNodeIdArr(node) {
    var ts = [];
    if (node.nodes) {
        for (x in node.nodes) {
            ts.push(node.nodes[x].nodeId);
            if (node.nodes[x].nodes) {
                var getNodeDieDai = getChildNodeIdArr(node.nodes[x]);
                for (j in getNodeDieDai) {
                    ts.push(getNodeDieDai[j]);
                }
            }
        }
    } else {
        ts.push(node.nodeId);
    }
    return ts;
}

/**
 * 获取传入的选中节点id
 */
function selectNodeIdArr(data){
	var ids=[];
	if(data){
		for(x in data){
			ids.push(data[x].id);
		}
	}
	return ids;
}

//选中父节点时，选中所有子节点
function getChildNodeIdArr(node) {   
    var ts = [];  
    if (node.nodes) {    
        for (x in node.nodes) {     
            ts.push(node.nodes[x].nodeId);     
            if (node.nodes[x].nodes) {      
                var getNodeDieDai = getChildNodeIdArr(node.nodes[x]);      
                for (j in getNodeDieDai) {       
                        ts.push(getNodeDieDai[j]);     
                }     
            }    
        }   
    } else {    
        ts.push(node.nodeId);   
    }   
    return ts;  
}

//选中所有子节点时，选中父节点 取消子节点时取消父节点
function setParentNodeCheck(node) {
    var parentNode = $("#tree").treeview("getNode", node.parentId);   
    if (parentNode.nodes) {    
        var checkedCount = 0;    
        for (x in parentNode.nodes) {     
            if (parentNode.nodes[x].state.checked) {      
                checkedCount ++;     
            } else {      
                break;     
            }    
        }    
        if (checkedCount == parentNode.nodes.length) {  //如果子节点全部被选 父全选
            $("#tree").treeview("checkNode", parentNode.nodeId);
            setParentNodeCheck(parentNode);    
        }else {   //如果子节点未全部被选 父未全选[当前注释是因为子节点取消的时候父节点不能取消]
           // $('#tree').treeview('uncheckNode', parentNode.nodeId); 
           // setParentNodeCheck(parentNode);        
        }   
    }  
}

//取消父节点时 取消所有子节点
function setChildNodeUncheck(node) { 
    if (node.nodes) {   
        var ts = [];    //当前节点子集中未被选中的集合 
        for (x in node.nodes) { 
            if (!node.nodes[x].state.checked) {  
                ts.push(node.nodes[x].nodeId);  
            } 
            if (node.nodes[x].nodes) {      
                var getNodeDieDai = node.nodes[x];   
                
                for (j in getNodeDieDai) {
                    if (!getNodeDieDai.state.checked) {        
                        ts.push(getNodeDieDai[j]); 
                    }    
                }     
            }    
        }   
    }
    return ts;  
}



	$(function() {

		$('#tree').treeview({
			levels : 1,
			showCheckbox : 1,//这里之所以写1，是因为我引得js源码里定义1为true
			multiSelect : 1,//这里之所以写1，是因为我引得js源码里定义1为true
			data : getTree(),
			color : "#000000",//设置字体加载颜色
			backColor : "#FFFFFF",//设置背景颜色
			selectedColor : "#428bca",//设置选中的字体颜色
			onNodeSelected : function(event, data) {
				// 事件代码...
				//console.log(data);
			},
			onNodeChecked : function(event, node) { //选中节点 
				var selectNodes = getChildNodeIdArr(node); //获取所有子节点      
				if (selectNodes) { //子节点不为空，则选中所有子节点       
					$('#tree').treeview('checkNode', [ selectNodes, {silent : true}]);
				}
				var parentNode = $("#tree").treeview("getNode", node.parentId);
				setParentNodeCheck(node);
			},
			onNodeUnchecked : function(event, node) { //取消选中节点  
				// 取消父节点 子节点取消
				var selectNodes = setChildNodeUncheck(node); //获取未被选中的子节点 
				var childNodes = getChildNodeIdArr(node); //获取所有子节点 
				if (selectNodes && selectNodes.length == 0) { //有子节点且未被选中的子节点数目为0，则取消选中所有子节点   

					$('#tree').treeview('uncheckNode', [ childNodes, {silent : true}]);
				}
				// 取消节点 父节点取消
				var parentNode = $("#tree").treeview("getNode", node.parentId); //获取父节点
				var selectNodes = getChildNodeIdArr(node);
				setParentNodeCheck(node);
			}

		});

	})
</script>


</body>


</html>
