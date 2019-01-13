<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org" >
<head th:replace="admin/common/html/tableHead :: tableHead(~{::title},~{::link},~{::style})">

<!-- 用户界面自定义css -->
<link href="${base}/plug/user/css/user-deit.css" rel="stylesheet"/>


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
						<form  class="form-horizontal m" id="form-edit" th:object="${TsysUser}">
							<input id="id" name="id" type="hidden" th:field="*{id"/>
							<div class="form-group">
								<label class="col-sm-3 control-label ">登录名称：</label>
								<div class="col-sm-8">
									<input class="form-control" disabled="disabled" type="text" id="username" name="username" th:value="*{username"/>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label ">权限授权：</label>
								<div class="col-sm-8">
									<div class="icheckbox-blue">
										<label th:each="m : ${roleVos}">
											
											<input class="sqcheckbox" name="roles"  th:value="${m.id}"  type="checkbox" th:checked="${m.ischeck}">
											<b th:text="${m.name}"></b>
										</label>
										
										
									</div>
									
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

<!-- 通用js -->
<div th:include="${base}/admin/common/html/js :: onload_js">
   
</div>
<!-- bootstarp 表格 -->
<script type="text/javascript" src="${base}/plug/assets/js/bootstrap/js/bootstrap-table/bootstrap-table.min.js"></script>
<script type="text/javascript" src="${base}/plug/assets/js/bootstrap/js/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
<script type="text/javascript" src="${base}/plug/assets/js/bootstrap/js/base_list.js"></script>


<!-- 弹窗 -->



<!-- 自定义user js -->
<script  src="${base}/plug/user/js/user-edit.js"></script>



</body>


</html>
