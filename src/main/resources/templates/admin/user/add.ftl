<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org" >
<head th:replace="admin/common/html/tableHead :: head(~{::title},~{::link},~{::style})">

<!-- 用户界面自定义css -->
<link href="${base}/plug/user/css/user-add.css" rel="stylesheet"/>

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
						<form  class="form-horizontal m" id="form-add">
							<div class="form-group">
								<label class="col-sm-3 control-label ">登录名称：</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="username" name="username"/>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label ">登录密码：</label>
								<div class="col-sm-8">
									<input class="form-control" type="password" id="password" name="password"/>
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label ">权限授权：</label>
								<div class="col-sm-8">
									<div class="icheckbox-blue">
										<label th:each="m : ${tsysRoleList}">
											<input class="sqcheckbox" name="roles"  th:value="${m.id}"  type="checkbox"><b th:text="${m.name}"></b>
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


<!-- 自定义user js -->
<script  src="${base}/plug/user/js/user-add.js"></script>

</body>


</html>
