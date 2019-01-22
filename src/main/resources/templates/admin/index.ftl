<#include "../macro/utils.ftl"/>

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
        <@title/>
        <div class="content-wrap">
            <!-- 结束内容 -->
            <div class="row">
                <div class="col-sm-12">
                    <!-- 空白页开始-->
                    <div class="nest" id="Blank_PageClose">
                        <div class="title-alt">
                            <h6>Blank Page</h6>
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
                            Content Goes Here
                        </div>
                    </div>
                </div>
                <!-- 空白页结束 -->
            </div>
            <@footer/>
        </div>
    </div>
</div>

<!-- 右侧隐藏滑块内容 -->
<@rightHide/>

<script type="text/javascript" src="${base}/plug/assets/js/toggle_close.js"></script>
</body>
</html>
