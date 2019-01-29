<#assign base=request.contextPath />
<!DOCTYPE html>
<html>
<head>
    <meta content="text/html;charset=UTF-8"/>
    <title>会计管理平台-欢迎注册</title>
    <!-- Fav and touch icons -->

    <link rel="icon" href="${base}/plug/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="${base}/login/bootstrap.min.css"/>
    <link rel="stylesheet" href="${base}/login/css/camera.css"/>
    <link rel="stylesheet" href="${base}/login/bootstrap-responsive.min.css"/>
    <link rel="stylesheet" href="${base}/login/matrix-login.css"/>
    <link rel="stylesheet" href="${base}/login/font-awesome.css"/>
    <script type="text/javascript" src="${base}/login/js/jquery-1.5.1.min.js"></script>
    <!-- 软键盘控件start -->
    <link rel="stylesheet" href="${base}/login/keypad/css/framework/form.css" type="text/css"/>

    <style type="text/css">
        .cavs {
            z-index: 1;
            position: fixed;
            width: 95%;
            margin-left: 20px;
            margin-right: 20px;
            height: auto;
        }
    </style>

</head>
<body>

<div style="display: none">
    <audio src="${base}/login/music/fh1.mp3" autoplay=""></audio>
</div>

<canvas class="cavs"></canvas>
<div style="width:100%;text-align: center;margin: 0 auto;position: absolute;">

    <!-- 注册 -->
    <div id="windows2">
        <div id="loginbox">
            <form action="/regist" name="loginForm" id="loginForm2">
                <div class="control-group normal_text">
                    <h3>
                        <img src="${base}/login/logo.png" alt="Logo"/>
                    </h3>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
							<span class="add-on bg_lg">
							<i>用户</i>
							</span><input type="text" name="username" id="USERNAME" value="" placeholder="请输入用户名"/>
                        </div>
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
							<span class="add-on bg_ly">
							<i>密码</i>
							</span><input type="password" name="PASSWORD" id="PASSWORD" placeholder="请输入密码"
                                          class="keypad" keypadMode="full" allowKeyboard="true" value=""/>
                        </div>
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
							<span class="add-on bg_ly">
							<i>重输</i>
							</span><input type="password" name="chkpwd" id="chkpwd" placeholder="请重新输入密码" class="keypad"
                                          keypadMode="full" allowKeyboard="true" value=""/>
                        </div>
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
							<span class="add-on bg_lg">
							<i>姓名</i>
							</span><input type="text" name="NAME" id="name" value="" placeholder="请输入姓名"/>
                        </div>
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
							<span class="add-on bg_lg">
							<i>邮箱</i>
							</span><input type="text" name="EMAIL" id="EMAIL" value="" placeholder="请输入邮箱"/>
                        </div>
                    </div>
                </div>
                <div class="form-actions">
                    <div style="width:86%;padding-left:8%;">

                        <div style="float: left;padding-top:2px;">
                            <i><img src="${base}/login/yan.png"/></i>
                        </div>
                        <div style="float: left;" class="codediv">
                            <input type="text" name="rcode" id="rcode" class="login_code"
                                   style="height:16px; padding-top:4px;"/>
                        </div>
                        <div style="float: left;">
                            <i><img style="height:22px;" id="zcodeImg" alt="点击更换" title="点击更换" src=""/></i>
                        </div>
                        <span class="pull-right" style="padding-right:3%;"><a href="javascript:changepage(2);"
                                                                              class="btn btn-success">取消</a></span>
                        <span class="pull-right"><a onclick="register();" class="flip-link btn btn-info"
                                                    id="to-recover">提交</a></span>
                    </div>
                </div>
            </form>
            <div class="controls">
                <div class="main_input_box">
                    <font color="white"><span id="nameerr">Copyright © FHqq313596790 2100</span></font>
                </div>
            </div>
        </div>
    </div>

</div>
<div id="templatemo_banner_slide" class="container_wapper">
    <div class="camera_wrap camera_emboss" id="camera_slide">
        <!-- 背景图片 -->


        <div data-src="${base}/login/images/banner_slide_01.jpg"></div>
        <div data-src="${base}/login/images/banner_slide_02.jpg"></div>
        <div data-src="${base}/login/images/banner_slide_03.jpg"></div>
        <div data-src="${base}/login/images/banner_slide_04.jpg"></div>
        <div data-src="${base}/login/images/banner_slide_05.jpg"></div>


    </div>
    <!-- #camera_wrap_3 -->
</div>

<script type="text/javascript" src="${base}/login/js/bootstrap.min.js"></script>
<script type="text/javascript" src="${base}/js/jquery-1.7.2.js"></script>
<script type="text/javascript" src="${base}/login/js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="${base}/login/js/jquery.mobile.customized.min.js"></script>
<script type="text/javascript" src="${base}/login/js/camera.min.js"></script>
<script type="text/javascript" src="${base}/login/js/templatemo_script.js"></script>
<script type="text/javascript" src="${base}/login/js/ban.js"></script>
<script type="text/javascript" src="${base}/js/jQuery.md5.js"></script>
<script type="text/javascript" src="${base}/js/jquery.tips.js"></script>
<script type="text/javascript" src="${base}/js/jquery.cookie.js"></script>

<!-- 软键盘控件start -->
<script type="text/javascript" src="${base}/login/keypad/js/form/keypad.js"></script>
<script type="text/javascript" src="${base}/login/keypad/js/framework.js"></script>
<!-- 弹窗 -->
<script type="text/javascript" src="${base}/plug/assets/js/layer/layer.js"></script>

<!-- 软键盘控件end -->
<script type="text/javascript">
    var message = "${message}";
    if ("" != message) {
        layer.msg(message, {
            time: 3000
        })
    }
    $('#codeImg').click(function () {
        var url = "captcha/captchaImage?type=math&s=" + Math.random();
        $("#codeImg").attr("src", url);
    });


    //session获取iframe处理
    $(function () {
        //判断一下当前是不是做顶层，如果不是，则做一下顶层页面重定向
        if (window != top) {
            top.location.href = location.href;
        }
    });
</script>
</body>
</html>