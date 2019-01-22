<#assign base=request.contextPath />
<#--head html-->
<#macro head>
    <meta content="text/html;charset=UTF-8"/>
    <title>会计管理平台</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" href="${base}/plug/images/favicon.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Le styles -->
    <link rel="stylesheet" type="text/css" href="${base}/plug/assets/css/style.css">
    <!-- Ladda for Bootstrap 3按钮加载进度插件 -->
    <link rel="stylesheet" type="text/css" href="${base}/plug/assets/css/loader-style.css">
    <link rel="stylesheet" type="text/css" href="${base}/plug/assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="${base}/plug/assets/js/progress-bar/number-pb.css">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
        <script type="text/javascript" src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    <!-- Fav and touch icons -->
</#macro>

<#--顶部菜单-->
<#macro topMenu>
    <!-- 彩带 -->
    <#if (titleVo.isribbo!)=='yes'>
        <div id="awwwards" class="right black">
            <a href="#" target="_blank">best websites of the world</a>
        </div>
    </#if>

	<!-- END彩带 -->
	<!-- 预加载器 -->
	<div id="preloader">
        <div id="status">&nbsp;</div>
    </div>
	<!-- 顶部导航栏 -->
	<nav role="navigation" class="navbar navbar-static-top">
        <div class="container-fluid">
            <!-- 手机端的和切换分组，以更好的移动显示 -->
            <div class="navbar-header">
                <button data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" class="navbar-toggle"
                        type="button">
                    <span class="entypo-menu"></span>
                </button>
                <button class="navbar-toggle toggle-menu-mobile toggle-left" type="button">
                    <span class="entypo-list-add"></span>
                </button>

                <div id="logo-mobile" class="visible-xs">
                    <h1>会计管理<span>平台</span></h1>
                </div>

            </div>

            <!-- 右侧顶部-->
            <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <!-- 消息通知栏 -->
                    <li class="dropdown">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <i style="font-size:20px;" class="icon-conversation"></i>
                            <div class="noft-red">23</div>
                        </a>
                        <ul style="margin: 11px 0 0 9px;" role="menu" class="dropdown-menu dropdown-wrap">
                            <li>
                                <a href="#">
                                    <img alt="" class="img-msg img-circle" src="${base}/plug/portraits/thumb/men/1.jpg">Jhon
                                    Doe <b>Just Now</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <img alt="" class="img-msg img-circle"
                                         src="${base}/plug/portraits/thumb/women/1.jpg">Jeniffer <b>3 Min Ago</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <img alt="" class="img-msg img-circle" src="${base}/plug/portraits/thumb/men/2.jpg">Dave
                                    <b>2 Hours Ago</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <img alt="" class="img-msg img-circle" src="${base}/plug/portraits/thumb/men/3.jpg"><i>Keanu</i>
                                    <b>1 Day Ago</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <img alt="" class="img-msg img-circle" src="${base}/plug/portraits/thumb/men/4.jpg"><i>Masashi</i>
                                    <b>2 Mounth Ago</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <div>See All Messege</div>
                            </li>
                        </ul>
                    </li>

                    <!-- 右边警告图标通知栏 -->
                    <li>
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <i style="font-size:19px;" class="icon-warning tooltitle"></i>
                            <div class="noft-green">5</div>
                        </a>
                        <ul style="margin: 12px 0 0 0;" role="menu" class="dropdown-menu dropdown-wrap">
                            <li>
                                <a href="#">
                                    <span style="background:#DF2135" class="noft-icon maki-bus"></span><i>From
                                    Station</i> <b>01B</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <span style="background:#AB6DB0" class="noft-icon maki-ferry"></span><i>Departing
                                    at</i> <b>9:00 AM</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <span style="background:#FFA200" class="noft-icon maki-aboveground-rail"></span><i>Delay
                                    for</i> <b>09 Min</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <span style="background:#86C440" class="noft-icon maki-airport"></span><i>Take
                                    of</i> <b>08:30 AM</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <span style="background:#0DB8DF" class="noft-icon maki-bicycle"></span><i>Take
                                    of</i> <b>08:30 AM</b>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <div>See All Notification</div>
                            </li>
                        </ul>
                    </li>

                    <!-- 右边帮助图标通知栏  -->
                    <li><a href="#"><i data-toggle="tooltip" data-placement="bottom" title="Help"
                                       style="font-size:20px;" class="icon-help tooltitle"></i></a>
                    </li>

                </ul>

                <!-- 右侧顶部 日期 时间  天气预报  div-->
                <div id="nt-title-container" class="navbar-left running-text visible-lg">
                    <!-- 日期空间 -->
                    <ul class="date-top">
                        <li class="entypo-calendar" style="margin-right:5px"></li>
                        <li id="Date"></li>
                    </ul>

                    <!-- 时间DIV -->
                    <ul id="digital-clock" class="digital">
                        <li class="entypo-clock" style="margin-right:5px"></li>
                        <li class="hour"></li>
                        <li>:</li>
                        <li class="min"></li>
                        <li>:</li>
                        <li class="sec"></li>
                        <li class="meridiem"></li>
                    </ul>

                    <!-- 天气预报div -->
                    <ul id="nt-title">
                        <li>
                            <i class="wi-day-lightning"></i>&#160;&#160;Berlin&#160;
                            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
                        </li>
                        <li>
                            <i class="wi-day-lightning"></i>&#160;&#160;Yogyakarta&#160;
                            <b>85</b><i class="wi-fahrenheit"></i>&#160;; Tonight- 72 °F (22.2 °C)
                        </li>

                        <li>
                            <i class="wi-day-lightning"></i>&#160;&#160;Sttugart&#160;
                            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
                        </li>

                        <li>
                            <i class="wi-day-lightning"></i>&#160;&#160;Muchen&#160;
                            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
                        </li>

                        <li>
                            <i class="wi-day-lightning"></i>&#160;&#160;Frankurt&#160;
                            <b>85</b><i class="wi-fahrenheit"></i>&#160;; 15km/h
                        </li>

                    </ul>

                </div>

                <!-- 右侧顶部 头像设置-->
                <ul style="margin-right:0;" class="nav navbar-nav navbar-right">
                    <!-- 头像设置 -->
                    <li>
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <img alt="" class="admin-pic img-circle" src="${base}/plug/portraits/thumb/men/10.jpg">
                            Hi, Dave Mattew
                            <b class="caret"></b>
                        </a>
                        <ul style="margin-top:14px;" role="menu" class="dropdown-setting dropdown-menu">
                            <li>
                                <a href="${base}/admin/sysUserInfo/info" data-toggle="navtab" data-id="info"
                                   data-mask="true">
                                    <span class="entypo-user"></span>&#160;&#160;我的资料
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="entypo-vcard"></span>&#160;&#160;帐户设置
                                </a>
                            </li>
                            <li>
                                <a href="${base}/admin/sysUserInfo/password"
                                   data-toggle="dialog"
                                   data-id="password"
                                   data-mask="true">
                                    <span class="entypo-vcard"></span>&#160;&#160;修改密码</a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="entypo-lifebuoy"></span>&#160;&#160;帮助</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="${base}/logout">
                                    <span class="entypo-basket"></span>&#160;&#160; 退出</a>
                            </li>
                        </ul>
                    </li>

                    <!-- 背景设置 -->
                    <li>
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="icon-gear"></span>&#160;&#160;Setting</a>
                        <ul role="menu" class="dropdown-setting dropdown-menu">

                            <li class="theme-bg">
                                <div id="button-bg"></div>
                                <div id="button-bg2"></div>
                                <div id="button-bg3"></div>
                                <div id="button-bg5"></div>
                                <div id="button-bg6"></div>
                                <div id="button-bg7"></div>
                                <div id="button-bg8"></div>
                                <div id="button-bg9"></div>
                                <div id="button-bg10"></div>
                                <div id="button-bg11"></div>
                                <div id="button-bg12"></div>
                                <div id="button-bg13"></div>
                            </li>
                        </ul>
                    </li>

                    <!-- 顶部右侧隐藏按钮 -->
                    <li class="hidden-xs">
                        <a class="toggle-left" href="#">
                            <span style="font-size:20px;" class="entypo-list-add"></span>
                        </a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
</#macro>

<#--左边菜单-->
<#macro leftMenu>
	<div id="skin-select">
        <!-- PC端 LOGO -->
        <div id="logo">
            <h1>SpringBoot<span>v2</span></h1>
        </div>
        <!--END PC端 LOGO -->

        <!--点击隐藏左边菜单栏按钮 -->
        <a id="toggle">
            <span class="entypo-menu"></span>
        </a>

        <!-- PC端搜索按钮 -->
        <div class="dark">
            <form action="#">
	            <span>
					<input type="text" name="search" value="" class="search rounded id_search" placeholder="菜单搜索" autofocus/>
	            </span>
            </form>
        </div>

        <!-- 手机端搜索按钮  有bug-->
        <div class="search-hover">
            <form id="demo-2">
                <input type="search" placeholder="Search4 Menu..." class="id_search">
            </form>
        </div>


        <!-- 左侧菜单栏 -->
        <div class="skin-part">
            <div id="tree-wrap">
                <div class="side-bar">
                    <!-- 系统设置 -->
                    <ul id="menu-showhide" class="topnav menu-left-nest">
                        <li>
                            <a href="#" style="border-left:0px solid!important;" class="title-menu-left">
                                <span class="component"></span>
                                <i data-toggle="tooltip" class="entypo-cog pull-right config-wrap"></i>
                            </a>
                        </li>

                        <li>
                            <a class="tooltip-tip" href="${base}/admin/sysUser/view" title="用户管理">
                                <i class="icon icon-user"></i>
                                <span>用户管理</span>
                            </a>
                        </li>

                        <li>
                            <a class="tooltip-tip" href="RoleController/view" title="角色管理">
                                <i class="icon icon-user-group"></i>
                                <span>角色管理</span>
                            </a>
                        </li>

                        <li>
                            <a class="tooltip-tip ajax-load" href="#" title="权限管理">
                                <i class="fa fa-key"></i>
                                <span>权限管理</span>

                            </a>
                            <ul>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="FileController/view" title="文件管理">
                                        <i class="fa fa-file-image-o"></i>
                                        <span>文件管理</span></a>
                                </li>
                                <li>
                                    <a class="tooltip-tip2 ajax-load" href="blog-detail.html" title="Blog Detail">
                                        <i class="entypo-newspaper"></i>
                                        <span>Blog Details</span></a>
                                </li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
        </div>

    </div>
</#macro>

<#--右边隐藏视图-->
<#macro rightHide>
    <div class="sb-slidebar sb-right">
        <div class="right-wrapper">
            <div class="row">
                <h3>
                    <span><i class="entypo-gauge"></i>&nbsp;&nbsp;MAIN WIDGET1</span>
                </h3>
                <div class="col-lg-12">

                    <div class="widget-knob">
                        <span class="chart" style="position:relative" data-percent="86">
                            <span class="percent"></span>
                        </span>
                    </div>
                    <div class="widget-def">
                        <b>Distance traveled</b>
                        <br>
                        <i>86% to the check point</i>
                    </div>

                    <div class="widget-knob">
                        <span class="speed-car" style="position:relative" data-percent="60">
                            <span class="percent2"></span>
                        </span>
                    </div>
                    <div class="widget-def">
                        <b>The average speed</b>
                        <br>
                        <i>30KM/h avarage speed</i>
                    </div>


                    <div class="widget-knob">
                        <span class="overall" style="position:relative" data-percent="25">
                            <span class="percent3"></span>
                        </span>
                    </div>
                    <div class="widget-def">
                        <b>Overall result</b>
                        <br>
                        <i>30KM/h avarage Result</i>
                    </div>
                </div>
            </div>
        </div>

    <#--<div style="margin-top:0;" class="right-wrapper">-->
    <#--<div class="row">-->
    <#--<h3>-->
    <#--<span><i class="entypo-chat"></i>&nbsp;&nbsp;CHAT</span>-->
    <#--</h3>-->
    <#--<div class="col-lg-12">-->
    <#--<span class="label label-warning label-chat">Online</span>-->
    <#--<ul class="chat">-->
    <#--<li>-->
    <#--<a href="#">-->
    <#--<span>-->
    <#--<img alt="" class="img-chat img-circle" src="${base}/plug/portraits/thumb/men/20.jpg">-->
    <#--</span><b>Dave Junior</b>-->
    <#--<br><i>Last seen : 08:00 PM</i>-->
    <#--</a>-->
    <#--</li>-->
    <#--<li>-->
    <#--<a href="#">-->
    <#--<span>-->
    <#--<img alt="" class="img-chat img-circle" src="${base}/plug/portraits/thumb/men/21.jpg">-->
    <#--</span><b>Kenneth Lucas</b>-->
    <#--<br><i>Last seen : 07:21 PM</i>-->
    <#--</a>-->
    <#--</li>-->
    <#--<li>-->
    <#--<a href="#">-->
    <#--<span>-->
    <#--<img alt="" class="img-chat img-circle" src="${base}/plug/portraits/thumb/men/22.jpg">-->
    <#--</span><b>Heidi Perez</b>-->
    <#--<br><i>Last seen : 05:43 PM</i>-->
    <#--</a>-->
    <#--</li>-->


    <#--</ul>-->

    <#--<span class="label label-chat">Offline</span>-->
    <#--<ul class="chat">-->
    <#--<li>-->
    <#--<a href="#">-->
    <#--<span>-->
    <#--<img alt="" class="img-chat img-offline img-circle" src="${base}/plug/portraits/thumb/men/23.jpg">-->
    <#--</span><b>Dave Junior</b>-->
    <#--<br><i>Last seen : 08:00 PM</i>-->
    <#--</a>-->
    <#--</li>-->
    <#--<li>-->
    <#--<a href="#">-->
    <#--<span>-->
    <#--<img alt="" class="img-chat img-offline img-circle" src="${base}/plug/portraits/thumb/women/24.jpg">-->
    <#--</span><b>Kenneth Lucas</b>-->
    <#--<br><i>Last seen : 07:21 PM</i>-->
    <#--</a>-->
    <#--</li>-->
    <#--<li>-->
    <#--<a href="#">-->
    <#--<span>-->
    <#--<img alt="" class="img-chat img-offline img-circle" src="${base}/plug/portraits/thumb/men/25.jpg">-->
    <#--</span><b>Heidi Perez</b>-->
    <#--<br><i>Last seen : 05:43 PM</i>-->
    <#--</a>-->
    <#--</li>-->
    <#--<li>-->
    <#--<a href="#">-->
    <#--<span>-->
    <#--<img alt="" class="img-chat img-offline img-circle" src="${base}/plug/portraits/thumb/women/25.jpg">-->
    <#--</span><b>Kenneth Lucas</b>-->
    <#--<br><i>Last seen : 07:21 PM</i>-->
    <#--</a>-->
    <#--</li>-->
    <#--<li>-->
    <#--<a href="#">-->
    <#--<span>-->
    <#--<img alt="" class="img-chat img-offline img-circle" src="${base}/plug/portraits/thumb/men/26.jpg">-->
    <#--</span><b>Heidi Perez</b>-->
    <#--<br><i>Last seen : 05:43 PM</i>-->
    <#--</a>-->
    <#--</li>-->

    <#--</ul>-->
    <#--</div>-->
    <#--</div>-->
    <#--</div>-->
    </div>
</#macro>

<#--底部-->
<#macro footer>
	<div id="footer">
        <div class="text-center" style="padding: 20px;">
            Make with Love<span class="entypo-heart"></span>2019
            <a href="http://themeforest.net/item/apricot-navigation-admin-dashboard-template/7664475?WT.ac=category_item&amp;WT.z_author=themesmile">
                (Themesmile) Purchase This Item
            </a> All Rights Reserved
        </div>
    </div>
</#macro>

<#--标题-->
<#macro title>
    <div class="row">
        <div id="paper-top">
            <!-- 标题 -->
            <div class="col-lg-3">
                <h2 class="tittle-content-header">
                    <i class="icon-window"></i>
                    <span>${titleVo.title!}</span>
                </h2>

            </div>

            <!-- 欢迎div -->
            <#if (titleVo.isMsg!)=='yes'>
                <div class="col-lg-7">
                    <div class="devider-vertical visible-lg"></div>
                    <div class="tittle-middle-header">

                        <div class="alert">
                            <button type="button" class="close" data-dismiss="alert">×</button>
                            <span class="tittle-alert entypo-info-circled"></span>
                            <span>${titleVo.msgHTML!}</span>
                        </div>
                    </div>
                </div>
            <#else>
                <div class="col-lg-7">
                    <div class="devider-vertical visible-lg"></div>
                </div>
            </#if>

            <!-- END欢迎div -->

            <!-- 小控件 -->
            <#if (titleVo.isControl!)=='yes'>
            <div class="col-lg-2">
                <div class="devider-vertical visible-lg"></div>
                <div class="btn-group btn-wigdet pull-right visible-lg">
                    <div class="btn">
                        Widget
                    </div>
                    <button data-toggle="dropdown" class="btn dropdown-toggle" type="button">
                        <span class="caret"></span>
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul role="menu" class="dropdown-menu">
                        <li>
                            <a href="#">
                                <span class="entypo-plus-circled margin-iconic"></span>Add New</a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="entypo-heart margin-iconic"></span>Favorite</a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="entypo-cog margin-iconic"></span>Setting</a>
                        </li>
                    </ul>
                </div>
            </div>
            </#if>
            <!-- END小控件 -->

        </div>
    </div>

    <!-- 标题-->
    <ul id="breadcrumb">
        <li>
            <span class="entypo-home"></span>
        </li>
        <li><i class="fa fa-lg fa-angle-right"></i>
        </li>
        <li><a href="#" title="Sample page 1">${titleVo.parenttitle!}</a>
        </li>
        <li><i class="fa fa-lg fa-angle-right"></i>
        </li>
        <li><a href="#" title="Sample page 1">${titleVo.title!}</a>
        </li>
        <li class="pull-right">
            <div class="input-group input-widget">

                <input style="border-radius:15px" type="text" placeholder="Search..." class="form-control">
            </div>
        </li>
    </ul>
</#macro>

<#--通用js-->
<#macro js>
    <!-- 通用js -->
    <script type="text/javascript" src="${base}/plug/jquery/2.2.3/jquery.js"></script>
    <!--主效果-->
    <script type="text/javascript" src="${base}/plug/assets/js/preloader.js"></script>
    <script type="text/javascript" src="${base}/plug/assets/js/bootstrap.js"></script>
    <script type="text/javascript" src="${base}/plug/assets/js/app.js"></script>
    <!-- head.js -->
    <script type="text/javascript" src="${base}/plug/assets/js/load.js"></script>
    <script type="text/javascript" src="${base}/plug/assets/js/main.js"></script>
    <!-- jquery-validate 表单验证插件 -->
    <script type="text/javascript" src="${base}/plug/assets/js/validate/jquery.validate.min.js"></script>
    <script type="text/javascript" src="${base}/plug/assets/js/validate/messages_zh.min.js"></script>
    <script type="text/javascript" src="${base}/plug/assets/js/validate/jquery.validate.extend.js"></script>
    <!-- vueJS -->
    <script type="text/javascript" src="${base}/plug/assets/js/vue/vue.min.js"></script>
<#--通用-->

    <!-- bootstarp 表格 -->
    <script type="text/javascript"
            src="${base}/plug/assets/js/bootstrap/js/bootstrap-table/bootstrap-table.min.js"></script>
    <script type="text/javascript"
            src="${base}/plug/assets/js/bootstrap/js/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
    <script type="text/javascript" src="${base}/plug/assets/js/bootstrap/js/base_list.js"></script>


    <!-- 导出 -->
    <script type="text/javascript"
            src="${base}/plug/assets/js/bootstrap/extensions/export/bootstrap-table-export.js"></script>
    <script type="text/javascript" src="${base}/plug/assets/js/bootstrap/extensions/export/tableExport.js"></script>

    <!-- 弹窗 -->
    <script type="text/javascript" src="${base}/plug/assets/js/layer/layer.js"></script>
    <!-- 遮罩层 -->
    <script type="text/javascript" src="${base}/plug/assets/js/blockUI/jquery.blockUI.js"></script>
    <!-- jqueryForm序列化 -->
    <script type="text/javascript" src="${base}/js/jqueryFormSerializeJson.js"></script>


</#macro>

<#--css-->
<#macro css>
<!-- 这儿引用单独的css link -->
    <!-- Ladda for Bootstrap 3按钮加载进度插件 -->
    <link rel="stylesheet" href="${base}/plug/assets/js/button/ladda/ladda.min.css"/>
    <!-- bootstrap-table表单样式 -->
    <link rel="stylesheet" href="${base}/plug/assets/js/bootstrap/css/bootstrap-table/bootstrap-table.min.css"/>
    <!-- treeview -->
    <link rel="stylesheet" href="${base}/plug/assets/js/bootstrap/bootstrap-treeview/css/bootstrap-treeview.css"/>
</#macro>
