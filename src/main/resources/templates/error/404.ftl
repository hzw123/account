<#include "../macro/utils.ftl"/>
<!DOCTYPE html>
<html>
<head>
<@head/>
<@js/>
    <link rel="stylesheet" href="${base}/plug/assets/css/extra-pages.css">
    <style type="text/css">
        /**
        *这里写单独的css样式
        */
        body {
            overflow: hidden !important;
            padding-top: 120px;
        }
    </style>

</head>

<body>

<div id="awwwards" class="right black">
    <a href="#" target="_blank">best websites of the world</a>
</div>
<!-- Preloader -->
<div id="preloader">
    <div id="status">&nbsp;</div>
</div>


<div class="logo-error">
    <h1>Springboot_v2
        <span>v1.0</span>
    </h1>
</div>

<!-- Main content -->
<section class="page-error">

    <div class="error-page">
        <h2 class="headline text-info">404</h2>
        <div class="error-content">
            <h3><i class="fa fa-warning text-yellow"></i> 哎呀！找不到网页。</h3>
            <p>
                我们找不到您要查找的页面。同时，您可以 <a class="error-link" href='../login'>返回首页</a> 或尝试使用搜索表单
            </p>
            <form class='search-form'>
                <input type="text" name="search" class='form-control' placeholder="Search"/>
            </form>
        </div>
        <!-- /.error-content -->
    </div>
    <!-- /.error-page -->

</section>

<!-- END 右侧隐藏滑块内容-->

</div>

</body>
</html>
