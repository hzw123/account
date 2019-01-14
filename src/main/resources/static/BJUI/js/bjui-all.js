/*!
 * B-JUI  v1.2 (http://b-jui.com)
 * Git@OSC (http://git.oschina.net/xknaan/B-JUI)
 * Copyright 2014 K'naan (xknaan@163.com).
 * Licensed under Apache (http://www.apache.org/licenses/LICENSE-2.0)
 */

/* ========================================================================
 * B-JUI: bjui-all.js  v1.2
 * @author K'naan (xknaan@163.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-all.js
 * ========================================================================
 * Copyright 2014 K'naan.
 * Licensed under Apache (http://www.apache.org/licenses/LICENSE-2.0)
 * ======================================================================== */

/**
 * B-JUI: bjui-core.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.core.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-core.js
 */
+function (a) {
    "use strict";
    var b = {
        JSPATH: "BJUI/",
        PLUGINPATH: "BJUI/plugins/",
        IS_DEBUG: !1,
        KeyPressed: {ctrl: !1, shift: !1},
        keyCode: {
            ENTER: 13,
            ESC: 27,
            END: 35,
            HOME: 36,
            SHIFT: 16,
            CTRL: 17,
            TAB: 9,
            LEFT: 37,
            RIGHT: 39,
            UP: 38,
            DOWN: 40,
            DELETE: 46,
            BACKSPACE: 8
        },
        eventType: {
            initUI: "bjui.initUI",
            beforeInitUI: "bjui.beforeInitUI",
            afterInitUI: "bjui.afterInitUI",
            ajaxStatus: "bjui.ajaxStatus",
            resizeGrid: "bjui.resizeGrid",
            beforeAjaxLoad: "bjui.beforeAjaxLoad",
            beforeLoadNavtab: "bjui.beforeLoadNavtab",
            beforeLoadDialog: "bjui.beforeLoadDialog",
            afterLoadNavtab: "bjui.afterLoadNavtab",
            afterLoadDialog: "bjui.afterLoadDialog",
            beforeCloseNavtab: "bjui.beforeCloseNavtab",
            beforeCloseDialog: "bjui.beforeCloseDialog",
            afterCloseNavtab: "bjui.afterCloseNavtab",
            afterCloseDialog: "bjui.afterCloseDialog"
        },
        pageInfo: {
            pageCurrent: "pageCurrent",
            pageSize: "pageSize",
            orderField: "orderField",
            orderDirection: "orderDirection"
        },
        alertMsg: {displayPosition: "topcenter", alertTimeout: 6e3},
        ajaxTimeout: 3e4,
        statusCode: {ok: 200, error: 300, timeout: 301},
        keys: {statusCode: "statusCode", message: "message"},
        ui: {windowWidth: 0, showSlidebar: !0, clientPaging: !0, overwriteHomeTab: !1},
        debug: function (a) {
            this.IS_DEBUG && ("undefined" != typeof console ? console.log(a) : alert(a))
        },
        loginInfo: {url: "login.html", title: "Login", width: 420, height: 260, mask: !0},
        loadLogin: function () {
            var b = this.loginInfo;
            a("body").dialog({
                id: "bjui-login",
                url: b.url,
                title: b.title,
                width: b.width,
                height: b.height,
                mask: b.mask
            })
        },
        init: function (c) {
            var d = a.extend({}, c);
            a.extend(b.statusCode, d.statusCode), a.extend(b.pageInfo, d.pageInfo), a.extend(b.alertMsg, d.alertMsg), a.extend(b.loginInfo, d.loginInfo), a.extend(b.ui, d.ui), d.JSPATH && (this.JSPATH = d.JSPATH), d.PLUGINPATH && (this.PLUGINPATH = d.PLUGINPATH), d.ajaxTimeout && (this.ajaxTimeout = d.ajaxTimeout), this.IS_DEBUG = d.debug || !1, this.initEnv(), a.cookie && a.cookie("bjui_theme") || !d.theme || a(this).theme("setTheme", d.theme)
        },
        initEnv: function () {
            a(window).resize(function () {
                var c = a(this).width();
                b.ui.windowWidth && b.ui.windowWidth > 600 && b.ui.windowWidth < c && (c = b.ui.windowWidth), b.initLayout(c), setTimeout(function () {
                    a(this).trigger(b.eventType.resizeGrid)
                }, 30)
            }), setTimeout(function () {
                var c = a(window).width();
                b.ui.windowWidth && b.ui.windowWidth > 600 && b.ui.windowWidth < c && (c = b.ui.windowWidth), b.initLayout(c), a(document).initui()
            }, 10)
        },
        initLayout: function (c) {
            var g, h, i, j, k, l, m, n, o, p, q, r, d = c - (b.ui.showSlidebar ? a("#bjui-sidebar").width() + 6 : 6),
                e = a(window).height() - a("#bjui-header").height() - a("#bjui-footer").outerHeight(),
                f = a("#bjui-navtab").find(".tabsPageHeader").height();
            b.ui.windowWidth && a("#bjui-window").width(c), b.windowWidth = c, a("#bjui-container").height(e), a("#bjui-navtab").width(d), a("#bjui-leftside, #bjui-sidebar, #bjui-sidebar-s, #bjui-splitBar, #bjui-splitBarProxy").css({height: "100%"}), a("#bjui-navtab .tabsPageContent").height(e - f), setTimeout(function () {
                a("#bjui-navtab > .tabsPageContent > .navtabPage").resizePageH(), a("#bjui-navtab > .tabsPageContent > .navtabPage").find(".bjui-layout").resizePageH()
            }, 10), g = a("body").data("bjui.navbar.width"), h = a("#bjui-header"), i = h.find(".bjui-navbar-toggle"), j = h.find(".bjui-navbar-logo"), k = a("#bjui-navbar-collapse"), l = k.find(".bjui-navbar-right"), g || (g = {
                logoW: j.outerWidth(),
                navW: l.outerWidth()
            }, a("body").data("bjui.navbar.width", g)), g && (c - g.logoW < g.navW ? (i.show(), k.addClass("collapse menu")) : (i.hide(), k.removeClass("collapse menu in"))), m = a("#bjui-hnav-navbar-box"), n = m.find("> #bjui-hnav-navbar"), o = m.prev(), p = m.next(), q = m.width(), r = 0, n.find("> li").each(function () {
                var c = a(this);
                r += c.outerWidth(), r > q ? (p.show(), m.data("hnav.move", !0).data("hnav.liw", r)) : (o.hide(), p.hide(), m.removeData("hnav.move"))
            })
        },
        regional: {},
        setRegional: function (a, c) {
            b.regional[a] = c
        },
        getRegional: function (a) {
            var c, d, e;
            if (String(a).indexOf(".") >= 0) {
                for (d = String(a).split("."), e = 0; e < d.length; e++) c = c ? c[d[e]] : b.regional[d[e]];
                return c
            }
            return b.regional[a]
        },
        doRegional: function (b, c) {
            return a.each(c, function (a, c) {
                b = b.replaceAll("#" + a + "#", c)
            }), b
        }
    };
    window.BJUI = b
}(jQuery);
/**
 * B-JUI: bjui-regional.zh-CN.js  v1.2
 * @author K'naan (xknaan@163.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-regional.zh-CN.js
 */
+function (a) {
    "use strict";
    a(function () {
        BJUI.setRegional("alertmsg", {
            title: {
                error: "错误提示",
                info: "信息提示",
                warn: "警告信息",
                correct: "成功信息",
                confirm: "确认信息"
            }, btnMsg: {ok: "确定", yes: "是", no: "否", cancel: "取消"}
        }), BJUI.setRegional("dialog", {
            close: "关闭",
            maximize: "最大化",
            restore: "还原",
            minimize: "最小化",
            title: "弹出窗口"
        }), BJUI.setRegional("orderby", {asc: "升序", desc: "降序"}), BJUI.setRegional("pagination", {
            total: "总记录数/总页数",
            first: "首页",
            last: "末页",
            prev: "上一页",
            next: "下一页",
            jumpto: "输入跳转页码，回车确认",
            jump: "跳转",
            page: "页",
            refresh: "刷新"
        }), BJUI.setRegional("datagrid", {
            asc: "升序",
            desc: "降序",
            showhide: "显示/隐藏 列",
            filter: "过滤",
            clear: "清除",
            lock: "锁定列",
            unlock: "解除锁定",
            add: "添加",
            edit: "编辑",
            save: "保存",
            update: "更新",
            cancel: "取消",
            del: "删除",
            prev: "上一条",
            next: "下一条",
            refresh: "刷新",
            query: "查询",
            "import": "导入",
            "export": "导出",
            all: "全部",
            "true": "是",
            "false": "否",
            selectMsg: "未选中任何行！",
            editMsg: "请先保存编辑行！",
            saveMsg: "没有需要保存的行！",
            delMsg: "确定要删除该行吗？",
            delMsgM: "确定要删除选中行？"
        }), BJUI.setRegional("progressmsg", "正在努力加载数据，请稍等..."), BJUI.setRegional("datepicker", {
            close: "关闭",
            prev: "上月",
            next: "下月",
            clear: "清空",
            ok: "确定",
            dayNames: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        }), BJUI.setRegional("navtabCM", {
            refresh: "刷新本标签",
            close: "关闭本标签",
            closeother: "关闭其他标签",
            closeall: "关闭所有标签"
        }), BJUI.setRegional("dialogCM", {
            refresh: "刷新本窗口",
            close: "关闭本窗口",
            closeother: "关闭其他窗口",
            closeall: "关闭所有窗口"
        }), BJUI.setRegional("upload", {
            upConfirm: "开始上传",
            upPause: "暂停上传",
            upCancel: "取消上传"
        }), BJUI.setRegional("statusCode_503", "服务器当前负载过大或者正在维护！"), BJUI.setRegional("sessiontimeout", "会话超时，请重新登陆！"), BJUI.setRegional("plhmsg", "占位符对应的选择器无有效值！"), BJUI.setRegional("nocheckgroup", '未定义选中项的组名[复选框的"data-group"]！'), BJUI.setRegional("notchecked", "未选中任何一项！"), BJUI.setRegional("selectmsg", "请选择一个选项！"), BJUI.setRegional("validatemsg", "提交的表单中 [{0}] 个字段有错误，请更正后再提交！"), BJUI.setRegional("uititle", "B-JUI"), BJUI.setRegional("maintab", "我的主页"), a.validator && a.validator.config({
            defaultMsg: "{0}格式不正确",
            loadingMsg: "正在验证...",
            rules: {
                digits: [/^\d+$/, "请输入整数"],
                number: [/^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/, "请输入有效的数字"],
                letters: [/^[a-z]+$/i, "{0}只能输入字母"],
                tel: [/^(?:(?:0\d{2,3}[\- ]?[1-9]\d{6,7})|(?:[48]00[\- ]?[1-9]\d{6}))$/, "电话格式不正确"],
                mobile: [/^1[3-9]\d{9}$/, "手机号格式不正确"],
                email: [/^[\w\+\-]+(\.[\w\+\-]+)*@[a-z\d\-]+(\.[a-z\d\-]+)*\.([a-z]{2,4})$/i, "邮箱格式不正确"],
                qq: [/^[1-9]\d{4,}$/, "QQ号格式不正确"],
                date: [/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/, "请输入正确的日期，例：yyyy-MM-dd"],
                time: [/^(2[0123]|(1|0?)[0-9]){1}:([0-5][0-9]){1}:([0-5][0-9]){1}$/, "请输入正确的时间，例：HH:mm:ss"],
                datetime: [/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(2[0123]|(1|0?)[0-9]){1}:([0-5][0-9]){1}:([0-5][0-9]){1}$/, "请输入正确的日期时间，例：yyyy-MM-dd HH:mm:ss"],
                ID_card: [/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/, "请输入正确的身份证号码"],
                url: [/^(https?|ftp):\/\/[^\s]+$/i, "网址格式不正确"],
                postcode: [/^[1-9]\d{5}$/, "邮政编码格式不正确"],
                chinese: [/^[\u0391-\uFFE5]+$/, "请输入中文"],
                username: [/^\w{3,12}$/, "请输入3-12位数字、字母、下划线"],
                password: [/^[0-9a-zA-Z]{6,16}$/, "密码由6-16位数字、字母组成"],
                pattern: function (a, b) {
                    if (!b) return !0;
                    var c = a.value.parseDate(b);
                    return c ? !0 : this.renderMsg("错误的日期时间格式！", b)
                },
                accept: function (a, b) {
                    if (!b) return !0;
                    var c = b[0];
                    return "*" === c || new RegExp(".(?:" + (c || "png|jpg|jpeg|gif") + ")$", "i").test(a.value) || this.renderMsg("只接受{1}后缀", c.replace("|", ","))
                }
            }
        }), a.validator && a.validator.config({
            messages: {
                required: "{0}不能为空",
                remote: "{0}已被使用",
                integer: {"*": "请输入整数", "+": "请输入正整数", "+0": "请输入正整数或0", "-": "请输入负整数", "-0": "请输入负整数或0"},
                match: {
                    eq: "{0}与{1}不一致",
                    neq: "{0}与{1}不能相同",
                    lt: "{0}必须小于{1}",
                    gt: "{0}必须大于{1}",
                    lte: "{0}必须小于或等于{1}",
                    gte: "{0}必须大于或等于{1}"
                },
                range: {rg: "请输入{1}到{2}的数", gte: "请输入大于或等于{1}的数", lte: "请输入小于或等于{1}的数"},
                checked: {eq: "请选择{1}项", rg: "请选择{1}到{2}项", gte: "请至少选择{1}项", lte: "请最多选择{1}项"},
                length: {
                    eq: "请输入{1}个字符",
                    rg: "请输入{1}到{2}个字符",
                    gte: "请至少输入{1}个字符",
                    lte: "请最多输入{1}个字符",
                    eq_2: "",
                    rg_2: "",
                    gte_2: "",
                    lte_2: ""
                }
            }
        })
    })
}(jQuery);
/**
 * B-JUI: bjui-frag.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.frag.xml (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-frag.js
 */
+function () {
    "use strict";
    BJUI.setRegional("alertmsg", {
        title: {
            error: "Error",
            info: "Info",
            warn: "Warning",
            correct: "Correct",
            confirm: "Confirm"
        }, btnMsg: {ok: "OK", yes: "YES", no: "NO", cancel: "Cancel"}
    }), BJUI.setRegional("dialog", {
        close: "Close",
        maximize: "Maximize",
        restore: "Restore",
        minimize: "Minimize",
        title: "Popup window"
    }), BJUI.setRegional("orderby", {asc: "Asc", desc: "Desc"}), BJUI.setRegional("pagination", {
        first: "First page",
        last: "Last page",
        prev: "Prev page",
        next: "Next page",
        jumpto: "Jump page number",
        jump: "Jump"
    }), BJUI.setRegional("datagrid", {
        asc: "ASC",
        desc: "DESC",
        showhide: "Show/Hide columns",
        filter: "Filter",
        clear: "Clear",
        lock: "Lock",
        unlock: "Unlock",
        add: "Add",
        edit: "Edit",
        save: "Save",
        update: "Update",
        cancel: "Cancel",
        del: "Delete",
        prev: "Prev",
        next: "Next",
        refresh: "Refresh",
        query: "Query",
        "import": "Import",
        "export": "Export",
        all: "All",
        "true": "True",
        "false": "False",
        selectMsg: "Not selected any rows!",
        saveMsg: "No rows need to save!",
        editMsg: "Please save the edited row!",
        delMsg: "Sure you want to delete this row?",
        delMsgM: "Sure you want to delete selected rows?"
    }), BJUI.setRegional("progressmsg", "Data loading, please waiting..."), BJUI.setRegional("datepicker", {
        close: "Close",
        prev: "Prev month",
        next: "Next month",
        clear: "Clear",
        ok: "OK",
        dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }), BJUI.setRegional("navtabCM", {
        refresh: "Refresh navtab",
        close: "Close navtab",
        closeother: "Close other navtab",
        closeall: "Close all navtab"
    }), BJUI.setRegional("dialogCM", {
        refresh: "Refresh dialog",
        close: "Close dialog",
        closeother: "Close other dialog",
        closeall: "Close all dialog"
    }), BJUI.setRegional("upload", {
        upConfirm: "Start upload",
        upPause: "Pause upload",
        upCancel: "Cancel upload"
    }), BJUI.setRegional("statusCode_503", "The current server load is too large or is down for maintenance!"), BJUI.setRegional("sessiontimeout", "Session timeout, please login!"), BJUI.setRegional("plhmsg", "Placeholder corresponding selector None Valid!"), BJUI.setRegional("nocheckgroup", 'Undefined group name selected item [check box "data-group"]!'), BJUI.setRegional("notchecked", "Unchecked any one!"), BJUI.setRegional("selectmsg", "Please select one option!"), BJUI.setRegional("validatemsg", "Submitted form data has [{0}] field an error, please after modified submitting!"), BJUI.setRegional("uititle", "B-JUI"), BJUI.setRegional("maintab", "My home"), window.FRAG = {
        dialog: '<div class="bjui-dialog bjui-dialog-container" style="top:150px; left:300px;">    <div class="dialogHeader" onselectstart="return false;" oncopy="return false;" onpaste="return false;" oncut="return false;">        <a class="close" href="#close" title="#close#"><i class="fa fa-times-circle"></i></a>        <a class="maximize" href="#maximize" title="#maximize#"><i class="fa fa-plus-circle"></i></a>        <a class="restore" href="#restore" title="#restore#"><i class="fa fa-history"></i></a>        <a class="minimize" href="#minimize" title="#minimize#"><i class="fa fa-minus-circle"></i></a>        <h1><span><i class="fa fa-th-large"></i></span> <span class="title">#title#</span></h1>    </div>    <div class="dialogContent unitBox"></div>    <div class="resizable_h_l" tar="nw"></div>    <div class="resizable_h_r" tar="ne"></div>    <div class="resizable_h_c" tar="n"></div>    <div class="resizable_c_l" tar="w" style="height:100%;"></div>    <div class="resizable_c_r" tar="e" style="height:100%;"></div>    <div class="resizable_f_l" tar="sw"></div>    <div class="resizable_f_r" tar="se"></div>    <div class="resizable_f_c" tar="s"></div></div>',
        taskbar: '<div id="bjui-taskbar" style="left:0px; display:none;">    <div class="taskbarContent">        <ul></ul>    </div>    <div class="taskbarLeft taskbarLeftDisabled"><i class="fa fa-angle-double-left"></i></div>    <div class="taskbarRight"><i class="fa fa-angle-double-right"></i></div></div>',
        splitBar: '<div id="bjui-splitBar"></div>',
        splitBarProxy: '<div id="bjui-splitBarProxy"></div>',
        resizable: '<div id="bjui-resizable" class="bjui-resizable"></div>',
        alertBackground: '<div class="bjui-alertBackground"></div>',
        maskBackground: '<div class="bjui-maskBackground bjui-ajax-mask"></div>',
        maskProgress: '<div class="bjui-maskProgress bjui-ajax-mask"><i class="fa fa-cog fa-spin"></i>&nbsp;&nbsp;#msg#<div class="progressBg"><div class="progress"></div></div></div>',
        progressBar_custom: '<div id="bjui-progressBar-custom" class="progressBar"><i class="fa fa-cog fa-spin"></i> <span></span></div>',
        dialogMask: '<div class="bjui-dialogBackground"></div>',
        orderby: '<a href="javascript:;" class="order asc" data-order-direction="asc" title="#asc#"><i class="fa fa-angle-up"></i></a><a href="javascript:;" class="order desc" data-order-direction="desc" title="#desc#"><i class="fa fa-angle-down"></i></a>',
        slidePanel: '<div class="panel panel-default">    <div class="panel-heading">        <h4 class="panel-title"><a data-toggle="collapse" data-parent="#bjui-accordionmenu" href="##id#" class="#class#">#icon#&nbsp;#title#<b>#righticon#</b></a></h4>    </div>    <div id="#id#" class="panel-collapse collapse#bodyclass#">        <div class="panel-body">        </div>    </div></div>',
        pagination: '<ul class="pagination">    <li class="j-first">        <a class="first" href="javascript:;"><i class="fa fa-step-backward"></i> #first#</a>        <span class="first"><i class="fa fa-step-backward"></i> #first#</span>    </li>    <li class="j-prev">        <a class="previous" href="javascript:;"><i class="fa fa-backward"></i> #prev#</a>        <span class="previous"><i class="fa fa-backward"></i> #prev#</span>    </li>    #pageNumFrag#    <li class="j-next">        <a class="next" href="javascript:;">#next# <i class="fa fa-forward"></i></a>        <span class="next">#next# <i class="fa fa-forward"></i></span>    </li>    <li class="j-last">        <a class="last" href="javascript:;">#last# <i class="fa fa-step-forward"></i></a>        <span class="last">#last# <i class="fa fa-step-forward"></i></span>    </li>    <li class="jumpto"><span class="p-input"><input class="form-control input-sm-pages" type="text" size="2.6" value="#pageCurrent#" title="#jumpto#"></span><a class="goto" href="javascript:;" title="#jump#"><i class="fa fa-chevron-right"></i></a></li></ul>',
        gridPaging: '<ul class="pagination">    <li class="page-total">        <span title="#total#">#count#</span>    </li>    <li class="page-jumpto"><span class="page-input"><input class="form-control input-sm-pages" type="text" size="3.2" value="#pageCurrent#" title="#jumpto#"></span></li>    <li class="page-first btn-nav">        <a href="javascript:;" title="#first#"><i class="fa fa-step-backward"></i></a>    </li>    <li class="page-prev btn-nav">        <a href="javascript:;" title="#prev#"><i class="fa fa-backward"></i></a>    </li>    <li class="page-next btn-nav">        <a href="javascript:;" title="#next#"><i class="fa fa-forward"></i></a>    </li>    <li class="page-last btn-nav">        <a href="javascript:;" title="#last#"><i class="fa fa-step-forward"></i></a>    </li></ul>',
        gridPageNum: '<li class="page-num#active#"><a href="javascript:;">#num#</a></li>',
        gridMenu: '<div class="datagrid-menu-box">    <ul>        <li class="datagrid-li-asc"><a href="javascript:;"><span class="icon"><i class="fa fa-sort-amount-asc"></i></span><span class="title">#asc#</span></a></li>        <li class="datagrid-li-desc"><a href="javascript:;"><span class="icon"><i class="fa fa-sort-amount-desc"></i></span><span class="title">#desc#</span></a></li>        <li class="datagrid-li-filter"><a href="javascript:;"><span class="icon"><i class="fa fa-filter"></i></span><span class="title">#filter#</span><span class="arrow"></span></a></li>        <li class="datagrid-li-showhide"><a href="javascript:;"><span class="icon"><i class="fa fa-check-square-o"></i></span><span class="title">#showhide#</span><span class="arrow"></span></a></li>        <li class="datagrid-li-lock"><a href="javascript:;"><span class="icon"><i class="fa fa-lock"></i></span><span class="title">#lock#</span></a></li>        <li class="datagrid-li-unlock disable"><a href="javascript:;"><span class="icon"><i class="fa fa-unlock"></i></span><span class="title">#unlock#</span></a></li>    </ul></div>',
        gridFilter: '<div class="datagrid-filter-box"><fieldset><legend>#label#</legend><span class="filter-a"></span><span class="filter-and"><select data-toggle="selectpicker" data-container="true" data-width="100%"><option value="and">AND</option><option value="or">OR</option></select></span><span class="filter-b"></span><span class="filter-ok"><button type="button" class="btn-green ok" data-icon="check">#filter#</button><button type="button" class="btn-orange clear" data-icon="remove">#clear#</button></span></fieldset></div>',
        gridShowhide: '<li data-index="#index#" class="datagrid-col-check"><a href="javascript:;"><i class="fa fa-check-square-o"></i>#label#</a></li>',
        gridEditBtn: '<button type="button" class="btn-green edit" data-icon="edit">#edit#</button><button type="button" class="btn-green update" data-icon="edit">#update#</button><button type="button" class="btn-green save" data-icon="check">#save#</button><button type="button" class="btn-orange cancel" data-icon="undo">#cancel#</button><button type="button" class="btn-orange delete" data-icon="remove">#del#</button>',
        gridDialogEditBtns: '<ul>    <li class="pull-left"><button type="button" class="btn btn-orange prev" data-icon="arrow-up">#prev#</button></li>    <li class="pull-left"><button type="button" class="btn btn-orange next" data-icon="arrow-down">#next#</button></li>    <li><button type="button" class="btn btn-red cancel" data-icon="remove">#cancel#</button></li>    <li><button type="button" class="btn btn-default save" data-icon="save">#save#</button></li></ul>',
        alertBoxFrag: '<div id="bjui-alertMsgBox" class="bjui-alert"><div class="alertContent"><div class="#type#"><div class="alertInner"><h1><i class="fa #fa#"></i>#title#</h1><div class="msg">#message#</div></div><div class="toolBar"><ul>#btnFragment#</ul></div></div></div></div>',
        alertBtnFrag: '<li><button class="btn btn-#class#" rel="#callback#" type="button">#btnMsg#</button></li>',
        calendarFrag: '<div id="bjui-calendar">    <div class="main">        <a class="close" href="javascript:;" title="#close#"><i class="fa fa-times-circle"></i></a>        <div class="head">            <table width="100%" border="0" cellpadding="0" cellspacing="2">                <tr>                    <td width="20"><a class="prev" href="javascript:;" title="#prev#"><i class="fa fa-arrow-left"></i></a></td>                    <td><select name="year"></select></td>                    <td><select name="month"></select></td>                    <td width="20"><a class="next" href="javascript:;" title="#next#"><i class="fa fa-arrow-right"></i></a></td>                </tr>            </table>        </div>        <div class="body">            <dl class="dayNames"><dt>7</dt><dt>1</dt><dt>2</dt><dt>3</dt><dt>4</dt><dt>5</dt><dt>6</dt></dl>            <dl class="days"><!-- date list --></dl>            <div style="clear:both;height:0;line-height:0"></div>        </div>        <div class="foot">            <table class="time">                <tr>                    <td>                        <input type="text" class="hh" maxlength="2" data-type="hh" data-start="0" data-end="23">:<input                         type="text" class="mm" maxlength="2" data-type="mm" data-start="0" data-end="59">:<input                         type="text" class="ss" maxlength="2" data-type="ss" data-start="0" data-end="59">                    </td>                    <td><ul><li class="up" data-add="1">&and;</li><li class="down">&or;</li></ul></td>                </tr>            </table>            <button type="button" class="clearBtn btn btn-orange">#clear#</button>            <button type="button" class="okBtn btn btn-default">#ok#</button>        </div>        <div class="tm">            <ul class="hh">                <li>0</li>                <li>1</li>                <li>2</li>                <li>3</li>                <li>4</li>                <li>5</li>                <li>6</li>                <li>7</li>                <li>8</li>                <li>9</li>                <li>10</li>                <li>11</li>                <li>12</li>                <li>13</li>                <li>14</li>                <li>15</li>                <li>16</li>                <li>17</li>                <li>18</li>                <li>19</li>                <li>20</li>                <li>21</li>                <li>22</li>                <li>23</li>            </ul>            <ul class="mm">                <li>0</li>                <li>5</li>                <li>10</li>                <li>15</li>                <li>20</li>                <li>25</li>                <li>30</li>                <li>35</li>                <li>40</li>                <li>45</li>                <li>50</li>                <li>55</li>            </ul>            <ul class="ss">                <li>0</li>                <li>10</li>                <li>20</li>                <li>30</li>                <li>40</li>                <li>50</li>            </ul>        </div>    </div></div>',
        spinnerBtn: '<ul class="bjui-spinner"><li class="up" data-add="1">&and;</li><li class="down">&or;</li></ul>',
        lookupBtn: '<a class="bjui-lookup" href="javascript:;" data-toggle="lookupbtn"><i class="fa fa-search"></i></a>',
        dateBtn: '<a class="bjui-lookup" href="javascript:;" data-toggle="datepickerbtn"><i class="fa fa-calendar"></i></a>',
        navtabCM: '<ul id="bjui-navtabCM">    <li rel="reload"><span class="icon"><i class="fa fa-refresh"></i></span><span class="title">#refresh#</span></li>    <li rel="closeCurrent"><span class="icon"><i class="fa fa-remove"></i></span><span class="title">#close#</li>    <li rel="closeOther"><span class="icon"><i class="fa fa-remove"></i></span><span class="title">#closeother#</li>    <li rel="closeAll"><span class="icon"><i class="fa fa-remove"></i></span><span class="title">#closeall#</li></ul>',
        dialogCM: '<ul id="bjui-dialogCM">    <li rel="reload"><span class="icon"><i class="fa fa-refresh"></i></span><span class="title">#refresh#</span></li>    <li rel="closeCurrent"><span class="icon"><i class="fa fa-remove"></i></span><span class="title">#close#</span></li>    <li rel="closeOther"><span class="icon"><i class="fa fa-remove"></i></span><span class="title">#closeother#</span></li>    <li rel="closeAll"><span class="icon"><i class="fa fa-remove"></i></span><span class="title">#closeall#</span></li></ul>',
        externalFrag: '<iframe src="{url}" style="width:100%;height:{height};" frameborder="no" border="0" marginwidth="0" marginheight="0"></iframe>',
        uploadTemp: '<div id="{fileId}" class="item">    <div class="info">        <span class="up_filename">{fileName}</span><span class="up_confirm" title="#upConfirm#"><i class="fa fa-play-circle-o"></i></span><span class="up_pause" title="#upPause#"><span class="glyphicon glyphicon-pause"></span></span><span class="up_cancel" title="#upCancel#"><i class="fa fa-times-circle-o"></i></span>    </div>    <div class="preview"><span class="img"></span></div>    <div class="progress"><div class="bar"></div></div>    <span class="percent">{percent}</span>    <span class="filesize"><span class="uploadedsize">{uploadedSize}</span>/<span class="totalsize">{fileSize}</span></span></div>',
        uploadFrag: '<input class="bjui-upload-select-file" style="display:none;" type="file" name="fileselect[]" #multi# accept="#accept#"><a href="javascript:void(0)" class="btn btn-default bjui-upload-select">#btnTxt#</a><div class="queue"></div>',
        statusCode_503: "HTTP status 503, #statusCode_503#",
        sessionTimout: "#sessiontimeout#",
        alertPlhMsg: "#plhmsg#",
        alertNoCheckGroup: "#nocheckgroup#",
        alertNotChecked: "#notchecked#",
        alertSelectMsg: "#selectmsg#",
        validateErrorMsg: "#validatemsg#",
        uiTitle: "#uititle#",
        mainTabTitle: "#mynavtab#"
    }
}(jQuery);
/**
 * B-JUI: bjui-extends.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.core.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-extends.js
 */
+function (a) {
    "use strict";
    a.fn.extend({
        ajaxUrl: function (b) {
            var c = a(this);
            c.trigger(BJUI.eventType.beforeAjaxLoad), b.loadingmask && c.trigger(BJUI.eventType.ajaxStatus), a.ajax({
                type: b.type || "GET",
                url: b.url,
                data: b.data || {},
                cache: !1,
                dataType: "html",
                timeout: BJUI.ajaxTimeout,
                success: function (d) {
                    var e = d.toJson(), f = c.find("> .bjui-ajax-mask");
                    e[BJUI.keys.statusCode] ? (e[BJUI.keys.statusCode] == BJUI.statusCode.error ? (e[BJUI.keys.message] && c.alertmsg("error", e[BJUI.keys.message]), c.closest(".bjui-layout").length || (c.closest(".navtab-panel").length ? c.navtab("closeCurrentTab") : c.dialog("closeCurrent"))) : e[BJUI.keys.statusCode] == BJUI.statusCode.timeout && (c.closest(".bjui-dialog").length && c.dialog("closeCurrent"), c.closest(".navtab-panel").length && c.navtab("closeCurrentTab"), a("body").alertmsg("info", e[BJUI.keys.message] || BJUI.regional.sessiontimeout), BJUI.loadLogin()), f.fadeOut("normal", function () {
                        a(this).remove()
                    })) : (c.empty().html(d).append(f).initui(), a.isFunction(b.callback) && b.callback(d))
                },
                error: function (a, b, d) {
                    c.bjuiajax("ajaxError", a, b, d), c.closest(".bjui-layout").length || (c.closest(".navtab-panel").length ? c.navtab("closeCurrentTab") : c.dialog("closeCurrent")), c.trigger("bjui.ajaxError")
                },
                statusCode: {
                    503: function (a, b, d) {
                        c.alertmsg("error", FRAG.statusCode_503.replace("#statusCode_503#", BJUI.regional.statusCode_503) || d)
                    }
                }
            })
        }, loadUrl: function (b, c, d) {
            a(this).ajaxUrl({url: b, data: c, callback: d})
        }, doAjax: function (b) {
            var d, e, c = a(this);
            return b.url ? b.callback ? (b.callback = b.callback.toFunc(), b.loadingmask && (d = c.getPageTarget(), d.trigger(BJUI.eventType.ajaxStatus), e = d.find("> .bjui-ajax-mask")), b.type || (b.type = "POST"), b.dataType || (b.dataType = "json"), b.cache || (b.cache = !1), b.timeout = BJUI.ajaxTimeout, b.success = function (c) {
                e ? b.callback ? a.when(b.callback(c)).done(function () {
                    d.trigger("bjui.ajaxStop")
                }) : d.trigger("bjui.ajaxStop") : b.callback(c)
            }, b.error = b.error || function (a, b, f) {
                c.bjuiajax("ajaxError", a, b, f), e && d.trigger("bjui.ajaxError")
            }, a.ajax(b), void 0) : (BJUI.debug("The ajax callback is undefined!"), void 0) : (BJUI.debug("The ajax url is undefined!"), void 0)
        }, getPageTarget: function () {
            var b;
            return b = this.closest(".bjui-layout").length ? this.closest(".bjui-layout") : this.closest(".navtab-panel").length ? a.CurrentNavtab : a.CurrentDialog
        }, resizePageH: function () {
            return this.each(function () {
                if (!a(this).closest(".tab-content").length) {
                    var b = a(this), c = b.find("> .bjui-pageHeader"), d = b.find("> .bjui-pageContent"),
                        e = b.find("> .bjui-pageFooter"), f = c.outerHeight() || 0, g = e.outerHeight() || 0;
                    b.hasClass("navtabPage") && b.is(":hidden") && (b.show(), f = c.outerHeight() || 0, g = e.outerHeight() || 0, b.hide()), e.css("bottom") && (g += parseInt(e.css("bottom")) || 0), 0 == g && b.hasClass("dialogContent") && (g = 5), d.css({
                        top: f,
                        bottom: g
                    })
                }
            })
        }, getMaxIndexObj: function (b) {
            var c = 0, d = 0;
            return b.each(function (b) {
                var e = parseInt(a(this).css("zIndex")) || 1;
                e > c && (c = e, d = b)
            }), b.eq(d)
        }, serializeJson: function () {
            var b = {}, c = this.serializeArray();
            return a.each(c, function () {
                void 0 !== b[this.name] ? (b[this.name].push || (b[this.name] = [b[this.name]]), b[this.name].push(this.value || "")) : b[this.name] = this.value || ""
            }), b
        }, isTag: function (b) {
            return b ? a(this).prop("tagName") ? a(this)[0].tagName.toLowerCase() == b ? !0 : !1 : !1 : !1
        }, isBind: function (b) {
            var c = a(this).data("events");
            return c && b && c[b]
        }, log: function (a) {
            return this.each(function () {
                console && console.log("%s: %o", a, this)
            })
        }
    }), a.extend(String.prototype, {
        isPositiveInteger: function () {
            return new RegExp(/^[1-9]\d*$/).test(this)
        }, isInteger: function () {
            return new RegExp(/^\d+$/).test(this)
        }, isNumber: function () {
            return new RegExp(/^([-]{0,1}(\d+)[\.]+(\d+))|([-]{0,1}(\d+))$/).test(this)
        }, includeChinese: function () {
            return new RegExp(/[\u4E00-\u9FA5]/).test(this)
        }, trim: function () {
            return this.replace(/(^\s*)|(\s*$)|\r|\n/g, "")
        }, startsWith: function (a) {
            return 0 === this.indexOf(a)
        }, endsWith: function (a) {
            var b = this.length - a.length;
            return b >= 0 && this.lastIndexOf(a) === b
        }, replaceSuffix: function (a) {
            return this.replace(/\[[0-9]+\]/, "[" + a + "]").replace("#index#", a)
        }, replaceSuffix2: function (a) {
            return this.replace(/\-(i)([0-9]+)$/, "-i" + a).replace("#index#", a)
        }, trans: function () {
            return this.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
        }, encodeTXT: function () {
            return this.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll(" ", "&nbsp;")
        }, replaceAll: function (a, b) {
            return this.replace(new RegExp(a, "gm"), b)
        }, replacePlh: function (b) {
            return b = b || a(document), this.replace(/{\/?[^}]*}/g, function (a) {
                var c = b.find(a.replace(/[{}]+/g, ""));
                return c && c.val() ? c.val() : a
            })
        }, replaceMsg: function (a) {
            return this.replace(new RegExp("({.*})", "g"), a)
        }, replaceTm: function (a) {
            return a ? this.replace(RegExp("({[A-Za-z_]+[A-Za-z0-9_-]*})", "g"), function (b) {
                return a[b.replace(/[{}]+/g, "")]
            }) : this
        }, replaceTmById: function (b) {
            var c = b || a(document);
            return this.replace(RegExp("({[A-Za-z_]+[A-Za-z0-9_-]*})", "g"), function (a) {
                var b = c.find("#" + a.replace(/[{}]+/g, ""));
                return b.val() ? b.val() : a
            })
        }, isFinishedTm: function () {
            return !new RegExp("{/?[^}]*}").test(this)
        }, skipChar: function (a) {
            return this && 0 !== this.length ? this.charAt(0) === a ? this.substring(1).skipChar(a) : this : ""
        }, isValidPwd: function () {
            return new RegExp(/^([_]|[a-zA-Z0-9]){6,32}$/).test(this)
        }, isValidMail: function () {
            return new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(this.trim())
        }, isSpaces: function () {
            var a, b;
            for (a = 0; a < this.length; a += 1) if (b = this.charAt(a), " " != b && "\n" != b && "   " != b && "\r" != b) return !1;
            return !0
        }, isPhone: function () {
            return new RegExp(/(^([0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/).test(this)
        }, isUrl: function () {
            return new RegExp(/^[a-zA-z]+:\/\/([a-zA-Z0-9\-\.]+)([-\w .\/?%&=:]*)$/).test(this)
        }, isExternalUrl: function () {
            return this.isUrl() && -1 == this.indexOf("://" + document.domain)
        }, toBool: function () {
            return "true" === this.toLowerCase() ? !0 : !1
        }, toJson: function () {
            var a = this;
            try {
                return "object" == typeof a && (a = a.toString()), a.trim().match("^{(.+:.+,*){1,}}$") ? JSON.parse(this) : this
            } catch (b) {
                return this
            }
        }, toObj: function () {
            var a = null;
            try {
                a = new Function("return " + this)()
            } catch (b) {
                a = this, BJUI.debug('String toObj：Parse "String" to "Object" error! Your str is: ' + this)
            }
            return a
        }, toFunc: function () {
            var a, b, c;
            if (!this || 0 == this.length) return void 0;
            if (this.startsWith("function")) return new Function("return " + this)();
            for (a = this.split("."), b = window, c = 0; c < a.length; c++) b = b[a[c]];
            return "function" == typeof b ? b : void 0
        }, setUrlParam: function (a, b) {
            var g, e, f, h, i, c = "", d = this;
            if (-1 == d.indexOf("?")) return d + "?" + a + "=" + b;
            if (c = d.substr(d.indexOf("?") + 1), e = "", f = "", h = "0", -1 != c.indexOf("&")) {
                g = c.split("&");
                for (i in g) g[i].split("=")[0] == a ? (f = b, h = "1") : f = g[i].split("=")[1], e = e + g[i].split("=")[0] + "=" + f + "&";
                e = e.substr(0, e.length - 1), "0" == h && e == c && (e = e + "&" + a + "=" + b)
            } else -1 != c.indexOf("=") ? (g = c.split("="), g[0] == a ? (f = b, h = "1") : f = g[1], e = g[0] + "=" + f, "0" == h && e == c && (e = e + "&" + a + "=" + b)) : e = a + "=" + b;
            return d.substr(0, d.indexOf("?")) + "?" + e
        }
    }), a.extend(Function.prototype, {
        toFunc: function () {
            return this
        }
    }), a.extend(Array.prototype, {
        remove: function (a) {
            return 0 > a ? this : this.slice(0, a).concat(this.slice(a + 1, this.length))
        }, unique: function () {
            var b, a = new Array;
            for (this.sort(), b = 0; b < this.length; b++) this[b] != this[b + 1] && (a[a.length] = this[b]);
            return a
        }, myIndexOf: function (a) {
            if (!this || !this.length) return -1;
            for (var c, b = 0; c = this[b]; b++) if (c == a) return b;
            return -1
        }, toJson: function () {
            var b = {}, c = this;
            return a.each(c, function () {
                void 0 !== b[this.name] ? (b[this.name].push || (b[this.name] = [b[this.name]]), b[this.name].push(this.value || "")) : b[this.name] = this.value || ""
            }), b
        }
    }), a.isJson = function (b) {
        var c = !0;
        try {
            c = a.parseJSON(b)
        } catch (d) {
            return !1
        }
        return c ? !0 : !1
    }
}(jQuery);
/**
 * B-JUI: bjui-basedrag.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.drag.js (author:Roger Wu)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-basedrag.js
 */
+function (a) {
    "use strict";

    function c(c) {
        var d = arguments, e = c;
        return this.each(function () {
            var f = a(this), g = a.extend({}, f.data(), "object" == typeof c && c), h = f.data("bjui.basedrag");
            h || f.data("bjui.basedrag", h = new b(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]()) : h.init()
        })
    }

    var d, b = function (b, c) {
        this.$element = a(b), this.options = c
    };
    b.prototype.init = function () {
        var a = this;
        this.options.$obj = this.$element, this.options.obj && (this.options.$obj = this.options.obj), this.options.event ? this.start(this.options.event) : this.$element.find(this.options.selector).bind("mousedown", function (b) {
            a.start.apply(a, [b])
        })
    }, b.prototype.start = function () {
        document.onselectstart = function () {
            return !1
        };
        var c = this;
        this.options.oleft = parseInt(this.$element.css("left")) || 0, this.options.otop = parseInt(this.$element.css("top")) || 0, a(document).bind("mouseup.bjui.basedrag", function (a) {
            c.stop.apply(c, [a])
        }).bind("mousemove.bjui.basedrag", function (a) {
            c.drag.apply(c, [a])
        })
    }, b.prototype.drag = function (b) {
        var c, d, e, f;
        return b || (b = window.event), c = this.options, d = c.oleft + (b.pageX || b.clientX) - c.event.pageX, e = c.otop + (b.pageY || b.clientY) - c.event.pageY, 1 > e && (e = 0), "horizontal" == c.move ? c.minW && d >= parseInt(this.options.$obj.css("left")) + c.minW && c.maxW && d <= parseInt(this.options.$obj.css("left")) + c.maxW ? this.$element.css("left", d) : c.scop && c.relObj && (d - parseInt(c.relObj.css("left")) > c.cellMinW ? this.$element.css("left", d) : this.$element.css("left", d)) : "vertical" == c.move ? this.$element.css("top", e) : (f = c.selector ? this.options.$obj.find(c.selector) : this.options.$obj, d >= 2 * -f.outerWidth() / 3 && e >= 0 && d + f.outerWidth() / 3 < a(window).width() && e + f.outerHeight() < a(window).height() && this.$element.css({
            left: d,
            top: e
        })), c.drag && c.drag.apply(this.$element, [this.$element, b]), this.preventEvent(b)
    }, b.prototype.stop = function (b) {
        return a(document).unbind("mousemove.bjui.basedrag").unbind("mouseup.bjui.basedrag"), this.options.stop && this.options.stop.apply(this.$element, [this.$element, b]), this.options.event && this.destroy(), document.onselectstart = function () {
            return !0
        }, this.preventEvent(b)
    }, b.prototype.preventEvent = function (a) {
        return a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), !1
    }, b.prototype.destroy = function () {
        this.$element.removeData("bjui.basedrag"), this.options.nounbind || this.$element.unbind("mousedown")
    }, d = a.fn.basedrag, a.fn.basedrag = c, a.fn.basedrag.Constructor = b, a.fn.basedrag.noConflict = function () {
        return a.fn.basedrag = d, this
    }
}(jQuery);
/**
 * B-JUI: bjui-slidebar.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.barDrag.js (author:Roger Wu)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-slidebar.js
 */
+function (a) {
    "use strict";

    function c(c) {
        var d = arguments, e = c;
        return this.each(function () {
            var f = a(this), g = a.extend({}, f.data(), "object" == typeof c && c), h = f.data("bjui.slidebar");
            h || f.data("bjui.slidebar", h = new b(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]()) : h.init()
        })
    }

    var b, d;
    a(function () {
        a("#bjui-leftside").after("<!-- Adjust the width of Left slide -->").after(FRAG.splitBar).after(FRAG.splitBarProxy)
    }), b = function (b, c) {
        this.$element = a(b), this.$bar = this.$element.find("#bjui-sidebar"), this.$sbar = this.$element.find("#bjui-sidebar-s"), this.$lock = this.$bar.find("> .toggleCollapse > .lock"), this.$navtab = a("#bjui-navtab"), this.$collapse = this.$sbar.find(".collapse"), this.$split = a("#bjui-splitBar"), this.$split2 = a("#bjui-splitBarProxy"), this.isfloat = !1, this.options = c
    }, b.prototype.lock = function () {
        var b = this, c = b.$bar.outerWidth() + 4, d = BJUI.windowWidth - a("#bjui-sidebar").width() - 6;
        b.faLock(), b.hoverLock(), b.$sbar.animate({left: -10}, 20), b.$bar.removeClass("shadown"), b.isfloat = !1, b.$navtab.animate({
            left: c,
            width: d
        }, 500, function () {
            a(window).trigger(BJUI.eventType.resizeGrid)
        }), b.$split.show()
    }, b.prototype.unlock = function () {
        var b = this, c = 0 - b.$bar.outerWidth() - 0, d = BJUI.windowWidth - 6;
        b.faUnLock(), b.hoverUnLock(), b.$navtab.animate({
            left: 6,
            width: d
        }, 400), b.$bar.animate({left: c}, 500, function () {
            b.$sbar.animate({left: 0}, 200), b.$split.hide(), a(window).trigger(BJUI.eventType.resizeGrid)
        }), b.isfloat = !1
    }, b.prototype.float = function () {
        var a = this;
        a.$sbar.animate({left: -10}, 200), a.$bar.addClass("shadown").animate({left: 0}, 500), a.isfloat = !0
    }, b.prototype.hideFloat = function () {
        var a = this, b = 0 - a.$bar.outerWidth() - 0;
        a.$bar.animate({left: b - 10}, 500, function () {
            a.$sbar.animate({left: 0}, 100)
        }), a.isfloat = !1
    }, b.prototype.hoverLock = function () {
        var a = this;
        a.$lock.hover(function () {
            a.tipUnLock(), a.faUnLock()
        }, function () {
            a.tipLock(), a.faLock()
        })
    }, b.prototype.hoverUnLock = function () {
        var a = this;
        a.$lock.hover(function () {
            a.tipLock(), a.faLock()
        }, function () {
            a.tipUnLock(), a.faUnLock()
        })
    }, b.prototype.tipLock = function () {
        this.$lock.tooltip("destroy").tooltip({title: "保持锁定，始终显示导航栏", container: "body"})
    }, b.prototype.tipUnLock = function () {
        this.$lock.tooltip("destroy").tooltip({title: "解除锁定，自动隐藏导航栏", container: "body"})
    }, b.prototype.faLock = function () {
        this.$lock.find("> i").attr("class", "fa fa-lock")
    }, b.prototype.faUnLock = function () {
        this.$lock.find("> i").attr("class", "fa fa-unlock-alt")
    }, b.prototype.init = function () {
        var b = this;
        BJUI.ui.showSlidebar ? b.hoverLock() : b.unlock(), this.$lock.off("click.bjui.slidebar").on("click.bjui.slidebar", function () {
            b.isfloat ? b.lock() : b.unlock(), BJUI.ui.showSlidebar = !BJUI.ui.showSlidebar
        }), this.$collapse.hover(function () {
            b.float(), b.$navtab.click(function () {
                b.isfloat && b.hideFloat()
            })
        }), this.$split.mousedown(function (c) {
            b.$split2.each(function () {
                var d = a(this);
                return setTimeout(function () {
                    d.show()
                }, 100), d.css({
                    visibility: "visible",
                    left: b.$split.css("left")
                }).basedrag(a.extend(b.options, {
                    obj: b.$bar, move: "horizontal", event: c, stop: function () {
                        var c, d, e, f;
                        a(this).css("visibility", "hidden"), c = parseInt(a(this).css("left")) - parseInt(b.$split.css("left")), d = b.$bar.outerWidth() + c, e = parseInt(b.$navtab.css("left")) + c, f = b.$navtab.outerWidth() - c, b.$bar.css("width", d), b.$split.css("left", a(this).css("left")), b.$navtab.css({
                            left: e,
                            width: f
                        })
                    }
                })), !1
            })
        }), a("#bjui-hnav-navbar-box").length && b.moveHnav()
    }, b.prototype.moveHnav = function () {
        var b = a("#bjui-hnav-navbar-box"), c = b.find("> #bjui-hnav-navbar"), d = b.prev(), e = b.next();
        d.hover(function () {
            c.stop().animate({left: 0}, 2e3, function () {
                d.hide()
            })
        }, function () {
            c.stop(), b.data("hnav.move") && e.show()
        }).on("click", function () {
            return c.stop().animate({left: 0}, "fast", function () {
                d.hide()
            }), !1
        }), e.hover(function () {
            c.stop().animate({left: b.width() - b.data("hnav.liw") - 10}, 2e3, function () {
                e.hide()
            })
        }, function () {
            c.stop(), "0px" != c.css("left") && d.show()
        }).on("click", function () {
            return c.stop().animate({left: b.width() - b.data("hnav.liw") - 10}, "fast", function () {
                e.hide()
            }), !1
        })
    }, b.prototype.initHnav = function () {
        var f, g, h, i, b = this, c = b.$element.text().trim(), d = b.$element.parent(), e = a("#bjui-accordionmenu");
        f = d.find("> .items > ul.ztree"), g = d.find("> .items > ul.menu-items"), (f.length || g.length) && (f.length && (i = f), g.length && (i = i ? i.add(g) : g, g.find("a").each(function () {
            var b = a(this), c = b.data("options");
            !b.data("icon.init") && c && "string" == typeof c && (c = c.toObj(), c && c.faicon && (c.faicon = c.faicon.trim(), c.faicon.startsWith("fa-") && (c.faicon = c.faicon.substr(3)), b.prepend('<i class="fa fa-' + c.faicon + '"></i>').data("icon.init", !0).attr("title", b.text())))
        })), e.empty(), i.each(function (b) {
            var f, g, i, d = a(this), j = d.data("faicon"), l = (d.data("faiconClose"), j ? j : "dot-circle-o");
            d.data("tit") && (c = d.data("tit")), g = b ? "collapsed" : "", i = b ? "" : " in", f = FRAG.slidePanel.replaceAll("#id#", "bjui-collapse" + b).replaceAll("#title#", c).replaceAll("#righticon#", '<i class="fa fa-angle-down"></i>').replaceAll("#class#", g).replaceAll("#bodyclass#", i), f = l ? f.replaceAll("#icon#", '<i class="fa fa-' + l + '"></i>') : f.replaceAll("#icon#", ""), h = a(f), h.find("> .panel-collapse > .panel-body").append(d.removeAttr("data-noinit")), e.append(h), b || h.collapse("show")
        }), a("#bjui-sidebar").initui(), d.addClass("active").data("bjui.slidebar.hnav.panels", e.find("> .panel")).siblings().removeClass("active"))
    }, d = a.fn.slidebar, a.fn.slidebar = c, a.fn.slidebar.Constructor = b, a.fn.basedrag.noConflict = function () {
        return a.fn.slidebar = d, this
    }, a(document).one(BJUI.eventType.afterInitUI, function () {
        a("#bjui-leftside").slidebar({minW: 150, maxW: 700})
    }), a(document).on("click.bjui.slidebar.data-api", '[data-toggle="slidebar"]', function (b) {
        var d = a(this).parent(), e = a("#bjui-accordionmenu"), f = d.data("bjui.slidebar.hnav.panels");
        e.find("> .panel").detach(), f && f.length ? (e.append(f), d.addClass("active").siblings().removeClass("active")) : c.call(a(this), "initHnav"), b.preventDefault()
    })
}(jQuery);
/**
 * B-JUI: bjui-contextmenu.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.contextmenu.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-contextmenu.js
 */
+function (a) {
    "use strict";

    function f(b) {
        var c = arguments, d = b;
        return this.each(function () {
            var f = a(this), g = a.extend({}, e.DEFAULTS, f.data(), "object" == typeof b && b),
                h = f.data("bjui.contextmenu");
            h || f.data("bjui.contextmenu", h = new e(this, g)), "string" == typeof d && a.isFunction(h[d]) ? ([].shift.apply(c), c ? h[d].apply(h, c) : h[d]()) : h.init()
        })
    }

    var b, c, d, e, g;
    a(function () {
        var e = function () {
            b = a('<div id="bjui-contextmenu"></div>').hide(), c = a('<div id="bjui-contextmenuShadow"></div>').hide(), d = [], a("body").append("<!-- contextmenu -->").append(b).append(c)
        };
        e()
    }), e = function (b, c) {
        this.$element = a(b), this.options = c
    }, e.DEFAULTS = {id: void 0, shadow: !0, bindings: {}, ctrSub: null}, e.prototype.init = function () {
        var c, a = this, b = this.options;
        b.id && (d.push({
            id: b.id,
            shadow: b.shadow,
            bindings: b.bindings || {},
            ctrSub: b.ctrSub
        }), c = d.length - 1, this.$element.on("contextmenu", function (d) {
            return a.display(c, this, d, b), !1
        }))
    }, e.prototype.display = function (e, f, g) {
        var m, n, i = this, j = d[e], k = BJUI.regional[j.id], l = FRAG[j.id];
        a.each(k, function (a) {
            l = l.replace("#" + a + "#", k[a])
        }), b.html(l), a.each(j.bindings, function (c, d) {
            a('[rel="' + c + '"]', b).on("click", function () {
                i.hide(), d(a(f), a("#bjui-" + j.id))
            })
        }), m = g.pageX, n = g.pageY, a(window).width() < m + b.width() && (m -= b.width()), a(window).height() < n + b.height() && (n -= b.height()), b.css({
            left: m,
            top: n
        }).show(), j.shadow && c.css({
            width: b.width(),
            height: b.height(),
            left: m + 3,
            top: n + 3
        }).show(), a(document).one("click", i.hide), a.isFunction(j.ctrSub) && j.ctrSub(a(f), a("#bjui-" + j.id))
    }, e.prototype.hide = function () {
        b.hide(), c.hide()
    }, e.prototype.show = function (b) {
        var c = this;
        b.items && b.items.length && c.$element.on("contextmenu", function (d) {
            var e = !0;
            return b.exclude && c.$element.find(b.exclude).each(function () {
                return this == d.target || a(this).find(d.target).length ? (e = !1, void 0) : void 0
            }), e ? (c.custom(b.items, d), !1) : (d.stopPropagation(), !e)
        })
    }, e.prototype.custom = function (d, e) {
        var f, g, i, h, j, k;
        b.empty().html("<ul></ul>"), f = this, g = f.options, h = b.find("> ul"), a.each(d, function (b, c) {
            var d = "";
            c.icon && (d = '<i class="fa fa-' + c.icon + '"></i>'), "diver" == c.title ? i = a('<li class="diver"></li>') : (i = a('<li><span class="icon">' + d + '</span><span class="title">' + c.title + "</span></li>"), c.func && "string" == typeof c.func && (c.func = c.func.toFunc()), c.func && i.on("click", function () {
                f.hide(), c.func(f.$element, i)
            })), i.appendTo(h)
        }), j = e.pageX, k = e.pageY, a(window).width() < j + b.width() && (j -= b.width()), a(window).height() < k + b.height() && (k -= b.height()), b.css({
            left: j,
            top: k
        }).show(), g.shadow && c.css({
            width: b.width(),
            height: b.height(),
            left: j + 3,
            top: k + 3
        }).show(), a(document).one("click", f.hide)
    }, g = a.fn.contextmenu, a.fn.contextmenu = f, a.fn.contextmenu.Constructor = e, a.fn.contextmenu.noConflict = function () {
        return a.fn.contextmenu = g, this
    }
}(jQuery);
/**
 * B-JUI: bjui-navtab.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.navTab.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-navtab.js
 */
+function (a) {
    "use strict";

    function p(b) {
        var c = arguments, d = b;
        return this.each(function () {
            var e = a(this), f = a.extend({}, o.DEFAULTS, "object" == typeof b && b), g = e.data("bjui.navtab");
            g || e.data("bjui.navtab", g = new o(this, f)), "string" == typeof d && a.isFunction(g[d]) ? ([].shift.apply(c), c ? g[d].apply(g, c) : g[d]()) : (g = new o(this, f), g.openTab())
        })
    }

    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, q;
    a(function () {
        var c = function () {
            b = 0, e = a("#bjui-navtab"), f = e.find(".navtab-tab"), g = e.find(".navtab-panel"), h = e.find(".tabsLeft"), i = e.find(".tabsRight"), j = e.find(".tabsMore"), k = e.find(".tabsMoreList"), l = f.find("li:first"), m = k.find("li:first"), h.click(function () {
                a(this).navtab("scrollPrev")
            }), i.click(function () {
                a(this).navtab("scrollNext")
            }), j.click(function () {
                k.show()
            }), a(document).on("click.bjui.navtab.switchtab", function (b) {
                var c = "I" == b.target.tagName ? a(b.target).parent() : a(b.target);
                j[0] != c[0] && k.hide()
            });
            var c, d;
            l.navtab("contextmenu", l).click(function () {
                a(this).navtab("switchTab", "main")
            }).find("> a > span").html(function (a, b) {
                return c = b.replace("#maintab#", BJUI.regional.maintab)
            }), d = a.extend({}, o.DEFAULTS, l.data(), {
                id: "main",
                title: c
            }), l.data("initOptions", d).data("options", d), l.attr("data-url") && a(document).one(BJUI.eventType.initUI, function () {
                l.removeAttr("data-url").navtab("reload", d)
            }), setTimeout(function () {
                l.navtab("switchTab", "main")
            }, 50), m.click(function () {
                a(this).hasClass("active") ? k.hide() : a(this).navtab("switchTab", "main")
            }).find("> a").html(function (a, b) {
                return b.replace("#maintab#", BJUI.regional.maintab)
            })
        };
        c()
    }), o = function (b, c) {
        this.$element = a(b), this.options = c, this.tools = this.TOOLS()
    }, o.DEFAULTS = {
        id: void 0,
        title: "New tab",
        url: void 0,
        type: "GET",
        data: {},
        loadingmask: !0,
        fresh: !1,
        autorefresh: !1,
        onLoad: null,
        beforeClose: null,
        onClose: null
    }, o.prototype.TOOLS = function () {
        var j = this, l = {
            getDefaults: function () {
                return o.DEFAULTS
            }, getTabs: function () {
                return f.find("> li")
            }, getPanels: function () {
                return g.find("> div")
            }, getMoreLi: function () {
                return k.find("> li")
            }, getTab: function (a) {
                var b = this.indexTabId(a);
                return b >= 0 ? this.getTabs().eq(b) : void 0
            }, getPanel: function (a) {
                var b = this.indexTabId(a);
                return b >= 0 ? this.getPanels().eq(b) : void 0
            }, getTabsW: function (a, b) {
                return this.tabsW(this.getTabs().slice(a, b))
            }, tabsW: function (b) {
                var c = 0;
                return b.each(function () {
                    c += a(this).outerWidth(!0)
                }), c
            }, indexTabId: function (b) {
                if (!b) return -1;
                var c = -1;
                return this.getTabs().each(function (d) {
                    return a(this).data("initOptions").id == b ? (c = d, void 0) : void 0
                }), c
            }, getLeft: function () {
                return f.position().left
            }, getScrollBarW: function () {
                return e.width() - 55
            }, visibleStart: function () {
                var d, a = this.getLeft(), b = 0, c = this.getTabs();
                for (d = 0; d < c.size(); d++) {
                    if (b + a >= 0) return d;
                    b += c.eq(d).outerWidth(!0)
                }
                return 0
            }, visibleEnd: function () {
                var d, a = this.getLeft(), b = 0, c = this.getTabs();
                for (d = 0; d < c.size(); d++) if (b += c.eq(d).outerWidth(!0), b + a > this.getScrollBarW()) return d;
                return c.size()
            }, scrollPrev: function () {
                var a = this.visibleStart();
                a > 0 && this.scrollTab(-this.getTabsW(0, a - 1))
            }, scrollNext: function () {
                var a = this.visibleEnd();
                a < this.getTabs().size() && this.scrollTab(-this.getTabsW(0, a + 1) + this.getScrollBarW())
            }, scrollTab: function (a) {
                f.animate({left: a}, 200, function () {
                    j.tools.ctrlScrollBtn()
                })
            }, scrollCurrent: function () {
                var a = this.tabsW(this.getTabs()), c = this.getScrollBarW();
                c >= a ? this.scrollTab(0) : this.getLeft() < c - a ? this.scrollTab(c - a) : b < this.visibleStart() ? this.scrollTab(-this.getTabsW(0, b)) : b >= this.visibleEnd() && this.scrollTab(c - this.getTabs().eq(b).outerWidth(!0) - this.getTabsW(0, b))
            }, ctrlScrollBtn: function () {
                var a = this.tabsW(this.getTabs());
                this.getScrollBarW() > a ? (h.hide(), i.hide(), f.parent().removeClass("tabsPageHeaderMargin")) : (h.show().removeClass("tabsLeftDisabled"), i.show().removeClass("tabsRightDisabled"), f.parent().addClass("tabsPageHeaderMargin"), this.getLeft() >= 0 ? h.addClass("tabsLeftDisabled") : this.getLeft() <= this.getScrollBarW() - a && i.addClass("tabsRightDisabled"))
            }, switchTab: function (e) {
                var f = this.getTabs().removeClass("active").eq(e).addClass("active"), g = this.getPanels(),
                    h = g.eq(e), i = j.options.onSwitch ? j.options.onSwitch.toFunc() : null;
                f.data("reloadFlag") ? (g.hide(), h.show(), j.refresh(f.data("initOptions").id)) : (g.hide(), h.find(".bjui-ajax-mask").length ? h.show() : (h.addClass("fade").removeClass("in").show(), a.support.transition ? h.one("bsTransitionEnd", function () {
                    h.addClass("in")
                }).emulateTransitionEnd(10) : h.removeClass("fade"))), this.getMoreLi().removeClass("active").eq(e).addClass("active"), b = e, this.scrollCurrent(), c = f, a.CurrentNavtab = d = h, i && i.apply(j), h.trigger("bjui.navtab.switch")
            }, closeTab: function (a, c) {
                var l, d = this.getTabs().eq(a), e = this.getMoreLi().eq(a), f = this.getPanels().eq(a),
                    g = d.data("options"), h = g.beforeClose ? g.beforeClose.toFunc() : null,
                    i = g.onClose ? g.onClose.toFunc() : null, k = !0;
                return h && (k = h.apply(j, [f])), k ? (d.remove(), e.remove(), f.trigger(BJUI.eventType.beforeCloseNavtab).remove(), n && clearInterval(n), i && i.apply(j), b >= a && b--, c && (l = this.indexTabId(c), l > 0 && (b = l)), this.scrollCurrent(), this.switchTab(b), void 0) : (j.tools.switchTab(a), void 0)
            }, closeOtherTab: function (c) {
                c = c || b, this.getTabs().each(function (b) {
                    b > 0 && c != b && a(this).find("> .close").trigger("click")
                })
            }, loadUrlCallback: function (a) {
                a.find(":button.btn-close").click(function () {
                    j.closeCurrentTab()
                })
            }, reload: function (a, b) {
                var c, d;
                b = b || a.data("reloadFlag"), c = a.data("options"), b && (a.data("reloadFlag", !1), d = j.tools.getPanel(c.id), a.hasClass("external") ? j.openExternal(c.url, d) : j.tools.reloadTab(d, c))
            }, reloadTab: function (a, b) {
                var c = b.onLoad ? b.onLoad.toFunc() : null,
                    d = b.autorefresh && (isNaN(String(b.autorefresh)) ? 15 : b.autorefresh);
                a.trigger(BJUI.eventType.beforeLoadNavtab).ajaxUrl({
                    type: b.type || "GET",
                    url: b.url,
                    data: b.data || {},
                    loadingmask: b.loadingmask,
                    callback: function () {
                        j.tools.loadUrlCallback(a), c && c.apply(j, [a]), n && clearInterval(n), d && (n = setInterval(function () {
                            a.navtab("refresh")
                        }, 1e3 * d)), BJUI.ui.clientPaging && a.data("bjui.clientPaging") && a.pagination("setPagingAndOrderby", a)
                    }
                })
            }
        };
        return l
    }, o.prototype.contextmenu = function (a) {
        var c = this;
        a.contextmenu({
            id: "navtabCM", bindings: {
                reload: function (a) {
                    c.refresh(a.data("initOptions").id)
                }, closeCurrent: function (a) {
                    var d = a.data("initOptions").id;
                    d ? c.closeTab(d) : c.closeCurrentTab()
                }, closeOther: function (a) {
                    if (0 == a.index()) c.closeAllTab(); else {
                        var e = c.tools.indexTabId(a.data("initOptions").id);
                        c.tools.closeOtherTab(e > 0 ? e : b)
                    }
                }, closeAll: function () {
                    c.closeAllTab()
                }
            }, ctrSub: function (a, b) {
                var d = b.find('[rel="reload"]'), e = b.find('[rel="closeCurrent"]');
                b.find('[rel="closeOther"]'), b.find('[rel="closeAll"]'), c.tools.getTabs(), 0 == a.index() && (e.addClass("disabled"), a.data("url") || d.addClass("disabled"))
            }
        })
    }, o.prototype.openTab = function () {
        var i, j, l, m, n, o, p, c = this, d = this.$element, e = this.options, h = this.tools;
        return !e.url && e.href && (e.url = e.href), e.url ? (e.url = decodeURI(e.url).replacePlh(d.closest(".unitBox")), e.url.isFinishedTm() ? (e.url = encodeURI(e.url), i = e.id ? h.indexTabId(e.id) : b, e.id || BJUI.ui.overwriteHomeTab || 0 != i || (e.id = "navtab", i = -1), i >= 0 ? (e.id || delete e.id, j = h.getTabs().eq(i), l = h.getPanels().eq(i), m = j.data("initOptions"), n = a.extend({}, m, e), (m.fresh || e.fresh || m.url != e.url) && c.reload(n), b = i) : (o = '<li><a href="javascript:" title="#title#"><span>#title#</span></a><span class="close">&times;</span></li>', j = a(o.replaceAll("#title#", e.title)), l = a('<div class="navtabPage unitBox"></div>'), p = a('<li><a href="javascript:" title="#title#">#title#</a></li>'.replaceAll("#title#", e.title)), j.appendTo(f), l.appendTo(g), p.appendTo(k), j.data("options", e).data("initOptions", e), e.external || e.url && e.url.isExternalUrl() ? (j.addClass("external"), this.openExternal(e.url, l)) : (j.removeClass("external"), h.reloadTab(l, e)), b = h.getTabs().length - 1, this.contextmenu(j), j.on("click", function (b) {
            var d = a(b.target);
            if (d.hasClass("close")) c.closeTab(e.id); else {
                if (d.closest("li").hasClass("active")) return !1;
                c.switchTab(e.id)
            }
        }), p.on("click", function () {
            c.switchTab(e.id)
        })), h.switchTab(b), h.scrollCurrent(), void 0) : (d.alertmsg("error", e.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("Navtab Plugin: The new navtab's url is incorrect, url: " + e.url), void 0)) : (BJUI.debug("Navtab Plugin: Error trying to open a navtab, url is undefined!"), void 0)
    }, o.prototype.closeTab = function (a) {
        var b = this.tools.indexTabId(a);
        b > 0 && this.tools.closeTab(b)
    }, o.prototype.closeCurrentTab = function (a) {
        b > 0 && this.tools.closeTab(b, a)
    }, o.prototype.closeAllTab = function () {
        this.tools.getTabs().find("> .close").each(function () {
            a(this).trigger("click")
        })
    }, o.prototype.reloadFlag = function (a) {
        var d, e, c = a.split(",");
        for (d = 0; d < c.length; d++) e = this.tools.getTab(c[d].trim()), e && (this.tools.indexTabId(c[d]) == b ? this.tools.reload(e, !0) : e.data("reloadFlag", !0))
    }, o.prototype.switchTab = function (a) {
        var b = this.tools.indexTabId(a);
        this.tools.switchTab(b)
    }, o.prototype.scrollPrev = function () {
        this.tools.scrollPrev()
    }, o.prototype.scrollNext = function () {
        this.tools.scrollNext()
    }, o.prototype.refresh = function (a) {
        var b, d;
        b = a ? "string" == typeof a ? this.tools.getTab(a) : a : c, b && b.length && (d = this.tools.getPanel(b.data("initOptions").id), d.removeData("bjui.clientPaging"), this.reload(b.data("initOptions")))
    }, o.prototype.reload = function (c, d) {
        var h, i, j, e = this, f = a.extend({}, "object" == typeof c && c),
            g = f.id ? this.tools.getTab(f.id) : this.tools.getTabs().eq(b);
        g && (h = g.data("initOptions") || {}, i = a.extend({}, h, f), j = function () {
            h.title != i.title && g.find("> a").attr("title", i.title).find("> span").html(i.title), d || g.data("initOptions", i), g.data("options", i), e.tools.reload(g, !0)
        }, f.reloadWarn ? this.$element.alertmsg("confirm", f.reloadWarn, {
            okCall: function () {
                j()
            }
        }) : j())
    }, o.prototype.reloadForm = function (c, d) {
        var f, g, h, i, j, k, l, e = a.extend({}, "object" == typeof d && d);
        if ("string" == typeof d ? (f = this.tools.getTab(d), g = this.tools.getPanel(d)) : (f = e.id ? this.tools.getTab(e.id) : this.tools.getTabs().eq(b), g = e.id ? this.tools.getPanel(e.id) : this.tools.getPanels().eq(b)), f && g) {
            if (!f.hasClass("external") && (h = g.find("#pagerForm"), i = {}, j = {}, h.attr("action") && (e.url = h.attr("action")), h && h.length)) {
                if (j = h.serializeJson(), d && d.type || (e.type = h.attr("method") || "POST"), c) {
                    k = BJUI.pageInfo;
                    for (l in k) i[k[l]] = j[k[l]]
                } else i = j;
                e.data = a.extend({}, e.data || {}, i)
            }
            this.reload(e, !0)
        }
    }, o.prototype.getCurrentPanel = function () {
        return this.tools.getPanels().eq(b)
    }, o.prototype.checkTimeout = function () {
        var a = JSON.parse(d.html());
        a && a[BJUI.keys.statusCode] == BJUI.statusCode.timeout && this.closeCurrentTab()
    }, o.prototype.openExternal = function (a, b) {
        var c = b.closest(".navtab-panel").height();
        b.html(FRAG.externalFrag.replaceAll("{url}", a).replaceAll("{height}", c + "px"))
    }, q = a.fn.navtab, a.fn.navtab = p, a.fn.navtab.Constructor = o, a.fn.navtab.noConflict = function () {
        return a.fn.navtab = q, this
    }, a(document).on("click.bjui.navtab.data-api", '[data-toggle="navtab"]', function (b) {
        var c = a(this), d = c.attr("href"), e = c.data(), f = e.options;
        f && ("string" == typeof f && (f = f.toObj()), "object" == typeof f && a.extend(e, f)), e.title || (e.title = c.text()), d && !e.url && (e.url = d), p.call(c, e), b.preventDefault()
    })
}(jQuery);
/**
 * B-JUI: bjui-dialog.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.dialog.js, dwz.dialogDrag.js, dwz.resize.js (author:Roger Wu)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-dialog.js
 */
+function (a) {
    "use strict";

    function g(b) {
        var c = arguments, d = b;
        return this.each(function () {
            var e = a(this), g = a.extend({}, f.DEFAULTS, "object" == typeof b && b), h = e.data("bjui.dialog");
            h || e.data("bjui.dialog", h = new f(this, g)), "string" == typeof d && a.isFunction(h[d]) ? ([].shift.apply(c), c ? h[d].apply(h, c) : h[d]()) : (h = new f(this, g), h.open())
        })
    }

    var b, c, d, e, f, h;
    a(function () {
        var c = function () {
            b = a("#bjui-resizable"), d = "dialogShadow", e = f.ZINDEX, a("body").append("<!-- dialog resizable -->").append(FRAG.resizable)
        };
        c()
    }), f = function (b, c) {
        this.$element = a(b), this.options = c, this.tools = this.TOOLS()
    }, f.DEFAULTS = {
        id: "dialog",
        title: "New Dialog",
        url: void 0,
        type: "GET",
        data: {},
        loadingmask: !0,
        width: 500,
        height: 300,
        minW: 65,
        minH: 40,
        max: !1,
        mask: !1,
        resizable: !0,
        drawable: !0,
        maxable: !0,
        minable: !0,
        fresh: !1,
        onLoad: null,
        beforeClose: null,
        onClose: null
    }, f.ZINDEX = 30, f.prototype.TOOLS = function () {
        var b = this, c = {
            getDefaults: function () {
                return f.DEFAULTS
            }, init: function (c) {
                var e = b.options.width > b.options.minW ? b.options.width : b.options.minW,
                    f = b.options.height > b.options.minH ? b.options.height : b.options.minH, g = a(window).width(),
                    h = a(window).height(), i = b.options.max ? 0 : (h - f) / 2;
                e > g && (e = g), f > h && (f = h), c.height(f).width(e).show().css({
                    left: (g - e) / 2,
                    top: 0,
                    opacity: .1
                }).animate({
                    top: i > 0 ? i : 0,
                    opacity: 1
                }).addClass(d).find("> .dialogContent").height(f - a("> .dialogHeader", c).outerHeight() - 6), a("body").find("> .bjui-dialog-container").not(c).removeClass(d)
            }, reload: function (c, d) {
                var f, g, e = c.find("> .dialogContent");
                d = d || c.data("initOptions"), f = d.onLoad ? d.onLoad.toFunc() : null, c.trigger(BJUI.eventType.beforeLoadDialog), d.url ? e.ajaxUrl({
                    type: d.type || "GET",
                    url: d.url,
                    data: d.data || {},
                    loadingmask: d.loadingmask,
                    callback: function () {
                        f && f.apply(b, [c]), BJUI.ui.clientPaging && c.data("bjui.clientPaging") && c.pagination("setPagingAndOrderby", c)
                    }
                }) : d.target && (g = a(d.target).html() || c.data("bjui.dialog.target"), a(d.target).empty(), c.data("bjui.dialog.target", g), e.trigger(BJUI.eventType.beforeAjaxLoad).html(g).initui(), f && f.apply(b, [c]))
            }, resizeContent: function (b, c, d) {
                var e = b.find("> .dialogContent");
                e.css({
                    width: c - 12,
                    height: d - b.find("> .dialogHeader").outerHeight() - 6
                }).resizePageH(), a(window).trigger(BJUI.eventType.resizeGrid)
            }
        };
        return c
    }, f.prototype.open = function () {
        var h, i, j, b = this, d = b.options, f = a("body"), g = f.data(d.id);
        if (d.target && a(d.target).length) d.url = void 0; else {
            if (!d.url && d.href && (d.url = d.href), !d.url) return BJUI.debug("Dialog Plugin: Error trying to open a dialog, url is undefined!"), void 0;
            if (d.url = decodeURI(d.url).replacePlh(b.$element.closest(".unitBox")), !d.url.isFinishedTm()) return b.$element.alertmsg("error", d.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("Dialog Plugin: The new dialog's url is incorrect, url: " + d.url), void 0;
            d.url = encodeURI(d.url)
        }
        g ? (h = g.data("initOptions") || d, this.switchDialog(g), g.is(":hidden") && g.show(), (h.fresh || d.fresh || !h.url || h.url != d.url) && (b.reload(d), g.data("initOptions", d))) : (i = BJUI.regional.dialog, j = FRAG.dialog.replace("#close#", i.close).replace("#maximize#", i.maximize).replace("#restore#", i.restore).replace("#minimize#", i.minimize).replace("#title#", i.title), g = a(j).data("options", d).data("initOptions", d).css("zIndex", e += 1).hide().appendTo(f), g.find("> .dialogHeader > h1 > span.title").html(d.title), this.tools.init(g), d.maxable ? g.find("a.maximize").show() : g.find("a.maximize").hide(), d.minable ? g.find("a.minimize").show() : g.find("a.minimize").hide(), d.max && b.maxsize(g), d.mask ? this.addMask(g) : d.minable && a.fn.taskbar && this.$element.taskbar({
            id: d.id,
            title: d.title
        }), g.on("click", function (d) {
            a(d.target).data("bjui.dialog") || c && c[0] != g[0] && b.switchDialog(g)
        }).on("click", ".btn-close", function (a) {
            b.close(g), a.preventDefault()
        }).on("click", ".dialogHeader > a", function (c) {
            var d = a(this);
            d.hasClass("close") && b.close(g), d.hasClass("minimize") && b.minimize(g), d.hasClass("maximize") && (b.switchDialog(g), b.maxsize(g)), d.hasClass("restore") && b.restore(g), c.preventDefault(), c.stopPropagation()
        }).on("dblclick", ".dialogHeader > h1", function () {
            d.maxable && (g.find("> .dialogHeader > a.restore").is(":hidden") ? g.find("a.maximize").trigger("click") : g.find("> .dialogHeader > a.restore").trigger("click"))
        }).on("mousedown.bjui.dialog.drag", ".dialogHeader > h1", function (c) {
            b.switchDialog(g), d.drawable && !g.data("max") && (g.data("bjui.dialog.task", !0), setTimeout(a.proxy(function () {
                g.data("bjui.dialog.task") && b.drag(c, g)
            }, b), 150), c.preventDefault())
        }).on("mouseup.bjui.dialog.drag", ".dialogHeader > h1", function () {
            g.data("bjui.dialog.task", !1)
        }).on("mousedown.bjui.dialog.resize", 'div[class^="resizable"]', function (c) {
            if (d.drawable && !g.data("max")) {
                var e = a(this);
                b.switchDialog(g), b.resizeInit(c, a("#bjui-resizable"), g, e), e.show(), c.preventDefault()
            }
        }).on("mouseup.bjui.dialog.resize", 'div[class^="resizable"]', function (a) {
            a.preventDefault()
        }), f.data(d.id, g), this.tools.reload(g, d)), a.CurrentDialog = c = g
    }, f.prototype.addMask = function (b) {
        var c = b.data("bjui.dialog.mask");
        b.wrap('<div style="z-index:' + e + '" class="bjui-dialog-wrap"></div>'), b.find("> .dialogHeader > a.minimize").hide(), c && c.length || (c = a(FRAG.dialogMask), c.css("zIndex", 1).show().insertBefore(b), b.data("bjui.dialog.mask", c))
    }, f.prototype.refresh = function (b) {
        var d, e, f;
        if (b && "string" == typeof b) for (d = b.split(","), e = 0; e < d.length; e++) f = a("body").data(d[e].trim()), f && (f.removeData("bjui.clientPaging"), this.tools.reload(f)); else c.removeData("bjui.clientPaging"), this.tools.reload(c)
    }, f.prototype.reload = function (b, c) {
        var g, h, i, d = this, e = a.extend({}, "object" == typeof b && b),
            f = e.id && a("body").data(e.id) || d.getCurrent();
        f && f.length && (g = f.data("initOptions"), h = a.extend({}, g, e), i = function () {
            var b = f.find("> .dialogContent");
            g.width != h.width && (h.max ? (f.width(h.width), b.width(h.width)) : f.animate({width: h.width}, "normal", function () {
                b.width(h.width)
            })), g.height != h.height && (h.max ? (f.height(h.height), b.height(h.height - f.find("> .dialogHeader").outerHeight() - 6)) : f.animate({height: h.height}, "normal", function () {
                b.height(h.height - f.find("> .dialogHeader").outerHeight() - 6).resizePageH()
            })), g.maxable != h.maxable && (h.maxable ? f.find("a.maximize").show() : f.find("a.maximize").hide()), g.minable != h.minable && (h.minable ? f.find("a.minimize").show() : f.find("a.minimize").hide()), g.max != h.max && h.max && setTimeout(d.maxsize(f), 10), g.mask != h.mask && (h.mask ? (d.addMask(f), a.fn.taskbar && d.$element.taskbar("closeDialog", h.id)) : h.minable && a.fn.taskbar && d.$element.taskbar({
                id: h.id,
                title: h.title
            })), g.title != h.title && (f.find("> .dialogHeader > h1 > span.title").html(h.title), f.taskbar("changeTitle", h.id, h.title)), f.data("options", h), c || f.data("initOptions", h), d.tools.reload(f, h)
        }, h.reloadWarn ? f.alertmsg("confirm", h.reloadWarn, {
            okCall: function () {
                i()
            }
        }) : i())
    }, f.prototype.reloadForm = function (b, c) {
        var d, e, f, g, h, i, j;
        if ("string" == typeof c ? (d = a("body").data(c), e = d.data("options")) : "object" == typeof c && (d = c.id && a("body").data(c.id) || this.getCurrent()), d) {
            if ("object" == typeof c && (c.title && d.find("> .dialogHeader > h1 > span.title").html(c.title), e = a.extend({}, c, d.data("options"))), f = d.find("#pagerForm"), g = {}, h = {}, f.attr("action") && (e.url = f.attr("action")), f && f.length) {
                if (h = f.serializeJson(), c && c.type || (e.type = f.attr("method") || "POST"), b) {
                    i = BJUI.pageInfo;
                    for (j in i) g[i[j]] = h[i[j]]
                } else g = h;
                e.data = a.extend({}, e.data || {}, g)
            }
            this.reload(e, !0)
        }
    }, f.prototype.getCurrent = function () {
        return c
    }, f.prototype.switchDialog = function (b) {
        var f, e = b.css("zIndex");
        c && c != b && (f = c.css("zIndex"), c.css("zIndex", e), b.css("zIndex", f), a.CurrentDialog = c = b, a.fn.taskbar && this.$element.taskbar("switchTask", b.data("options").id)), b.addClass(d), a("body").find("> .bjui-dialog-container").not(b).removeClass(d)
    }, f.prototype.close = function (b) {
        var d = this, g = "string" == typeof b ? a("body").data(b) : b, h = g.data("bjui.dialog.mask"),
            i = g.data("options"), j = g.data("bjui.dialog.target"), k = i.beforeClose ? i.beforeClose.toFunc() : null,
            l = i.onClose ? i.onClose.toFunc() : null, m = !0;
        if (g && i) {
            if (k && (m = k.apply(d, [g])), !m) return d.switchDialog(g), void 0;
            i.target && j && a(i.target).html(j), h && h.length ? (h.remove(), g.unwrap()) : a.fn.taskbar && this.$element.taskbar("closeDialog", i.id), g.animate({
                top: -g.outerHeight(),
                opacity: .1
            }, "normal", function () {
                var b, h;
                a("body").removeData(i.id), g.trigger(BJUI.eventType.beforeCloseDialog).remove(), l && l.apply(d), b = a("body").find(".bjui-dialog-container"), h = void 0, b.length ? h = d.$element.getMaxIndexObj(b) : (e = f.ZINDEX, c = null), h && h.is(":visible") && d.switchDialog(h)
            })
        }
    }, f.prototype.closeCurrent = function () {
        this.close(c)
    }, f.prototype.checkTimeout = function () {
        var a = c.find("> .dialogContent"), b = JSON.parse(a.html());
        b && b[BJUI.keys.statusCode] == BJUI.statusCode.timeout && this.closeCurrent()
    }, f.prototype.maxsize = function (b) {
        var c, d;
        b.data("original", {
            top: b.css("top"),
            left: b.css("left"),
            width: b.css("width"),
            height: b.css("height")
        }).data("max", !0), b.find("> .dialogHeader > a.maximize").hide(), b.find("> .dialogHeader > a.restore").show(), c = a(window).width(), d = a(window).height() - a("#bjui-taskbar").height() - 1, b.css({
            top: 0,
            left: 0,
            width: c,
            height: d
        }), this.tools.resizeContent(b, c, d)
    }, f.prototype.restore = function (a) {
        var b = a.data("original"), c = parseInt(b.width), d = parseInt(b.height);
        a.css({
            top: b.top,
            left: b.left,
            width: c,
            height: d
        }), this.tools.resizeContent(a, c, d), a.find("> .dialogHeader > a.maximize").show(), a.find("> .dialogHeader > a.restore").hide(), a.data("max", !1)
    }, f.prototype.minimize = function (b) {
        b.hide(), a.fn.taskbar && this.$element.taskbar("minimize", b)
    }, f.prototype.drag = function (b, c) {
        a("#bjui-dialogProxy"), c.find("> .dialogContent").css("opacity", ".3"), c.basedrag({
            selector: "> .dialogHeader",
            stop: function () {
                c.css({left: c.css("left"), top: c.css("top")}).find("> .dialogContent").css("opacity", 1)
            },
            event: b,
            nounbind: !0
        })
    }, f.prototype.resizeDialog = function (b, c, d) {
        var e, j, f = parseInt(b.css("left")), g = parseInt(b.css("top")), h = parseInt(b.css("height")),
            i = parseInt(b.css("width"));
        e = "n" == d || "nw" == d ? parseInt(c.css("top")) - g : h - parseInt(c.css("height")), 0 > g && (g = 0), c.css({
            top: g,
            left: f,
            width: i + 2,
            height: h + 1
        }).find("> .dialogContent").css("width", i - 10), "w" != d && "e" != d && (j = c.find("> .dialogContent"), j.css({height: h - c.find("> .dialogHeader").outerHeight() - 6}).resizePageH()), a(window).trigger(BJUI.eventType.resizeGrid)
    }, f.prototype.resizeInit = function (b, c, d, e) {
        var f = this, g = e.attr("tar");
        a("body").css("cursor", g + "-resize"), c.css({
            top: d.css("top"),
            left: d.css("left"),
            height: d.outerHeight(),
            width: d.css("width")
        }).show(), this.options.dragCurrent || (this.options.dragCurrent = {
            $resizable: c,
            $dialog: d,
            target: g,
            oleft: parseInt(c.css("left")) || 0,
            owidth: parseInt(c.css("width")) || 0,
            otop: parseInt(c.css("top")) || 0,
            oheight: parseInt(c.css("height")) || 0,
            ox: b.pageX || b.screenX,
            oy: b.pageY || b.clientY
        }, a(document).on("mouseup.bjui.dialog.resize", a.proxy(f.resizeStop, f)), a(document).on("mousemove.bjui.dialog.resize", a.proxy(f.resizeStart, f)))
    }, f.prototype.resizeStart = function (b) {
        var d, e, f, g, h, i, c = this.options.dragCurrent;
        c && (b || (b = window.event), d = (b.pageX || b.screenX) - c.ox, e = (b.pageY || b.clientY) - c.oy, f = c.$dialog.data("bjui.dialog.mask"), (f && f.length || !((b.pageY || b.clientY) <= 0 || (b.pageY || b.clientY) >= a(window).height() - c.$dialog.find("> .dialogHeader").outerHeight())) && (g = c.target, h = c.owidth, i = c.oheight, "n" != g && "s" != g && (h += g.indexOf("w") >= 0 ? -d : d), h >= this.options.minW && (g.indexOf("w") >= 0 && c.$resizable.css("left", c.oleft + d), "n" != g && "s" != g && c.$resizable.css("width", h)), "w" != g && "e" != g && (i += g.indexOf("n") >= 0 ? -e : e), i >= this.options.minH && (g.indexOf("n") >= 0 && c.$resizable.css("top", c.otop + e), "w" != g && "e" != g && c.$resizable.css("height", i))))
    }, f.prototype.resizeStop = function () {
        var c = this.options.dragCurrent;
        return c ? (a(document).off("mouseup.bjui.dialog.resize"), a(document).off("mousemove.bjui.dialog.resize"), this.options.dragCurrent = null, this.resizeDialog(c.$resizable, c.$dialog, c.target), a("body").css("cursor", ""), c.$resizable.hide(), void 0) : !1
    }, h = a.fn.dialog, a.fn.dialog = g, a.fn.dialog.Constructor = f, a.fn.dialog.noConflict = function () {
        return a.fn.dialog = h, this
    }, a(document).on("click.bjui.dialog.data-api", '[data-toggle="dialog"]', function (b) {
        var c = a(this), d = c.attr("href"), e = c.data(), f = e.options;
        f && ("string" == typeof f && (f = f.toObj()), "object" == typeof f && a.extend(e, f)), e.title || (e.title = c.text()), d && !e.url && (e.url = d), g.call(c, e), b.preventDefault()
    })
}(jQuery);
/**
 * B-JUI: bjui-taskbar.js  v1.2
 * reference: bjui-dialog.js
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.taskBar.js (author:Roger Wu)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-taskbar.js
 */
+function (a) {
    "use strict";

    function l(b) {
        var c = arguments, d = b;
        return this.each(function () {
            var e = a(this), f = a.extend({}, k.DEFAULTS, e.data(), "object" == typeof b && b),
                g = e.data("bjui.taskbar");
            g ? g.options.id != f.id && e.data("bjui.taskbar", g = new k(this, f)) : e.data("bjui.taskbar", g = new k(this, f)), "string" == typeof d && a.isFunction(g[d]) ? ([].shift.apply(c), c ? g[d].apply(g, c) : g[d]()) : g.init()
        })
    }

    var b, c, d, e, f, g, h, i, j, k, m;
    a(function () {
        var k = function () {
            b = a("#bjui-resizable"), c = a(FRAG.taskbar), d = c.find(".taskbarContent"), e = d.find("> ul"), f = c.find(".taskbarLeft"), g = c.find(".taskbarRight"), h = "disabled", i = "selected", j = "taskbarMargin", a("body").append("<!-- dialog task bar -->").append(c), f.click(function () {
                a(this).taskbar("scrollLeft")
            }), g.click(function () {
                a(this).taskbar("scrollRight")
            })
        };
        k()
    }), k = function (b, c) {
        this.$element = a(b), this.$task = null, this.options = c, this.tools = this.TOOLS()
    }, k.DEFAULTS = {id: void 0, title: void 0}, k.prototype.init = function () {
        var d, b = this, c = e.find("#" + this.options.id);
        this.show(), c.length ? c.find("> div > span.title").html(this.options.title) : (d = '<li id="#taskid#"><div class="taskbutton"><span><i class="fa fa-th-large"></i></span> <span class="title">#title#</span></div><div class="close"><i class="fa fa-times-circle"></i></div></li>', c = a(d.replace("#taskid#", this.options.id).replace("#title#", this.options.title)), c.appendTo(e)), this.contextmenu(c), this.switchTask(c), this.tools.scrollTask(c), c.click(function (d) {
            if (a(d.target).closest("div").hasClass("close") || a(d.target).hasClass("close")) c.dialog("close", b.options.id); else {
                var e = a("body").data(b.options.id);
                c.hasClass("selected") ? e.find(".dialogHeader a.minimize").trigger("click") : e.is(":hidden") ? b.restoreDialog(e) : (e.trigger("click"), c.addClass(i)), b.scrollCurrent(c)
            }
            return !1
        })
    }, k.prototype.TOOLS = function () {
        var k = {
            scrollCurrent: function () {
                var b, c, d, a = this.tasksW(this.getTasks());
                a > this.getTaskBarW() ? (b = this, c = e.find("> li:last-child"), d = this.getTaskBarW() - c.position().left - c.outerWidth(!0), e.animate({left: d}, 200, function () {
                    b.ctrlScrollBtn()
                })) : this.ctrlScrollBtn()
            }, getTaskBarW: function () {
                return d.width() - (f.is(":hidden") ? f.width() + 2 : 0) - (g.is(":hidden") ? g.width() + 2 : 0)
            }, scrollTask: function (a) {
                var c, b = this;
                a.position().left + this.getLeft() + a.outerWidth() > this.getBarWidth() ? (c = this.getTaskBarW() - a.position().left - a.outerWidth(!0) - 2, e.animate({left: c}, 200, function () {
                    b.ctrlScrollBtn()
                })) : a.position().left + this.getLeft() < 0 && (c = this.getLeft() - (a.position().left + this.getLeft()), e.animate({left: c}, 200, function () {
                    b.ctrlScrollBtn()
                }))
            }, ctrlScrollBtn: function () {
                var a = this.tasksW(this.getTasks());
                this.getTaskBarW() > a ? (d.removeClass(j), g.hide(), f.hide(), this.getTasks().eq(0).length && this.scrollTask(this.getTasks().eq(0))) : (d.addClass(j), g.show().removeClass(h), f.show().removeClass(h), this.getLeft() >= 0 && f.addClass(h), this.getLeft() <= this.getTaskBarW() - a && g.addClass(h))
            }, getLeft: function () {
                return e.position().left
            }, visibleStart: function () {
                var c, a = this.getLeft(), b = this.getTasks();
                for (c = 0; c < b.size(); c++) if (b.eq(c).position().left + b.eq(c).outerWidth(!0) + a >= 0) return b.eq(c);
                return b.eq(0)
            }, visibleEnd: function () {
                var c, a = this.getLeft(), b = this.getTasks();
                for (c = 0; c < b.size(); c++) if (b.eq(c).position().left + b.eq(c).outerWidth(!0) + a > this.getBarWidth()) return b.eq(c);
                return b.eq(b.size() - 1)
            }, getTasks: function () {
                return e.find("> li")
            }, tasksW: function (b) {
                var c = 0;
                return b.each(function () {
                    c += a(this).outerWidth(!0)
                }), c
            }, getBarWidth: function () {
                return c.innerWidth()
            }, getCurrent: function () {
                return e.find("li." + i)
            }
        };
        return k
    }, k.prototype.contextmenu = function (b) {
        var c = this;
        b.contextmenu({
            id: "dialogCM", bindings: {
                reload: function (a) {
                    a.dialog("refresh", c.options.id)
                }, closeCurrent: function (a) {
                    var d = a.isTag("li") ? a : c.tools.getCurrent();
                    d.find(".close").trigger("click")
                }, closeOther: function (b) {
                    var d = e.find("> li").not(b);
                    d.each(function () {
                        a(this).find(".close").trigger("click")
                    })
                }, closeAll: function () {
                    var e = c.tools.getTasks();
                    e.each(function () {
                        a(this).find(".close").trigger("click")
                    })
                }
            }, ctrSub: function (a, b) {
                var d = b.find('[rel="closeCurrent"]'), e = b.find('[rel="closeOther"]');
                c.tools.getCurrent().length ? 1 == c.tools.getTasks().size() && e.addClass(h) : (d.addClass(h), e.addClass(h))
            }
        })
    }, k.prototype.closeDialog = function (a) {
        var b = "string" == typeof a ? this.getTask(a) : a;
        b && b.length && (b.remove(), 0 == this.tools.getTasks().size() && this.hide(), this.tools.scrollCurrent(), this.$element.removeData("bjui.taskbar"))
    }, k.prototype.minimize = function (c) {
        var d = this, e = "string" == typeof c ? a("body").data("dialog") : c, f = this.getTask(e.data("options").id);
        b.css({
            top: e.css("top"),
            left: e.css("left"),
            height: e.css("height"),
            width: e.css("width")
        }).show().animate({
            top: a(window).height() - 60,
            left: f.position().left,
            width: f.outerWidth(),
            height: f.outerHeight()
        }, 250, function () {
            a(this).hide(), d.inactive(f)
        })
    }, k.prototype.restoreDialog = function (c) {
        var d = this.getTask(c.data("options").id);
        b.css({
            top: a(window).height() - 60,
            left: d.position().left,
            height: d.outerHeight(),
            width: d.outerWidth()
        }).show().animate({
            top: c.css("top"),
            left: c.css("left"),
            width: c.css("width"),
            height: c.css("height")
        }, 250, function () {
            a(this).hide(), c.show()
        }), this.switchTask(d)
    }, k.prototype.inactive = function (a) {
        var b = "string" == typeof a ? this.getTask(a) : a;
        b.removeClass(i)
    }, k.prototype.scrollLeft = function () {
        var a = this.tools.visibleStart();
        this.tools.scrollTask(a)
    }, k.prototype.scrollRight = function () {
        var a = this.tools.visibleEnd();
        this.tools.scrollTask(a)
    }, k.prototype.scrollCurrent = function (a) {
        this.tools.scrollTask(a)
    }, k.prototype.switchTask = function (a) {
        this.tools.getCurrent().removeClass(i);
        var b = "string" == typeof a ? this.getTask(a) : a;
        b.addClass(i)
    }, k.prototype.getTask = function (a) {
        return e.find("#" + a)
    }, k.prototype.changeTitle = function (a, b) {
        var c = this.getTask(a);
        c && b && c.find(".title").html(b)
    }, k.prototype.show = function () {
        c.is(":hidden") && c.show().animate({bottom: 0}, 500)
    }, k.prototype.hide = function () {
        c.is(":visible") && c.animate({bottom: -50}, 500, function () {
            c.hide()
        })
    }, m = a.fn.taskbar, a.fn.taskbar = l, a.fn.taskbar.Constructor = k, a.fn.taskbar.noConflict = function () {
        return a.fn.taskbar = m, this
    }
}(jQuery);
/**
 * B-JUI: bjui-ajax.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.ajax.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-ajax.js
 */
+function (a) {
    "use strict";

    function d(b) {
        var d = arguments, e = b;
        return this.each(function () {
            var f = a(this), g = a.extend({}, c.DEFAULTS, f.data(), "object" == typeof b && b),
                h = f.data("bjui.bjuiajax");
            h || f.data("bjui.bjuiajax", h = new c(this, g)), "string" == typeof e && a.isFunction(h[e]) && ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]())
        })
    }

    var b, e, c = function (b, c) {
        this.$element = a(b), this.options = c, this.tools = this.TOOLS()
    };
    c.DEFAULTS = {reload: !0, loadingmask: !0}, c.NAVTAB = "navtab", c.prototype.TOOLS = function () {
        var b = this, d = {
            getPagerForm: function (b, c) {
                var f, g, d = b.isTag("form") ? b[0] : b.find("#pagerForm:first")[0], e = a.extend({}, BJUI.pageInfo);
                if (b.data("bjui.clientPaging") && (c = a.extend({}, b.data("bjui.clientPaging"), c), b.data("bjui.clientPaging", c)), d) for (f in e) g = "", c && c[f] && (g = c[f]), d[e[f]] ? g && (d[e[f]].value = g) : a('<input type="hidden" name="' + e[f] + '" value="' + g + '">').appendTo(a(d));
                return d
            }, getTarget: function () {
                return b.$element.closest(".navtab-panel").length ? c.NAVTAB : "dialog"
            }
        };
        return d
    }, c.prototype.ajaxForm = function (b) {
        var g, h, c = this, d = this.$element, e = b && b.callback, f = d.attr("enctype");
        b = a.extend({}, c.options, "object" == typeof b && b), e && (e = e.toFunc()), g = function (b) {
            e ? e.apply(c, [b, d]) : a.proxy(c.ajaxCallback(b), c)
        }, h = function () {
            var e = {
                loadingmask: b.loadingmask,
                type: d.attr("method"),
                url: d.attr("action"),
                callback: g,
                error: a.proxy(c.ajaxError, c)
            };
            f && "multipart/form-data" == f ? window.FormData ? a.extend(e, {
                data: new FormData(d[0]),
                contentType: !1,
                processData: !1
            }) : a.extend(e, {
                data: d.serializeArray(),
                files: d.find(":file"),
                iframe: !0,
                processData: !1
            }) : a.extend(e, {data: d.serializeArray()}), d.doAjax(e)
        }, b.confirmMsg ? d.alertmsg("confirm", b.confirmMsg, {okCall: h}) : h()
    }, c.prototype.ajaxDone = function (a) {
        var b = this.$element;
        a[BJUI.keys.statusCode] == BJUI.statusCode.error ? a[BJUI.keys.message] && b.alertmsg("error", a[BJUI.keys.message]) : a[BJUI.keys.statusCode] == BJUI.statusCode.timeout ? (b.alertmsg("info", a[BJUI.keys.message] || FRAG.sessionTimout), BJUI.loadLogin()) : a[BJUI.keys.message] && b.alertmsg("correct", a[BJUI.keys.message])
    }, c.prototype.ajaxError = function (a, b, c) {
        var d = a.responseText.trim();
        d.startsWith("{") ? this.ajaxDone(d.toObj()) : this.$element.alertmsg("error", "<div>Http status: " + a.status + " " + a.statusText + "</div>" + "<div>ajaxOptions: " + b + " </div>" + "<div>thrownError: " + c + " </div>" + "<div>" + d + "</div>")
    }, c.prototype.ajaxCallback = function (a) {
        var b = this, d = b.$element, e = d.closest(".bjui-layout");
        b.ajaxDone(a), a[BJUI.keys.statusCode] == BJUI.statusCode.ok && (e && e.length ? b.divCallback(a, e) : b.tools.getTarget() == c.NAVTAB ? b.navtabCallback(a) : b.dialogCallback(a))
    }, c.prototype.divCallback = function (a, b) {
        var d, e, f, g, c = this;
        a.tabid && setTimeout(function () {
            c.$element.navtab("reloadFlag", a.tabid)
        }, 100), a.dialogid && setTimeout(function () {
            c.$element.dialog("refresh", a.dialogid)
        }, 100), a.divid && setTimeout(function () {
            c.$element.bjuiajax("refreshDiv", a.divid)
        }, 100), c.options.reload && (d = c.tools.getPagerForm(b), e = null, f = null, d ? (e = d.attr("action"), f = d.attr("method") || "GET") : (e = b.data("url"), f = b.data("type") || "GET"), e && b.ajaxUrl({
            url: e,
            type: f
        })), c.options.reloadNavtab && setTimeout(function () {
            c.$element.navtab("refresh")
        }, 100), a.forward && (g = function () {
            b.ajaxUrl({url: a.forward})
        }, a.forwardConfirm ? c.$element.alertmsg("confirm", a.forwardConfirm, {
            okCall: function () {
                g()
            }
        }) : g())
    }, c.prototype.navtabCallback = function (b) {
        var d, c = this;
        b.tabid && setTimeout(function () {
            c.$element.navtab("reloadFlag", b.tabid)
        }, 100), b.dialogid && setTimeout(function () {
            c.$element.dialog("refresh", b.dialogid)
        }, 100), b.divid && setTimeout(function () {
            c.$element.bjuiajax("refreshDiv", b.divid)
        }, 100), b.datagrid && setTimeout(function () {
            a.each(b.datagrid.join(","), function (b, c) {
                a("#" + c.trim()).datagrid("refresh")
            })
        }, 100), b.closeCurrent && !b.forward ? c.$element.navtab("closeCurrentTab") : c.options.reload && setTimeout(function () {
            c.$element.navtab("refresh")
        }, 100), b.forward && (d = function () {
            c.$element.navtab("reload", {url: b.forward})
        }, b.forwardConfirm ? c.$element.alertmsg("confirm", b.forwardConfirm, {
            okCall: function () {
                d()
            }, cancelCall: function () {
                b.closeCurrent && c.$element.navtab("closeCurrentTab")
            }
        }) : d())
    }, c.prototype.dialogCallback = function (a) {
        var c, b = this;
        a.tabid && setTimeout(function () {
            b.$element.navtab("reloadFlag", a.tabid)
        }, 100), a.dialogid && setTimeout(function () {
            b.$element.dialog("refresh", a.dialogid)
        }, 100), a.divid && setTimeout(function () {
            b.$element.bjuiajax("refreshDiv", a.divid)
        }, 100), a.closeCurrent && !a.forward ? b.$element.dialog("closeCurrent") : b.options.reload && setTimeout(function () {
            b.$element.dialog("refresh")
        }, 100), b.options.reloadNavtab && setTimeout(function () {
            b.$element.navtab("refresh")
        }, 100), a.forward && (c = function () {
            b.$element.dialog("reload", {url: a.forward})
        }, a.forwardConfirm ? b.$element.alertmsg("confirm", a.forwardConfirm, {
            okCall: function () {
                c()
            }
        }) : c())
    }, c.prototype.pageCallback = function (b, d) {
        var e = this, f = a.extend({}, c.DEFAULTS, b), g = d || null, h = null;
        g && g.length ? (h = e.tools.getPagerForm(g, f), h && (a.extend(f, a(h).data()), e.reloadDiv(g, {
            type: a(h).attr("method") || "POST",
            url: a(h).attr("action"),
            data: a(h).serializeArray(),
            loadingmask: f.loadingmask
        }))) : e.tools.getTarget() == c.NAVTAB ? (g = a.CurrentNavtab, h = e.tools.getPagerForm(g, f), h && a.extend(f, a(h).data()), e.$element.navtab("reloadForm", !1, f)) : (g = a.CurrentDialog, h = e.tools.getPagerForm(g, f), h && a.extend(f, a(h).data()), e.$element.dialog("reloadForm", !1, f))
    }, c.prototype.doSearch = function (b) {
        var j, d = this, e = d.$element, f = null, g = {pageCurrent: 1}, h = e.closest(".bjui-layout"), i = b.isValid;
        return b = a.extend({}, c.DEFAULTS, "object" == typeof b && b), b.url || (b.url = e.attr("action")), b.url ? (b.url = decodeURI(b.url).replacePlh(e.closest(".unitBox")), b.url.isFinishedTm() ? (b.url = encodeURI(b.url), j = function () {
            var i, j, k, l;
            if (h && h.length) {
                if (f = d.tools.getPagerForm(h, g), i = e.serializeJson(), j = {}, b.clearQuery) {
                    k = BJUI.pageInfo;
                    for (l in k) j[k[l]] = i[k[l]];
                    i = j
                }
                d.reloadDiv(h, {type: e.attr("method") || "POST", url: b.url, data: i, loadingmask: b.loadingmask})
            } else d.tools.getTarget() == c.NAVTAB ? (h = a.CurrentNavtab, f = d.tools.getPagerForm(h, g), e.navtab("reloadForm", b.clearQuery, b)) : (h = a.CurrentDialog, f = d.tools.getPagerForm(h, g), e.dialog("reloadForm", b.clearQuery, b))
        }, i ? j() : a.validator ? e.isValid(function (a) {
            a && j()
        }) : j(), void 0) : (e.alertmsg("error", b.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("The submit form action is incorrect: " + b.url), void 0)) : (BJUI.debug("Error trying to submit form action: action url is undefined!"), void 0)
    }, c.prototype.doLoad = function (b) {
        var d = this, e = d.$element, f = b.target ? a(b.target) : null;
        return b = a.extend({}, c.DEFAULTS, "object" == typeof b && b), b.url ? (b.url = decodeURI(b.url).replacePlh(e.closest(".unitBox")), b.url.isFinishedTm() ? (b.url = encodeURI(b.url), f && f.length ? (f && f.length && (f.removeData("bjui.clientPaging"), d.reloadDiv(f, b)), void 0) : (BJUI.debug("Not set loaded 'ajax' content container, like [data-target]."), void 0)) : (e.alertmsg("error", b.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("The ajax link incorrect: " + b.url), void 0)) : (BJUI.debug("Error trying to open a ajax link: The url is undefined!"), void 0)
    }, c.prototype.refreshLayout = function (d) {
        var e = this, g = (e.$element, d.target ? a(d.target) : null);
        return d = a.extend({}, c.DEFAULTS, "object" == typeof d && d), g && g.length ? (g && g.length && (g.removeData("bjui.clientPaging"), e.reloadDiv(g, a.extend({}, g.data("options") || {}, d))), void 0) : (b && clearInterval(b), BJUI.debug("Not set loaded 'ajax' content container, like [data-target]."), void 0)
    }, c.prototype.reloadDiv = function (a, c) {
        var d = c.autorefresh && (isNaN(String(c.autorefresh)) ? 15 : c.autorefresh);
        a.addClass("bjui-layout").data("options", c).ajaxUrl({
            type: c.type,
            url: c.url,
            data: c.data,
            loadingmask: c.loadingmask,
            callback: function () {
                BJUI.ui.clientPaging && a.data("bjui.clientPaging") && a.pagination("setPagingAndOrderby", a), c.callback && c.callback.apply(this, [a]), b && clearInterval(b), d && (b = setInterval(function () {
                    a.bjuiajax("refreshLayout", c)
                }, 1e3 * d))
            }
        })
    }, c.prototype.refreshDiv = function (a) {
        var b, c;
        if (a && "string" == typeof a) for (b = a.split(","), c = 0; c < b.length; c++) this.refreshLayout({target: "#" + b[c]})
    }, c.prototype.doAjax = function (b) {
        var f, g, d = this, e = d.$element;
        return b = a.extend({}, c.DEFAULTS, "object" == typeof b && b), b.url ? (b.url = decodeURI(b.url).replacePlh(e.closest(".unitBox")), b.url.isFinishedTm() ? (b.url = encodeURI(b.url), f = b.callback && b.callback.toFunc(), g = function () {
            e.doAjax({
                type: b.type, url: b.url, data: b.data, callback: f ? f : a.proxy(function (a) {
                    d.ajaxCallback(a)
                }, d)
            })
        }, b.confirmMsg ? e.alertmsg("confirm", b.confirmMsg, {
            okCall: function () {
                g()
            }
        }) : g(), void 0) : (e.alertmsg("error", b.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("The ajax url is incorrect: " + b.url), void 0)) : (BJUI.debug("Error trying to open a ajax link: url is undefined!"), void 0)
    }, c.prototype.doExport = function (b) {
        var g, h, d = this, e = d.$element, f = b.target ? a(b.target) : null;
        return b.url ? (b.url = decodeURI(b.url).replacePlh(e.closest(".unitBox")), b.url.isFinishedTm() ? (h = function () {
            f && f.length || (f = d.tools.getTarget() == c.NAVTAB ? a.CurrentNavtab : a.CurrentDialog), g = d.tools.getPagerForm(f), g && (b.url = encodeURI(b.url + (-1 == b.url.indexOf("?") ? "?" : "&") + a(g).serialize())), a.fileDownload(b.url, {
                failCallback: function (a) {
                    a.trim().startsWith("{") && (a = a.toObj()), d.ajaxDone(a)
                }
            })
        }, b.confirmMsg ? e.alertmsg("confirm", b.confirmMsg, {
            okCall: function () {
                h()
            }
        }) : h(), void 0) : (e.alertmsg("error", b.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("The ajax url is incorrect: " + b.url), void 0)) : (BJUI.debug("Error trying to open a ajax link: url is undefined!"), void 0)
    }, c.prototype.doExportChecked = function (b) {
        var g, d = this, e = d.$element, f = b.target ? a(b.target) : null;
        return b.url ? (b.url = decodeURI(b.url).replacePlh(e.closest(".unitBox")), b.url.isFinishedTm() ? (g = function () {
            var e, g;
            return b.group ? (f && f.length || (f = d.tools.getTarget() == c.NAVTAB ? a.CurrentNavtab : a.CurrentDialog), e = [], g = f.find(":checkbox[name=" + b.group + "]:checked"), 0 == g.length ? (d.$element.alertmsg("error", FRAG.alertNotChecked.replace("#notchecked#", BJUI.regional.notchecked)), void 0) : (g.each(function () {
                e.push(a(this).val())
            }), b.url = b.url.setUrlParam(b.idname ? b.idname : "ids", e.join(",")), a.fileDownload(b.url, {
                failCallback: function (a) {
                    a.trim().startsWith("{") && (a = a.toObj()), d.ajaxDone(a)
                }
            }), void 0)) : (d.$element.alertmsg("error", b.warn || FRAG.alertNoCheckGroup.replace("#nocheckgroup#", BJUI.regional.nocheckgroup)), void 0)
        }, b.confirmMsg ? e.alertmsg("confirm", b.confirmMsg, {
            okCall: function () {
                g()
            }
        }) : g(), void 0) : (e.alertmsg("error", b.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("The ajax url is incorrect: " + b.url), void 0)) : (BJUI.debug("Error trying to open a export link: url is undefined!"), void 0)
    }, c.prototype.doAjaxChecked = function (b) {
        var g, d = this, e = d.$element, f = b.target ? a(b.target) : null;
        return b = a.extend({}, c.DEFAULTS, "object" == typeof b && b), b.url ? (b.url = decodeURI(b.url).replacePlh(e.closest(".unitBox")), b.url.isFinishedTm() ? (g = function () {
            var g, h, i;
            return b.group ? (f && f.length || (f = d.tools.getTarget() == c.NAVTAB ? a.CurrentNavtab : a.CurrentDialog), g = [], h = f.find(":checkbox[name=" + b.group + "]:checked"), i = b.callback && b.callback.toFunc(), 0 == h.length ? (e.alertmsg("error", FRAG.alertNotChecked.replace("#notchecked#", BJUI.regional.notchecked)), void 0) : (h.each(function () {
                g.push(a(this).val())
            }), b.url = b.url.setUrlParam(b.idname ? b.idname : "ids", g.join(",")), e.doAjax({
                type: b.type,
                url: b.url,
                data: b.data,
                callback: i ? i : a.proxy(function (a) {
                    d.ajaxCallback(a)
                }, d)
            }), void 0)) : (e.alertmsg("error", b.warn || FRAG.alertNoCheckGroup.replace("#nocheckgroup#", BJUI.regional.nocheckgroup)), void 0)
        }, b.confirmMsg ? e.alertmsg("confirm", b.confirmMsg, {
            okCall: function () {
                g()
            }
        }) : g(), void 0) : (e.alertmsg("error", b.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("The ajax url is incorrect: " + b.url), void 0)) : (BJUI.debug("Error trying to open a del link: url is undefined!"), void 0)
    }, e = a.fn.bjuiajax, a.fn.bjuiajax = d, a.fn.bjuiajax.Constructor = c, a.fn.bjuiajax.noConflict = function () {
        return a.fn.bjuiajax = e, this
    }, a(document).on("submit.bjui.bjuiajax.data-api", 'form[data-toggle="ajaxform"]', function (b) {
        var c = a(this), e = c.data();
        d.call(c, "ajaxForm", e), b.preventDefault()
    }), a(function () {
        a.validator ? a(document).on(BJUI.eventType.initUI, function (b) {
            a(b.target).find('form[data-toggle="ajaxsearch"]').each(function () {
                var b = a(this), c = b.data();
                c.isValid = !0, b.validator({
                    valid: function () {
                        d.call(b, "doSearch", c)
                    }
                })
            })
        }) : a(document).on("submit.bjui.bjuiajax.data-api", 'form[data-toggle="ajaxsearch"]', function (b) {
            var c = a(this), e = c.data();
            d.call(c, "doSearch", e), b.preventDefault()
        })
    }), a(document).on("click.bjui.bjuiajax.data-api", '[data-toggle="reloadsearch"]', function (b) {
        var e, c = a(this), f = c.closest("form");
        f && f.length && (e = f.data(), e.clearQuery = c.data("clearQuery") || !0, d.call(f, "doSearch", e), b.preventDefault())
    }), a(document).on("click.bjui.bjuiajax.data-api", '[data-toggle="ajaxload"]', function (b) {
        var c = a(this), e = c.data();
        e.url || (e.url = c.attr("href")), d.call(c, "doLoad", e), b.preventDefault()
    }), a(document).on(BJUI.eventType.initUI, function (b) {
        var c = a(b.target).find('[data-toggle="autoajaxload"]');
        c.each(function () {
            var b = a(this), c = b.data();
            c.target = this, d.call(b, "doLoad", c)
        })
    }), a(document).on("click.bjui.bjuiajax.data-api", '[data-toggle="refreshlayout"]', function () {
        var c = a(this), e = c.data();
        d.call(c, "refreshLayout", e)
    }), a(document).on("click.bjui.bjuiajax.data-api", '[data-toggle="doajax"]', function (b) {
        var c = a(this), e = c.data();
        e.url || (e.url = c.attr("href")), d.call(c, "doAjax", e), b.preventDefault()
    }), a(document).on("click.bjui.bjuiajax.data-api", '[data-toggle="doexport"]', function (b) {
        var c = a(this), e = c.data();
        e.url || (e.url = c.attr("href")), d.call(c, "doExport", e), b.preventDefault()
    }), a(document).on("click.bjui.bjuiajax.data-api", '[data-toggle="doexportchecked"]', function (b) {
        var c = a(this), e = c.data();
        e.url || (e.url = c.attr("href")), d.call(c, "doExportChecked", e), b.preventDefault()
    }), a(document).on("click.bjui.bjuiajax.data-api", '[data-toggle="doajaxchecked"]', function (b) {
        var c = a(this), e = c.data();
        e.url || (e.url = c.attr("href")), d.call(c, "doAjaxChecked", e), b.preventDefault()
    })
}(jQuery);
/**
 * B-JUI: bjui-alertmsg.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.alertMsg.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-alertmsg.js
 */
+function (a) {
    "use strict";

    function f(b) {
        var c = arguments, d = b;
        return this.each(function () {
            var f = a(this), g = a.extend({}, e.DEFAULTS, f.data(), "object" == typeof b && b), h = new e(this, g);
            "string" == typeof d && a.isFunction(h[d]) && ([].shift.apply(c), c ? h[d].apply(h, c) : h[d]())
        })
    }

    var b, c, d, e, g;
    a(function () {
        var d = function () {
            b = a(FRAG.alertBoxFrag).hide().html(""), c = a(FRAG.alertBackground).hide().html(""), a("body").append("<!-- alert msg box -->").append(b).append("<!-- alert msg box mask bg -->").append(c)
        };
        d()
    }), e = function (b, c) {
        this.$element = a(b), this.options = c, this.tools = this.TOOLS(), this.clearTime = null
    }, e.DEFAULTS = {
        displayPosition: "topcenter",
        displayMode: "slide",
        autoClose: null,
        alertTimeout: 3e3,
        mask: null,
        types: {error: "error", info: "info", warn: "warn", correct: "correct", confirm: "confirm"},
        fas: {
            error: "fa-times-circle",
            info: "fa-info-circle",
            warn: "fa-exclamation-circle",
            correct: "fa-check-circle",
            confirm: "fa-question-circle"
        }
    }, e.prototype.TOOLS = function () {
        var e = this, f = e.options, g = {
            getTitle: function (a) {
                return f.title || BJUI.regional.alertmsg.title[a]
            }, keydownOk: function (a) {
                return a.which == BJUI.keyCode.ENTER ? (a.data.target.trigger("click"), !1) : !0
            }, keydownEsc: function (a) {
                a.which == BJUI.keyCode.ESC && a.data.target.trigger("click")
            }, openPosition: function () {
                var a = BJUI.alertMsg.displayPosition, c = BJUI.alertMsg.displayMode, d = 460, e = b.outerHeight(),
                    g = {}, h = {};
                switch (a ? f.displayPosition && "topcenter" != f.displayPosition && (a = f.displayPosition) : a = f.displayPosition, c ? f.displayMode && "silde" != f.displayMode && (c = f.displayMode) : c = f.displayMode, a) {
                    case"topleft":
                        g = {top: 0 - e, left: 0, "margin-left": 0}, h = {top: 0};
                        break;
                    case"topcenter":
                        g = {top: 0 - e}, h = {top: 0};
                        break;
                    case"topright":
                        g = {top: 0 - e, left: "auto", right: 0, "margin-left": 0}, h = {top: 0};
                        break;
                    case"middleleft":
                        g = {top: "50%", left: 0 - d, "margin-left": 0, "margin-top": 0 - e / 2}, h = {left: 0};
                        break;
                    case"middlecenter":
                        g = {top: "0", "margin-top": 0 - e / 2}, h = {top: "50%"};
                        break;
                    case"middleright":
                        g = {top: "50%", left: "auto", right: 0 - d, "margin-top": 0 - e / 2}, h = {right: 0};
                        break;
                    case"bottomleft":
                        g = {top: "auto", left: 0, bottom: 0 - e, "margin-left": 0}, h = {bottom: 0};
                        break;
                    case"bottomcenter":
                        g = {top: "auto", bottom: 0 - e}, h = {bottom: 0};
                        break;
                    case"bottomright":
                        g = {top: "auto", left: "auto", right: 0, bottom: 0 - e, "margin-left": 0}, h = {bottom: 0}
                }
                "slide" == c ? b.css(g).show().animate(h, 500) : "fade" == c ? (g.opacity = .1, b.css(g).css(h).show().animate({opacity: 1}, 500)) : b.css(g).css(h).show()
            }, closePosition: function () {
                var d = BJUI.alertMsg.displayPosition, e = BJUI.alertMsg.displayMode, g = 460, h = b.outerHeight(),
                    i = {};
                switch (d ? f.displayPosition && "topcenter" != f.displayPosition && (d = f.displayPosition) : d = f.displayPosition, e ? f.displayMode && "silde" != f.displayMode && (e = f.displayMode) : e = f.displayMode, d) {
                    case"topleft":
                        i = {top: 0 - h};
                        break;
                    case"topcenter":
                        i = {top: 0 - h};
                        break;
                    case"topright":
                        i = {top: 0 - h};
                        break;
                    case"middleleft":
                        i = {left: 0 - g};
                        break;
                    case"middlecenter":
                        i = {top: 0 - h};
                        break;
                    case"middleright":
                        i = {right: 0 - g};
                        break;
                    case"bottomleft":
                        i = {bottom: 0 - h};
                        break;
                    case"bottomcenter":
                        i = {bottom: 0 - h};
                        break;
                    case"bottomright":
                        i = {bottom: 0 - h}
                }
                "slide" == e ? b.animate(i, 500, function () {
                    c.hide(), a(this).hide().empty()
                }) : "fade" == e ? b.animate({opacity: 0}, 500, function () {
                    c.hide(), a(this).hide().empty()
                }) : (b.hide().remove(), c.hide())
            }, open: function (g, h, i) {
                var l, m, o, p, q, r, j = this, k = "", n = BJUI.alertMsg.alertTimeout;
                if (i) for (o = 0; o < i.length; o++) p = i[o].call ? "callback" : "", q = i[o].cls ? i[o].cls : "default", r = i[o].cls && "green" == i[o].cls ? "check" : "close", k += FRAG.alertBtnFrag.replace("#btnMsg#", '<i class="fa fa-' + r + '"></i> ' + i[o].name).replace("#callback#", p).replace("#class#", q);
                l = a(FRAG.alertBoxFrag.replace("#type#", g).replace("#fa#", f.fas[g]).replace("#title#", this.getTitle(g)).replace("#message#", h).replace("#btnFragment#", k)).hide().appendTo("body"), b && b.length && b.remove(), b = l, j.openPosition(), d && (clearTimeout(d), d = null), null == f.mask && f.types.info != g && f.types.correct != g && c.show(), null == f.autoClose && (f.types.info == g || f.types.correct == g) && (n ? f.alertTimeout && 3e3 != f.alertTimeout && (n = f.alertTimeout) : n = f.alertTimeout, d = setTimeout(function () {
                    j.close()
                }, n)), m = b.find(".btn"), m.each(function (b) {
                    a(this).on("click", a.proxy(function () {
                        e.tools.close();
                        var a = i[b].call;
                        "string" == typeof a && (a = a.toFunc()), "function" == typeof a && a.call()
                    }, e)), i[b].keyCode == BJUI.keyCode.ENTER && a(document).on("keydown.bjui.alertmsg.ok", {target: m.eq(b)}, j.keydownOk), i[b].keyCode == BJUI.keyCode.ESC && a(document).on("keydown.bjui.alertmsg.esc", {target: m.eq(b)}, j.keydownEsc)
                })
            }, alert: function (b, c, d) {
                var e, g;
                a.extend(f, "object" == typeof d && d), e = a.extend({}, {
                    okName: BJUI.regional.alertmsg.btnMsg.ok,
                    okCall: null
                }, f), g = [{
                    name: e.okName,
                    call: e.okCall,
                    cls: "default",
                    keyCode: BJUI.keyCode.ENTER
                }], this.open(b, c, g)
            }, close: function () {
                a(document).off("keydown.bjui.alertmsg.ok").off("keydown.bjui.alertmsg.esc"), this.closePosition()
            }
        };
        return g
    }, e.prototype.error = function (a, b) {
        this.tools.alert(this.options.types.error, a, b)
    }, e.prototype.info = function (a, b) {
        this.tools.alert(this.options.types.info, a, b)
    }, e.prototype.warn = function (a, b) {
        this.tools.alert(this.options.types.warn, a, b)
    }, e.prototype.ok = function (a, b) {
        this.tools.alert(this.options.types.correct, a, b)
    }, e.prototype.correct = function (a, b) {
        this.tools.alert(this.options.types.correct, a, b)
    }, e.prototype.confirm = function (b, c) {
        var d, e;
        a.extend(this.options, "object" == typeof c && c), d = a.extend({}, {
            okName: BJUI.regional.alertmsg.btnMsg.ok,
            okCall: null,
            cancelName: BJUI.regional.alertmsg.btnMsg.cancel,
            cancelCall: null
        }, this.options), e = [{
            name: d.okName,
            call: d.okCall,
            cls: "green",
            keyCode: BJUI.keyCode.ENTER
        }, {
            name: d.cancelName,
            call: d.cancelCall,
            cls: "red",
            keyCode: BJUI.keyCode.ESC
        }], this.tools.open(this.options.types.confirm, b, e)
    }, g = a.fn.alertmsg, a.fn.alertmsg = f, a.fn.alertmsg.Constructor = e, a.fn.alertmsg.noConflict = function () {
        return a.fn.alertmsg = g, this
    }, a(document).on("click.bjui.alertmsg.data-api", '[data-toggle="alertmsg"]', function (b) {
        var g, c = a(this), d = c.data(), e = d.options;
        return e && ("string" == typeof e && (e = e.toObj()), "object" == typeof e && a.extend(d, e)), (g = d.type) ? (f.call(c, g, d.msg || g, d), b.preventDefault(), void 0) : !1
    })
}(jQuery);
/**
 * B-JUI: bjui-pagination.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.pagination.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-pagination.js
 */
+function (a) {
    "use strict";

    function c(c) {
        var d = arguments, e = c;
        return this.each(function () {
            var f = a(this), g = a.extend({}, b.DEFAULTS, f.data(), "object" == typeof c && c),
                h = f.data("bjui.pagination");
            h || f.data("bjui.pagination", h = new b(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]()) : h.init()
        })
    }

    var d, b = function (b, c) {
        this.$element = a(b), this.options = c, this.tools = this.TOOLS()
    };
    b.DEFAULTS = {
        first: "li.j-first",
        prev: "li.j-prev",
        next: "li.j-next",
        last: "li.j-last",
        nums: "li.j-num > a",
        jump: "li.jumpto",
        pageNumFrag: '<li class="#liClass#"><a href="javascript:;">#pageNum#</a></li>',
        total: 0,
        pageSize: 10,
        pageNum: 10,
        pageCurrent: 1,
        callback: function () {
            return !1
        }
    }, b.prototype.TOOLS = function () {
        var b = this.options, c = {
            pageNums: function () {
                return Math.ceil(b.total / b.pageSize)
            }, getInterval: function () {
                var a = Math.ceil(b.pageNum / 2), c = this.pageNums(), d = c - b.pageNum,
                    e = this.getCurrentPage() > a ? Math.max(Math.min(this.getCurrentPage() - a, d), 0) : 0,
                    f = this.getCurrentPage() > a ? Math.min(this.getCurrentPage() + a, c) : Math.min(b.pageNum, c);
                return {start: e + 1, end: f + 1}
            }, getCurrentPage: function () {
                var a = parseInt(b.pageCurrent);
                return isNaN(a) ? 1 : a
            }, hasPrev: function () {
                return this.getCurrentPage() > 1
            }, hasNext: function () {
                return this.getCurrentPage() < this.pageNums()
            }
        };
        return c
    }, b.prototype.init = function () {
        function n(c, d) {
            c.on("click", function (c) {
                var e = {pageCurrent: d, pageSize: b.options.pageSize};
                b.setClientPaging(e), a(this).bjuiajax("pageCallback", e, b.$element.closest(".bjui-layout")), c.preventDefault()
            })
        }

        var b, c, d, e, f, g, h, i, j, k, l, m;
        for (BJUI.ui.clientPaging && !this.getClientPaging() && this.setClientPaging({
            pageCurrent: this.options.pageCurrent,
            pageSize: this.options.pageSize
        }), b = this, c = this.options, d = this.tools, e = d.getInterval(), f = "", g = FRAG.pagination, h = BJUI.regional.pagination, i = e.start; i < e.end; i++) f += c.pageNumFrag.replaceAll("#pageNum#", i).replaceAll("#liClass#", i == d.getCurrentPage() ? "selected j-num" : "j-num");
        g = g.replaceAll("#pageNumFrag#", f).replaceAll("#pageCurrent#", d.getCurrentPage()).replaceAll("#first#", h.first).replaceAll("#last#", h.last).replaceAll("#prev#", h.prev).replaceAll("#next#", h.next).replaceAll("#jumpto#", h.jumpto).replaceAll("#jump#", h.jump), this.$element.html(g), j = this.$element.find(c.first), k = this.$element.find(c.prev), l = this.$element.find(c.next), m = this.$element.find(c.last), d.hasPrev() ? (j.add(k).find("> span").hide(), n(k, d.getCurrentPage() - 1), n(j, 1)) : j.add(k).addClass("disabled").find("> a").hide(), d.hasNext() ? (l.add(m).find("> span").hide(), n(l, d.getCurrentPage() + 1), n(m, d.pageNums())) : l.add(m).addClass("disabled").find("> a").hide(), this.$element.find(c.nums).each(function (b) {
            n(a(this), b + e.start)
        }), this.$element.find(c.jump).each(function () {
            var d = a(this).find(":text"), e = a(this).find(".goto");
            e.on("click", function () {
                var e = d.val(), f = {pageCurrent: e, pageSize: c.pageSize};
                e && e.isPositiveInteger() && (b.setClientPaging(f), a(this).bjuiajax("pageCallback", f, b.$element.closest(".bjui-layout")))
            }), d.keyup(function (a) {
                a.keyCode == BJUI.keyCode.ENTER && e.trigger("click")
            })
        })
    }, b.prototype.changePagesize = function () {
        var a = this, b = a.$element.val(), c = {pageSize: b};
        isNaN(b) || (a.setClientPaging(c), a.$element.bjuiajax("pageCallback", c, a.$element.closest(".bjui-layout")))
    }, b.prototype.orderBy = function () {
        var c = this;
        c.$element.css({cursor: "pointer"}).click(function () {
            var b = a(this).data("orderField"), d = a(this).data("orderDirection"),
                e = {orderField: b, orderDirection: d};
            c.setClientPaging(e), a(this).bjuiajax("pageCallback", e, c.$element.closest(".bjui-layout"))
        })
    }, b.prototype.destroy = function () {
        this.$element.removeData("bjui.pagination").empty()
    }, b.prototype.getTarget = function () {
        var c, b = this;
        return c = b.$element.closest(".bjui-layout").length ? b.$element.closest(".bjui-layout") : b.$element.closest(".navtab-panel").length ? a.CurrentNavtab : a.CurrentDialog
    }, b.prototype.getClientPaging = function () {
        return this.getTarget().data("bjui.clientPaging")
    }, b.prototype.setClientPaging = function (b) {
        if (BJUI.ui.clientPaging) {
            var c = this.getTarget();
            c.data("bjui.clientPaging", a.extend({}, c.data("bjui.clientPaging") || {}, b))
        }
    }, b.prototype.setClientOrder = function (a) {
        if (BJUI.ui.clientPaging) {
            var b = this.getClientPaging();
            b && b.orderField || this.setClientPaging(a)
        }
    }, b.prototype.setPagingAndOrderby = function (a) {
        var b = a.data("bjui.clientPaging");
        a.find('[data-toggle="pagination"]').pagination("destroy").pagination(b), b.pageSize && a.find('select[data-toggle-change="changepagesize"]').selectpicker("val", b.pageSize), b.orderField && a.find('th[data-order-field="' + b.orderField + '"]').addClass(b.orderDirection).siblings().removeClass("asc desc")
    }, d = a.fn.pagination, a.fn.pagination = c, a.fn.pagination.Constructor = b, a.fn.pagination.noConflict = function () {
        return a.fn.pagination = d, this
    }, a(document).on(BJUI.eventType.initUI, function (b) {
        var d = a(b.target).find('[data-toggle="pagination"]');
        d.length && c.call(d)
    }), a(document).on("change.bjui.pagination.data-api", 'select[data-toggle-change="changepagesize"]', function (b) {
        var d = a(this);
        d.data(), c.call(d, "changePagesize"), b.preventDefault()
    })
}(jQuery);
/**
 * B-JUI: bjui-util.date.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.util.date.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-util.date.js
 */
+function ($) {
    "use strict";

    function LZ(a) {
        return (0 > a || a > 9 ? "" : "0") + a
    }

    function formatDate(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, C;
        for (b += "", c = "", d = 0, e = "", f = "", g = a.getYear() + "", h = a.getMonth() + 1, i = a.getDate(), j = a.getDay(), k = a.getHours(), l = a.getMinutes(), m = a.getSeconds(), C = {}, g.length < 4 && (g = "" + (g - 0 + 1900)), C["y"] = "" + g, C["yyyy"] = g, C["yy"] = g.substring(2, 4), C["M"] = h, C["MM"] = LZ(h), C["MMM"] = MONTH_NAMES[h - 1], C["NNN"] = MONTH_NAMES[h + 11], C["d"] = i, C["dd"] = LZ(i), C["E"] = DAY_NAMES[j + 7], C["EE"] = DAY_NAMES[j], C["H"] = k, C["HH"] = LZ(k), C["h"] = 0 == k ? 12 : k > 12 ? k - 12 : k, C["hh"] = LZ(C["h"]), C["K"] = k > 11 ? k - 12 : k, C["k"] = k + 1, C["KK"] = LZ(C["K"]), C["kk"] = LZ(C["k"]), C["a"] = k > 11 ? "PM" : "AM", C["m"] = l, C["mm"] = LZ(l), C["s"] = m, C["ss"] = LZ(m); d < b.length;) {
            for (e = b.charAt(d), f = ""; b.charAt(d) == e && d < b.length;) f += b.charAt(d++);
            c += null != C[f] ? C[f] : f
        }
        return c
    }

    function _isInteger(a) {
        return new RegExp(/^\d+$/).test(a)
    }

    function _getInt(a, b, c, d) {
        var e, f;
        for (e = d; e >= c; e--) {
            if (f = a.substring(b, b + e), f.length < c) return null;
            if (_isInteger(f)) return f
        }
        return null
    }

    function parseDate(a, b) {
        var c, d, e, f, h, i, j, k, l, m, n, o, p, q, r, s, t;
        for (a += "", b += "", c = 0, d = 0, e = "", f = "", j = new Date(1900, 0, 1), k = j.getYear(), l = j.getMonth() + 1, m = 1, n = j.getHours(), o = j.getMinutes(), p = j.getSeconds(), q = ""; d < b.length;) {
            for (e = b.charAt(d), f = ""; b.charAt(d) == e && d < b.length;) f += b.charAt(d++);
            if ("yyyy" == f || "yy" == f || "y" == f) {
                if ("yyyy" == f && (h = 4, i = 4), "yy" == f && (h = 2, i = 2), "y" == f && (h = 2, i = 4), k = _getInt(a, c, h, i), null == k) return 0;
                c += k.length, 2 == k.length && (k = k > 70 ? 1900 + (k - 0) : 2e3 + (k - 0))
            } else if ("MMM" == f || "NNN" == f) {
                for (l = 0, r = 0; r < MONTH_NAMES.length; r++) if (s = MONTH_NAMES[r], a.substring(c, c + s.length).toLowerCase() == s.toLowerCase() && ("MMM" == f || "NNN" == f && r > 11)) {
                    l = r + 1, l > 12 && (l -= 12), c += s.length;
                    break
                }
                if (1 > l || l > 12) return 0
            } else if ("EE" == f || "E" == f) {
                for (r = 0; r < DAY_NAMES.length; r++) if (t = DAY_NAMES[r], a.substring(c, c + t.length).toLowerCase() == t.toLowerCase()) {
                    c += t.length;
                    break
                }
            } else if ("MM" == f || "M" == f) {
                if (l = _getInt(a, c, f.length, 2), null == l || 1 > l || l > 12) return 0;
                c += l.length
            } else if ("dd" == f || "d" == f) {
                if (m = _getInt(a, c, f.length, 2), null == m || 1 > m || m > 31) return 0;
                c += m.length
            } else if ("hh" == f || "h" == f) {
                if (n = _getInt(a, c, f.length, 2), null == n || 1 > n || n > 12) return 0;
                c += n.length
            } else if ("HH" == f || "H" == f) {
                if (n = _getInt(a, c, f.length, 2), null == n || 0 > n || n > 23) return 0;
                c += n.length
            } else if ("KK" == f || "K" == f) {
                if (n = _getInt(a, c, f.length, 2), null == n || 0 > n || n > 11) return 0;
                c += n.length
            } else if ("kk" == f || "k" == f) {
                if (n = _getInt(a, c, f.length, 2), null == n || 1 > n || n > 24) return 0;
                c += n.length, n--
            } else if ("mm" == f || "m" == f) {
                if (o = _getInt(a, c, f.length, 2), null == o || 0 > o || o > 59) return 0;
                c += o.length
            } else if ("ss" == f || "s" == f) {
                if (p = _getInt(a, c, f.length, 2), null == p || 0 > p || p > 59) return 0;
                c += p.length
            } else if ("a" == f) {
                if ("am" == a.substring(c, c + 2).toLowerCase()) q = "AM"; else {
                    if ("pm" != a.substring(c, c + 2).toLowerCase()) return 0;
                    q = "PM"
                }
                c += 2
            } else {
                if (a.substring(c, c + f.length) != f) return 0;
                c += f.length
            }
        }
        if (c != a.length) return 0;
        if (2 == l) if (0 == k % 4 && 0 != k % 100 || 0 == k % 400) {
            if (m > 29) return 0
        } else if (m > 28) return 0;
        return (4 == l || 6 == l || 9 == l || 11 == l) && m > 30 ? 0 : (12 > n && "PM" == q ? n = n - 0 + 12 : n > 11 && "AM" == q && (n -= 12), new Date(k, l - 1, m, n, o, p))
    }

    function replaceTmEval(data) {
        return data.replace(RegExp("({[A-Za-z0-9_+-]*})", "g"), function ($1) {
            return eval("(" + $1.replace(/[{}]+/g, "") + ")")
        })
    }

    var MONTH_NAMES = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"),
        DAY_NAMES = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    Date.prototype.formatDate = function (a) {
        return formatDate(this, a)
    }, String.prototype.parseDate = function (a) {
        return this.length < a.length && (a = a.slice(0, this.length)), parseDate(this, a)
    }, Date.prototype.formatDateTm = function (a) {
        var f, g, h, i, b = this.getFullYear(), c = this.getMonth() + 1, d = this.getDate(),
            e = a.replaceAll("%y", b).replaceAll("%M", c).replaceAll("%d", d);
        return e = replaceTmEval(e), f = 1900, g = 0, h = 1, i = e.split("-"), i.length > 0 && (f = i[0]), i.length > 1 && (g = i[1] - 1), i.length > 2 && (h = i[2]), new Date(f, g, h).formatDate("yyyy-MM-dd")
    }
}(jQuery);
/**
 * B-JUI: bjui-datepicker.js  v1.2
 * reference: util.date.js
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.datepicker.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-datepicker.js
 */
+function (a) {
    "use strict";

    function u(b) {
        var c = arguments, d = b;
        return this.each(function () {
            var e = a(this), f = a.extend({}, t.DEFAULTS, e.data(), "object" == typeof b && b),
                g = e.data("bjui.datepicker");
            g || e.data("bjui.datepicker", g = new t(this, f)), "string" == typeof d && a.isFunction(g[d]) ? ([].shift.apply(c), c ? g[d].apply(g, c) : g[d]()) : g.init()
        })
    }

    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, v;
    a(function () {
        var t = function () {
            var v, w, t = BJUI.regional.datepicker,
                u = FRAG.calendarFrag.replace("#close#", t.close).replace("#prev#", t.prev).replace("#next#", t.next).replace("#clear#", t.clear).replace("#ok#", t.ok);
            b = a(u).hide(), a("body").append("<!-- datepicker -->").append(b), c = b.find("> .main"), d = b.find("a.prev"), e = b.find("a.next"), f = b.find("select[name=year]"), g = b.find("select[name=month]"), h = b.find(".time"), i = h.find(":text"), j = h.find("ul > li"), k = h.find(".hh"), l = h.find(".mm"), m = h.find(".ss"), n = c.find("> .tm"), o = b.find(".close"), p = c.find("> .body > .days"), q = c.find("> .body > .dayNames"), r = b.find(".clearBtn"), s = b.find(".okBtn"), v = "", w = BJUI.regional.datepicker, a.each(w.dayNames, function (a, b) {
                v += "<dt>" + b + "</dt>"
            }), q.html(v), a.each(w.monthNames, function (a, b) {
                var c = a + 1;
                g.append('<option value="' + c + '">' + b + "</option>")
            }), b.on("selectstart", function () {
                return !1
            })
        };
        t()
    }), t = function (b, c) {
        this.$element = a(b), this.options = c, this.tools = this.TOOLS(), this.$dateBtn = null;
        var d = new Date;
        this.options.minDate = d.formatDateTm(this.options.minDate), this.options.maxDate = d.formatDateTm(this.options.maxDate), this.events = {
            focus_time: "focus.bjui.datepicker.time",
            click_prev: "click.bjui.datepicker.prev",
            click_next: "click.bjui.datepicker.next",
            click_ok: "click.bjui.datepicker.ok",
            click_days: "click.bjui.datepicker.days",
            click_clear: "click.bjui.datepicker.clear",
            click_close: "click.bjui.datepicker.close",
            click_tm: "click.bjui.datepicker.tm",
            click_spinner: "click.bjui.datepicker.spinner",
            mousedown_sp: "mousedown.bjui.datepicker.spinner",
            mouseup_sp: "mouseup.bjui.datepicker.spinner",
            change_ym: "change.bjui.datepicker.ym",
            click_time: "click.bjui.datepicker.time",
            keydown_time: "keydown.bjui.datepicker.time",
            keyup_time: "keyup.bjui.datepicker.time"
        }
    }, t.DEFAULTS = {
        pattern: "yyyy-MM-dd",
        minDate: "1900-01-01",
        maxDate: "2099-12-31",
        mmStep: 1,
        ssStep: 1
    }, t.EVENTS = {afterChange: "afterchange.bjui.datepicker"}, t.prototype.TOOLS = function () {
        var c = this, d = {
            changeTmMenu: function (a) {
                n.removeClass("hh").removeClass("mm").removeClass("ss"), a && (n.addClass(a), i.removeClass("slt").filter("." + a).addClass("slt"))
            }, clickTmMenu: function (b, d) {
                n.find("> ul").hide().filter("." + d).show().find("> li").off(c.events.click_tm).on(c.events.click_tm, function () {
                    var c = a(this), d = parseInt(c.text()) < 10 ? "0" + c.text() : c.text();
                    b.val(d)
                })
            }, keydownInt: function (a) {
                return a.keyCode >= 48 && a.keyCode <= 57 || a.keyCode == BJUI.keyCode.DELETE || a.keyCode == BJUI.keyCode.BACKSPACE ? void 0 : !1
            }, changeTm: function (a, b) {
                var c = parseInt(a.val()), d = parseInt(a.data("start")) || 0, e = parseInt(a.data("end")),
                    f = parseInt(a.data("step") || 1), g = b ? b.data("add") ? b.data("add") : -1 : 0, h = c;
                1 == g ? e - f >= c && (h = c + f) : -1 == g ? c >= d + f && (h = c - f) : c > e ? h = e : d > c && (h = d), 10 > h && (h = "0" + h), a.val(h)
            }, closeCalendar: function (e) {
                d.changeTmMenu(), e && (a(document).off(c.events.click_close), b.hide())
            }, get: function (a) {
                return c.options[a]
            }, getDays: function (a, b) {
                return 2 == b ? a % 4 || !(a % 100) && a % 400 ? 28 : 29 : /4|6|9|11/.test(b) ? 30 : 31
            }, minMaxDate: function (a) {
                var b = a.split("-").length - 1, c = "y-M-d";
                return 1 == b ? c = "y-M" : 0 == b && (c = "y"), a.parseDate(c)
            }, getMinDate: function () {
                return this.minMaxDate(c.options.minDate)
            }, getMaxDate: function () {
                var e, a = c.options.maxDate, b = a.split("-").length - 1, d = this.minMaxDate(a);
                return 2 > b && (e = this.getDays(d.getFullYear(), d.getMonth() + 1), d.setDate(e), 0 == b && d.setMonth(11)), d
            }, getDateWrap: function (a) {
                var b, d, e;
                return a || (a = this.parseDate(c.sDate) || new Date), b = a.getFullYear(), d = a.getMonth() + 1, e = this.getDays(b, d), {
                    year: b,
                    month: d,
                    day: a.getDate(),
                    hour: a.getHours(),
                    minute: a.getMinutes(),
                    second: a.getSeconds(),
                    days: e,
                    date: a
                }
            }, changeDate: function (a, b, d) {
                var e = new Date(a, b - 1, d || 1);
                return c.sDate = this.formatDate(e), e
            }, changeDateTime: function (a, b, d, e, f, g) {
                var h = new Date(a, b - 1, d, e, f, g);
                return c.sDate = this.formatDate(h), h
            }, changeDay: function (a, b) {
                b || (b = 0);
                var c = this.getDateWrap();
                return this.changeDate(c.year, c.month + parseInt(b), a)
            }, changeMonth: function (a) {
                var b = f.get(0).selectedIndex, c = f.find("option").length, d = 1 * g.val() + a;
                0 == d ? 0 == b ? d = 1 : (d = 12, b--, f.get(0).selectedIndex = b) : 13 == d && (b == c - 1 ? d = 12 : (d = 1, b++, f.get(0).selectedIndex = b)), g.val(d).change()
            }, parseDate: function (a) {
                return a ? a.parseDate(c.options.pattern) : null
            }, formatDate: function (a) {
                return a.formatDate(c.options.pattern)
            }, hasHour: function () {
                return -1 != c.options.pattern.indexOf("H")
            }, hasMinute: function () {
                return -1 != c.options.pattern.indexOf("m")
            }, hasSecond: function () {
                return -1 != c.options.pattern.indexOf("s")
            }, hasTime: function () {
                return this.hasHour() || this.hasMinute() || this.hasSecond()
            }, hasDate: function () {
                var b, a = ["y", "M", "d", "E"];
                for (b = 0; b < a.length; b++) if (-1 != c.options.pattern.indexOf(a[b])) return !0;
                return !1
            }, afterChange: function (a) {
                c.$element.trigger(t.EVENTS.afterChange, {value: a})
            }
        };
        return d
    }, t.prototype.addBtn = function () {
        var d, e, b = this, c = b.$element;
        this.$dateBtn || this.options.addbtn || c.parent().hasClass("wrap_bjui_btn_box") || (this.$dateBtn = a(FRAG.dateBtn), this.$element.css({paddingRight: "15px"}).wrap('<span class="wrap_bjui_btn_box"></span>'), d = this.$element.parent(), e = this.$element.addClass("form-control").innerHeight(), d.css({
            position: "relative",
            display: "inline-block"
        }), this.$dateBtn.css({
            height: e,
            lineHeight: e + "px"
        }).appendTo(d), this.$dateBtn.on("selectstart", function () {
            return !1
        }))
    }, t.prototype.init = function () {
        var b, h, i, j, n, q, t, u;
        for (this.$element.val() && (this.sDate = this.$element.val().trim()), b = this, this.options, h = this.tools, i = h.getDateWrap(), j = h.getMinDate(), n = h.getMaxDate(), q = j.getFullYear(), t = n.getFullYear(), f.empty(), u = q; t >= u; u++) f.append('<option value="' + u + '"' + (i.year == u ? " selected" : "") + ">" + u + "</option>");
        g.val(i.month), f.add(g).off(this.events.change_ym).on(this.events.change_ym, function () {
            var a, c;
            h.hasTime() ? (a = p.find(".slt"), c = h.changeDateTime(f.val(), g.val(), a.data("day"), i.hour, i.minute, i.second), b.create(h.getDateWrap(c), j, n)) : (a = p.find(".slt"), c = h.changeDate(f.val(), g.val(), a.data("day")), b.create(h.getDateWrap(c), j, n))
        }), d.off(this.events.click_prev).on(this.events.click_prev, function () {
            b.tools.changeMonth(-1)
        }), e.off(this.events.click_prev).on(this.events.click_prev, function () {
            b.tools.changeMonth(1)
        }), r.off(this.events.click_clear).on(this.events.click_clear, function () {
            b.$element.val(""), h.closeCalendar(!0)
        }), s.off(this.events.click_ok).on(this.events.click_ok, function () {
            var c, a = p.find("dd.slt");
            return a.hasClass("disabled") ? !1 : (c = h.changeDay(a.data("day"), a.data("month")), h.hasTime() && (c.setHours(parseInt(k.val())), c.setMinutes(parseInt(l.val())), c.setSeconds(parseInt(m.val()))), h.closeCalendar(!0), b.$element.val(h.formatDate(c)).focus(), h.afterChange(c), void 0)
        }), o.off(this.events.click_close).on(this.events.click_close, function () {
            h.closeCalendar(!0)
        }), a(document).on(this.events.click_close, function (c) {
            var d = a(c.target);
            c.target != b.$element.get(0) && (d.closest("#calendar").length || ("datepicker" == d.data("toggle") || "datepickerbtn" == d.parent().data("toggle") || "datepickerbtn" == d.data("toggle") ? h.closeCalendar(!1) : h.closeCalendar(!0)))
        }), this.create(i, j, n)
    }, t.prototype.create = function (d, e, f) {
        var u, v, w, x, y, z, A, g = this, o = this.options, q = this.tools, r = new Date(d.year, d.month - 1, 1),
            s = r.getDay(), t = "";
        if (s > 0) for (r.setMonth(r.getMonth() - 1), u = q.getDateWrap(r), v = u.days - s + 1; v <= u.days; v++) w = new Date(d.year, d.month - 2, v), x = w >= e && f >= w ? "" : " disabled", t += '<dd class="other' + x + '" data-month="-1" data-day="' + v + '">' + v + "</dd>";
        for (v = 1; v <= d.days; v++) w = new Date(d.year, d.month - 1, v), x = w >= e && f >= w ? "" : "disabled", v == d.day && (x += " slt"), t += '<dd class="' + x + '" data-day="' + v + '">' + v + "</dd>";
        for (v = 1; v <= 42 - s - d.days; v++) w = new Date(d.year, d.month, v), x = w >= e && f >= w ? "" : " disabled", t += '<dd class="other' + x + '" data-month="1" data-day="' + v + '">' + v + "</dd>";
        y = p.html(t).find("dd"), y.not(".disabled").off(this.events.click_days).on(this.events.click_days, function () {
            var c, b = a(this);
            q.hasTime() ? (y.removeClass("slt"), b.addClass("slt")) : (c = q.changeDay(b.data("day"), b.data("month")), q.closeCalendar(!0), g.$element.val(q.formatDate(c)).focus(), q.afterChange(c))
        }), q.hasDate() ? c.removeClass("nodate") : c.addClass("nodate"), q.hasTime() ? (h.show(), k.val(d.hour < 10 ? "0" + d.hour : d.hour).off(this.events.focus_time).on(this.events.focus_time, function () {
            q.changeTmMenu("hh")
        }), z = parseInt(d.minute / o.mmStep) * o.mmStep, l.val(10 > z ? "0" + z : z).data("step", o.mmStep).off(this.events.focus_time).on(this.events.focus_time, function () {
            q.changeTmMenu("mm")
        }), m.val(q.hasSecond() ? d.second < 10 ? "0" + d.second : d.second : "00").data("step", o.ssStep).off(this.events.focus_time).on(this.events.focus_time, function () {
            q.changeTmMenu("ss")
        }), b.off("click").on("click", function (b) {
            a(b.target).closest(".time").length || (n.find("> ul").hide(), q.changeTmMenu())
        }), i.off(this.events.keydown_time).on(this.events.keydown_time, q.keydownInt).each(function () {
            var b = a(this);
            b.off(g.events.keyup_time).on(g.events.keyup_time, function () {
                q.changeTm(b)
            })
        }).off(this.events.click_time).on(this.events.click_time, function () {
            q.clickTmMenu(a(this), a(this).data("type"))
        }), A = null, j.off(this.events.click_spinner).on(this.events.click_spinner, function (b) {
            var c = a(this);
            i.filter(".slt").each(function () {
                q.changeTm(a(this), c)
            }), b.preventDefault()
        }).off(this.events.mousedown_sp).on(this.events.mousedown_sp, function () {
            var c = a(this);
            A = setInterval(function () {
                i.filter(".slt").each(function () {
                    q.changeTm(a(this), c)
                })
            }, 150)
        }).off(this.events.mouseup_sp).on(this.events.mouseup_sp, function () {
            clearTimeout(A)
        }), q.hasHour() || k.attr("disabled", !0), q.hasMinute() || l.attr("disabled", !0), q.hasSecond() || m.attr("disabled", !0)) : h.hide(), this.show()
    }, t.prototype.show = function () {
        var c = this.$element.offset(), d = c.top + this.$element.get(0).offsetHeight, e = b.outerHeight(!0);
        d > e && d > a(window).height() - e && (d = c.top - e), b.css({
            left: c.left,
            top: d
        }).show().click(function (a) {
            a.stopPropagation()
        })
    }, v = a.fn.datepicker, a.fn.datepicker = u, a.fn.datepicker.Constructor = t, a.fn.datepicker.noConflict = function () {
        return a.fn.datepicker = v, this
    }, a(document).on(BJUI.eventType.initUI, function (b) {
        var c = a(b.target).find('[data-toggle="datepicker"]');
        c.length && (c.data("nobtn") || u.call(c, "addBtn"))
    }), a(document).on("click.bjui.datepicker.data-api", '[data-toggle="datepickerbtn"]', function (b) {
        var c = a(this).prevAll('[data-toggle="datepicker"]');
        c && c.is(":text") && (u.call(c, c.data()), b.preventDefault())
    }), a(document).on("click.bjui.datepicker.data-api", '[data-toggle="datepicker"]', function (b) {
        var c = a(this);
        c.data("onlybtn") || c.is(":text") && (u.call(c, c.data()), b.preventDefault())
    })
}(jQuery);
/**
 * B-JUI: bjui-ajaxtab.js  v1.2
 * @author K'naan (xknaan@163.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-ajaxtab.js
 */
+function (a) {
    "use strict";

    function c(c) {
        var d = arguments, e = c;
        return this.each(function () {
            var f = a(this), g = a.extend({}, b.DEFAULTS, f.data(), "object" == typeof c && c),
                h = f.data("bjui.ajaxtab");
            h || f.data("bjui.ajaxtab", h = new b(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]()) : h.init()
        })
    }

    var d, b = function (b, c) {
        this.$element = a(b), this.options = c
    };
    b.DEFAULTS = {url: void 0, target: void 0, reload: !1}, b.prototype.init = function () {
        var b, a = this.options;
        return a.url ? (a.url = decodeURI(a.url).replacePlh(this.$element.closest(".unitBox")), a.url.isFinishedTm() ? (a.url = encodeURI(a.url), a.target ? (a.reload ? this.load() : (b = this.$element.data("bjui.ajaxtab.reload"), b ? this.$element.tab("show") : this.load()), void 0) : (BJUI.debug("Ajaxtab Plugin: Attribute 'target' is not defined!"), void 0)) : (this.$element.alertmsg("error", a.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("Ajaxtab Plugin: The new ajaxtab's url is incorrect, url: " + a.url), void 0)) : (BJUI.debug("Ajaxtab Plugin: Error trying to open a tab, url is undefined!"), void 0)
    }, b.prototype.load = function () {
        var b = this.$element, c = this.options;
        a(c.target).ajaxUrl({
            url: c.url, data: {}, callback: function () {
                b.data("bjui.ajaxtab.reload", !0).tab("show")
            }
        })
    }, d = a.fn.ajaxtab, a.fn.ajaxtab = c, a.fn.ajaxtab.Constructor = b, a.fn.ajaxtab.noConflict = function () {
        return a.fn.ajaxtab = d, this
    }, a(document).on("click.bjui.ajaxtab.data-api", '[data-toggle="ajaxtab"]', function (b) {
        var d = a(this), e = d.data();
        e.url || (e.url = d.attr("href")), c.call(d, e), b.preventDefault()
    })
}(jQuery);
/**
 * B-JUI: bjui-datagrid.js  v1.2 - beta
 * @author K'naan (xknaan@163.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-datagrid.js
 */
+function (d) {
    var c = function (f, e) {
        this.$element = d(f);
        this.options = e;
        this.tools = this.TOOLS();
        this.datanames = {
            tbody: "bjui.datagrid.tbody.dom",
            td_html: "bjui.datagrid.td.html",
            changeData: "bjui.datagrid.tr.changeData"
        };
        this.classnames = {
            s_checkbox: "datagrid-checkbox",
            s_linenumber: "datagrid-linenumber",
            s_edit: "datagrid-column-edit",
            s_lock: "datagrid-lock",
            s_menu: "datagrid-menu-box",
            s_filter: "datagrid-filter-box",
            s_showhide: "datagrid-showhide-box",
            th_cell: "datagrid-cell",
            th_menu: "datagrid-column-menu",
            btn_menu: "datagrid-column-menu-btn",
            th_col: "datagrid-col",
            th_field: "datagrid-col-field",
            th_sort: "datagrid-sortable",
            th_resize: "datagrid-resize-head",
            th_resizemark: "datagrid-column-resizemark",
            tr_edit: "datagrid-edit-tr",
            tr_add: "datagrid-add-tr",
            tr_selected: "datagrid-selected-tr",
            td_edit: "datagrid-edit-td",
            td_changed: "datagrid-changed",
            td_linenumber: "datagrid-linenumber-td",
            td_checkbox: "datagrid-checkbox-td",
            li_asc: "datagrid-li-asc",
            li_desc: "datagrid-li-desc",
            li_filter: "datagrid-li-filter",
            li_showhide: "datagrid-li-showhide",
            li_lock: "datagrid-li-lock",
            li_unlock: "datagrid-li-unlock"
        }
    };
    c.DEFAULTS = {
        gridTitle: "",
        columns: null,
        data: null,
        dataUrl: null,
        loadType: "POST",
        dataType: "json",
        local: "remote",
        fieldSortable: true,
        filterThead: true,
        sortAll: false,
        filterAll: false,
        filterMult: true,
        linenumberAll: false,
        showLinenumber: true,
        showCheckboxcol: false,
        showEditbtnscol: false,
        showTfoot: false,
        showToolbar: false,
        toolbarItem: "",
        toolbarCustom: "",
        columnResize: true,
        columnMenu: true,
        columnShowhide: true,
        columnFilter: true,
        columnLock: true,
        paging: true,
        pagingAlign: "center",
        editUrl: null,
        editCallback: null,
        editMode: "inline",
        editDialogOp: null,
        inlineEditMult: true,
        saveAll: true,
        addLocation: "first",
        delUrl: null,
        delType: "POST",
        delPK: null,
        delConfirm: true,
        delCallback: null,
        jsonPrefix: "",
        contextMenuH: true,
        contextMenuB: false,
        hScrollbar: false,
        fullGrid: false,
        importOption: null,
        exportOption: null,
        beforeEdit: null,
        beforeDelete: null,
        afterSave: null,
        afterDelete: null
    };
    c.renderItem = function (g, e) {
        if (!e || !e.length) {
            return ""
        }
        var f = "";
        d.each(e, function (h, j) {
            if (typeof j[g] != "undefined") {
                f = j[g];
                return false
            }
        });
        return f
    };
    c.prototype.TOOLS = function () {
        var f = this, e = f.options;
        var g = {
            getPageCount: function (h, i) {
                return Math.ceil(i / h)
            }, getPageInterval: function (j, l, n) {
                var k = Math.ceil(n / 2), i = j - n, m = l > k ? Math.max(Math.min(l - k, i), 0) : 0,
                    h = l > k ? Math.min((l + k), j) : Math.min(n, j);
                if (h - m == n) {
                    h = h + 1
                }
                if (h < n) {
                    h = h + 1
                }
                return {start: m + 1, end: h}
            }, getRight: function (k) {
                var j = 0, i = k.data("index"), h = f.$tbody.find("> tr:first > td:lt(" + (i + 1) + ")");
                if (!h || !h.length) {
                    h = f.$colgroupH.find("> col:lt(" + (i + 1) + ")")
                }
                h.each(function () {
                    var m = d(this), l = m.is(":hidden") ? 0 : m.outerWidth();
                    j += l
                });
                return j
            }, getRight4Lock: function (i) {
                var j = 0, k = f.$lockTbody.find("> tr:first > td:eq(" + i + ")"), h = k && k.prevAll().add(k);
                if (!h || !h.length) {
                    h = f.$lockColgroupH.filter(":lt(" + (i + 1) + ")")
                }
                h.each(function () {
                    var m = d(this), l = m.is(":hidden") ? 0 : m.outerWidth();
                    j += l
                });
                return j
            }, beforeEdit: function (i, h) {
                var j = e.beforeEdit;
                if (j) {
                    if (typeof j == "string") {
                        j = j.toFunc()
                    }
                    if (typeof j == "function") {
                        return j.call(f, i, h)
                    }
                }
                return true
            }, afterSave: function (h, i) {
                var j = e.afterSave;
                if (j) {
                    if (typeof j == "string") {
                        j = j.toFunc()
                    }
                    if (typeof j == "function") {
                        j.call(f, h, i)
                    }
                }
            }, afterDelete: function () {
                var h = e.afterDelete;
                if (h) {
                    if (typeof h == "string") {
                        h = h.toFunc()
                    }
                    if (typeof h == "function") {
                        h.call(f)
                    }
                }
            }, setColspan: function (i, h) {
                if (i.colspan) {
                    i.colspan = i.colspan + h - 1
                }
                i.index = i.index + h - 1;
                if (i.parent) {
                    this.setColspan(i.parent, h)
                }
            }, columns2Arr: function (i, k, h, j) {
                var l = this;
                if (!k) {
                    k = []
                }
                if (!h) {
                    h = 0
                }
                if (!k[h]) {
                    k[h] = []
                }
                d.each(i, function (o, q) {
                    var m = k[h].length, p;
                    if (j) {
                        q.parent = j
                    }
                    if (q.columns) {
                        p = q.columns.length;
                        if (h && q.parent) {
                            l.setColspan(q.parent, p)
                        }
                        q.index = f.columnModel.length + p - 1;
                        q.colspan = p;
                        q.quicksort = false;
                        k[h][m++] = q;
                        return l.columns2Arr(q.columns, k, h + 1, q)
                    } else {
                        q.rowspan = h;
                        q.index = f.columnModel.length;
                        q.menu = (typeof q.menu == "undefined") ? true : q.menu;
                        q.lock = (typeof q.lock == "undefined") ? true : q.lock;
                        q.hide = (typeof q.hide == "undefined") ? false : q.hide;
                        q.edit = (typeof q.edit == "undefined") ? true : q.edit;
                        q.add = (typeof q.add == "undefined") ? true : q.add;
                        q.quicksort = (typeof q.quicksort == "undefined") ? true : q.quicksort;
                        k[h][m++] = q;
                        f.columnModel.push(q)
                    }
                });
                return k
            }, createTrsByData: function (j, h) {
                var i;
                if (!f.$tbody) {
                    f.$tbody = d("<tbody></tbody>")
                }
                if (j) {
                    if (j.list) {
                        i = j.list
                    } else {
                        i = j
                    }
                    f.paging.total = i.length;
                    if (typeof j == "object") {
                        if (j[BJUI.pageInfo.total]) {
                            f.paging.total = parseInt(j[BJUI.pageInfo.total])
                        }
                        if (j[BJUI.pageInfo.pageSize]) {
                            if (h && f.paging.pageSize != j[BJUI.pageInfo.pageSize]) {
                                f.$selectpage.trigger("bjui.datagrid.paging.pageSize", j[BJUI.pageInfo.pageSize])
                            }
                            f.paging.pageSize = parseInt(j[BJUI.pageInfo.pageSize])
                        }
                    }
                    f.paging.pageCount = g.getPageCount(f.paging.pageSize, f.paging.total);
                    if (f.paging.pageCurrent > f.paging.pageCount) {
                        f.paging.pageCurrent = f.paging.pageCount
                    }
                    this.initTbody(i, h)
                }
                if (!f.init_tbody) {
                    f.$tbody.appendTo(f.$element)
                }
                if (!f.init_thead) {
                    f.initThead()
                }
            }, initTbody: function (p, o) {
                var r = this, j = f.allData, t = e.dataType || "json", q = f.columnModel, k = f.hiddenFields,
                    l = f.regional, v = [], s = f.attach, u;
                var i = f.paging, h = 0, n = i.pageSize;
                var m = function () {
                    t = t.toLowerCase();
                    if (p) {
                        j = f.allData = p
                    }
                    if (!j.length) {
                        n = 0
                    } else {
                        if (e.local == "local") {
                            h = (i.pageSize * (i.pageCurrent - 1));
                            n = h + i.pageSize;
                            if (i.total != j.length) {
                                i.total = j.length
                            }
                            if (h > j.length) {
                                h = i.pageSize * (i.pageCount - 1)
                            }
                        } else {
                            if (j.length > i.pageSize) {
                                n = i.pageSize
                            }
                        }
                    }
                    if (n > j.length) {
                        n = j.length
                    }
                    if (t == "array" && p && p.length && d.type(p[0]) == "array") {
                        var x = h, w = n, y = [], A;
                        if (e.local == "local") {
                            x = 0;
                            w = j.length
                        }
                        for (var z = x; z < w; z++) {
                            u = {};
                            A = 0;
                            d.each(j[z], function (C, B) {
                                var D, E = B;
                                if (q[A] && q[A].gridNumber) {
                                    A++
                                }
                                if (q[A] && q[A].gridCheckbox) {
                                    A++
                                }
                                if (typeof E == "string") {
                                    E = '"' + E + '"'
                                }
                                if (q[A] && !q[A].gridEdit) {
                                    D = '{"' + q[A].name + '":' + E + "}";
                                    d.extend(u, JSON.parse(D))
                                } else {
                                    if (q[A] && q[A].gridEdit) {
                                        A++
                                    }
                                    if (A >= q.length && k) {
                                        if (k[C - q.length]) {
                                            D = '{"' + k[C - q.length] + '":' + E + "}";
                                            d.extend(u, JSON.parse(D))
                                        }
                                    }
                                }
                                A++
                            });
                            y.push(u)
                        }
                        j = f.allData = y
                    }
                    for (var z = h; z < n; z++) {
                        u = d.extend({}, f.allData[z], s);
                        v.push(u)
                    }
                    r.createTrs(v, o);
                    f.data = v
                };
                if (o && f.$boxM) {
                    f.$boxM.show().trigger("bjui.ajaxEnd").trigger("bjui.ajaxStart", [50, m])
                } else {
                    m()
                }
            }, createTrs: function (i, h) {
                var n = this, l = f.columnModel, k = f.paging, m = BJUI.doRegional(FRAG.gridEditBtn, f.regional),
                    j = [];
                if (h) {
                    d.each(l, function (o, p) {
                        if (p.locked) {
                            f.colLock(p.th, false);
                            p.lock_refresh = true
                        }
                    });
                    f.$tbody.empty();
                    f.$lockTableH && f.$lockTableH.empty();
                    f.$lockTableB && f.$lockTableB.empty()
                }
                d.each(i, function (q, o) {
                    var r = d("<tr></tr>"), s,
                        p = e.linenumberAll ? ((k.pageCurrent - 1) * k.pageSize + (q + 1)) : (q + 1);
                    d.extend(o, {gridNumber: p, gridIndex: q});
                    d.each(l, function (w, u) {
                        var t = u.name || "datagrid-noname", B = o[t], z = "", D = "", C;
                        if (typeof B == "undefined") {
                            B = ""
                        }
                        C = B;
                        if (u.align) {
                            z = ' align="' + u.align + '"'
                        }
                        if (u.gridCheckbox) {
                            B = '<div><input type="checkbox" data-toggle="icheck" name="datagrid.checkbox" value="true"></div>'
                        }
                        if (u.gridEdit) {
                            B = m;
                            D = ' class="' + f.classnames.s_edit + '"'
                        }
                        if (u.calc) {
                            if (!u.calc_count) {
                                u.calc_count = i.length
                            }
                            var v = B ? (String(B).isNumber() ? B * 1 : 0) : 0;
                            if (u.calc == "sum" || u.calc == "avg") {
                                u.calc_sum = (u.calc_sum || 0) + v
                            } else {
                                if (u.calc == "max") {
                                    u.calc_max = u.calc_max ? (u.calc_max < v ? v : u.calc_max) : v
                                } else {
                                    if (u.calc == "min") {
                                        u.calc_min = u.calc_min ? (u.calc_min > v ? v : u.calc_min) : v
                                    }
                                }
                            }
                        }
                        s = d("<td" + z + D + "><div>" + B + "</div></td>");
                        s.data("val", B).appendTo(r);
                        if (u.gridNumber) {
                            s.addClass(f.classnames.td_linenumber)
                        }
                        if (u.gridCheckbox) {
                            s.addClass(f.classnames.td_checkbox)
                        }
                        if (h && u.hidden) {
                            s.css("display", "none")
                        }
                        if (u.items && !u.render) {
                            u.render = d.datagrid.renderItem
                        }
                        if (u.render && typeof u.render == "string") {
                            u.render = u.render.toFunc()
                        }
                        if (u.render && typeof u.render == "function") {
                            var y = "", x = false;
                            if (u.items) {
                                if (typeof u.items == "string") {
                                    if (u.render.trim().startsWith("[")) {
                                        u.render = u.render.toObj()
                                    } else {
                                        u.render = u.render.toFunc()
                                    }
                                }
                                if (!u.renderTds) {
                                    u.renderTds = []
                                }
                                var A = function (F, E) {
                                    d.when(u.items.call(f)).then(function (G) {
                                        u.items = G;
                                        y = u.render.call(f, E, G);
                                        F.html(y);
                                        d.each(u.renderTds, function (H, I) {
                                            y = u.render.call(f, I.text(), G);
                                            I.html(y);
                                            if (H == u.renderTds.length - 1) {
                                                u.renderTds = null
                                            }
                                        });
                                        f.delayRender--
                                    })
                                };
                                if (typeof u.items == "function") {
                                    if (q == 0) {
                                        if (!f.delayRender) {
                                            f.delayRender = 0
                                        }
                                        f.delayRender++;
                                        A(s, C)
                                    } else {
                                        u.renderTds.push(s)
                                    }
                                } else {
                                    y = u.render.call(f, C, u.items);
                                    s.html(y)
                                }
                            } else {
                                y = u.render.call(f, C);
                                s.html(y)
                            }
                        }
                    });
                    r.appendTo(f.$tbody);
                    if (h) {
                        r.initui()
                    }
                });
                if (h) {
                    f.initEvents();
                    if (e.editMode) {
                        f.edit()
                    }
                    f.$paging && f.$paging.trigger("bjui.datagrid.paging.jump");
                    d.each(l, function (o, p) {
                        if (p.lock_refresh) {
                            f.colLock(p.th, true);
                            delete p.lock_refresh
                        }
                    })
                }
                if (f.$boxM) {
                    f.$boxM.trigger("bjui.ajaxStop").hide()
                }
            }, loadData: function (l, h) {
                var m = this, k = e.dataUrl, i = e.dataType || "json", j = f.columnModel;
                if (f.$tbody) {
                    f.$boxM.show().trigger("bjui.ajaxStart", [50])
                }
                i = i.toLowerCase();
                if (i == "array") {
                    i = "text"
                }
                d.ajax({
                    url: k,
                    data: l || {},
                    type: e.loadType,
                    cache: e.cache || false,
                    dataType: i,
                    success: function (n) {
                        if (i == "xml") {
                            var o = [], p;
                            d(n).find("row").each(function () {
                                p = {};
                                d(this).find("cell").each(function (s) {
                                    var t = d(this), r = t.text(), q = t.attr("name");
                                    p[q] = r
                                });
                                o.push(p)
                            });
                            if (o) {
                                m.createTrsByData(o, h)
                            }
                        } else {
                            if (i == "json") {
                                m.createTrsByData(n, h)
                            } else {
                                m.createTrsByData(n.toObj(), h)
                            }
                        }
                    }
                })
            }, appendColumns: function () {
                f.linenumberColumn = {
                    name: "gridNumber",
                    gridNumber: true,
                    width: 30,
                    minWidth: 30,
                    label: "No.",
                    align: "center",
                    menu: false,
                    edit: false,
                    quicksort: false
                };
                f.checkboxColumn = {
                    name: "gridCheckbox",
                    gridCheckbox: true,
                    width: 40,
                    minWidth: 40,
                    label: "Checkbox",
                    align: "center",
                    menu: false,
                    edit: false,
                    quicksort: false
                };
                f.editBtnsColumn = {
                    name: "gridEdit",
                    gridEdit: true,
                    width: 110,
                    minWidth: 110,
                    label: "Edit",
                    align: "center",
                    menu: false,
                    edit: false,
                    hide: false,
                    quicksort: false
                }
            }, createThead: function () {
                var n = this, l = e.columns, p = [], r = [], q, o, h, k, m, j, i;
                n.appendColumns();
                if (e.showCheckboxcol) {
                    l.unshift(f.checkboxColumn);
                    if (e.showCheckboxcol == "lock") {
                        f.checkboxColumn.initLock = true
                    }
                }
                if (e.showLinenumber) {
                    l.unshift(f.linenumberColumn);
                    if (e.showLinenumber == "lock") {
                        f.linenumberColumn.initLock = true
                    }
                }
                if (e.showEditbtnscol) {
                    l.push(f.editBtnsColumn)
                }
                p = n.columns2Arr(l, p);
                f.columnModel[f.columnModel.length - (e.showEditbtnscol ? 2 : 1)].lock = false;
                if (e.hiddenFields) {
                    f.hiddenFields = e.hiddenFields
                }
                f.$thead = d("<thead></thead>");
                d.each(p, function (t, s) {
                    var w = d('<tr style="height:25px;"></tr>'), v = '<th class="datagrid-number"></th>', u;
                    d.each(s, function (x, y) {
                        q = y.label || y.name;
                        o = y.align ? (' align="' + y.align + '"') : "";
                        h = y.width ? (' width="' + y.width + '"') : "";
                        k = y.colspan ? ' colspan="' + y.colspan + '"' : "";
                        m = (p.length - y.rowspan > 1) ? ' rowspan="' + (p.length - y.rowspan) + '"' : "";
                        j = '<div class="' + f.classnames.th_resizemark + '"></div>';
                        i = "";
                        if (y.gridCheckbox) {
                            q = '<input type="checkbox" data-toggle="icheck">'
                        }
                        if (y.colspan) {
                            o = ' align="center"'
                        }
                        if (y.thalign) {
                            o = ' align="' + y.thalign + '"'
                        }
                        if (y.menu && e.columnMenu) {
                            i = ' class="' + f.classnames.th_menu + '"'
                        }
                        u = d("<th" + i + h + o + k + m + '><div><div class="datagrid-space"></div><div class="datagrid-label">' + q + '</div><div class="' + f.classnames.th_cell + '">' + j + "</div></div></th>");
                        u.data("index", y.index).appendTo(w);
                        u.find("> div").css("height", (p.length - y.rowspan > 1) ? (24 * (p.length - y.rowspan)) + "px" : "24px");
                        if (!m) {
                            u.addClass("single-row")
                        }
                        if (y.gridNumber) {
                            u.addClass(f.classnames.td_linenumber)
                        }
                        if (e.fieldSortable && y.quicksort) {
                            u.addClass("datagrid-quicksort-th")
                        }
                        y.th = u
                    });
                    w.appendTo(f.$thead)
                });
                f.$thead.appendTo(f.$element)
            }, createTbody: function () {
                var k = this, i = e.data, h = f.columnModel, j = [];
                if (i) {
                    if (typeof i == "string") {
                        if (i.trim().startsWith("[") || i.trim().startsWith("{")) {
                            i = i.toObj()
                        } else {
                            i = i.toFunc()
                        }
                    }
                    if (typeof i == "function") {
                        i = i.call()
                    }
                    k.createTrsByData(i)
                } else {
                    if (e.dataUrl) {
                        k.loadData()
                    }
                }
            }, setBoxbH: function (i) {
                var j = i || e.height, k = 0, l;
                if (j < 100) {
                    return
                }
                if (isNaN(j)) {
                    j = f.$grid.height()
                }
                if (f.$boxT) {
                    l = f.$boxT.outerHeight();
                    j -= l;
                    k += l
                }
                if (f.$toolbar) {
                    l = f.$toolbar.outerHeight();
                    j -= l;
                    k += l
                }
                if (f.$box_paging) {
                    j -= f.$box_paging.outerHeight()
                }
                if (f.$boxF) {
                    j -= f.$boxF.outerHeight()
                }
                k += f.$tableH.outerHeight();
                j -= f.$boxH.outerHeight();
                if (j < 0) {
                    j = 0
                }
                f.$boxB.height(j);
                f.$boxM.height(j).css({top: k})
            }, fixedH: function (h) {
                this.setBoxbH(h)
            }, showSubMenu: function (p, i, o) {
                var k, j = i.outerWidth(), m = o.data("width") || o.outerWidth(), l, n = f.$boxH.width();
                var h = function (s, r, q) {
                    k = r.offset().left - f.$grid.offset().left - 1;
                    l = {left: "50%"};
                    s.removeClass("active");
                    if (r.hasClass("position-right") || (n - k < j + m)) {
                        q.css({left: "auto", right: "100%"});
                        l = {right: "50%"}
                    } else {
                        q.css({left: "100%", right: "auto"})
                    }
                    l.opacity = 0.2;
                    q.stop().animate(l, "fast", function () {
                        d(this).hide()
                    })
                };
                p.hover(function () {
                    o.appendTo(p);
                    if (p.hasClass(f.classnames.li_filter) && o.is(":visible")) {
                        return false
                    } else {
                        var q = p.siblings("." + f.classnames.li_filter);
                        if (q.length && q.hasClass("active")) {
                            h(q, i, q.find("> ." + f.classnames.s_filter))
                        }
                    }
                    k = i.offset().left - f.$grid.offset().left - 1;
                    l = {left: "100%"};
                    if (i.hasClass("position-right") || (n - k < j + m)) {
                        o.css({left: "auto", right: "50%"});
                        l = {right: "100%"}
                    } else {
                        o.css({left: "50%", right: "auto"})
                    }
                    l.opacity = 1;
                    p.addClass("active");
                    o.show().stop().animate(l, "fast")
                }, function () {
                    if (p.hasClass(f.classnames.li_filter)) {
                        return false
                    }
                    h(p, i, o)
                });
                p.on("bjui.datagrid.th.submenu.hide", function (r, s, q) {
                    h(d(this), s, q)
                })
            }, locking: function (o) {
                var m = o.data("index"), l = f.columnModel[m], n = l.lock, k = l.locked, h = f.$menu,
                    j = h.find("> ul"), i = j.find("> li." + f.classnames.li_lock), p = i.next();
                if (k) {
                    i.addClass("disable");
                    p.removeClass("disable")
                } else {
                    p.addClass("disable");
                    i.removeClass("disable")
                }
                if (n) {
                    i.show().off("click").on("click", function () {
                        if (i.hasClass("disable")) {
                            return
                        }
                        h.hide().data("bjui.datagrid.menu.btn").removeClass("active");
                        f.colLock(o, true)
                    });
                    p.show().off("click").on("click", function () {
                        if (p.hasClass("disable")) {
                            return
                        }
                        h.hide().data("bjui.datagrid.menu.btn").removeClass("active");
                        f.colLock(o, false)
                    })
                } else {
                    i.hide().off("click");
                    p.hide().off("click")
                }
            }, createShowhide: function () {
                var h;
                if (!f.$showhide) {
                    f.col_showhide_count = f.columnModel.length;
                    h = d('<ul class="' + f.classnames.s_showhide + '" role="menu"></ul>');
                    d.each(f.columnModel, function (j, m) {
                        if (m.gridNumber || m.gridCheckbox || m.gridEdit) {
                            f.col_showhide_count--
                        }
                        var k = d(FRAG.gridShowhide.replaceAll("#index#", m.index).replaceAll("#label#", (m.label || ""))).toggleClass("nodisable", !!(m.gridNumber || m.gridCheckbox || m.gridEdit));
                        var l = function (i) {
                            k.click(function () {
                                if (d(this).hasClass("disable")) {
                                    return false
                                }
                                var p = d(this), n = !p.find("i").hasClass("fa-check-square-o"), o = i.index;
                                p.toggleClass("datagrid-col-check").find("i").attr("class", "fa fa" + (n ? "-check" : "") + "-square-o");
                                f.showhideColumn(i.th, n);
                                if (!(i.gridNumber || i.gridCheckbox || i.gridEdit)) {
                                    f.col_showhide_count = n ? f.col_showhide_count + 1 : f.col_showhide_count - 1
                                }
                                if (f.col_showhide_count == 1) {
                                    h.find("> li.datagrid-col-check").addClass("disable")
                                } else {
                                    h.find("> li.disable").removeClass("disable")
                                }
                                h.find("> li.nodisable").removeClass("disable")
                            })
                        };
                        l(m);
                        k.appendTo(h);
                        if (m.hide) {
                            k.trigger("click")
                        }
                    });
                    h.appendTo(f.$grid);
                    h.data("width", h.outerWidth());
                    f.$showhide = h
                }
            }, showhide: function (j, l) {
                var i = j.index, k = j.th, h = f.$tbody.find("> tr"), m = l ? "" : "none";
                var n = function (o) {
                    var p = o.colspan;
                    if (l) {
                        p++
                    } else {
                        p--
                    }
                    if (!p) {
                        o.th.css("display", "none")
                    } else {
                        o.th.css("display", "")
                    }
                    o.th.attr("colspan", p);
                    o.colspan = p;
                    if (o.parent) {
                        n(o.parent)
                    }
                };
                if (typeof j.hidden == "undefined") {
                    j.hidden = false
                }
                if (j.hidden == !l) {
                    return
                }
                j.hidden = !l;
                k.css("display", m);
                h.find("> td:eq(" + i + ")").css("display", m);
                f.$colgroupH.find("> col").eq(i).css("display", m);
                f.$colgroupB.find("> col").eq(i).css("display", m);
                f.$thead.find("> tr.datagrid-filter > th:eq(" + i + ")").css("display", m);
                if (f.$boxF) {
                    f.$tableF.find("> thead > tr > th:eq(" + i + ")").css("display", m);
                    f.$colgroupF.find("> col").eq(i).css("display", m)
                }
                if (j.calc) {
                    f.$tfoot && f.$tfoot.trigger("bjui.datagrid.tfoot.resizeH")
                }
                if (j.parent) {
                    n(j.parent)
                }
            }, jumpPage: function (k, h) {
                var j = f.allData, i;
                if (k) {
                    f.paging.pageCurrent = k
                }
                if (h) {
                    f.paging.pageSize = h;
                    f.paging.pageCount = this.getPageCount(h, f.paging.total);
                    if (f.paging.pageCurrent > f.paging.pageCount) {
                        f.paging.pageCurrent = f.paging.pageCount
                    }
                }
                if (e.local == "remote") {
                    i = this.getRemoteFilterData(true);
                    this.loadData(i, true)
                } else {
                    this.initTbody(j, true)
                }
            }, quickSort: function (m) {
                if (f.isDom) {
                    if (e.local == "local") {
                        return
                    }
                    e.sortAll = true
                }
                if (f.$tbody.find("> tr." + f.classnames.tr_edit).length) {
                    f.$tbody.alertmsg("info", BJUI.getRegional("datagrid.editMsg"));
                    return
                }
                var q = m.th, l = f.data, i = f.allData, j, p, h = m.name, o = m.type,
                    n = f.$thead.find("> tr > th.datagrid-quicksort-th");
                if (!h) {
                    h = "datagrid-noname"
                }
                var k = function (r) {
                    r.sort(function (t, s) {
                        var v = (typeof t[h]), u = (typeof s[h]);
                        if (o == "boolean" || o == "number" || (v = u == "number") || (v = u == "boolean")) {
                            return m.sortAsc ? (t[h] - s[h]) : (s[h] - t[h])
                        } else {
                            return m.sortAsc ? String(t[h]).localeCompare(s[h]) : String(s[h]).localeCompare(t[h])
                        }
                    })
                };
                n.find("> div > .datagrid-label > i").remove();
                if (m.sortAsc) {
                    p = "desc";
                    m.sortAsc = false
                } else {
                    p = "asc";
                    m.sortAsc = true
                }
                q.find("> div > .datagrid-label").prepend('<i class="fa fa-long-arrow-' + (m.sortAsc ? "up" : "down") + '"></i>');
                if (e.sortAll) {
                    if (e.local == "remote") {
                        j = {};
                        j[BJUI.pageInfo.orderField] = h;
                        j[BJUI.pageInfo.orderDirection] = p;
                        j[BJUI.pageInfo.pageSize] = f.paging.pageSize;
                        j[BJUI.pageInfo.pageCurrent] = f.paging.pageCurrent;
                        this.loadData(j, true)
                    } else {
                        k(i);
                        this.initTbody(i, true)
                    }
                } else {
                    k(l);
                    this.createTrs(l, true)
                }
            }, quickFilter: function (m, k) {
                if (f.isDom) {
                    if (e.local != "remote") {
                        BJUI.debug("Datagrid Plugin: Please change the local option is remote!");
                        return
                    }
                    if (!e.dataUrl) {
                        BJUI.debug("Datagrid Plugin: Not Set the dataUrl option!");
                        return
                    }
                }
                var n = this, r = m.th, l = f.data, i = f.allData, h = m.name, j, o;
                var q = function (s, v, t) {
                    var u = false;
                    switch (s) {
                        case"=":
                            u = String(v) == String(t);
                            break;
                        case"!=":
                            u = String(v) != String(t);
                            break;
                        case">":
                            u = parseFloat(t) > parseFloat(v);
                            break;
                        case"<":
                            u = parseFloat(t) < parseFloat(v);
                            break;
                        case"like":
                            if (m.type == "select") {
                                u = String(v) == String(t)
                            } else {
                                u = (String(t).indexOf(String(v)) >= 0)
                            }
                            break;
                        default:
                            break
                    }
                    return u
                };
                var p = function (u, s) {
                    var t = function (w) {
                        var v = 0;
                        d.each(s, function (y, x) {
                            var z = x.datas;
                            v++;
                            if (!z) {
                                v--;
                                x.model.isFiltered = false;
                                x.model.th.trigger("bjui.datagrid.th.filter", [false]);
                                if (x.model.quickfilter) {
                                    x.model.quickfilter.trigger("bjui.datagrid.thead.clearfilter")
                                }
                                return true
                            }
                            x.model.isFiltered = true;
                            x.model.th.trigger("bjui.datagrid.th.filter", [true]);
                            if (z.andor) {
                                if (z.andor == "and") {
                                    if (q(z.operatorA, z.valA, w[y]) && q(z.operatorB, z.valB, w[y])) {
                                        v--
                                    }
                                } else {
                                    if (z.andor == "or") {
                                        if (q(z.operatorA, z.valA, w[y]) || q(z.operatorB, z.valB, w[y])) {
                                            v--
                                        }
                                    }
                                }
                            } else {
                                if (z.operatorB) {
                                    if (q(z.operatorB, z.valB, w[y])) {
                                        v--
                                    }
                                } else {
                                    if (q(z.operatorA, z.valA, w[y])) {
                                        v--
                                    }
                                }
                            }
                        });
                        return !v ? true : false
                    };
                    return d.grep(u, function (w, v) {
                        return t(w)
                    })
                };
                if (!f.filterDatas) {
                    f.filterDatas = {}
                }
                if (e.filterMult) {
                    f.filterDatas[h] = {datas: k, model: m}
                } else {
                    f.filterDatas = {};
                    f.filterDatas[h] = {datas: k, model: m}
                }
                if (e.local != "remote" && i) {
                    if (!f.oldAllData) {
                        f.oldAllData = i.concat()
                    } else {
                        i = f.oldAllData.concat()
                    }
                }
                if (e.filterAll) {
                    if (e.local == "remote") {
                        n.loadData(n.getRemoteFilterData(), true)
                    } else {
                        o = p(i, f.filterDatas);
                        f.paging.pageCurrent = 1;
                        f.paging.pageCount = this.getPageCount(f.paging.pageSize, o.length);
                        this.initTbody(o, true)
                    }
                } else {
                    if (f.isDom) {
                        n.loadData(n.getRemoteFilterData(), true)
                    } else {
                        o = p(l, f.filterDatas);
                        this.createTrs(o, true)
                    }
                }
            }, getRemoteFilterData: function (i) {
                var h = [];
                if (f.filterDatas && !d.isEmptyObject(f.filterDatas)) {
                    d.each(f.filterDatas, function (k, j) {
                        if (!j.datas) {
                            j.model.isFiltered = false;
                            j.model.th.trigger("bjui.datagrid.th.filter", [false]);
                            if (j.model.quickfilter) {
                                j.model.quickfilter.trigger("bjui.datagrid.thead.clearfilter")
                            }
                            return true
                        }
                        j.model.isFiltered = true;
                        j.model.th.trigger("bjui.datagrid.th.filter", [true]);
                        if (e.jsonPrefix) {
                            k = e.jsonPrefix + "." + k
                        }
                        if (j.datas.andor) {
                            h.push({name: "andor", value: j.datas.andor})
                        }
                        if (j.datas.operatorA) {
                            h.push({name: k, value: j.datas.valA});
                            h.push({name: k + ".operator", value: j.datas.operatorA})
                        }
                        if (j.datas.operatorB) {
                            h.push({name: k, value: j.datas.valB});
                            h.push({name: k + ".operator", value: j.datas.operatorB})
                        }
                    });
                    if (!i) {
                        f.paging.pageCurrent = 1
                    }
                }
                h.push({name: BJUI.pageInfo.pageSize, value: f.paging.pageSize});
                h.push({name: BJUI.pageInfo.pageCurrent, value: f.paging.pageCurrent});
                return h
            }, setDomData: function (l) {
                var j = f.columnModel, k = {}, i = l.attr("data-hidden-datas"), h = f.attach;
                l.find("> td").each(function (n) {
                    var p = d(this), m = j[n], o = p.attr("data-val") || p.text();
                    if (!m.name) {
                        k["datagrid-noname" + n] = o
                    } else {
                        k[m.name] = o
                    }
                });
                if (i) {
                    i = i.toObj()
                }
                d.extend(k, h, {gridNumber: (l.index() + 1)}, i);
                l.data("initData", k);
                return k
            }, initEditInputs: function () {
                var h = f.columnModel;
                f.inputs = [];
                d.each(h, function (m, p) {
                    var k = p.name, o = "", n = "", l = [], j = "";
                    if (!p) {
                        return
                    }
                    if (p.attrs && typeof p.attrs == "object") {
                        d.each(p.attrs, function (q, r) {
                            j += " " + q + "=" + r
                        })
                    }
                    if (p == f.linenumberColumn || p == f.checkboxColumn || p == f.editBtnsColumn) {
                        f.inputs.push("")
                    } else {
                        if (k) {
                            if (p.rule) {
                                o = ' data-rule="' + p.label + "：" + p.rule + '"'
                            } else {
                                if (p.type == "date") {
                                    o = ' data-rule="pattern(' + (p.pattern || "yyyy-MM-dd") + ')"'
                                }
                            }
                            if (p.type) {
                                switch (p.type) {
                                    case"date":
                                        if (!p.pattern) {
                                            p.pattern = "yyyy-MM-dd"
                                        }
                                        n = ' data-pattern="' + p.pattern + '"';
                                        f.inputs.push('<input type="text" name="' + k + '" data-toggle="datepicker"' + n + o + j + ">");
                                        break;
                                    case"select":
                                        if (!p.items) {
                                            return
                                        }
                                        d.each(p.items, function (q, r) {
                                            d.each(r, function (i, s) {
                                                l.push('<option value="' + i + '">' + s + "</option>")
                                            })
                                        });
                                        f.inputs.push('<select name="' + k + '" data-toggle="selectpicker"' + o + j + ' data-width="100%">' + l.join("") + "</select>");
                                        break;
                                    case"boolean":
                                        f.inputs.push('<input type="checkbox" name="' + k + '" data-toggle="icheck"' + o + j + ' value="true">');
                                        break;
                                    case"lookup":
                                        f.inputs.push('<input type="text" name="' + k + '" data-toggle="lookup" data-custom-event="true"' + o + j + ">");
                                        break;
                                    case"spinner":
                                        f.inputs.push('<input type="text" name="' + k + '" data-toggle="spinner"' + o + j + ">");
                                        break;
                                    case"textarea":
                                        f.inputs.push('<textarea data-toggle="autoheight" rows="1"' + o + j + "></textarea>");
                                        break;
                                    default:
                                        f.inputs.push('<input type="text" name="' + k + '"' + o + j + ">");
                                        break
                                }
                            } else {
                                f.inputs.push('<input type="text" name="' + k + '"' + o + j + ">")
                            }
                        } else {
                            f.inputs.push("")
                        }
                    }
                });
                return f.inputs
            }, contextmenuH: function () {
                var h = this;
                f.$tableH.on("contextmenu", function (i) {
                    if (!f.$showhide) {
                        h.createShowhide()
                    }
                    var k = i.pageX;
                    var j = i.pageY;
                    if (d(window).width() < k + f.$showhide.width()) {
                        k -= f.$showhide.width()
                    }
                    if (d(window).height() < j + f.$showhide.height()) {
                        j -= f.$showhide.height()
                    }
                    if (f.$menu) {
                        f.$grid.trigger("click.bjui.datagrid.filter")
                    }
                    f.$showhide.appendTo("body").css({left: k, top: j, opacity: 1, "z-index": 9999}).show();
                    d(document).on("click", function (l) {
                        var m = d(l.target).closest("." + f.classnames.s_showhide);
                        if (!m.length) {
                            f.$showhide.css({left: "50%", top: 0, opacity: 0.2, "z-index": ""}).hide().appendTo(f.$grid)
                        }
                    });
                    i.preventDefault();
                    i.stopPropagation()
                })
            }, contextmenuB: function (i, h) {
                i.contextmenu("show", {
                    exclude: "input, .bootstrap-select",
                    items: [{
                        icon: "refresh", title: BJUI.getRegional("datagrid.refresh"), func: function (j, k) {
                            f.refresh()
                        }
                    }, {title: "diver"}, {
                        icon: "plus", title: BJUI.getRegional("datagrid.add"), func: function (j, k) {
                            f.add()
                        }
                    }, {
                        icon: "edit", title: BJUI.getRegional("datagrid.edit"), func: function (j, l) {
                            var k = j;
                            if (h) {
                                k = f.$tbody.find("> tr:eq(" + k.index() + ")")
                            }
                            f.doEditRow(k)
                        }
                    }, {
                        icon: "undo", title: BJUI.getRegional("datagrid.cancel"), func: function (j, l) {
                            var k = j;
                            if (h) {
                                k = f.$tbody.find("> tr:eq(" + k.index() + ")")
                            }
                            if (!k.hasClass(f.classnames.tr_edit)) {
                                k = f.$tbody.find("> tr." + f.classnames.tr_edit)
                            }
                            f.doCancelEditRow(k)
                        }
                    }, {
                        icon: "remove", title: BJUI.getRegional("datagrid.del"), func: function (j, l) {
                            var k = j;
                            if (h) {
                                k = f.$tbody.find("> tr:eq(" + k.index() + ")")
                            }
                            f.delRows(k)
                        }
                    }]
                })
            }
        };
        return g
    };
    c.prototype.createTable = function () {
        var f = this, e = f.options, g = f.tools;
        if (e.columns) {
            g.createThead()
        }
        if (e.data || e.dataUrl) {
            g.createTbody()
        }
    };
    c.prototype.setColumnModel = function () {
        var j = this, g = j.options, f = j.$thead.find("> tr"), k = [], e = [], l = f.length;
        if (!j.isDom) {
            j.tools.appendColumns();
            var i, h = l > 1 ? ' rowspan="' + l + '"' : "";
            if (g.showCheckboxcol) {
                j.columnModel.push(j.checkboxColumn);
                if (g.showCheckboxcol == "lock") {
                    j.checkboxColumn.initLock = true
                }
                i = d("<th" + h + '><input type="checkbox" data-toggle="icheck"></th>');
                i.prependTo(f.first());
                if (h) {
                    i.data("datagrid.column", j.checkboxColumn)
                }
            }
            if (g.showLinenumber) {
                j.columnModel.unshift(j.linenumberColumn);
                if (g.showLinenumber == "lock") {
                    j.linenumberColumn.initLock = true
                }
                i = d('<th class="datagrid-linenumber-td"' + h + ">No.</th>");
                i.prependTo(f.first());
                if (h) {
                    i.data("datagrid.column", j.linenumberColumn)
                }
            }
            if (g.showEditbtnscol) {
                j.columnModel[i.index()] = j.editBtnsColumn;
                i = d("<th" + h + ">Edit</th>");
                i.appendTo(f.first());
                if (h) {
                    i.data("datagrid.column", j.editBtnsColumn)
                }
            }
        }
        if (f.length && l == 1) {
            f.height(25);
            f.find("> th").each(function (o) {
                var p = d(this).addClass("single-row"), q = p.data("options"), m = p.attr("width") || p.outerWidth(),
                    n = p.html();
                if (j.columnModel.length && j.columnModel[o]) {
                    q = j.columnModel[o]
                } else {
                    if (q && typeof q == "string") {
                        q = q.toObj()
                    }
                    if (typeof q != "object") {
                        q = {}
                    }
                    q.index = o;
                    q.label = n;
                    q.width = (typeof q.width == "undefined") ? m : q.width;
                    q.menu = (typeof q.menu == "undefined") ? true : q.menu;
                    q.lock = (typeof q.lock == "undefined") ? true : q.lock;
                    q.hide = (typeof q.hide == "undefined") ? false : q.hide;
                    q.edit = (typeof q.edit == "undefined") ? true : q.edit;
                    q.add = (typeof q.add == "undefined") ? true : q.add;
                    q.quicksort = (typeof q.quicksort == "undefined") ? true : q.quicksort;
                    j.columnModel[o] = q
                }
                q.th = p;
                p.html('<div><div class="datagrid-space"></div><div class="datagrid-label">' + n + '</div><div class="' + j.classnames.th_cell + '"><div class="' + j.classnames.th_resizemark + '"></div></div></div>');
                if (q.menu && g.columnMenu) {
                    p.addClass(j.classnames.th_menu)
                }
                if (g.fieldSortable && q.quicksort) {
                    p.addClass("datagrid-quicksort-th")
                }
                if (q.align) {
                    p.attr("align", q.align)
                }
                p.data("index", o).find("> div").css("height", "24px")
            })
        } else {
            f.each(function (n) {
                var q = [], m = [], o = -1, p = 0;
                if (k.length) {
                    q = k.concat();
                    m = e.concat()
                }
                k = [];
                e = [];
                d(this).height(25).find("> th").each(function (u) {
                    var z = d(this), v = z.data("options") || z.data("datagrid.column") || {},
                        r = parseInt(z.attr("colspan") || 0), t = parseInt(z.attr("rowspan") || 0),
                        w = z.attr("width") || z.outerWidth(), y = z.html();
                    if (v && typeof v == "string") {
                        v = v.toObj()
                    }
                    if (typeof v != "object") {
                        v = {}
                    }
                    if (!-[1] && r == 1) {
                        r = 0
                    }
                    v.label = y;
                    v.th = z;
                    if (v.gridCheckbox) {
                        v.label = "Checkbox"
                    }
                    o++;
                    if (r) {
                        v.colspan = r;
                        for (var x = (q.length ? q[o] : o), s = x; s < (x + r); s++) {
                            k[p++] = s;
                            e[p - 1] = v
                        }
                        o += (r - 1);
                        z.data("index", o);
                        if (q.length) {
                            v.parent = m[o]
                        }
                    }
                    if (!t || t == 1) {
                        z.addClass("single-row")
                    }
                    if (!r) {
                        v.width = (typeof v.width == "undefined") ? w : v.width;
                        v.menu = (typeof v.menu == "undefined") ? true : v.menu;
                        v.lock = (typeof v.lock == "undefined") ? true : v.lock;
                        v.hide = (typeof v.hide == "undefined") ? false : v.hide;
                        v.edit = (typeof v.edit == "undefined") ? true : v.edit;
                        v.add = (typeof v.add == "undefined") ? true : v.add;
                        v.quicksort = (typeof v.quicksort == "undefined") ? true : v.quicksort;
                        z.html('<div style="height:' + (t ? t * 24 : 24) + 'px;"><div class="datagrid-space"></div><div class="datagrid-label">' + y + '</div><div class="' + j.classnames.th_cell + '"><div class="' + j.classnames.th_resizemark + '"></div></div></div>');
                        if (v.menu && g.columnMenu) {
                            z.addClass(j.classnames.th_menu)
                        }
                        if (g.fieldSortable && v.quicksort) {
                            z.addClass("datagrid-quicksort-th")
                        }
                        if (v.align) {
                            z.attr("align", v.align)
                        }
                        if (!q.length) {
                            v.index = o;
                            j.columnModel[o] = v
                        } else {
                            v.index = q[o];
                            v.parent = m[o];
                            j.columnModel[q[o]] = v
                        }
                        z.data("index", v.index)
                    } else {
                        z.html('<div style="height:' + (t ? t * 24 : 24) + 'px;"><div class="datagrid-space"></div><div class="datagrid-label">' + y + '</div><div class="' + j.classnames.th_cell + '"><div class="' + j.classnames.th_resizemark + '"></div></div></div>')
                    }
                })
            })
        }
    };
    c.prototype.init = function () {
        if (!this.$element.isTag("table")) {
            return
        }
        if (this.$element.data("bjui.datagrid.init")) {
            return
        }
        var g = this, e, i = g.tools, h = g.$element.parent(), f;
        if (g.options.options) {
            if (typeof g.options.options == "string") {
                g.options.options = g.options.options.toObj()
            }
            d.extend(g.options, typeof g.options.options == "object" && g.options.options)
        }
        g.parentH = h.height();
        e = g.options;
        g.$element.data("bjui.datagrid.init", true);
        if (!e.width) {
            f = h.width()
        }
        if (String(e.width).endsWith("%")) {
            f = Math.round(h.width() * parseInt(String(e.width).replace("%", "")) / 100)
        }
        e.height = e.height || 300;
        g.isDom = false;
        g.columnModel = [];
        g.inputs = [];
        g.$grid = d('<div class="bjui-datagrid"></div>').width(e.width).height(e.height);
        g.$boxH = d('<div class="datagrid-box-h"></div>');
        g.$boxB = d('<div class="datagrid-box-b"></div>');
        g.$boxM = d('<div class="datagrid-box-m"></div>').appendTo(g.$grid);
        g.regional = BJUI.regional.datagrid;
        g.$element.before(g.$grid);
        if (typeof e.paging == "string") {
            e.paging = e.paging.toObj()
        }
        g.paging = d.extend({}, {
            pageSize: 30,
            selectPageSize: "30,60,90",
            pageCurrent: 1,
            total: 0,
            showPagenum: 5
        }, (typeof e.paging == "object") && e.paging);
        g.attach = {gridNumber: 0, gridCheckbox: "#checkbox#", gridEdit: "#edit#"};
        g.$thead = g.$element.find("> thead");
        g.$tbody = g.$element.find("> tbody");
        if (g.$tbody && g.$tbody.find("> tr").length) {
            g.isDom = true
        }
        if (e.columns) {
            if (typeof e.columns == "string") {
                if (e.columns.trim().startsWith("[")) {
                    e.columns = e.columns.toObj()
                } else {
                    e.columns = e.columns.toFunc()
                }
            }
            if (typeof e.columns == "function") {
                e.columns = e.columns.call()
            }
            g.$thead = null;
            i.createThead()
        } else {
            if (g.$thead && g.$thead.length && g.$thead.find("> tr").length) {
                g.setColumnModel()
            }
        }
        g.initTop();
        g.$grid.data("bjui.datagrid.table", g.$element.clone());
        if (g.isDom) {
            i.appendColumns();
            g.$tbody.find("> tr > td").each(function () {
                var k = d(this), j = k.html();
                k.html("<div>" + j + "</div>")
            });
            if (!g.paging.total) {
                g.paging.total = g.$tbody.find("> tr").length;
                g.paging.pageCount = 1
            } else {
                g.paging.pageCount = i.getPageCount(g.paging.pageSize, g.paging.total)
            }
            g.paging.pageCurrent = 1;
            g.initThead()
        } else {
            g.$tbody = null;
            if (e.data || e.dataUrl) {
                i.createTbody()
            }
        }
    };
    c.prototype.refresh = function () {
        var j = this, g = j.options, k = j.tools, h = j.isDom, i = BJUI.pageInfo, f = j.paging, e = {};
        if (!g.dataUrl) {
            if (g.data && g.data.length) {
                k.initTbody(j.allData, true);
                return
            }
            BJUI.debug("Datagrid Plugin: Not Set the dataUrl option!");
            return
        }
        e[i.pageSize] = f.pageSize;
        e[i.pageCurrent] = f.pageCurrent;
        k.loadData(e, true);
        j.filterDatas = null;
        d.each(j.columnModel, function (l, m) {
            m.th.trigger("bjui.datagrid.th.filter", [false]);
            m.isFiltered = false;
            if (m.quickfilter) {
                m.quickfilter.trigger("bjui.datagrid.thead.clearfilter")
            }
        });
        j.$thead.find("> tr > th.datagrid-quicksort-th").find("> div > .datagrid-label > i").remove()
    };
    c.prototype.destroy = function () {
        var f = this, e = f.$grid.data("bjui.datagrid.table");
        if (e) {
            f.$element.html(e.html()).insertBefore(f.$grid);
            f.$grid.remove()
        }
    };
    c.prototype.initTop = function () {
        var i = this, n = i.options, g = i.regional, k = false, l, h = '<div class="btn-group" role="group"></div>',
            f = '<button type="button" class="btn" data-icon=""></button>';
        if (n.gridTitle) {
            i.$boxT = d('<div class="datagrid-title">' + n.gridTitle + "</div>");
            i.$boxT.appendTo(i.$grid)
        }
        if (n.showToolbar) {
            if (n.toolbarItem || n.toolbarCustom) {
                i.$toolbar = d('<div class="datagrid-toolbar"></div');
                if (n.toolbarItem) {
                    k = true;
                    if (n.toolbarItem.indexOf("all") >= 0) {
                        n.toolbarItem = "add, edit, cancel, save, |, del, |, refresh, |, import, export"
                    }
                    d.each(n.toolbarItem.split(","), function (o, p) {
                        p = p.trim().toLocaleLowerCase();
                        if (!l || p == "|") {
                            l = d(h).appendTo(i.$toolbar);
                            if (p == "|") {
                                return true
                            }
                        }
                        if (p == "add") {
                            i.$toolbar_add = d(f).attr("data-icon", "plus").addClass("btn-blue").text(BJUI.getRegional("datagrid.add")).appendTo(l).on("click", function (q) {
                                i.add()
                            })
                        } else {
                            if (p == "edit") {
                                i.$toolbar_edit = d(f).attr("data-icon", "edit").addClass("btn-green").text(BJUI.getRegional("datagrid.edit")).appendTo(l).on("click", function (r) {
                                    var q = i.$tbody.find("> tr." + i.classnames.tr_selected);
                                    if (!q.length) {
                                        d(this).alertmsg("info", BJUI.getRegional("datagrid.selectMsg"))
                                    } else {
                                        if (n.inlineEditMult) {
                                            i.doEditRow(q)
                                        } else {
                                            if (i.$lastSelect) {
                                                i.doEditRow(i.$lastSelect)
                                            } else {
                                                i.doEditRow(q.first())
                                            }
                                        }
                                    }
                                })
                            } else {
                                if (p == "cancel") {
                                    i.$toolbar_calcel = d(f).attr("data-icon", "undo").addClass("btn-orange").text(BJUI.getRegional("datagrid.cancel")).appendTo(l).on("click", function (q) {
                                        i.doCancelEditRow(i.$tbody.find("> tr." + i.classnames.tr_edit))
                                    })
                                } else {
                                    if (p == "save") {
                                        i.$toolbar_save = d(f).attr("data-icon", "save").addClass("btn-default").text(BJUI.getRegional("datagrid.save")).appendTo(l).on("click", function (q) {
                                            i.doSaveEditRow()
                                        })
                                    } else {
                                        if (p == "del") {
                                            i.$toolbar_del = d(f).attr("data-icon", "times").addClass("btn-red").text(BJUI.getRegional("datagrid.del")).appendTo(l).on("click", function (r) {
                                                var q = i.$tbody.find("> tr." + i.classnames.tr_selected);
                                                if (q.length) {
                                                    i.delRows(q)
                                                } else {
                                                    d(this).alertmsg("info", BJUI.getRegional("datagrid.selectMsg"))
                                                }
                                            })
                                        } else {
                                            if (p == "refresh") {
                                                i.$toolbar_refresh = d(f).attr("data-icon", "refresh").addClass("btn-green").text(BJUI.getRegional("datagrid.refresh")).appendTo(l).on("click", function (q) {
                                                    i.refresh()
                                                })
                                            } else {
                                                if (p == "import") {
                                                    i.$toolbar_add = d(f).attr("data-icon", "sign-in").addClass("btn-blue").text(BJUI.getRegional("datagrid.import")).appendTo(l).on("click", function (r) {
                                                        if (n.importOption) {
                                                            var q = n.importOption;
                                                            if (typeof q == "string") {
                                                                q = q.toObj()
                                                            }
                                                            if (q.options && q.options.url) {
                                                                if (q.type == "dialog") {
                                                                    i.$grid.dialog(q.options)
                                                                } else {
                                                                    if (q.type == "navtab") {
                                                                        i.$grid.navtab(q.options)
                                                                    } else {
                                                                        i.$grid.bjuiajax("doAjax", q.options)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    })
                                                } else {
                                                    if (p == "export") {
                                                        i.$toolbar_add = d(f).attr("data-icon", "sign-out").addClass("btn-green").text(BJUI.getRegional("datagrid.export")).appendTo(l).on("click", function (r) {
                                                            if (n.exportOption) {
                                                                var q = n.exportOption;
                                                                if (typeof q == "string") {
                                                                    q = q.toObj()
                                                                }
                                                                if (q.options && q.options.url) {
                                                                    if (q.type == "dialog") {
                                                                        i.$grid.dialog(q.options)
                                                                    } else {
                                                                        if (q.type == "navtab") {
                                                                            i.$grid.navtab(q.options)
                                                                        } else {
                                                                            if (q.type == "file") {
                                                                                d.fileDownload(q.options.url, {
                                                                                    failCallback: function (s, t) {
                                                                                        if (s.trim().startsWith("{")) {
                                                                                            s = s.toObj()
                                                                                        }
                                                                                        i.$grid.bjuiajax("ajaxDone", s)
                                                                                    }
                                                                                })
                                                                            } else {
                                                                                i.$grid.bjuiajax("doAjax", q.options)
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    })
                }
                if (n.toolbarCustom) {
                    var j, m = d('<div style="display:inline-block;"></div>');
                    if (typeof n.toolbarCustom == "string") {
                        var e = d(n.toolbarCustom);
                        if (e && e.length) {
                            j = e
                        } else {
                            e = e.toFunc();
                            if (e) {
                                j = e.call(i);
                                if (typeof j == "string") {
                                    j = d(j)
                                }
                            }
                        }
                    } else {
                        if (typeof n.toolbarCustom == "function") {
                            j = n.toolbarCustom.call(i);
                            if (typeof j == "string") {
                                j = d(j)
                            }
                        } else {
                            j = n.toolbarCustom
                        }
                    }
                    if (j && j.length && typeof j != "string") {
                        if (k) {
                            m.css("margin-left", "5px")
                        }
                        m.appendTo(i.$toolbar);
                        j.appendTo(m)
                    }
                }
                i.$toolbar.appendTo(i.$grid)
            }
        }
    };
    c.prototype.initThead = function () {
        var j = this, m = j.options, h = j.tools, i = j.columnModel, e, l = [],
            f = j.$tbody.find("> tr:first-child > td");
        j.init_thead = true;
        j.$colgroupH = d("<colgroup></colgroup>");
        j.$tableH = d('<table class="table table-bordered"></table>').append(j.$thead);
        j.$trsH = j.$thead.find("> tr");
        j.table_width = 0;
        d.each(j.columnModel, function (o, p) {
            e = p.width ? p.width : (f.eq(o).outerWidth() || 50);
            l.push('<col style="width:' + e + 'px;">');
            p.width = e;
            j.table_width += e
        });
        j.$thead.before(j.$colgroupH.append(l.join("")));
        j.$grid.append(j.$boxH.append(d('<div class="datagrid-wrap-h"></div>').append(j.$tableH)));
        var k = j.$trsH.find("> th");
        k.filter(".datagrid-quicksort-th").on("click.bjui.datagrid.quicksort", function (o) {
            var n = d(o.target);
            if (!n.closest("." + j.classnames.th_cell).length && !j.isResize) {
                h.quickSort(i[d(this).data("index")])
            }
        });
        k.filter(".datagrid-column-menu").on("bjui.datagrid.th.filter", function (q, n) {
            var o = d(this), p = o.find("> div > ." + j.classnames.th_cell + "> ." + j.classnames.btn_menu + "> .btn");
            if (n) {
                o.addClass("filter-active");
                p.find("> i").attr("class", "fa fa-filter")
            } else {
                o.removeClass("filter-active");
                p.find("> i").attr("class", "fa fa-bars")
            }
        });
        if (m.contextMenuH) {
            h.contextmenuH()
        }
        j.initTbody();
        if (m.columnResize) {
            j.colResize()
        }
        if (m.columnMenu) {
            j.colMenu()
        }
        if (m.paging) {
            j.initPaging()
        }
        if (m.editMode) {
            j.edit()
        }
        j.resizeGrid();
        var g = function () {
            if (m.showTfoot) {
                j.initTfoot()
            }
            j.initLock();
            j.$grid.initui();
            if (m.height) {
                h.fixedH()
            }
            setTimeout(function () {
                j.fixedWidth("init")
            }, 500);
            j.initEvents()
        };
        if (m.filterThead) {
            if (j.delayRender) {
                j.delayFilterTimeout = setInterval(function () {
                    if (!j.delayRender) {
                        clearInterval(j.delayFilterTimeout);
                        j.filterInThead();
                        g()
                    }
                }, 100)
            } else {
                j.filterInThead();
                g()
            }
        } else {
            g()
        }
    };
    c.prototype.fixedWidth = function (j) {
        var l = this, o = l.options, e, f = 0, i, g, k = l.columnModel, h = k.length;
        if (j && l.initFixedW) {
            return
        }
        l.initFixedW = true;
        var n = function () {
            l.$boxH.find("> div").css("width", "");
            l.$boxB.find("> div").css("width", "");
            l.$boxF && l.$boxF.find("> div").css("width", "");
            l.$pagingCon && l.$pagingCon.css("width", "");
            e = l.$boxB.find("> div").width();
            if (e) {
                l.$boxB.find("> div").width(e);
                l.$boxH.find("> div").width(e);
                l.$boxF && l.$boxF.find("> div").width(e);
                if (l.table_width > e) {
                    l.$pagingCon && l.$pagingCon.width(e)
                } else {
                    l.$pagingCon && l.$pagingCon.width(l.table_width)
                }
            }
        };
        var m = function () {
            if (e && e < l.table_width) {
                if (k[h - 1] == l.editBtnsColumn) {
                    f += l.editBtnsColumn.width;
                    h--
                }
                if (k[0] == l.linenumberColumn) {
                    f += l.linenumberColumn.width;
                    h--
                }
                if (k[0] == l.checkboxColumn || k[1] == l.checkboxColumn) {
                    f += l.checkboxColumn.width;
                    h--
                }
                i = parseInt((e - l.table_width - f) / h);
                if (!i) {
                    i = -1
                } else {
                    i--
                }
                d.each(k, function (p, q) {
                    if (q == l.linenumberColumn || q == l.checkboxColumn || q == l.editBtnsColumn) {
                        return true
                    }
                    g = q.width + i;
                    if (g <= 0) {
                        g = 1
                    }
                    l.$colgroupH.find("> col:eq(" + q.index + ")").width(g);
                    l.$colgroupB.find("> col:eq(" + q.index + ")").width(g);
                    l.$colgroupF && l.$colgroupF.find("> col:eq(" + q.index + ")").width(g);
                    q.new_width = g
                })
            }
        };
        if (o.fullGrid) {
            n();
            m()
        } else {
            n()
        }
    };
    c.prototype.initTbody = function () {
        var h = this, f = h.options, j = h.tools, e = h.$tbody.find("> tr"), i = e.find("> td"), g = "0";
        h.init_tbody = true;
        h.$colgroupB = h.$colgroupH.clone();
        h.$tableB = h.$element;
        h.$tableB.removeAttr("data-toggle width").empty().append(h.$tbody);
        h.$tbody.before(h.$colgroupB);
        h.$grid.append(h.$boxB.append(d('<div class="datagrid-wrap-b"></div>').append(h.$tableB)));
        if (!-[1]) {
            g = "auto"
        }
        if (f.fullGrid) {
            g = "100%"
        }
        h.$tableH.width(g);
        h.$tableB.width(g);
        h.$tableB.addClass("table table-bordered").removeClass("table-hover");
        h.$boxB.scroll(function () {
            h.$boxH.find("> div").prop("scrollLeft", this.scrollLeft);
            h.$boxF && h.$boxF.find("> div").prop("scrollLeft", this.scrollLeft);
            h.$lockB && h.$lockB.prop("scrollTop", this.scrollTop)
        });
        if (h.isDom) {
            if (f.showLinenumber) {
                h.showLinenumber(f.showLinenumber)
            }
            if (f.showCheckboxcol) {
                h.showCheckboxcol(f.showCheckboxcol)
            }
            if (f.showEditbtnscol) {
                h.showEditCol(f.showEditbtnscol)
            }
            h.$grid.data(h.datanames.tbody, h.$tbody.clone())
        }
    };
    c.prototype.initEvents = function (f) {
        var h = this, g = h.options, e = h.$tbody.find("> tr");
        if (!f) {
            f = e
        }
        f.on("click.bjui.datagrid.tr", function (p, o) {
            var n = d(this), l = n.index(), k = h.$tbody.find("> tr." + h.classnames.tr_selected), j = h.$lastSelect, m,
                i = h.$lockTbody && h.$lockTbody.find("> tr");
            if (o) {
                m = o.is(":checked");
                if (!m) {
                    h.$lastSelect = n
                }
                h.selectedRows(n, !m)
            } else {
                if (n.hasClass(h.classnames.tr_edit)) {
                    return
                }
                if (!BJUI.KeyPressed.ctrl && !BJUI.KeyPressed.shift) {
                    if (k.length > 1 && n.hasClass(h.classnames.tr_selected)) {
                        h.selectedRows(k.not(n));
                        h.$lastSelect = n
                    } else {
                        if (k.length && k[0] != this) {
                            h.selectedRows(null)
                        }
                        if (!n.hasClass(h.classnames.tr_selected)) {
                            h.$lastSelect = n
                        }
                        h.selectedRows(n)
                    }
                } else {
                    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
                    if (BJUI.KeyPressed.ctrl) {
                        if (!n.hasClass(h.classnames.tr_selected)) {
                            h.$lastSelect = n
                        }
                        h.selectedRows(n)
                    } else {
                        if (BJUI.KeyPressed.shift) {
                            if (!j) {
                                j = h.$lastSelect = n
                            }
                            if (j.length) {
                                h.selectedRows(null);
                                if (j.index() != l) {
                                    if (j.index() > l) {
                                        h.selectedRows(n.nextUntil(j).add(n).add(j), true)
                                    } else {
                                        h.selectedRows(n.prevUntil(j).add(n).add(j), true)
                                    }
                                } else {
                                    h.selectedRows(l)
                                }
                            }
                        }
                    }
                }
            }
        }).on("mouseenter.bjui.datagrid", function (k) {
            var j = d(this), i = j.index();
            j.addClass("datagrid-hover");
            h.$lockTbody && h.$lockTbody.find("> tr:eq(" + i + ")").addClass("datagrid-hover")
        }).on("mouseleave.bjui.datagrid", function (k) {
            var j = d(this), i = j.index();
            j.removeClass("datagrid-hover");
            h.$lockTbody && h.$lockTbody.find("> tr:eq(" + i + ")").removeClass("datagrid-hover")
        }).on("bjui.datagrid.tr.delete", function (o) {
            var m = d(this), j = m.index(), n = h.data, l, k = h.allData, i = h.$lockTbody && h.$lockTbody.find("> tr");
            if (!h.isDom) {
                l = n[j].gridIndex;
                h.data = n.remove(j);
                h.allData = k.remove(l)
            }
            if (h.columnModel[0] == h.linenumberColumn) {
                m.nextAll().each(function () {
                    var q = d(this).find("> td:eq(0)"), p = parseInt(q.text());
                    q.text(p - 1)
                });
                i && i.eq(j).trigger("bjui.datagrid.tr.delete", [j])
            }
            m.remove()
        });
        if (g.contextMenuB) {
            f.each(function () {
                h.tools.contextmenuB(d(this))
            })
        }
        f.each(function () {
            var i = d(this);
            i.find("> td." + h.classnames.td_checkbox).find("input").on("ifClicked", function () {
                i.trigger("click.bjui.datagrid.tr", [d(this)])
            })
        });
        if (h.checkboxColumn && h.checkboxColumn.th) {
            h.checkboxColumn.th.find("input").on("ifChanged", function () {
                var j = d(this).is(":checked"), i = h.$tbody.find("> tr");
                h.selectedRows(i, j)
            })
        }
    };
    c.prototype.initTfoot = function () {
        var h = this, e = h.options, i = h.tools, f = h.columnModel, g = d("<tr></tr>");
        h.$boxF = d('<div class="datagrid-box-f"></div>');
        h.$colgroupF = h.$colgroupH.clone();
        h.$tableF = h.$tableH.clone().empty();
        h.$tableF.append(h.$colgroupF);
        h.$boxF.append(d('<div class="datagrid-wrap-h"></div>').append(h.$tableF));
        h.$boxF.insertAfter(h.$boxB);
        h.$tfoot = d("<thead></thead>");
        d.each(f, function (j, m) {
            var k = d("<th><div></div></th>");
            if (m.calc) {
                var l = '<div><div class="datagrid-calcbox">#tit#</div>#number#</div>';
                if (m.calc == "avg") {
                    k.html(l.replace("#tit#", (m.calcTit || "AVG")).replace("#number#", (m.calc_sum / m.calc_count).toFixed(m.calcDecimal || 2)))
                } else {
                    if (m.calc == "count") {
                        k.html(l.replace("#tit#", (m.calcTit || "COUNT")).replace("#number#", (m.calc_count)))
                    } else {
                        if (m.calc == "sum") {
                            k.html(l.replace("#tit#", (m.calcTit || "SUM")).replace("#number#", (m.calc_sum)))
                        } else {
                            if (m.calc == "max") {
                                k.html(l.replace("#tit#", (m.calcTit || "MAX")).replace("#number#", (m.calc_max)))
                            } else {
                                if (m.calc == "min") {
                                    k.html(l.replace("#tit#", (m.calcTit || "MIN")).replace("#number#", (m.calc_min)))
                                }
                            }
                        }
                    }
                }
            }
            if (m.hidden) {
                k.css("display", "none")
            }
            k.appendTo(g)
        });
        h.$tfoot.append(g).appendTo(h.$tableF);
        h.$tfoot.on("bjui.datagrid.tfoot.resizeH", function () {
            i.setBoxbH(e.height)
        })
    };
    c.prototype.selectedRows = function (i, g) {
        var h = this, e = h.$lockTbody && h.$lockTbody.find("> tr"), f = h.$tbody.find("> tr"), k;
        var j = function (l) {
            if (typeof g == "undefined") {
                g = true
            }
            f.eq(l).toggleClass(h.classnames.tr_selected, g).find("> td." + h.classnames.td_checkbox + " input").iCheck(g ? "check" : "uncheck");
            e && e.eq(l).toggleClass(h.classnames.tr_selected, g).find("> td." + h.classnames.td_checkbox + " input").iCheck(g ? "check" : "uncheck")
        };
        if (i == null) {
            f.removeClass(h.classnames.tr_selected).find("> td." + h.classnames.td_checkbox + " input").iCheck("uncheck");
            e && e.removeClass(h.classnames.tr_selected).find("> td." + h.classnames.td_checkbox + " input").iCheck("uncheck")
        } else {
            if (typeof i == "object") {
                i.each(function () {
                    var l = d(this), m = l.index();
                    if (typeof g != "undefined") {
                        j(m)
                    } else {
                        l.toggleClass(h.classnames.tr_selected).trigger("bjui.datagrid.tr.selected").find("> td." + h.classnames.td_checkbox + " input").iCheck((l.hasClass(h.classnames.tr_selected) ? "check" : "uncheck"));
                        e && e.eq(m).toggleClass(h.classnames.tr_selected).trigger("bjui.datagrid.tr.selected").find("> td." + h.classnames.td_checkbox + " input").iCheck((l.hasClass(h.classnames.tr_selected) ? "check" : "uncheck"))
                    }
                })
            } else {
                if (isNaN(i)) {
                    d.each(i.split(","), function (l, m) {
                        j(parseInt(m.trim()))
                    })
                } else {
                    if (!isNaN(i)) {
                        j(parseInt(i))
                    }
                }
            }
        }
        if (h.$lastSelect && !h.$lastSelect.hasClass(h.classnames.tr_selected)) {
            h.$lastSelect = null
        }
        h.$element.data("selectedTrs", h.$tbody.find("> tr." + h.classnames.tr_selected))
    };
    c.prototype.initLock = function () {
        var f = this, e = f.columnModel;
        f.col_lock_count = 0;
        d.each(f.columnModel, function (g, h) {
            if (h.initLock) {
                f.col_lock_count++
            }
        });
        if (f.col_lock_count) {
            f.doLock()
        }
    };
    c.prototype.colLock = function (i, e) {
        var j = this, h, f, g;
        if (d.type(i) == "number") {
            f = parseInt(i);
            if (f < 0 || f > j.columnModel.length - 1) {
                return
            }
            g = j.columnModel[f];
            h = g.th
        } else {
            h = i;
            f = h.data("index");
            g = j.columnModel[f]
        }
        if (g == j.editBtnsColumn) {
            return
        } else {
            if (g.index == j.columnModel.length - 1) {
                return
            }
        }
        if (typeof g.locked == "undefined") {
            g.locked = false
        }
        if (g.locked == e) {
            return
        }
        g.initLock = e;
        if (e) {
            j.col_lock_count++
        } else {
            j.col_lock_count--
        }
        if (j.col_lock_count < 0) {
            j.col_lock_count = 0
        }
        j.doLock()
    };
    c.prototype.fixedLockItem = function (h) {
        var i = this, g = i.columnModel, e = i.$thead.find("> tr.datagrid-filter > th"),
            f = i.$lockTbody && i.$lockTbody.find("> tr");
        if (!h) {
            if (e && e.length) {
                i.$lockThead && i.$lockThead.find("> tr.datagrid-filter > th:visible").each(function () {
                    var j = d(this), k = j.index(), l = e.eq(k);
                    j.clone().insertAfter(j);
                    j.hide().insertAfter(l);
                    l.remove()
                })
            }
            if (f && f.length) {
                f.filter("." + i.classnames.tr_edit).each(function () {
                    var k = d(this), l = k.find("> td:eq(" + g.lockIndex + ")"), j = k.index(), m, n;
                    if (l.hasClass(i.classnames.td_edit)) {
                        m = i.$tbody.find("> tr:eq(" + j + ")"), n = m.find("> td:eq(" + index + ")");
                        l.clone().insertAfter(l);
                        l.hide().insertAfter(n);
                        n.remove()
                    }
                })
            }
        } else {
            if (e && e.length) {
                i.$lockThead.find("> tr.datagrid-filter > th:visible").each(function () {
                    var j = d(this), k = j.index(), l = e.eq(k);
                    l.clone().html("").insertAfter(l);
                    l.show().insertAfter(j);
                    j.remove()
                })
            }
            if (f && f.length) {
                f.filter("." + i.classnames.tr_edit).each(function () {
                    var k = d(this), j = k.index();
                    k.find("> td." + i.classnames.td_edit + ":visible").each(function () {
                        var m = d(this), n = m.index(), l = g[n], o, p;
                        if (l.locked) {
                            o = i.$tbody.find("> tr:eq(" + j + ")");
                            p = o.find("> td:eq(" + n + ")");
                            p.clone().insertAfter(p);
                            p.show().insertAfter(m);
                            m.remove()
                        }
                    })
                })
            }
        }
    };
    c.prototype.doLock = function () {
        var n = this, s = n.options, l = n.tools, m = n.columnModel, f = n.$tableH.width(), g = 0, h, i, e = 0;
        var k = n.$boxF && true, o = 0;
        if (!n.$lockBox || !n.$lockBox.length) {
            n.$lockBox = d('<div class="datagrid-box-l"></div>');
            n.$lockH = d('<div class="datagrid-box-h"></div>');
            n.$lockB = d('<div class="datagrid-box-b"></div>');
            n.$lockF = d('<div class="datagrid-box-f"></div>');
            n.$lockTableH = d('<table class="table table-bordered"></table>');
            n.$lockTableB = d("<table></table>").addClass(n.$tableB.attr("class"));
            n.$lockTableF = d('<table class="table table-bordered"></table>');
            n.$lockH.append(n.$lockTableH);
            n.$lockB.append(n.$lockTableB);
            n.$lockF.append(n.$lockTableF);
            n.$lockBox.append(n.$lockH).append(n.$lockB).prependTo(n.$grid);
            if (k) {
                n.$lockBox.append(n.$lockF);
                n.$lockF.css("margin-top", (n.$boxB.outerHeight() - n.$boxB[0].clientHeight)).height(n.$boxF.outerHeight())
            }
        } else {
            n.fixedLockItem();
            n.$lockTableH.empty();
            n.$lockTableB.empty();
            n.$lockTableF && n.$lockTableF.empty()
        }
        if (n.$boxT) {
            o += n.$boxT.outerHeight()
        }
        if (n.$toolbar) {
            o += n.$toolbar.outerHeight()
        }
        if (o) {
            n.$lockBox.css({top: o})
        }
        d.each(m, function (t, u) {
            u.lockShow = false;
            u.lockHide = false;
            if (u.initLock) {
                if (u.hidden) {
                    l.showhide(u, true)
                }
                u.lockHide = true;
                u.locked = true;
                u.lockIndex = e++;
                g += u.width
            } else {
                u.lockShow = true;
                if (!u.hidden) {
                    l.showhide(u, false)
                } else {
                    u.lockShow = false
                }
                if (u.locked) {
                    u.lockShow = true
                }
                u.locked = false
            }
        });
        n.$lockThead = n.$thead.clone(true);
        n.$lockTbody = n.$tbody.clone();
        n.$lockColgroupH = n.$colgroupH.clone();
        n.$lockColgroupB = n.$colgroupB.clone();
        n.$lockTableH.append(n.$lockColgroupH).append(n.$lockThead).css("width", g);
        n.$lockTableB.append(n.$lockColgroupB).append(n.$lockTbody).css("width", g);
        if (k) {
            n.$lockTfoot = n.$tableF.find("> thead").clone();
            n.$lockColgroupF = n.$colgroupF.clone();
            n.$lockTableF.append(n.$lockColgroupF).append(n.$lockTfoot).css("width", g)
        }
        d.each(n.columnModel, function (t, u) {
            if (u.lockShow) {
                l.showhide(u, true)
            }
            if (u.lockHide) {
                l.showhide(u, false)
            }
        });
        n.$boxH.find("> div").css("width", "");
        n.$boxB.find("> div").css("width", "");
        n.$boxF && n.$boxF.find("> div").css("width", "");
        setTimeout(function () {
            var t = n.$boxB.find("> div").width();
            n.$boxB.find("> div").width(t);
            n.$boxH.find("> div").width(t);
            n.$boxF && n.$boxF.find("> div").width(t)
        }, 50);
        if (n.col_lock_count == 0) {
            n.$lockBox.hide()
        } else {
            n.$lockBox.show()
        }
        if (g > 1) {
            g = g - 1
        }
        n.$boxH.css("margin-left", g);
        n.$boxB.css("margin-left", g);
        if (k) {
            n.$boxF.css("margin-left", g)
        }
        n.$lockB.height(n.$boxB[0].clientHeight);
        n.$lockB.prop("scrollTop", n.$boxB[0].scrollTop);
        var p = n.$lockTableH.height(), q = n.$thead.height(), j = n.$lockTableF && n.$lockTableF.height(),
            r = n.$tableF && n.$tableF.height();
        if (p != q) {
            if (p < q) {
                n.$lockTableH.height(q)
            } else {
                n.$tableH.height(p)
            }
        }
        if (j && r && (j != r)) {
            if (j < r) {
                n.$lockTableF.find("> thead > tr:first-child > th:visible:first").height(r)
            } else {
                n.$tableF.find("> thead > tr:first-child > th:visible:first").height(j)
            }
        }
        i = n.$lockTbody.find("> tr");
        h = n.$tbody.find("> tr");
        setTimeout(function () {
            var u = n.$lockTableB.height(), t = n.$tableB.height();
            if (u != t) {
                if (u > t) {
                    i.each(function (w) {
                        var v = d(this), y = v.find("> td:visible:first"), x = y.outerHeight();
                        if (x > 30) {
                            v.height(x);
                            h.eq(w).height(x)
                        }
                    })
                } else {
                    h.each(function (v) {
                        var x = d(this), y = x.find("> td:visible:first"), w = y.outerHeight();
                        if (w > 30) {
                            x.height(w);
                            i.eq(v).height(w)
                        }
                    })
                }
            }
        }, 20);
        n.fixedLockItem(1);
        i.find("> td:hidden").remove();
        n.initLockEvents(i)
    };
    c.prototype.initLockEvents = function (f) {
        if (!this.$lockTbody) {
            return
        }
        var g = this, e = g.options;
        if (!f) {
            f = g.$lockTbody.find("> tr")
        }
        f.on("click.bjui.datagrid.tr", function () {
            var h = d(this).index();
            g.$tbody.find("> tr:eq(" + h + ")").trigger("click.bjui.datagrid.tr")
        }).on("bjui.datagrid.tr.delete", function (j, h) {
            var i = d(this);
            if (g.linenumberColumn && g.linenumberColumn.locked) {
                i.nextAll().each(function () {
                    var l = d(this).find("> td:eq(0)"), k = parseInt(l.text());
                    l.text(k - 1)
                })
            }
            i.remove()
        }).find("> td." + g.classnames.td_checkbox + " input").on("ifChanged", function () {
            var j = d(this), i = j.closest("tr"), h = i.index();
            if (j.is(":checked")) {
                i.addClass(g.classnames.tr_selected);
                $trs.eq(h).addClass(g.classnames.tr_selected)
            } else {
                i.removeClass(g.classnames.tr_selected);
                $trs.eq(h).removeClass(g.classnames.tr_selected)
            }
        });
        if (e.contextMenuB) {
            f.each(function () {
                g.tools.contextmenuB(d(this), true)
            })
        }
    };
    c.prototype.filterInThead = function () {
        var i = this, m = i.options, f = i.tools, e = i.regional, h = i.columnModel, k = {};
        var g = d('<tr class="datagrid-filter"></tr>');
        var l = function (q, n, p) {
            var o = n.type;
            if (o == "date") {
                q.on("afterchange.bjui.datepicker", function (s, r) {
                    j(n, q.val())
                }).change(function () {
                    j(n, q.val())
                })
            } else {
                if (o == "lookup") {
                    p.on("customEvent.bjui.lookup", '[data-toggle="lookupbtn"]', function (t, r) {
                        for (var s in r) {
                            if (n.name == s) {
                                q.val(r[s]);
                                j(n, r[s])
                            }
                        }
                    });
                    q.change(function () {
                        j(n, q.val())
                    })
                } else {
                    q.change(function () {
                        j(n, q.val())
                    })
                }
            }
        };
        var j = function (n, o) {
            f.quickFilter(n, o ? {operatorA: "like", valA: o} : null)
        };
        if (!i.inputs || !i.inputs.length) {
            f.initEditInputs()
        }
        d.each(h, function (o, r) {
            var q = d(i.inputs[o]), p = d("<th></th>");
            if (r.type == "spinner") {
                q = d('<input type="text" name="' + r.name + '">')
            } else {
                if (r.type == "boolean") {
                    q = d(BJUI.doRegional('<select name="' + r.name + '" data-toggle="selectpicker"><option value="">#all#</option><option value="true">#true#</option><option value="false">#false#</option></select>', e))
                } else {
                    if (r.type == "select") {
                        if (q.find("> option:first-child").val()) {
                            q = d('<select name="' + r.name + '" data-toggle="selectpicker"></select>').append(BJUI.doRegional('<option value="">#all#</option>', e)).append(q.html())
                        }
                    }
                }
            }
            p.append(q);
            if (r.hidden) {
                p.hide()
            }
            if (r.type == "boolean") {
                p.attr("align", "center")
            }
            p.appendTo(g);
            q.data("clearFilter", false);
            l(q, r, p);
            q.on("bjui.datagrid.thead.clearfilter", function () {
                q.val("");
                if (r.type == "boolean" || r.type == "select") {
                    q.selectpicker("refresh")
                }
            });
            r.quickfilter = q
        });
        g.appendTo(i.$thead).initui()
    };
    c.prototype.showLinenumber = function (l) {
        var k = this, o = k.options, i = k.columnModel, m = i[0], h = k.data;
        if (m == k.linenumberColumn) {
            if (typeof l === "string" && (l == "lock" || l == "unlock")) {
                k.colLock(m.th, l == "lock" ? true : false)
            } else {
                k.showhideColumn(m.th, l ? true : false)
            }
        } else {
            if (l) {
                var f = k.$thead.find("> tr"), e = '<col style="width:30px;">', n, j = f.filter(".datagrid-filter"),
                    g = f.length - j.length;
                m = k.linenumberColumn;
                i.unshift(m);
                k.$colgroupH.prepend(e);
                k.$colgroupB.prepend(e);
                k.$colgroupF && k.$colgroupF.prepend(e);
                n = d('<th align="center" rowspan="' + g + '" class="' + k.classnames.td_linenumber + '">' + k.linenumberColumn.label + "</th>");
                f.first().prepend(n);
                j.length && j.prepend("<th></th>");
                m.th = n;
                m.index = 0;
                m.width = 30;
                k.$tbody.find("> tr").each(function (p) {
                    d(this).prepend('<td align="center" class="' + k.classnames.td_linenumber + '">' + (p + 1) + "</td>")
                });
                k.$tableF && k.$tableF.find("> thead > tr").prepend("<th></th>");
                d.each(i, function (p, q) {
                    q.index = p;
                    if (q.th) {
                        q.th.data("index", p)
                    }
                });
                if (l == "lock") {
                    k.colLock(n, true)
                }
                if (k.$showhide) {
                    k.$showhide.remove();
                    k.colShowhide(o.columnShowhide)
                }
            }
        }
    };
    c.prototype.showCheckboxcol = function (n) {
        var m = this, q = m.options, k = m.columnModel, o = k[0], h, j = m.data;
        if (k[0] == m.checkboxColumn) {
            h = k[0]
        }
        if (k[1] == m.checkboxColumn) {
            h = k[1]
        }
        if (h) {
            if (typeof n === "string" && (n == "lock" || n == "unlock")) {
                m.colLock(h.th, n == "lock" ? true : false)
            } else {
                m.showhideColumn(h.th, n)
            }
        } else {
            if (n) {
                var g = m.$thead.find("> tr"), f = '<col style="width:26px;">', p, e, l = g.filter(".datagrid-filter"),
                    i = g.length - l.length;
                h = m.checkboxColumn;
                p = d('<th align="center" rowspan="' + i + '" class="' + m.classnames.td_checkbox + '"><div><input type="checkbox" data-toggle="icheck"></div></th>');
                if (o == m.linenumberColumn) {
                    k.splice(1, 0, h);
                    j && j.splice(1, 0, {name: h.name});
                    h.index = 1;
                    m.$colgroupH.find("> col:first").after(f);
                    m.$colgroupB.find("> col:first").after(f);
                    m.$colgroupF && m.$colgroupF.find("> col:first").after(f);
                    l.length && l.find("> th:first").after("<th></th>");
                    g.first().find("> th:first").after(p);
                    m.$tableF && m.$tableF.find("> thead > tr > th:first").after("<th></th>")
                } else {
                    k.unshift(h);
                    j && j.unshift({name: h.name});
                    h.index = 0;
                    m.$colgroupH.prepend(f);
                    m.$colgroupB.prepend(f);
                    m.$colgroupF && m.$colgroupF.prepend(f);
                    l.length && l.prepend("<th></th>");
                    g.first().prepend(p);
                    m.$tableF && m.$tableF.find("> thead > tr").prepend("<th></th>")
                }
                p.initui();
                h.th = p;
                h.width = 26;
                m.$tbody.find("> tr").each(function (r) {
                    e = d('<td align="center" class="' + m.classnames.td_checkbox + '"><input type="checkbox" data-toggle="icheck" name="datagrid.checkbox"></td>');
                    if (h.index == 0) {
                        d(this).prepend(e)
                    } else {
                        d(this).find("> td:first").after(e)
                    }
                    e.initui()
                });
                d.each(k, function (r, s) {
                    s.index = r;
                    if (s.th) {
                        s.th.data("index", r)
                    }
                });
                if (n == "lock") {
                    m.colLock(p, true)
                }
                if (m.$showhide) {
                    m.$showhide.remove();
                    m.colShowhide(q.columnShowhide)
                }
            }
        }
    };
    c.prototype.showEditCol = function (n) {
        var l = this, p = l.options, j = l.columnModel, m = j[j.length - 1], i = l.data;
        if (m == l.editBtnsColumn) {
            l.showhideColumn(m.th, n ? true : false)
        } else {
            if (n) {
                var g = l.$thead.find("> tr"), f = '<col style="width:110px;">', o, e, k = g.filter(".datagrid-filter"),
                    h = g.length - k.length;
                m = l.editBtnsColumn;
                j.push(m);
                l.$colgroupH.append(f);
                l.$colgroupB.append(f);
                l.$colgroupF && l.$colgroupF.append(f);
                o = d('<th align="center" rowspan="' + h + '">Edit</th>');
                g.first().append(o);
                k.length && k.append("<th></th>");
                o.initui().data("index", j.length - 1);
                m.th = o;
                m.width = 110;
                m.index = j.length - 1;
                l.$tbody.find("> tr").each(function (q) {
                    e = d('<td align="center" class="' + l.classnames.s_edit + '">' + BJUI.doRegional(FRAG.gridEditBtn, l.regional) + "</td>");
                    d(this).append(e);
                    e.initui()
                });
                l.edit(l.$tbody.find("> tr"));
                l.$tableF && l.$tableF.find("> thead > tr").append("<th></th>");
                if (l.$showhide) {
                    l.$showhide.remove();
                    l.colShowhide(p.columnShowhide)
                }
            }
        }
    };
    c.prototype.colResize = function () {
        var g = this, h = g.tools, f = g.columnModel, e = g.$thead, i = g.$grid.find("> .resizeProxy");
        if (!i.length) {
            i = d('<div class="resizeProxy" style="left:0; display:none;"></div>');
            i.appendTo(g.$grid)
        }
        e.find("> tr > th").each(function (j) {
            var k = d(this), l = k.find("> div > ." + g.classnames.th_cell + "> ." + g.classnames.th_resizemark);
            l.on("mousedown.bjui.datagrid.resize", function (u) {
                var v = g.$boxH.scrollLeft(), q = parseInt(g.$boxH.css("marginLeft") || 0), o = h.getRight(k) - v + q,
                    t = k.data("index"), r = f[t], m = r.th.width(), n = g.$tbody.find("> tr"),
                    p = g.$lockTbody && g.$lockTbody.find("> tr"), w = g.$lockTableB && g.$lockTableB.height(),
                    y = g.$tableB.height(), x, s;
                g.isResize = true;
                if (r.locked) {
                    o = h.getRight4Lock(r.lockIndex);
                    if (r.lockWidth) {
                        m = r.lockWidth
                    }
                }
                i.show().css({
                    left: o,
                    bottom: (g.$box_paging ? g.$box_paging.outerHeight() : 0),
                    cursor: "col-resize"
                }).basedrag({
                    scop: true, cellMinW: 20, relObj: i, move: "horizontal", event: u, stop: function () {
                        var B = i.position().left, A = B - o, C = A + m, E = g.$tableH.width() + A,
                            z = g.$lockTableH && g.$lockTableH.width() + A;
                        if (C < 5) {
                            C = 20
                        }
                        if (r.minWidth && C < r.minWidth) {
                            C = r.minWidth
                        }
                        if (C != m + A) {
                            E = E - A + (C - m);
                            z = z - A + (C - m)
                        }
                        r.width = C;
                        if (r.locked) {
                            if (z < (g.$grid.width() * 0.75)) {
                                r.lockWidth = C;
                                g.$lockColgroupH.find("> col:eq(" + t + ")").width(C);
                                g.$lockColgroupB.find("> col:eq(" + t + ")").width(C);
                                g.$lockColgroupF && g.$lockColgroupF.find("> col:eq(" + t + ")").width(C);
                                g.$lockTableH.width(z);
                                g.$lockTableB.width(z);
                                g.$lockTableF && g.$lockTableF.width(z);
                                var D = g.$lockBox.width();
                                g.$boxH.css("margin-left", D - 1);
                                g.$boxB.css("margin-left", D - 1);
                                g.$boxF && g.$boxF.css("margin-left", D - 1);
                                g.$colgroupH.find("> col:eq(" + t + ")").width(C);
                                g.$colgroupB.find("> col:eq(" + t + ")").width(C);
                                g.$colgroupF && g.$colgroupF.find("> col:eq(" + t + ")").width(C)
                            }
                        } else {
                            setTimeout(function () {
                                g.$colgroupH.find("> col:eq(" + t + ")").width(C);
                                g.$colgroupB.find("> col:eq(" + t + ")").width(C);
                                g.$colgroupF && g.$colgroupF.find("> col:eq(" + t + ")").width(C)
                            }, 1)
                        }
                        setTimeout(function () {
                            n.css("height", "");
                            s = g.$tableB.height();
                            if (g.$lockTbody) {
                                p.css("height", "");
                                x = g.$lockTableB.height();
                                if (x != w || s != y) {
                                    if (x > s) {
                                        p.each(function (G) {
                                            var F = d(this), I = F.find("> td:eq(" + r.lockIndex + ")"),
                                                H = I.outerHeight();
                                            if (H > 30) {
                                                F.height(H);
                                                n.eq(G).height(H)
                                            }
                                        })
                                    } else {
                                        n.each(function (F) {
                                            var H = d(this), I = H.find("> td:eq(" + t + ")"), G = I.outerHeight();
                                            if (G > 30) {
                                                H.height(G);
                                                p.eq(F).height(G)
                                            }
                                        })
                                    }
                                }
                                g.$lockB.height(g.$boxB[0].clientHeight)
                            }
                            if (r.calc) {
                                g.$tfoot && g.$tfoot.trigger("bjui.datagrid.tfoot.resizeH")
                            }
                            g.isResize = false
                        }, 10);
                        i.hide();
                        g.resizeFlag = true
                    }
                })
            })
        })
    };
    c.prototype.colMenu = function () {
        var i = this, e = i.options, j = i.tools, h = i.regional, f = i.$trsH.find("> th." + i.classnames.th_menu),
            g = i.$grid.find("> ." + i.classnames.s_menu);
        if (!g.legnth) {
            g = d(BJUI.doRegional(FRAG.gridMenu, h));
            g.hide().appendTo(i.$grid);
            i.$menu = g
        }
        i.colShowhide(e.columnShowhide);
        f.each(function () {
            var n = d(this), m = n.data("index"), l = i.columnModel[m], p = n.find("> div > ." + i.classnames.th_cell),
                k = p.find("> ." + i.classnames.btn_menu), o;
            if (!k.length) {
                o = d('<button class="btn btn-default"><i class="fa fa-bars"></button>'), k = d('<div class="' + i.classnames.btn_menu + '"></div>').append(o);
                k.appendTo(p);
                o.click(function () {
                    var z = n.closest("tr"), u = parseInt(n.attr("rowspan") || 1),
                        q = d(this).offset().left - i.$grid.offset().left - 1,
                        B = (i.$trsH.length - u) * 25 + (13 * u) + 11, A = g.find("> ul > li.datagrid-li-showhide"), v,
                        t;
                    var r = g.data("bjui.datagrid.menu.btn");
                    if (r && r.length) {
                        r.removeClass("active")
                    }
                    d(this).addClass("active");
                    if (A.length && i.$showhide) {
                        i.$showhide.appendTo(A);
                        t = i.$showhide.data("width")
                    }
                    g.css({
                        position: "absolute",
                        top: B,
                        left: q
                    }).show().data("bjui.datagrid.menu.btn", o).siblings("." + i.classnames.s_menu).hide();
                    v = g.outerWidth();
                    var y = function (C) {
                        if (i.$boxH.width() - C < v) {
                            g.css({left: C - v + 18}).addClass("position-right")
                        } else {
                            g.css({left: C}).removeClass("position-right")
                        }
                    };
                    var s = function (C) {
                        i.$boxB.scroll(function () {
                            var D = C.offset().left - i.$grid.offset().left - 1;
                            y(D)
                        })
                    };
                    y(q);
                    s(o);
                    i.colFilter(n, true);
                    j.locking(n);
                    var w = g.find("> ul > li." + i.classnames.li_asc), x = w.next();
                    w.click(function () {
                        l.sortAsc = false;
                        j.quickSort(l)
                    });
                    x.click(function () {
                        l.sortAsc = true;
                        j.quickSort(l)
                    });
                    g.on("bjui.datagrid.th.sort", function (D, C) {
                        w.toggleClass("sort-active", C);
                        x.toggleClass("sort-active", !C)
                    })
                })
            }
        });
        i.$grid.on("click.bjui.datagrid.filter", function (m) {
            var k = d(m.target), l = i.$grid.find("." + i.classnames.s_menu + ":visible");
            if (l.length && !k.closest("." + i.classnames.btn_menu).length) {
                if (!k.closest("." + i.classnames.s_menu).length) {
                    l.hide().data("bjui.datagrid.menu.btn").removeClass("active")
                }
            }
        })
    };
    c.prototype.colShowhide = function (i) {
        var h = this, f = h.options, k = h.tools, g = h.$menu, e = g.find("> ul"),
            j = e.find("> li." + h.classnames.li_showhide);
        if (i) {
            if (!h.$showhide) {
                k.createShowhide();
                k.showSubMenu(j, g, h.$showhide)
            }
        } else {
            j.hide()
        }
    };
    c.prototype.showhideColumn = function (g, i) {
        var h = this, j = h.tools, f, e;
        if (d.type(g) == "number") {
            f = parseInt(g);
            if (f < 0) {
                return
            }
        } else {
            f = g.data("index")
        }
        e = h.columnModel[f];
        if (e) {
            if (e.locked) {
                if (i) {
                    return
                } else {
                    h.colLock(e.th, i)
                }
            }
            j.showhide(e, i)
        }
    };
    c.prototype.colFilter = function (g, z) {
        var n = this, f = n.options, y = n.tools, C = n.regional, t = g.data("bjui.datagrid.filter"), l = n.$menu,
            B = l.find("> ul > li." + n.classnames.li_filter);
        if (!n.inputs || !n.inputs.length) {
            y.initEditInputs()
        }
        if (z) {
            B.find("." + n.classnames.s_filter).addClass("hide");
            if (!t || !t.length) {
                t = d(BJUI.doRegional(FRAG.gridFilter.replaceAll("#label#", g.text()), C)).hide().appendTo(n.$grid);
                var m = g.data("index"), j = n.columnModel[m], h = j.type || "string", o = j.operator || [],
                    E = t.find("span.filter-a"), D = t.find("span.filter-b"),
                    w = d('<select data-toggle="selectpicker" data-container="true"></select>'), e = d(n.inputs[m]), x,
                    v;
                e.removeAttr("data-rule").attr("size", 10).addClass("filter-input");
                if (h == "string" || h == "lookup") {
                    if (!o.length) {
                        o = ["=", "!=", "like"]
                    }
                } else {
                    if (h == "number" || h == "int" || h == "spinner") {
                        if (h == "spinner") {
                            e.removeAttr("data-toggle")
                        }
                        if (!o.length) {
                            o = ["=", "!=", ">", "<", ">=", "<="]
                        }
                    } else {
                        if (h == "date") {
                            if (!o.length) {
                                o = ["=", "!="]
                            }
                        } else {
                            if (h == "boolean") {
                                if (!o.length) {
                                    o = ["=", "!="]
                                }
                                e = d(BJUI.doRegional('<select name="' + j.name + '" data-toggle="selectpicker"><option value="">#all#</option><option value="true">#true#</option><option value="false">#false#</option></select>', C))
                            } else {
                                if (h == "select") {
                                    if (!o.length) {
                                        o = ["=", "!="]
                                    }
                                    e.attr("data-width", "80");
                                    if (e.find("> option:first-child").val()) {
                                        e = d('<select name="' + j.name + '" data-toggle="selectpicker" data-width="80"></select>').append(BJUI.doRegional('<option value="">#all#</option>', C)).append(e.html())
                                    }
                                }
                            }
                        }
                    }
                }
                for (var u = 0; u < o.length; u++) {
                    w.append('<option value="' + (o[u]) + '">' + (o[u]) + "</option>")
                }
                x = e;
                v = x.clone();
                E.append(w).append(e);
                D.append(w.clone()).append(v);
                g.data("bjui.datagrid.filter", t);
                t.appendTo(B);
                t.data("width", t.outerWidth()).hide().initui();
                t.on("customEvent.bjui.lookup", '[data-toggle="lookupbtn"]', function (G, i) {
                    for (var F in i) {
                        if (j.name == F) {
                            e.val(i[F])
                        }
                    }
                });
                var p = t.find("button.ok"), k = t.find("button.clear"), A = t.find("select"), r = A.first(),
                    q = A.last(), s = A.eq(1);
                p.click(function () {
                    var J = r.val(), F = x.val().trim(), I = q.val(), i = v.val().trim(), H = s.val();
                    var G = {};
                    if (F.length) {
                        d.extend(G, {operatorA: J, valA: F})
                    }
                    if (i.length) {
                        if (F.length) {
                            d.extend(G, {andor: H})
                        }
                        d.extend(G, {operatorB: I, valB: i})
                    }
                    if (!d.isEmptyObject(G)) {
                        y.quickFilter(n.columnModel[g.data("index")], G);
                        n.$grid.trigger("click");
                        B.trigger("bjui.datagrid.th.submenu.hide", [l, t])
                    }
                });
                k.click(function () {
                    var i = n.columnModel[g.data("index")];
                    A.find("> option:first").prop("selected", true);
                    A.selectpicker("refresh");
                    x.val("");
                    v.val("");
                    if (i.isFiltered) {
                        y.quickFilter(i, null);
                        n.$grid.trigger("click");
                        B.trigger("bjui.datagrid.th.submenu.hide", [l, t])
                    }
                })
            }
            y.showSubMenu(B, l, t.removeClass("hide"));
            l.find('> ul > li:not(".' + n.classnames.li_filter + '")').on("mouseover", function () {
                if (B.hasClass("active")) {
                    B.trigger("bjui.datagrid.th.submenu.hide", [l, t])
                }
            })
        } else {
            B.hide()
        }
    };
    c.prototype.initPaging = function () {
        var j = this, x = j.tools, g = j.options, h = j.paging, q = BJUI.regional.pagination, s = FRAG.gridPaging,
            f = [], m = h.pageCount, A, w = [];
        if (h.total == 0) {
            return
        }
        A = x.getPageInterval(m, h.pageCurrent, h.showPagenum);
        for (var u = A.start; u < A.end; u++) {
            f.push(FRAG.gridPageNum.replace("#num#", u).replace("#active#", (h.pageCurrent == u ? " active" : "")))
        }
        s = BJUI.doRegional(s.replaceAll("#pageCurrent#", h.pageCurrent).replaceAll("#count#", h.total + "/" + parseInt(m || 0)), q);
        j.$box_paging = d('<div class="datagrid-paging-box"></div>');
        j.$pagingCon = d('<div class="paging-content"></div>').width(j.$boxB.width());
        j.$refreshBtn = d('<button class="btn-default btn-refresh" title="' + q.refresh + '" data-icon="refresh"></button>');
        j.$paging = d('<div class="datagrid-paging"></div>');
        j.$btnpaging = d(s);
        j.$pagenum = d(f.join(""));
        j.$pagesize = d('<div class="datagrid-pagesize"><span></span></div>');
        j.$selectpage = d('<select data-toggle="selectpicker"></select>');
        j.$pagingCon.appendTo(j.$box_paging);
        j.$box_paging.appendTo(j.$grid);
        j.$pagesize.appendTo(j.$pagingCon);
        j.$refreshBtn.appendTo(j.$pagesize);
        j.$selectpage.appendTo(j.$pagesize);
        j.$paging.appendTo(j.$pagingCon);
        j.$btnpaging.appendTo(j.$paging);
        j.$pagenum.insertAfter(j.$btnpaging.find("> li.page-prev"));
        j.$box_paging.initui();
        var p = j.$btnpaging.find("> li.page-jumpto"), B = p.next(), y = B.next(),
            z = j.$btnpaging.find("> li.page-next"), o = z.next();
        var l = function () {
            B.addClass("disabled");
            y.addClass("disabled")
        };
        var t = function () {
            B.removeClass("disabled");
            y.removeClass("disabled")
        };
        var n = function () {
            z.addClass("disabled");
            o.addClass("disabled")
        };
        var v = function () {
            z.removeClass("disabled");
            o.removeClass("disabled")
        };
        var k = function () {
            l();
            v()
        };
        var r = function () {
            t();
            n()
        };
        var e = function (i) {
            j.$selectpage.empty();
            if (!i) {
                i = j.paging.pageSize
            }
            w = h.selectPageSize.split(",");
            w.push(String(i));
            d.unique(w).sort(function (D, C) {
                return D - C
            });
            d.each(w, function (C, E) {
                var D = d('<option value="' + E + '">' + E + "/" + q.page + "</option>");
                if (E == h.pageSize) {
                    D.prop("selected", true)
                }
                j.$selectpage.append(D)
            });
            j.$selectpage.selectpicker("refresh")
        };
        if (h.pageCurrent == 1) {
            k()
        }
        if (h.pageCurrent == h.pageCount) {
            r();
            if (h.pageCurrent == 1) {
                l()
            }
        }
        e();
        j.$paging.on("click", ".page-num", function (C) {
            var i = d(this);
            if (!i.hasClass("active")) {
                j.jumpPage(i.text())
            }
            C.preventDefault()
        }).on("bjui.datagrid.paging.jump", function (G) {
            var F = j.paging.pageCurrent, C = x.getPageInterval(j.paging.pageCount, F, h.showPagenum), E = [];
            for (var D = C.start; D < C.end; D++) {
                E.push(FRAG.gridPageNum.replace("#num#", D).replace("#active#", (F == D ? " active" : "")))
            }
            j.$pagenum.empty();
            j.$pagenum = d(E.join(""));
            j.$pagenum.insertAfter(y);
            if (F == 1) {
                k();
                if (F == j.paging.pageCount) {
                    n()
                }
            } else {
                if (F == j.paging.pageCount) {
                    r()
                } else {
                    t();
                    v()
                }
            }
            p.find("input").val(F);
            j.$btnpaging.find("> li.page-total > span").html(j.paging.total + "/" + j.paging.pageCount)
        });
        j.$selectpage.on("bjui.datagrid.paging.pageSize", function (C, i) {
            e(i)
        });
        p.find("input").on("keyup", function (C) {
            if (C.which == BJUI.keyCode.ENTER) {
                var i = d(this).val();
                if (i) {
                    j.jumpPage(i)
                }
            }
        });
        B.on("click", function () {
            if (j.paging.pageCurrent > 1) {
                j.jumpPage(1)
            }
        });
        y.on("click", function () {
            if (j.paging.pageCurrent > 1) {
                j.jumpPage(j.paging.pageCurrent - 1)
            }
        });
        z.on("click", function () {
            if (j.paging.pageCurrent < j.paging.pageCount) {
                j.jumpPage(j.paging.pageCurrent + 1)
            }
        });
        o.on("click", function () {
            if (j.paging.pageCurrent < j.paging.pageCount) {
                j.jumpPage(j.paging.pageCount)
            }
        });
        j.$refreshBtn.on("click", function () {
            j.refresh()
        });
        j.$selectpage.on("change", function () {
            var i = d(this).val();
            j.jumpPage(null, i)
        })
    };
    c.prototype.jumpPage = function (i, e) {
        var h = this, f = h.paging, g = f.pageCount;
        if (i && isNaN(i)) {
            return
        }
        if (e && isNaN(e)) {
            return
        }
        if (i) {
            i = parseInt(i);
            if (i < 1) {
                i = 1
            }
            if (i > g) {
                i = g
            }
            if (i == f.pageCurrent) {
                return
            }
        }
        if (e) {
            e = parseInt(e);
            if (e > f.total) {
                return
            }
        }
        h.tools.jumpPage(i, e)
    };
    c.prototype.add = function (p) {
        if (!this.tools.beforeEdit()) {
            return
        }
        if (!this.options.editUrl) {
            BJUI.debug("Datagrid Plugin: Edit url is not set!");
            return
        }
        if (!this.options.editMode) {
            return
        }
        if (!this.options.inlineEditMult) {
            this.doCancelEditRow(this.$tbody.find("> tr." + this.classnames.tr_edit))
        }
        var m = this, q = m.options, l = m.tools, f = m.paging, n, i = {}, j = [], k,
            o = (f.pageCurrent - 1) * f.pageSize, g;
        var e = function (s) {
            var t = d("<tr></tr>").addClass(m.classnames.tr_add), r = t.clone();
            d.each(m.columnModel, function (v, x) {
                var u = "", w = d("<td></td>");
                if (x.gridNumber) {
                    w.addClass(m.classnames.td_linenumber).text(0)
                } else {
                    if (x.gridCheckbox) {
                        w.addClass(m.classnames.td_checkbox).html('<div><input type="checkbox" data-toggle="icheck" name="datagrid.checkbox" value="true"></div>')
                    } else {
                        if (x.gridEdit) {
                            w.addClass(m.classnames.s_edit).data("isAdd", true).html(BJUI.doRegional(FRAG.gridEditBtn, m.regional))
                        } else {
                            w.text("")
                        }
                    }
                }
                if (x.hidden) {
                    w.css("display", "none")
                }
                if (x.align) {
                    w.attr("align", x.align)
                }
                i[x.name] = "";
                if (x.locked) {
                    w.clone().show().appendTo(r);
                    w.hide().appendTo(t)
                } else {
                    w.appendTo(t)
                }
            });
            i = d.extend({}, m.attach, i);
            if (!m.emptyData) {
                m.emptyData = i
            }
            return {tr: t, lockTr: r.find("> td").length ? r : null}
        };
        if (!p) {
            p = q.addLocation || "first"
        }
        if (!m.$lastSelect) {
            if (p == "prev") {
                p = "first"
            } else {
                if (p == "next") {
                    p = "last"
                }
            }
        }
        if (p == "first") {
            g = 0;
            n = e(g);
            n.tr.prependTo(m.$tbody);
            if (n.lockTr) {
                n.lockTr.prependTo(m.$lockTbody)
            }
        } else {
            if (p == "last") {
                g = m.data ? m.data.length : 0;
                n = e(g);
                n.tr.appendTo(m.$tbody);
                if (n.lockTr) {
                    n.lockTr.appendTo(m.$lockTbody)
                }
            } else {
                if (p == "prev") {
                    g = m.$lastSelect.index();
                    n = e(g);
                    n.tr.insertBefore(m.$lastSelect);
                    if (n.lockTr) {
                        n.lockTr.insertBefore(m.$lockTbody.find("> tr:eq(" + m.$lastSelect.index() + ")"))
                    }
                } else {
                    if (p == "next") {
                        g = m.$lastSelect.index() + 1;
                        n = e(g);
                        n.tr.insertAfter(m.$lastSelect);
                        if (n.lockTr) {
                            n.lockTr.insertAfter(m.$lockTbody.find("> tr:eq(" + m.$lastSelect.index() + ")"))
                        }
                    }
                }
            }
        }
        var h = d.extend({}, m.emptyData, {addFlag: true});
        if (!m.data) {
            m.data = []
        }
        if (!m.allData) {
            m.allData = []
        }
        if (m.allData.length) {
            m.allData.splice(g + o, 0, h)
        } else {
            m.allData.push(h)
        }
        if (m.data.length) {
            m.data.splice(g, 0, h)
        } else {
            m.data.push(h)
        }
        d.each(m.data, function (s, t) {
            var r = q.linenumberAll ? (o + (s + 1)) : (s + 1);
            d.extend(t, {gridNumber: r, gridIndex: s})
        });
        n.tr.initui();
        setTimeout(function () {
            m.initEvents(n.tr)
        }, 20);
        if (n.lockTr) {
            m.initLockEvents(n.lockTr)
        }
        m.edit(n.tr);
        if (q.editMode != "dialog") {
            m.doEditRow(n.tr, "inline", true)
        } else {
            m.dialogEdit(n.tr, true)
        }
    };
    c.prototype.edit = function (f) {
        var j = this, g = j.options, k = j.tools, i = g.editMode, h = j.columnModel, e;
        if (i != "dialog") {
            i = "inline"
        }
        if (!f) {
            f = j.$tbody.find("> tr")
        }
        e = f.find("> td." + j.classnames.s_edit);
        e.each(function () {
            var r = d(this), p = r.find("button"), o = p.first(), n = o.next(), m = n.next(), q = m.next(),
                l = q.next();
            o.on("click", function (w, v) {
                var u = d(this), t = u.closest("tr"), s = r.data("isAdd");
                if (!v) {
                    if (j.isDom) {
                        v = t.data("initData") || k.setDomData(t)
                    } else {
                        v = j.data[t.index()]
                    }
                }
                if (!k.beforeEdit(t, v)) {
                    return false
                }
                if (i != "dialog") {
                    j.inlineEdit(t, s);
                    p.hide();
                    n.show();
                    q.show();
                    if (s) {
                        n.hide();
                        m.show()
                    }
                } else {
                    j.dialogEdit(t, s)
                }
                w.stopPropagation()
            });
            m.on("click", function (u) {
                var t = d(this), s = t.closest("tr");
                j.updateEdit(s, t);
                u.stopPropagation()
            }).on("bjui.datagrid.update.tr", function () {
                p.hide();
                o.show();
                l.show()
            });
            n.on("click", function (u) {
                var t = d(this), s = t.closest("tr");
                j.updateEdit(s, t);
                u.stopPropagation()
            }).on("bjui.datagrid.update.tr", function () {
                p.hide();
                o.show();
                l.show()
            });
            q.on("click", function (u) {
                var t = d(this), s = t.closest("tr");
                j.cancelEdit(s);
                p.hide();
                o.show();
                l.show();
                u.stopPropagation()
            });
            l.on("click", function (u) {
                var t = d(this), s = t.closest("tr");
                j.delRows(s);
                u.stopPropagation()
            })
        })
    };
    c.prototype.doEditRow = function (m, j, l) {
        var i = this, e, k, g = [];
        j = j || i.options.editMode;
        if (typeof m == "object") {
            e = m
        } else {
            if (isNaN(m)) {
                var h = i.$tbody.find("> tr"), f, m = m.split(",");
                m = m.unique();
                m.sort(function (o, n) {
                    return o.trim() - n.trim()
                });
                d.each(m, function (o, q) {
                    var p = h.eq(parseInt(q.trim()));
                    if (p && p.length) {
                        if (!f) {
                            f = p
                        } else {
                            f = f.add(p)
                        }
                    }
                });
                e = f
            } else {
                if (!isNaN(m)) {
                    e = i.$tbody.find("> tr").eq(m)
                }
            }
        }
        if (!e.length) {
            return
        }
        e.each(function () {
            var o = d(this), n = o.index(), p;
            if (i.isDom) {
                p = o.data("initData") || tools.setDomData(o)
            } else {
                p = i.data[n]
            }
            g.push(p)
        });
        if (!i.tools.beforeEdit(e, g)) {
            return
        }
        if (!i.options.editUrl) {
            BJUI.debug("Datagrid Plugin: Edit url is not set!");
            return
        }
        e.each(function (n) {
            var o = d(this);
            k = o.find("> td." + i.classnames.s_edit + " > button.edit");
            if (j != "dialog") {
                if (k.length) {
                    k.trigger("click", [g[n]])
                } else {
                    i.inlineEdit(o, l, g[n])
                }
            } else {
                i.dialogEdit(o, l, g[n])
            }
        })
    };
    c.prototype.doCancelEditRow = function (g) {
        var f = this, e;
        if (d.type(g) == "number") {
            e = this.$tbody.find("> tr").eq(g)
        } else {
            e = g
        }
        e.each(function () {
            var i = d(this), h = i.find("> td." + f.classnames.s_edit + " > button.cancel");
            if (h.length) {
                h.trigger("click")
            } else {
                f.cancelEdit(i)
            }
        })
    };
    c.prototype.doSaveEditRow = function (h) {
        var g = this, e = g.options, f;
        if (d.type(h) == "number") {
            f = this.$tbody.find("> tr").eq(h)
        } else {
            if (h) {
                f = h
            } else {
                f = g.$tbody.find("> tr." + g.classnames.tr_edit)
            }
        }
        if (!f.length) {
            g.$grid.alertmsg("info", BJUI.getRegional("datagrid.saveMsg"))
        }
        if (f.length == 1) {
            if (f.hasClass(g.classnames.tr_edit)) {
                this.updateEdit(f)
            }
        } else {
            if (e.saveAll) {
                g.saveAll(f)
            } else {
                f.each(function () {
                    g.updateEdit(d(this))
                })
            }
        }
    };
    c.prototype.delRows = function (m) {
        var j = this, n = j.options, k = n.beforeDelete, h = n.delConfirm, f;
        if (k) {
            if (typeof k == "string") {
                k = k.toFunc()
            }
            if (typeof k == "function") {
                if (!k.call(this)) {
                    return
                }
            }
        }
        if (typeof m == "object") {
            f = m
        } else {
            if (isNaN(m)) {
                var i = j.$tbody.find("> tr"), l, m = m.split(",");
                m = m.unique();
                m.sort(function (p, o) {
                    return p.trim() - o.trim()
                });
                d.each(m, function (o, q) {
                    var p = i.eq(parseInt(q.trim()));
                    if (p && p.length) {
                        if (!l) {
                            l = p
                        } else {
                            l = l.add(p)
                        }
                    }
                });
                f = l
            } else {
                if (!isNaN(m)) {
                    f = this.$tbody.find("> tr").eq(m)
                }
            }
        }
        if (!f || !f.length) {
            return
        }
        var e = function () {
            f.each(function () {
                d(this).trigger("bjui.datagrid.tr.delete")
            });
            j.tools.afterDelete()
        };
        var g = function () {
            var p = f.filter("." + j.classnames.tr_add);
            if (p.length) {
                p.remove();
                if (p.length == f.length) {
                    return
                }
            }
            if (n.delUrl) {
                var o = [], q = n.delCallback;
                f.each(function () {
                    var s = d(this), r = s.index(), t, u;
                    if (j.isDom) {
                        t = s.data("initData") || tools.setDomData(s)
                    } else {
                        t = j.data[r]
                    }
                    if (n.delPK) {
                        o.push(t[n.delPK])
                    } else {
                        if (n.jsonPrefix) {
                            u = {};
                            d.each(t, function (v, w) {
                                if (v == "gridCheckbox" || v == "gridEdit") {
                                    return true
                                }
                                u[n.jsonPrefix + "." + v] = w
                            })
                        } else {
                            u = d.extend({}, t);
                            delete u.gridCheckbox;
                            delete u.gridEdit
                        }
                        o.push(u)
                    }
                });
                if (typeof q == "string") {
                    q = q.toFunc()
                }
                j.$grid.bjuiajax("doAjax", {
                    url: n.delUrl,
                    data: n.delPK ? [{name: n.delPK, value: o.join(",")}] : {json: JSON.stringify(o)},
                    type: n.delType,
                    callback: q || function (r) {
                        if (r[BJUI.keys.statusCode] == BJUI.statusCode.ok) {
                            e()
                        } else {
                            j.$grid.bjuiajax("ajaxDone", r)
                        }
                    }
                })
            } else {
                e()
            }
        };
        if (h) {
            if (typeof h != "string") {
                h = f.length == 1 ? BJUI.getRegional("datagrid.delMsg") : BJUI.getRegional("datagrid.delMsgM")
            }
            j.$grid.alertmsg("confirm", h, {
                okCall: function () {
                    g()
                }
            })
        } else {
            g()
        }
    };
    c.prototype.inlineEdit = function (i, m, g) {
        if (!this.tools.beforeEdit(i, g)) {
            return false
        }
        var k = this, n = k.options, h = k.tools, j = k.columnModel, f = i.find("> td"), e = f.length, l = i.index();
        if (!g) {
            if (k.isDom) {
                g = i.data("initData") || h.setDomData(i)
            } else {
                g = k.data[l]
            }
        }
        if (i.hasClass(k.classnames.tr_edit)) {
            return false
        }
        if (!k.inputs || !k.inputs.length) {
            h.initEditInputs()
        }
        i.addClass(k.classnames.tr_edit).data(k.datanames.changeData, {});
        if (i.data("validator")) {
            i.validator("destroy")
        }
        if (!n.inlineEditMult) {
            k.doCancelEditRow(i.siblings("." + k.classnames.tr_edit))
        }
        k.$lastEditTr = i;
        f.each(function (r) {
            var o = d(this), t = j[r], p = t && t.name && g[t.name], s = o.html(), w = k.inputs[r], v;
            var u = function (z, B, A) {
                var y = i.data(k.datanames.changeData);
                switch (t.type) {
                    case"date":
                        z.on("afterchange.bjui.datepicker", function (D, C) {
                            B.addClass(k.classnames.td_changed);
                            if (z.val() == A) {
                                B.removeClass(k.classnames.td_changed)
                            }
                            y[t.name] = z.val()
                        }).change(function () {
                            B.addClass(k.classnames.td_changed);
                            if (z.val() == A) {
                                B.removeClass(k.classnames.td_changed)
                            }
                            y[t.name] = z.val()
                        });
                        break;
                    case"select":
                        z.change(function () {
                            B.addClass(k.classnames.td_changed);
                            if (z.val() == String(A)) {
                                B.removeClass(k.classnames.td_changed)
                            }
                            y[t.name] = z.val()
                        });
                        break;
                    case"boolean":
                        z.on("ifChanged", function () {
                            B.toggleClass(k.classnames.td_changed);
                            var C = d(this).is(":checked") ? true : false;
                            if (C == A) {
                                B.removeClass(k.classnames.td_changed)
                            }
                            y[t.name] = C
                        });
                        break;
                    case"lookup":
                        B.on("customEvent.bjui.lookup", '[data-toggle="lookupbtn"]', function (E, C) {
                            B.toggleClass(k.classnames.td_changed);
                            for (var D in C) {
                                if (typeof g[D] != "undefined") {
                                    y[D] = C[D]
                                }
                                if (t.name == D) {
                                    if (z.val() == C[D]) {
                                        B.removeClass(k.classnames.td_changed)
                                    } else {
                                        z.val(C[D])
                                    }
                                }
                            }
                        });
                        z.change(function () {
                            B.addClass(k.classnames.td_changed);
                            if (z.val() == A) {
                                B.removeClass(k.classnames.td_changed)
                            }
                            y[t.name] = z.val()
                        });
                        break;
                    case"spinner":
                        z.on("afterchange.bjui.spinner", function (D, C) {
                            B.addClass(k.classnames.td_changed);
                            if (z.val() == A) {
                                B.removeClass(k.classnames.td_changed)
                            }
                            y[t.name] = z.val()
                        }).change(function () {
                            B.addClass(k.classnames.td_changed);
                            if (z.val() == A) {
                                B.removeClass(k.classnames.td_changed)
                            }
                            y[t.name] = z.val()
                        });
                        break;
                    default:
                        z.change(function () {
                            B.addClass(k.classnames.td_changed);
                            if (z.val() == A) {
                                B.removeClass(k.classnames.td_changed)
                            }
                            y[t.name] = z.val()
                        });
                        break
                }
            };
            o.data(k.datanames.td_html, s);
            if (m) {
                if (!t.add) {
                    w = ""
                }
            } else {
                if (!t.edit) {
                    w = ""
                }
            }
            if (w) {
                v = d(w);
                if (t.type == "boolean") {
                    v.prop("checked", p)
                } else {
                    if (!p || p == "null") {
                        p = ""
                    }
                    v.val(String(p))
                }
                if (m) {
                    if (t.addAttrs && typeof t.addAttrs == "object") {
                        d.each(t.addAttrs, function (y, z) {
                            v.attr(y, z)
                        })
                    }
                } else {
                    if (t.editAttrs && typeof t.editAttrs == "object") {
                        d.each(t.editAttrs, function (y, z) {
                            v.attr(y, z)
                        })
                    }
                }
                o.empty().append(v).addClass(k.classnames.td_edit);
                u(v, o, p);
                if (t.locked) {
                    var q = k.$lockTbody.find("tr:eq(" + l + ")");
                    var x = q.find("> td:eq(" + t.lockIndex + ")");
                    o.clone().html(s).insertAfter(o);
                    o.show().insertAfter(x).initui();
                    x.remove()
                }
            }
            if (!--e) {
                i.initui().validator({msgClass: "n-bottom", theme: "red_bottom_effect_grid"})
            }
        })
    };
    c.prototype.saveAll = function (f) {
        var k = this, n = k.options, m = n.editCallback, i, g, l, h, e = [], j = f && f.length;
        if (!f || f.length) {
            f = k.$tbody.find("> tr." + k.classnames.tr_edit);
            j = f.length
        }
        f.each(function () {
            i = d(this), g = k.isDom ? i.data("initData") : k.data[i.index()];
            i.isValid(function (o) {
                if (o) {
                    l = i.data(k.datanames.changeData);
                    d.extend(g, l);
                    if (n.jsonPrefix) {
                        h = {};
                        d.each(g, function (p, q) {
                            if (p == "gridCheckbox" || p == "gridEdit") {
                                return true
                            }
                            h[n.jsonPrefix + "." + p] = q
                        })
                    } else {
                        h = d.extend({}, g);
                        delete h.gridCheckbox;
                        delete h.gridEdit
                    }
                    j--;
                    e.push(h)
                } else {
                    e = [];
                    return false
                }
            })
        });
        if (!j) {
            if (m) {
                m = m.toFunc()
            } else {
                m = function (p) {
                    var o = false, q = [];
                    if (d.type(p) == "array") {
                        o = true;
                        q = p
                    } else {
                        if (d.type(p) == "object") {
                            if (p[BJUI.keys.statusCode]) {
                                if (p[BJUI.keys.statusCode] == BJUI.statusCode.ok) {
                                    o = true
                                } else {
                                    k.$grid.bjuiajax("ajaxDone", p)
                                }
                            } else {
                                o = true;
                                q.push(p)
                            }
                        }
                    }
                    if (o) {
                        f.each(function (r) {
                            var s = d(this), t = k.isDom ? s.data("initData") : k.data[s.index()];
                            d.extend(t, typeof q[r] == "object" && q[r]);
                            k.inlineEditComplete(s, t)
                        });
                        k.tools.afterSave(f, e)
                    }
                }
            }
            k.$grid.bjuiajax("doAjax", {url: n.editUrl, data: {json: JSON.stringify(e)}, type: "POST", callback: m})
        }
    };
    c.prototype.updateEdit = function (h, k) {
        var i = this, m = i.options, l = m.editCallback, f, j, g, e = [];
        if (i.isDom) {
            f = h.data("initData")
        } else {
            f = i.data[h.index()]
        }
        if (h.hasClass(i.classnames.tr_edit)) {
            h.isValid(function (n) {
                if (n) {
                    j = h.data(i.datanames.changeData);
                    d.extend(f, j);
                    if (m.jsonPrefix) {
                        g = {};
                        d.each(f, function (o, p) {
                            if (o == "gridCheckbox" || o == "gridEdit") {
                                return true
                            }
                            g[m.jsonPrefix + "." + o] = p
                        })
                    } else {
                        g = d.extend({}, f);
                        delete g.gridCheckbox;
                        delete g.gridEdit
                    }
                    if (l) {
                        l = l.toFunc()
                    } else {
                        l = function (p) {
                            var o = false, q;
                            if (d.type(p) == "array") {
                                o = true;
                                q = p[0]
                            } else {
                                if (d.type(p) == "object") {
                                    if (p[BJUI.keys.statusCode]) {
                                        if (p[BJUI.keys.statusCode] == BJUI.statusCode.ok) {
                                            o = true
                                        } else {
                                            i.$grid.bjuiajax("ajaxDone", p)
                                        }
                                    } else {
                                        o = true;
                                        q = p
                                    }
                                }
                            }
                            if (o) {
                                d.extend(f, typeof q == "object" && q);
                                i.inlineEditComplete(h, f, k);
                                i.tools.afterSave(h, f)
                            }
                        }
                    }
                    h.bjuiajax("doAjax", {
                        url: m.editUrl,
                        data: {json: JSON.stringify(e.push(g) && e)},
                        type: "POST",
                        callback: l
                    })
                }
            })
        }
    };
    c.prototype.cancelEdit = function (e) {
        var g = this, f = g.columnModel;
        e.each(function () {
            var l = d(this), h = l.index();
            if (l.hasClass(g.classnames.tr_edit)) {
                l.removeClass(g.classnames.tr_edit).find("> td." + g.classnames.td_edit).each(function () {
                    var s = d(this), r = s.index(), o = f[r], q = s.data(g.datanames.td_html);
                    s.removeClass(g.classnames.td_edit).removeClass(g.classnames.td_changed).html(q);
                    if (o.locked) {
                        var n = g.$lockTbody.find("tr:eq(" + h + ")");
                        var p = n.find("> td:eq(" + o.lockIndex + ")");
                        q = p.data(g.datanames.td_html);
                        n.removeClass(g.classnames.tr_edit);
                        p.removeClass(g.classnames.td_edit).removeClass(g.classnames.td_changed).html(q)
                    }
                })
            }
            if (l.hasClass(g.classnames.tr_add)) {
                var m = false, i = l.data(g.datanames.changeData);
                if (d.isEmptyObject(i)) {
                    m = true
                } else {
                    for (var k in i) {
                        if (!i[k]) {
                            delete i[k]
                        }
                    }
                    if (d.isEmptyObject(i)) {
                        m = true
                    }
                }
                if (m) {
                    var j = l.index();
                    g.data = g.data.remove(j);
                    g.$lockTbody && g.$lockTbody.find("> tr:eq(" + j + ")").remove();
                    l.remove()
                }
            }
        })
    };
    c.prototype.inlineEditComplete = function (i, h, m) {
        var k = this, j = k.columnModel, l = i.index(), e = i.find("> td"), n = false, g = k.$tbody.find("> tr"),
            f = g.filter("." + k.classnames.tr_add);
        d.each(j, function (r, u) {
            if (u.gridNumber) {
                n = true
            }
            if (!u.name) {
                return
            }
            if (u.gridNumber || u.gridCheckbox || u.gridEdit) {
                return
            }
            var p = h[u.name], t, s = e.eq(u.index);
            if (typeof p == "undefined") {
                p = ""
            }
            s.text(p).removeClass(k.classnames.td_edit).removeClass(k.classnames.td_changed);
            if (u.render && typeof u.render == "function") {
                if (u.items) {
                    t = u.render.call(k, p, u.items);
                    s.html(t)
                } else {
                    t = u.render.call(k, p);
                    s.html(t)
                }
            } else {
                if (u.items) {
                    t = c.renderItem.call(k, p, u.items);
                    s.html(t)
                }
            }
            if (u.locked) {
                var o = k.$lockTbody.find("> tr:eq(" + l + ")"), q = o.find("> td:eq(" + u.lockIndex + ")");
                q.removeClass(k.classnames.td_changed).html(s.html())
            }
        });
        i.removeClass(k.classnames.tr_edit);
        if (!m) {
            m = e.filter("." + k.classnames.s_edit).find("button.update")
        }
        if (m && m.length) {
            m.trigger("bjui.datagrid.update.tr")
        }
        if (n && f.length) {
            f.removeClass(k.classnames.tr_add);
            g.each(function (o) {
                d(this).find("> td." + k.classnames.td_linenumber).text(o + 1);
                k.$lockTbody && k.$lockTbody.find("> tr:eq(" + o + ")").find("> td." + k.classnames.td_linenumber).text(o + 1)
            })
        }
    };
    c.prototype.dialogEdit = function (j, r, g) {
        if (!this.tools.beforeEdit(j, g)) {
            return false
        }
        var l = this, t = l.options, i = l.tools, k = l.columnModel, o = j.index(), e, s, h = "", q;
        if (!g) {
            if (l.isDom) {
                g = j.data("initData") || i.setDomData(j)
            } else {
                g = l.data[o]
            }
        }
        if (!l.inputs || !l.inputs.length) {
            i.initEditInputs()
        }
        q = t.gridTitle || "datagrid";
        if (r) {
            q += " - " + BJUI.getRegional("datagrid.add")
        } else {
            q += " - " + BJUI.getRegional("datagrid.edit")
        }
        e = d('<div><div class="bjui-pageContent"></div><div class="bjui-pageFooter"></div></div>');
        s = d('<form class="datagrid-dialog-edit-form"></form>');
        var m = function (y, v, x, w) {
            var u = y.data(l.datanames.changeData);
            switch (w.type) {
                case"date":
                    x.on("afterchange.bjui.datepicker", function (A, z) {
                        u[w.name] = x.val()
                    }).change(function () {
                        u[w.name] = x.val()
                    });
                    break;
                case"select":
                    x.change(function () {
                        u[w.name] = x.val()
                    });
                    break;
                case"boolean":
                    x.on("ifChanged", function () {
                        var z = d(this).is(":checked") ? true : false;
                        u[w.name] = z
                    });
                    break;
                case"lookup":
                    v.on("customEvent.bjui.lookup", '[data-toggle="lookupbtn"]', function (B, z) {
                        for (var A in z) {
                            if (typeof g[A] != "undefined") {
                                u[A] = z[A]
                            }
                            if (w.name == A) {
                                x.val(z[A])
                            }
                        }
                    });
                    x.change(function () {
                        u[w.name] = x.val()
                    });
                    break;
                case"spinner":
                    x.on("afterchange.bjui.spinner", function (A, z) {
                        u[w.name] = x.val()
                    }).change(function () {
                        u[w.name] = x.val()
                    });
                    break;
                default:
                    x.change(function () {
                        u[w.name] = x.val()
                    });
                    break
            }
        };
        var n = function (z) {
            var y = z.find("form.datagrid-dialog-edit-form"), x = z.find("div.bjui-pageFooter button"), w = x.first(),
                u = x.eq(1), B = x.eq(2), v = x.last();
            var A = function (E, C, D) {
                C.empty();
                if (!D.data(l.datanames.changeData)) {
                    D.data(l.datanames.changeData, {})
                }
                if (C.data("validator")) {
                    C.validator("destroy")
                }
                d.each(k, function (G, J) {
                    if (J == l.linenumberColumn || J == l.checkboxColumn || J == l.editBtnsColumn) {
                        return true
                    }
                    var I = d(l.inputs[G]), F = d("<p></p>"), H = "datagrid-dialog-edit-column-" + G;
                    if (I.isTag("select")) {
                        I.attr("data-width", "auto")
                    } else {
                        if (!I.isTag("checkbox")) {
                            I.attr("size", 30)
                        }
                    }
                    if (J.type == "boolean") {
                        I.attr("checked", E[J.name])
                    } else {
                        if (J.type == "textarea") {
                            I.html(E[J.name])
                        } else {
                            I.attr("value", E[J.name])
                        }
                    }
                    F.append('<label class="control-label x120" for="' + H + '">' + J.label + "：</label>").append(d('<span class="datagrid-dialog-column-span"></span>').append(I.attr("id", H))).appendTo(C);
                    m(D, C, I, J)
                });
                C.initui().validator({msgClass: "n-bottom", theme: "red_bottom_effect_grid"})
            };
            if (y.is(":empty")) {
                A(g, y, j)
            }
            if (j.index() == 0) {
                w.addClass("disabled")
            }
            if (j.index() == l.data.length - 1) {
                u.addClass("disabled")
            }
            w.click(function () {
                var D = j.prev(), C;
                if (D.length) {
                    if (l.isDom) {
                        C = D.data("initData") || i.setDomData(D)
                    } else {
                        C = l.data[D.index()]
                    }
                    j = D;
                    A(C, y, j);
                    u.removeClass("disabled");
                    if (!D.prev().length) {
                        w.addClass("disabled")
                    }
                } else {
                    w.addClass("disabled")
                }
            });
            u.click(function () {
                var D = j.next(), C;
                if (D.length) {
                    if (l.isDom) {
                        C = D.data("initData") || i.setDomData(D)
                    } else {
                        C = l.data[D.index()]
                    }
                    j = D;
                    A(C, y, j);
                    y.initui();
                    w.removeClass("disabled");
                    if (!D.next().length) {
                        u.addClass("disabled")
                    }
                } else {
                    u.addClass("disabled")
                }
            });
            v.click(function () {
                var D, E, C, F = t.editCallback;
                if (l.isDom) {
                    E = j.data("initData")
                } else {
                    E = l.data[j.index()]
                }
                y.isValid(function (G) {
                    if (G) {
                        D = j.data(l.datanames.changeData);
                        d.extend(E, D);
                        if (t.jsonPrefix) {
                            C = {};
                            d.each(E, function (H, I) {
                                if (H == "gridCheckbox" || H == "gridEdit") {
                                    return true
                                }
                                C[t.jsonPrefix + "." + H] = I
                            })
                        } else {
                            C = d.extend({}, E);
                            delete C.gridCheckbox;
                            delete C.gridEdit
                        }
                        if (F) {
                            F = F.toFunc()
                        } else {
                            F = function (I) {
                                var H = false, J;
                                if (d.type(I) == "array") {
                                    H = true;
                                    J = I[0]
                                } else {
                                    if (d.type(I) == "object") {
                                        if (I[BJUI.keys.statusCode]) {
                                            if (I[BJUI.keys.statusCode] == BJUI.statusCode.ok) {
                                                H = true
                                            } else {
                                                l.$grid.bjuiajax("ajaxDone", I)
                                            }
                                        } else {
                                            H = true;
                                            J = I
                                        }
                                    }
                                }
                                if (H) {
                                    d.extend(E, typeof J == "object" && J);
                                    l.dialogEditComplete(j, E);
                                    l.$grid.dialog("close", "datagrid-dialog-edit");
                                    l.tools.afterSave(j, E)
                                }
                            }
                        }
                        j.bjuiajax("doAjax", {
                            url: t.editUrl,
                            data: {json: JSON.stringify(C)},
                            type: "POST",
                            callback: F
                        })
                    }
                })
            });
            B.click(function () {
                l.$grid.dialog("close", "datagrid-dialog-edit")
            })
        };
        var p = function () {
            l.$tbody.find("> tr." + l.classnames.tr_add).each(function () {
                var y = false, x = d(this), u = x.data(l.datanames.changeData);
                if (d.isEmptyObject(u)) {
                    y = true
                } else {
                    for (var w in u) {
                        if (!u[w]) {
                            delete u[w]
                        }
                    }
                    if (d.isEmptyObject(u)) {
                        y = true
                    }
                }
                if (y) {
                    var v = x.index();
                    l.data = l.data.remove(v);
                    l.$lockTbody && l.$lockTbody.find("> tr:eq(" + v + ")").remove();
                    x.remove()
                }
            })
        };
        e.find("> div:first").append(s).next().append(BJUI.doRegional(FRAG.gridDialogEditBtns, l.regional));
        var f = d.extend({}, {
            id: "datagrid-dialog-edit",
            fresh: true,
            target: e[0],
            width: 520,
            height: 400,
            mask: true,
            title: q,
            onLoad: n,
            onClose: p
        }, (typeof t.editDialogOp == "object" && t.editDialogOp));
        l.$grid.dialog(f)
    };
    c.prototype.dialogEditComplete = function (i, h) {
        var k = this, j = k.columnModel, l = i.index(), e = i.find("> td"), m = false, g = k.$tbody.find("> tr"),
            f = g.filter("." + k.classnames.tr_add);
        d.each(j, function (r, u) {
            if (u.gridNumber) {
                m = true
            }
            if (!u.name) {
                return
            }
            if (u.gridNumber || u.gridCheckbox || u.gridEdit) {
                return
            }
            var p = h[u.name], t, s = e.eq(u.index);
            if (typeof p == "undefined") {
                p = ""
            }
            s.text(p).removeClass(k.classnames.td_edit).removeClass(k.classnames.td_changed);
            if (u.render && typeof u.render == "function") {
                if (u.items) {
                    t = u.render.call(k, p, u.items);
                    s.html(t)
                } else {
                    t = u.render.call(k, p);
                    s.html(t)
                }
            } else {
                if (u.items) {
                    t = c.renderItem.call(k, p, u.items);
                    s.html(t)
                }
            }
            if (u.locked) {
                var o = k.$lockTbody.find("> tr:eq(" + l + ")"), q = o.find("> td:eq(" + u.lockIndex + ")");
                q.removeClass(k.classnames.td_edit).removeClass(k.classnames.td_changed).html(s.html());
                o.removeClass(k.classnames.tr_edit)
            }
        });
        if (m && f.length) {
            f.removeClass(k.classnames.tr_add);
            g.each(function (n) {
                d(this).find("> td." + k.classnames.td_linenumber).text(n + 1);
                k.$lockTbody && k.$lockTbody.find("> tr:eq(" + n + ")").find("> td." + k.classnames.td_linenumber).text(n + 1)
            })
        }
    };
    c.prototype.resizeGrid = function () {
        var h = this, e = h.$grid.getPageTarget(), i, f;
        var g = function () {
            if (h.initFixedW && String(h.options.width).endsWith("%")) {
                i = h.$grid.parent().width();
                if (e.is(":hidden") && e.hasClass("navtabPage")) {
                    h.$grid.data("need.fixedW", true)
                } else {
                    h.fixedWidth()
                }
            }
            if (String(h.options.height).endsWith("%")) {
                f = h.$grid.parent().height();
                if (e.is(":hidden") && e.hasClass("navtabPage")) {
                    if (e.hasClass("navtabPage")) {
                        h.$grid.data("need.fixedH", true)
                    }
                } else {
                    if (f) {
                        if (f != h.parentH) {
                            h.tools.fixedH(f)
                        }
                    }
                }
            }
        };
        e.on("bjui.navtab.switch", d.proxy(function () {
            if (h.$grid.data("need.fixedH")) {
                f = h.$grid.parent().height();
                if (f) {
                    h.tools.fixedH(f)
                }
                h.$grid.removeData("need.fixedH")
            }
            if (h.$grid.data("need.fixedW")) {
                h.fixedWidth();
                h.$grid.removeData("need.fixedW")
            }
        }, h));
        d(window).on(BJUI.eventType.resizeGrid, d.proxy(g, h))
    };

    function b(f) {
        var e = arguments;
        var g = f;
        return this.each(function () {
            var j = d(this);
            var h = d.extend({}, c.DEFAULTS, j.data(), typeof f == "object" && f);
            var i = j.data("bjui.datagrid");
            if (!i) {
                j.data("bjui.datagrid", (i = new c(this, h)))
            }
            if (typeof g == "string" && d.isFunction(i[g])) {
                [].shift.apply(e);
                if (!e) {
                    i[g]()
                } else {
                    i[g].apply(i, e)
                }
            } else {
                i.init()
            }
        })
    }

    var a = d.fn.datagrid;
    d.fn.datagrid = b;
    d.datagrid = c;
    d.fn.datagrid.noConflict = function () {
        d.fn.datagrid = a;
        return this
    };
    d(document).on(BJUI.eventType.initUI, function (g) {
        var f = d(g.target).find('table[data-toggle="datagrid"]');
        if (!f.length) {
            return
        }
        b.call(f)
    })
}(jQuery);
/**
 * B-JUI: bjui-tablefixed.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.stable.js (author:ZhangHuihua@msn.com, Roger Wu)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-tablefixed.js
 */
+function (a) {
    "use strict";

    function c(c) {
        var d = arguments, e = c;
        return this.each(function () {
            var f = a(this), g = a.extend({}, b.DEFAULTS, f.data(), "object" == typeof c && c),
                h = f.data("bjui.tablefixed");
            h || f.data("bjui.tablefixed", h = new b(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]()) : h.init()
        })
    }

    var d, b = function (b, c) {
        this.$element = a(b), this.options = c, this.tools = this.TOOLS()
    };
    b.SCROLLW = 18, b.DEFAULTS = {width: "100%"}, b.prototype.TOOLS = function () {
        var c = {
            getLeft: function (b) {
                var c = 0;
                return b.prevAll().each(function () {
                    c += a(this).outerWidth()
                }), c
            }, getRight: function (b) {
                var c = 0;
                return b.prevAll().andSelf().each(function () {
                    c += a(this).outerWidth()
                }), c - 1
            }, getCellNum: function (a) {
                return a.prevAll().andSelf().size()
            }, getColspan: function (a) {
                return a.attr("colspan") || 1
            }, getStart: function (b) {
                var c = 1;
                return b.prevAll().each(function () {
                    c += parseInt(a(this).attr("colspan") || 1)
                }), c
            }, getPageCoord: function (a) {
                for (var b = {x: 0, y: 0}; a;) b.x += a.offsetLeft, b.y += a.offsetTop, a = a.offsetParent;
                return b
            }, getOffset: function (b, c) {
                var d, e, f, g, h, i;
                return a.support.leadingWhitespace ? (g = c.target, void 0 == g.offsetLeft && (g = g.parentNode), h = this.getPageCoord(g), i = {
                    x: window.pageXOffset + c.clientX,
                    y: window.pageYOffset + c.clientY
                }, f = {offsetX: i.x - h.x, offsetY: i.y - h.y}) : (d = b.offset(), e = {
                    offsetX: c.pageX || c.screenX,
                    offsetY: c.pageY || c.screenY
                }, f = {offsetX: e.offsetX - d.left, offsetY: e.offsetY - d.top})
            }
        };
        return c
    }, b.prototype.resetWidth = function () {
        var i, c = this.$element, d = c.width(), e = c.find("table"), f = e && e.width(),
            g = e.eq(0) && e.eq(0).find("tr:first-child > th"), h = e.eq(1) && e.eq(1).find("tr:first-child > td");
        e && d - f < b.SCROLLW && (i = parseInt((d - f) / g.length), e.width(d - b.SCROLLW), g.each(function (b) {
            var c = parseInt(a(this).css("width"));
            a(this).width(c + i), h.eq(b) && h.eq(b).width(c + i)
        }))
    }, b.prototype.init = function () {
        var a, b;
        this.$element.isTag("table") && (this.$container = this.$element.parent().addClass("bjui-resizeGrid"), this.$fixed = void 0, a = this.$container.width(), b = this.options.height, this.$container.hasClass("tab-pane") && (a = this.$container.parent().width() - 20), this.options.newWidth = "string" == typeof this.options.width && this.options.width.indexOf("%") ? a * (this.options.width.replace("%", "") / 100) : parseInt(this.options.width), this.options.styles = [], this.$element.wrap('<div class="bjui-tablefixed clearfix"></div>'), this.$fixed = this.$element.parent(), this.initHead(), this.initBody(), this.resizeCol(), this.resizeGrid(), b && !this.$fixed.closest(".tab-content").length && this.$fixed.height(b).addClass("fixedH"))
    }, b.prototype.initHead = function () {
        var g, h, i, j, k, l, m, n, o, c = this.options.styles = [], d = this.$element.find("thead > tr"),
            e = d.eq(0).find("> th");
        this.$element, g = 0, h = [], i = [], j = -1, e.each(function (b) {
            var k, c = a(this), d = parseInt(c.attr("colspan") || 1), e = c.attr("width"), f = c.attr("align"), g = "";
            for (k = 0; d > k; k++) 1 == d && e && (g = ' width="' + e + '"'), f && c.removeAttr("align").addClass(f), h.push("<th" + g + "></th>");
            c.attr("colsNum", j += d), i[b] = d
        }), k = h.length, l = a('<tr class="resize-head">' + h.join("") + "</tr>"), d.length > 1 && (j = 0, m = d.eq(1).find("> th"), a.each(i, function (a, b) {
            var c, d, f, g, h, i, k;
            if (b = parseInt(b), b > 1) for (c = parseInt(e.eq(a).attr("colsnum")), d = b - 1; d >= 0; d--) f = m.eq(j++), g = c - d, h = f.attr("width"), i = f.attr("align"), k = l.find("> th").eq(g), f && f.length && f.attr("colsnum", g), h && k.attr("width", h), i && f.addClass(i).removeAttr("align")
        })), this.$fixed.html(this.$element.html()), n = this.$fixed.find("thead"), n.prepend(l), l.find("> th").each(function () {
            var d = a(this), e = [], f = d.innerWidth();
            e[0] = parseInt(f), g += e[0], c[c.length] = e
        }), g = parseInt((this.options.newWidth - b.SCROLLW - g) / k), o = n.find("> tr:eq(0) > th"), this.options.$ths = o, o.each(function (b) {
            var d = a(this), e = c[b], f = d.attr("width");
            d.removeAttr("align").width(e[0] + g), e[0] = e[0] + g, f && (e[0] = parseInt(f), d.width(f).removeAttr("width"))
        }), n.find("> tr:gt(0) > th").each(function () {
            var b = a(this);
            b.html('<div class="fixedtableCol">' + b.html() + "</div>")
        }), n.wrap('<div class="fixedtableHeader" style="width:' + (this.options.newWidth - b.SCROLLW) + 'px;overflow:hidden;"><div class="fixedtableThead"><table class="table table-bordered" style="width:' + (this.options.newWidth - b.SCROLLW) + "px; max-width:" + (this.options.newWidth - b.SCROLLW) + 'px;"></table></div></div>'), this.$fixed.append('<div class="resizeMarker" style="display:none; height:300px; left:57px;"></div><div class="resizeProxy" style="left:377px; display:none; height:300px;"></div>')
    }, b.prototype.initBody = function () {
        var f, g, h, c = this, d = this.$fixed.find("> tbody");
        this.options.styles, this.options.height ? g = this.options.height - this.$fixed.find(".fixedtableHeader").height() + "px" : (g = "100%", h = function () {
            var a = c.$fixed.parent().height();
            c.$fixed.parent().css("overflow", "hidden"), c.$fixed.height(a).find(".fixedtableScroller").height(a - c.$fixed.find(".fixedtableHeader").height())
        }, a(document).one(BJUI.eventType.afterInitUI, function () {
            h()
        })), f = 'style="height:' + g + '; overflow-y:auto;"', d.wrap('<div class="fixedtableScroller"' + f + ' style="width:' + this.options.newWidth + 'px;"><div class="fixedtableTbody"><table style="width:' + (this.options.newWidth - b.SCROLLW) + "px; max-width:" + (this.options.newWidth - b.SCROLLW) + 'px;"></table></div></div>'), this.$element.attr("class") ? d.parent().addClass(this.$element.attr("class")) : d.parent().addClass("table table-striped table-bordered table-hover"), "undefined" != typeof this.$element.attr("data-selected-multi") && d.parent().attr("data-selected-multi", this.$element.attr("data-selected-multi")), d.before('<thead><tr class="resize-head">' + this.$fixed.find("thead > tr").html() + "</tr></thead>"), this.options.$tds = d.prev().find("> tr:first-child > th"), this.options.nowrap && d.parent().addClass("nowrap"), d.closest(".fixedtableScroller").scroll(function () {
            var c = a(this), d = c.scrollLeft(), e = c.prev().find("> .fixedtableThead");
            return e.css({position: "relative", left: -d}), !1
        })
    }, b.prototype.resizeCol = function () {
        var c = this, d = this.$fixed, e = this.options.$ths, f = this.options.$tds, g = this.tools;
        d.find("thead > tr:gt(0) > th").each(function () {
            var i = a(this);
            i.mouseover(function (a) {
                var h = parseInt(d.find(".fixedtableThead").css("left")) || 0, j = g.getOffset(i, a).offsetX,
                    k = e.eq(i.attr("colsnum"));
                return i.outerWidth() - j < 5 ? i.css("cursor", "col-resize").off("mousedown.bjui.tablefixed.resize").on("mousedown.bjui.tablefixed.resize", function (a) {
                    d.find("> .resizeProxy").show().css({
                        left: g.getRight(k) + h + d.position().left,
                        top: d.position().top,
                        height: d.height(),
                        cursor: "col-resize"
                    }).basedrag({
                        scop: !0,
                        cellMinW: 20,
                        relObj: d.find(".resizeMarker"),
                        move: "horizontal",
                        event: a,
                        stop: function () {
                            var a = d.find(".resizeProxy").position().left, e = d.find(".resizeMarker").position().left,
                                h = a - e - k.outerWidth() - 9, i = g.getCellNum(k), l = (k.width(), k.width() + h),
                                m = f.eq(i - 1), n = d.find("> .fixedtableHeader .table").width();
                            k.width(l), m.width(l), d.find(".table").width(n + h), d.find(".resizeMarker, .resizeProxy").hide(), n + h + b.SCROLLW < c.options.newWidth ? d.find(".fixedtableScroller").width(n + h + b.SCROLLW) : (l = d.closest(".bjui-resizeGrid").innerWidth(), n + h + b.SCROLLW < l && (l = n + h + b.SCROLLW), d.find(".fixedtableHeader").width(l - b.SCROLLW), d.find(".fixedtableScroller").width(l), d.width(l)), d.data("resizeGrid", !0)
                        }
                    }), d.find("> .resizeMarker").show().css({
                        left: g.getLeft(k) + h + d.position().left,
                        top: d.position().top,
                        height: d.height()
                    })
                }) : i.css("cursor", "default").off("mousedown.bjui.tablefixed.resize"), !1
            })
        })
    }, b.prototype.setOrderBy = function (b) {
        var c = this.$element, d = c.find(".fixedtableCol"),
            e = a(FRAG.orderby.replace("#asc#", BJUI.regional.orderby.asc).replace("#desc#", BJUI.regional.orderby.desc));
        b = b || this.options, c.addClass("orderby"), b.orderDirection && (BJUI.ui.clientPaging || c.addClass(b.orderDirection), c.pagination("setClientOrder", {
            orderField: b.orderField,
            orderDirection: b.orderDirection
        })), d.length || (d = a('<div class="fixedtableCol">' + c.html() + "</div>").appendTo(c.empty())), e.data("orderField", b.orderField).appendTo(d).pagination("orderBy")
    }, b.prototype.resizeGrid = function () {
        var c = this, d = function () {
            a("div.bjui-resizeGrid").each(function () {
                var k, d = a(this), e = d.closest(".navtabPage"), f = d.width(), g = d.height(),
                    h = d.find(".bjui-tablefixed"), i = h.find(".fixedtableThead").height(), j = c.options.newWidth;
                d.length && d.is(":hidden") && (d.hasClass("tab-pane") || (e.show(), f = d.innerWidth(), g = d.height(), i = h.find(".fixedtableHeader").height(), e.hide())), f && d.find(".bjui-tablefixed").each(function () {
                    var c = a(this);
                    k = c.data("resizeGrid") ? j : f, c.width(k), c.find(".table").width(k - b.SCROLLW), c.find(".fixedtableHeader").width(k - b.SCROLLW), c.find(".fixedtableScroller").width(k)
                }), d.css("overflow", "hidden"), h.height(g).find(".fixedtableScroller").height(g - i)
            })
        };
        a(window).on(BJUI.eventType.resizeGrid, d)
    }, d = a.fn.tablefixed, a.fn.tablefixed = c, a.fn.tablefixed.Constructor = b, a.fn.tablefixed.noConflict = function () {
        return a.fn.tablefixed = d, this
    }, a(document).on(BJUI.eventType.initUI, function (b) {
        var d = a(b.target).find('table[data-toggle="tablefixed"]');
        d.length && c.call(d)
    }), a(document).on(BJUI.eventType.afterInitUI, function (b) {
        var d = a(b.target).find("th[data-order-field]");
        d.length && c.call(d, "setOrderBy")
    }), a(document).on("click.bjui.tr.data-api", "tr[data-id]", function () {
        var c = a(this), d = c.closest("table"), e = d.data("selectedMulti"), f = c.attr("data-id"), g = "selected",
            h = d.closest(".unitBox").find("#bjui-selected");
        c.toggleClass(g), e ? (f = [], c.siblings("." + g).add(c.hasClass(g) ? c : "").each(function () {
            f.push(a(this).attr("data-id"))
        }), f = f.join(",")) : (c.siblings().removeClass(g), c.hasClass(g) || (f = "")), h && h.length ? h.val(f) : (h = a('<input type="hidden" id="bjui-selected" value="' + f + '">'), h.appendTo(d.closest(".unitBox")))
    })
}(jQuery);
/**
 * B-JUI: bjui-tabledit.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.database.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-tabledit.js
 */
+function (a) {
    "use strict";

    function c(c) {
        var d = arguments, e = c;
        return this.each(function () {
            var f = a(this), g = a.extend({}, b.DEFAULTS, f.data(), "object" == typeof c && c),
                h = f.data("bjui.tabledit");
            h || f.data("bjui.tabledit", h = new b(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]()) : h.init()
        })
    }

    var d, b = function (b, c) {
        this.$element = a(b), this.options = c, this.tools = this.TOOLS(), this.$tbody = this.$element.find("> tbody"), this.$tbody.length || (this.$tbody = a("<tbody></tbody>"), this.$element.append(this.$tbody)), this.$numAdd = this.$btnAdd = null
    };
    b.DEFAULTS = {singleNoindex: !0}, b.EVENTS = {afterDelete: "afterdelete.bjui.tabledit"}, b.prototype.TOOLS = function () {
        var c = this, d = {
            initSuffix: function (b) {
                var c = b.find("> tr");
                c.each(function (b) {
                    var c = a(this);
                    c.find(":input, :file, a, label, div").each(function () {
                        var k, c = a(this), d = c.attr("name"), e = c.val(), f = c.attr("for"), g = c.attr("id"),
                            h = c.attr("href"), i = c.attr("data-group"), j = c.attr("data-suffix");
                        d && c.attr("name", d.replaceSuffix(b)), f && c.attr("for", f.replaceSuffix(b)), g && c.attr("id", g.replaceSuffix(b).replaceSuffix2(b)), h && c.attr("href", h.replaceSuffix(b)), i && c.attr("data-group", i.replaceSuffix(b)), j && c.attr("data-suffix", j.replaceSuffix(b)), e && e.indexOf("#index#") >= 0 && c.val(e.replace("#index#", b + 1)), c.hasClass("no") && (k = c.data("prefix") ? c.data("prefix") : "", c.val(k + (b + 1)))
                    })
                })
            }, initEnter: function (b) {
                var c = b.find(":text");
                c.each(function (b) {
                    a(this).bind("keydown", function (a) {
                        if (a.which == BJUI.keyCode.ENTER) {
                            var d = b + 1;
                            c.eq(d) && c.eq(d).focus(), a.preventDefault()
                        }
                    })
                }), this.initInput(b)
            }, initInput: function (b) {
                b.find("> tr > td").each(function () {
                    var b = a(this).find(".input-hold");
                    b.length || (b = a('<span class="input-hold" style="display:block; padding:0 4px; height:0px; font-size:12px; visibility:hidden;"></span>'), a(this).append(b)), a.support.leadingWhitespace ? a(this).on("input", ":text", function () {
                        b.text(a(this).val())
                    }) : a(this).on("propertychange", ":text", function () {
                        b.text(a(this).val())
                    })
                })
            }, initTbody: function () {
                function e(b) {
                    b.removeClass("readonly").find("> td *").each(function () {
                        var b = a(this), c = b.closest("td"), d = c.data("val"), e = b.attr("data-toggle-old"),
                            f = c.data("readonly");
                        if ("undefined" == typeof d && (d = c.html()), c.data("notread")) return !0;
                        if (b.isTag("select") && b.val(c.attr("data-val")).selectpicker("refresh").nextAll(".bootstrap-select").removeClass("readonly").find("button").removeClass("disabled"), b.is(":checkbox") && (b.closest(".icheckbox_minimal-purple").removeClass("disabled"), b.closest(".icheckbox_minimal-purple").find("ins").removeClass("readonly")), b.is(":radio") && (b.closest(".iradio_minimal-purple").removeClass("disabled"), b.closest(".iradio_minimal-purple").find("ins").removeClass("readonly")), e) {
                            if ("dosave" == e) return !0;
                            b.removeAttr("data-toggle-old").attr("data-toggle", e), "spinner" == e && b.spinner("destroy").spinner(), "kindeditor" == e && c.initui()
                        }
                        (b.is(":text") || b.is("textarea")) && (b.off("keydown.readonly"), f && b.prop("readonly", !0)), b.find(".bjui-lookup, .bjui-spinner, .bjui-upload").show()
                    }), b.find('[data-toggle="doedit"]').attr("data-toggle", "dosave").text("完成")
                }

                function f(b) {
                    b.addClass("readonly").find("> td *").each(function () {
                        var b = a(this), c = b.closest("td"), d = b.attr("data-toggle");
                        if (c.data("notread")) return !0;
                        if (b.isTag("select") && b.nextAll(".bootstrap-select").addClass("readonly").find("button").addClass("disabled"), b.is(":checkbox") && (b.closest(".icheckbox_minimal-purple").addClass("disabled"), b.closest(".icheckbox_minimal-purple").find("ins").addClass("readonly")), b.is(":radio") && (b.closest(".iradio_minimal-purple").addClass("disabled"), b.closest(".iradio_minimal-purple").find("ins").addClass("readonly")), d) {
                            if ("doedit" == d || "dosave" == d) return !0;
                            b.removeAttr("data-toggle").attr("data-toggle-old", d), "kindeditor" == d && KindEditor.remove(b)
                        }
                        (b.is(":text") || b.is("textarea")) && b.on("keydown.readonly", function (a) {
                            a.preventDefault()
                        }), b.find(".bjui-lookup, .bjui-spinner, .bjui-upload").hide()
                    }), b.find('[data-toggle="dosave"]').attr("data-toggle", "doedit").text("编辑")
                }

                var b = c.$element, d = c.$tbody;
                d.find("> tr").each(function () {
                    var g = a(this), h = g.find("> td"), i = b.data("bjui.tabledit.tr").clone().find("> th");
                    g.data("bjui.tabledit.oldTds", g.html()), i.each(function (b) {
                        var c = h.eq(b), d = c.data("val"), e = a(this), f = e.children(), g = e.find(".pic-box");
                        "undefined" == typeof d && (d = c.html()), c.data("noedit") || f.length && (f.is("input:checkbox") || f.is("input:radio") ? f.filter('[value="' + d + '"]').attr("checked", "checked") : f.isTag("select") ? f.find('option[value="' + c.data("val") + '"]').attr("selected", "selected") : g.length ? (c.data("val") && e.find(".pic-name").val(c.data("val")), g.html(c.html())) : f.hasClass("wrap_bjui_btn_box") ? f.find("input[data-toggle]").attr("value", d + "") : f.is("textarea") ? (f.html(d), "kindeditor" == f.attr("data-toggle") && f.attr("data-toggle-old", "kindeditor").removeAttr("data-toggle")) : f.attr("value", d + ""), c.html(e.html()))
                    }), g.on("dblclick", a.proxy(function () {
                        e(g)
                    }, c)).initui(), c.tools.initSuffix(d), f(g)
                }), d.on("click.bjui.tabledit.readonly", '[data-toggle="doedit"]', function () {
                    e(a(this).closest("tr"))
                }).on("click.bjui.tabledit.readonly", '[data-toggle="dosave"]', function () {
                    var i, j, e = a(this).closest("tr"), g = e.index(), h = c.options.callback;
                    c.options.action ? (e.wrap('<form action="" method="POST"></form>'), e.attr("data-id") && (i = b.find("> thead > tr:eq(0)").data("idname") || "id", e.before('<input type="hidden" name="' + i.replaceSuffix(g) + '" value="' + e.attr("data-id") + '">')), j = e.parent().serializeArray(), c.options.singleNoindex && a.each(j, function (b, c) {
                        a.extend(c, {name: c.name.replaceSuffix(0)})
                    }), e.prev("input").remove(), e.unwrap().isValid(function (a) {
                        a && (h = h ? h.toFunc() : function (a) {
                            a[BJUI.keys.statusCode] == BJUI.statusCode.ok ? f(e) : e.bjuiajax("ajaxDone", a)
                        }, e.bjuiajax("doAjax", {
                            url: c.options.action,
                            data: j,
                            type: c.options.type || "POST",
                            callback: h
                        }))
                    })) : f(e)
                }), c.tools.initEnter(d)
            }, doAdd: function () {
                var b = c.$element;
                c.$numAdd && c.$btnAdd && b.on("keydown.bjui.tabledit.add", "thead .num-add", function (a) {
                    a.which == BJUI.keyCode.ENTER && (c.$btnAdd.trigger("click.bjui.tabledit.add"), a.preventDefault())
                }).on("click.bjui.tabledit.add", "thead .row-add", function (a) {
                    var d = 1;
                    isNaN(c.$numAdd.val()) || (d = parseInt(c.$numAdd.val())), c.add(b, d), a.preventDefault()
                })
            }, doDel: function (b) {
                var c = this, d = "click.bjui.tabledit.del";
                b.off(d).on(d, ".row-del", function (b) {
                    var d = a(this);
                    d.data("confirmMsg") ? d.alertmsg("confirm", d.data("confirmMsg"), {
                        okCall: function () {
                            c.delData(d)
                        }
                    }) : c.delData(d), b.preventDefault()
                })
            }, delData: function (a) {
                var b = this, d = a.closest("tbody"), e = a.data(), f = function (f) {
                    a.closest("tr").remove(), b.initSuffix(d), b.afterDelete(d), e.callback && e.callback.toFunc().apply(c, [f])
                };
                a.is("[href^=javascript:]") || a.is('[href^="#"]') ? f() : a.bjuiajax("doAjax", {
                    url: a.attr("href"),
                    data: e.data,
                    callback: f
                })
            }, afterDelete: function (d) {
                var e = a.Event(b.EVENTS.afterDelete, {relatedTarget: d[0]});
                c.$element.trigger(e), e.isDefaultPrevented()
            }
        };
        return d
    }, b.prototype.init = function () {
        var b = this, c = this.tools, d = this.$element.addClass("bjui-tabledit"), e = d.find("> thead > tr:first"),
            f = this.$tbody, g = d.find("> thead > tr:first").html();
        e.find("> th").each(function () {
            var f, c = a(this), d = c.attr("title"), e = c.data("addtool");
            d && c.html(d), e && (f = a('<span style="position:relative;"></span>'), c.empty(), b.$numAdd = a('<input type="text" value="1" class="form-control num-add" size="2" title="待添加的行数">'), b.$btnAdd = a('<a href="javascript:;" class="row-add" title="添加行"><i class="fa fa-plus-square"></i></a>'), f.append(b.$numAdd).append(b.$btnAdd).appendTo(c))
        }), d.data("bjui.tabledit.tr", a("<tr>" + g + "</tr>")), c.initTbody(), c.doAdd(), c.doDel(f)
    }, b.prototype.add = function (b, c) {
        var f, h, i, j, d = this.tools, e = b.find("> tbody"), g = b.data("bjui.tabledit.tr");
        for (h = 0; c > h; h++) g.find("> th").each(function () {
            a(this).replaceWith("<td>" + a(this).html() + "</td>")
        }), i = g.clone(), 0 == h && (f = i), i.hide().appendTo(e), d.initSuffix(e), d.initEnter(e), i.show().css("display", "").initui();
        f && f.length && (j = f.find(":text"), j.each(function () {
            var b = a(this);
            return b.prop("readonly") ? void 0 : (b.focus(), !1)
        }))
    }, d = a.fn.tabledit, a.fn.tabledit = c, a.fn.tabledit.Constructor = b, a.fn.tabledit.noConflict = function () {
        return a.fn.tabledit = d, this
    }, a(document).on(BJUI.eventType.initUI, function (b) {
        var d = a(b.target).find('table[data-toggle="tabledit"]');
        d.length && c.call(d)
    }), a(document).on(BJUI.eventType.afterInitUI, function (b) {
        var d = a(b.target).find('table[data-toggle="tabledit"]');
        d.each(function () {
            if (a(this).is("[data-initnum]")) {
                var b = a(this).data("initnum");
                b > 0 && c.call(a(this), "add", a(this), b)
            }
        })
    }), a(document).on("click.bjui.tabledit.data-api", '[data-toggle="tableditadd"]', function (b) {
        var d = a(this), e = d.data("num") || 1, f = d.data("target");
        f && a(f).length && a(f).isTag("table") && (c.call(d, "add", a(f), e), b.preventDefault())
    })
}(jQuery);
/**
 * B-JUI: bjui-spinner.js  v1.2
 * @author K'naan (xknaan@163.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-spinner.js
 */
+function (a) {
    "use strict";

    function c(c) {
        var d = arguments, e = c;
        return this.each(function () {
            var f = a(this), g = a.extend({}, b.DEFAULTS, f.data(), "object" == typeof c && c),
                h = f.data("bjui.spinner");
            h || f.data("bjui.spinner", h = new b(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]()) : h.init()
        })
    }

    var d, b = function (b, c) {
        this.$element = a(b), this.options = c, this.tools = this.TOOLS(), this.$spinner = null, this.height = this.$element.addClass("form-control").innerHeight(), this.ivalue = Number(this.$element.val()) || 0
    };
    b.DEFAULTS = {
        min: 0,
        max: 100,
        step: 1,
        decimalPlace: 0
    }, b.EVENTS = {afterChange: "afterchange.bjui.spinner"}, b.prototype.TOOLS = function () {
        var a = this, c = {
            changeVal: function (c) {
                var d = a.$element, e = Number(d.val()) || Number(a.ivalue), f = c.data("add") || -1, g = a.options.min,
                    h = a.options.max, i = a.options.step;
                1 == f ? h - i >= e && (e += i) : -1 == f ? e >= g + i && (e -= i) : e > h ? e = h : g > e && (e = g), a.options.decimalPlace && (e = new String(e.toFixed(a.options.decimalPlace))), a.ivalue = e, d.val(e).trigger(b.EVENTS.afterChange, {value: e})
            }
        };
        return c
    }, b.prototype.init = function () {
        return this.$element, this.options, isNaN(this.options.min) || isNaN(this.options.max) || isNaN(this.options.step) ? (BJUI.debug("Spinner Plugin: Parameter is non-numeric type!"), void 0) : (this.addBtn(), void 0)
    }, b.prototype.addBtn = function () {
        var d, e, b = this, c = b.$element;
        this.$lookBtn || c.parent().hasClass("wrap_bjui_btn_box") || (this.$spinner = a(FRAG.spinnerBtn), c.css({paddingRight: "13px"}).wrap('<span class="wrap_bjui_btn_box"></span>'), d = c.parent(), d.css("position", "relative"), this.$spinner.css({height: this.height}).appendTo(d), this.$spinner.on("selectstart", function () {
            return !1
        }), e = null, b.$spinner.find("li").on("click", function () {
            b.tools.changeVal(a(this))
        }).on("mousedown", function () {
            var c = a(this);
            e = setInterval(function () {
                b.tools.changeVal(c)
            }, 150)
        }).on("mouseup", function () {
            clearTimeout(e)
        }))
    }, b.prototype.destroy = function () {
        this.$element.parent().hasClass("wrap_bjui_btn_box") && (this.$element.parent().find(".bjui-spinner").remove(), this.$element.unwrap())
    }, d = a.fn.spinner, a.fn.spinner = c, a.fn.spinner.Constructor = b, a.fn.spinner.noConflict = function () {
        return a.fn.spinner = d, this
    }, a(document).on(BJUI.eventType.initUI, function (b) {
        var d = a(b.target).find('input[data-toggle="spinner"]');
        d.length && c.call(d)
    })
}(jQuery);
/**
 * B-JUI: bjui-lookup.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from dwz.database.js (author:ZhangHuihua@msn.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-lookup.js
 */
+function (a) {
    "use strict";

    function f(b) {
        var c = arguments, d = b;
        return this.each(function () {
            var f = a(this), g = a.extend({}, e.DEFAULTS, f.data(), "object" == typeof b && b),
                h = f.data("bjui.lookup");
            h ? f.data("newurl") && (h.options.url = f.data("newurl"), f.data("bjui.dialog", null)) : f.data("bjui.lookup", h = new e(this, g)), "string" == typeof d && a.isFunction(h[d]) ? ([].shift.apply(c), c ? h[d].apply(h, c) : h[d]()) : h.init()
        })
    }

    var b, c, d, g, e = function (b, c) {
        this.$element = a(b), this.options = c, this.$lookBtn = null
    };
    e.DEFAULTS = {
        url: null,
        id: null,
        mask: !0,
        width: 600,
        height: 400,
        title: "Lookup",
        maxable: !0,
        resizable: !0
    }, e.EVENTS = {afterChange: "afterchange.bjui.lookup"}, e.prototype.init = function () {
        var a = this, e = this.options;
        return this.tools, e.url ? (e.url = decodeURI(e.url).replacePlh(a.$element.closest(".unitBox")), e.url.isFinishedTm() ? (e.url = encodeURI(e.url), b = this.options.group || null, c = this.options.suffix || null, d = this.$element, c && (c = c.trim()), this.open(a.$element), void 0) : (a.$element.alertmsg("error", e.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("Lookup Plugin: The lookup's url is incorrect, url:" + e.url), !1)) : (BJUI.debug("Lookup Plugin: Error trying open a lookup dialog, url is undefined!"), !1)
    }, e.prototype.addBtn = function () {
        var d, e, b = this, c = b.$element;
        this.$lookBtn || c.parent().hasClass("wrap_bjui_btn_box") || (this.$lookBtn = a(FRAG.lookupBtn), this.$element.css({paddingRight: "15px"}).wrap('<span class="wrap_bjui_btn_box"></span>'), d = this.$element.parent(), e = this.$element.addClass("form-control").innerHeight(), d.css({
            position: "relative",
            display: "inline-block"
        }), a.each(b.options, function (a, c) {
            "toggle" != a && b.$lookBtn.data(a, c)
        }), this.$lookBtn.css({
            height: e,
            lineHeight: e + "px"
        }).appendTo(d), this.$lookBtn.on("selectstart", function () {
            return !1
        }))
    }, e.prototype.open = function (a) {
        var c = this.options;
        a.dialog({
            id: c.id || "lookup_dialog",
            url: c.url,
            title: c.title,
            width: c.width,
            height: c.height,
            mask: c.mask,
            maxable: c.maxable,
            resizable: c.resizable
        })
    }, e.prototype.getField = function (a) {
        return (b ? b + "." : "") + a + (c ? c : "")
    }, e.prototype.setSingle = function (a, b) {
        "string" == typeof a && (a = new Function("return " + a)()), this.setVal(a, b)
    }, e.prototype.setMult = function (b, c) {
        var d = {}, e = this.$element.closest(".unitBox");
        return e.find('[name="' + b + '"]').filter(":checked").each(function () {
            var c, e, b = new Function("return " + a(this).val())();
            for (c in b) e = d[c] ? d[c] + "," : "", d[c] = e + b[c]
        }), a.isEmptyObject(d) ? (this.$element.alertmsg("error", this.$element.data("warn") || FRAG.alertSelectMsg), void 0) : (this.setVal(d, c), void 0)
    }, e.prototype.setVal = function (b, c) {
        var h, f = this, g = d.closest(".unitBox");
        d.data("customEvent") ? d.trigger("customEvent.bjui.lookup", [b]) : g.find(":input").each(function () {
            var i, j, d = a(this), g = d.attr("name");
            for (i in b) if (j = f.getField(i), j == g) {
                h = 1 == c ? d.val() ? d.val() + "," + b[i] : b[i] : b[i], d.val(h).trigger(e.EVENTS.afterChange, {value: b[i]});
                break
            }
        }), this.$element.dialog("closeCurrent")
    }, g = a.fn.lookup, a.fn.lookup = f, a.fn.lookup.Constructor = e, a.fn.lookup.noConflict = function () {
        return a.fn.lookup = g, this
    }, a(document).on(BJUI.eventType.initUI, function (b) {
        var c = a(b.target).find('[data-toggle="lookup"]');
        c.length && f.call(c, "addBtn")
    }), a(document).on("click.bjui.lookup.data-api", '[data-toggle="lookupbtn"]', function (b) {
        var c = a(this);
        c.attr("href") && !c.data("url") && c.attr("data-url", c.attr("href")), c.data("title") || c.attr("data-title", c.text()), f.call(c), b.preventDefault()
    }), a(document).on("click.bjui.lookupback.data-api", '[data-toggle="lookupback"]', function (b) {
        var c = a(this), d = c.data("args"), e = c.data("lookupid"), g = a('input[name="lookupType"]:checked').val();
        d ? f.call(c, "setSingle", d, g) : e && f.call(c, "setMult", e, g), b.preventDefault()
    })
}(jQuery);
/**
 * B-JUI: bjui-tags.js  v1.2
 * @author K'naan (xknaan@163.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-tags.js
 */
+function (a) {
    "use strict";

    function c(c) {
        var d = arguments, e = c;
        return this.each(function () {
            var f = a(this), g = a.extend({}, b.DEFAULTS, f.data(), "object" == typeof c && c), h = f.data("bjui.tags");
            h || f.data("bjui.tags", h = new b(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]()) : h.init()
        })
    }

    var d, b = function (b, c) {
        this.$element = a(b).addClass("tag-input"), this.options = c, this.tools = this.TOOLS(), this.$box = a(this.$element.wrap('<div class="bjui-tags"></div>')).parent(), this.timeout = null, this.$tagsArr = {}, this.tags = []
    };
    b.DEFAULTS = {
        width: 300,
        url: "",
        global: !1,
        type: "GET",
        tagname: "tag",
        max: 0,
        clear: !1,
        lightCls: "tags-highlight"
    }, b.EVENTS = {afterCreated: "aftercreated.bjui.tags"}, b.prototype.TOOLS = function () {
        var c = this, d = this.options, e = {
            keyDown: function (a) {
                return 13 == a.which ? !1 : void 0
            }, keyUp: function (b) {
                var e, f, g, h, i, j, k, l, m, n;
                switch (b.which) {
                    case BJUI.keyCode.BACKSPACE:
                        if (0 == a.trim(c.$element.val()).length) return c.tools.removeMenu(), !1;
                        break;
                    case BJUI.keyCode.ESC:
                        c.tools.removeMenu();
                        break;
                    case BJUI.keyCode.DOWN:
                        if (!c.$menu || !c.$menu.length) return;
                        return e = c.$menu.find("> ." + d.lightCls), f = c.$menu.find("> li:first-child"), e.length ? (g = e.removeClass(d.lightCls).next(), g.length ? g.addClass(d.lightCls) : f.addClass(d.lightCls)) : f.addClass(d.lightCls), !1;
                    case BJUI.keyCode.UP:
                        if (!c.$menu || !c.$menu.length) return;
                        return e = c.$menu.find("> ." + d.lightCls), h = c.$menu.find("> li:last-child"), e.length ? (i = e.removeClass(d.lightCls).prev(), i.length ? i.addClass(d.lightCls) : h.addClass(d.lightCls)) : h.addClass(d.lightCls), !1;
                    case BJUI.keyCode.ENTER:
                        if (d.max > 0 && c.$tagsArr.length >= d.max) return !1;
                        if (j = !1, k = !1, l = null, m = c.$menu && c.$menu.find("> ." + d.lightCls), m && m.length) j = m.text(), l = m.data("item"), k = l.value; else {
                            if (j = a.trim(c.$element.val()), !j.length) return !1;
                            if (d.clear && -1 == a.inArray(j, c.tags)) return c.$element.val(""), !1;
                            k = j
                        }
                        if (!j) return;
                        return n = !1, c.$tagsArr.length && c.$tagsArr.each(function () {
                            return a(this).val() == k ? (n = !0, void 0) : void 0
                        }), n ? (c.$element.val(""), !1) : (c.tools.createTag(j, k), c.tools.removeMenu(), c.$element.val(""), a.proxy(c.tools.onAfterCreated(l, k), c), !1)
                }
            }, query: function () {
                c.timeout && clearTimeout(c.timeout), c.timeout = setTimeout(c.tools.doQuery, 300)
            }, doQuery: function () {
                var b, e, f, g, h;
                d.max > 0 && c.$tagsArr.length >= d.max || (b = c.$element.val(), e = c.$box.find("> .tags-menu"), f = [], g = null, h = c.$element.closest(".navtab-panel").length ? a.CurrentNavtab : a.CurrentDialog, c.$element.closest(".bjui-layout").length && (h = c.$element.closest(".bjui-layout")), 0 != b.length && (c.$element.one("ajaxStart", function () {
                    h.trigger("bjui.ajaxStart")
                }).one("ajaxStop", function () {
                    h.trigger("bjui.ajaxStop")
                }), a.ajax({
                    url: d.url,
                    global: d.global,
                    type: d.type,
                    data: {term: b},
                    dataType: "json",
                    success: function (b) {
                        if (0 != b.length) {
                            e.length || (e = a('<ul class="tags-menu"></ul>')), e.empty().hide().appendTo(c.$box);
                            for (var h = 0; h < b.length; h++) g = a('<li class="tags-item">' + b[h].label + "</li>").data("item", b[h]), g.appendTo(e), f.push(b[h].label);
                            c.tags = f, e.css({
                                top: c.$element.position().top + c.$element.outerHeight(),
                                left: c.$element.position().left
                            }).fadeIn().find("> li").hover(function () {
                                a(this).addClass(d.lightCls).siblings().removeClass(d.lightCls)
                            }, function () {
                                a(this).removeClass(d.lightCls)
                            }).click(function () {
                                var b = a(this).text(), d = a(this).data("item"), f = d.value, g = !1;
                                return c.$box.find("input:hidden").each(function () {
                                    return a(this).val() == f ? (g = !0, void 0) : void 0
                                }), g ? (c.$element.val(""), e.remove(), void 0) : (a.proxy(c.tools.createTag(b, f), c), e.remove(), c.$element.val(""), a.proxy(c.tools.onAfterCreated(d, f), c), void 0)
                            }), c.$menu = e
                        }
                    }
                })))
            }, createTag: function (b, d) {
                var f,
                    e = a('<span class="label label-tag" data-value="' + d + '" style="margin-left: 1px; margin-top: 1px;"><i class="fa fa-tag"></i> ' + b + '&nbsp;&nbsp;<a href="#" class="close">&times;</a></span>');
                e.insertBefore(c.$element).find("a.close").click(function () {
                    var b = e.data("value");
                    c.$box.find("input:hidden").each(function () {
                        a(this).val() == b && a(this).remove()
                    }), e.remove(), c.$tagsArr = c.$box.find('input[name="' + c.options.tagname + '"]')
                }), f = a('<input type="hidden" name="' + c.options.tagname + '">').val(d), f.appendTo(c.$box), c.$tagsArr = c.$box.find('input[name="' + c.options.tagname + '"]')
            }, removeMenu: function () {
                c.$menu && c.$menu.remove()
            }, onAfterCreated: function (d, e) {
                var f = [];
                c.$tagsArr.length && c.$tagsArr.each(function () {
                    f.push(a(this).val())
                }), c.$element.trigger(b.EVENTS.afterCreated, {item: d, value: e, tags: f.join(",")})
            }
        };
        return e
    }, b.prototype.init = function () {
        var b = this, c = this.$element, d = this.options;
        return d.url ? (d.url = decodeURI(d.url).replacePlh(c.closest(".unitBox")), d.url.isFinishedTm() ? (d.url = encodeURI(d.url), isNaN(this.options.max) ? (BJUI.debug("Tags Plugin: Parameter 'max' is non-numeric type!"), void 0) : (b.$box.width(d.width).on("click", function () {
            c.focus()
        }), c.on("keydown", a.proxy(this.tools.keyDown, this)).on("keyup", a.proxy(this.tools.keyUp, this)), a.support.leadingWhitespace ? c.on("input", a.proxy(this.tools.query, this)) : c.on("propertychange", a.proxy(this.tools.query, this)), a(document).on("click.bjui.tags", a.proxy(function (b) {
            a(b.target).closest(this.$box).length || this.tools.removeMenu()
        }, this)), void 0)) : (c.alertmsg("error", d.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("Tags Plugin: The query tags url is incorrect, url: " + d.url), void 0)) : (BJUI.debug("Tags Plugin: Do query tags, url is undefined!"), void 0)
    }, b.prototype.destroy = function () {
        this.$tags && (this.$element.upwrap(), $tags.remove())
    }, d = a.fn.tags, a.fn.tags = c, a.fn.tags.Constructor = b, a.fn.tags.noConflict = function () {
        return a.fn.tags = d, this
    }, a(document).on(BJUI.eventType.initUI, function (b) {
        var d = a(b.target).find('input[data-toggle="tags"]');
        d.length && c.call(d)
    })
}(jQuery);
/**
 * B-JUI: bjui-upload.js  v1.2
 * @author K'naan (xknaan@163.com)
 * -- Modified from Huploadify 2.0 (author:吕大豹)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-upload.js
 */
+function (a) {
    "use strict";

    function c(c) {
        var d = arguments, e = c;
        return window.FileReader ? this.each(function () {
            var f = a(this), g = a.extend({}, b.DEFAULTS, f.data(), "object" == typeof c && c),
                h = f.data("bjui.upload");
            h || f.data("bjui.upload", h = new b(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]()) : h.init()
        }) : (this.each(function () {
            var b, c, d, e, f;
            if (a.fn.uploadify) {
                if (b = {
                        swf: BJUI.PLUGINPATH + "uploadify/scripts/uploadify.swf",
                        fileTypeExts: "*.jpg;*.png",
                        id: "fileInput",
                        fileObjName: "file",
                        fileSizeLimit: 204800,
                        buttonText: "选择上传文件",
                        auto: !1,
                        multi: !1,
                        height: 24
                    }, c = a(this), d = c.data(), d.id || (d.id = c.attr("id")), a.extend(b, d), !b.uploader) return BJUI.debug("Upload Plugin: The options uploader is undefined!"), void 0;
                if (b.uploader = decodeURI(b.uploader).replacePlh(c.closest(".unitBox")), !b.uploader.isFinishedTm()) return c.alertmsg("error", b.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("Upload Plugin: The options uploader is incorrect: " + b.uploader), void 0;
                b.uploader = encodeURI(b.uploader), "fileInput" == b.id && (b.id = b.id + (new Date).getTime()), e = a('<input type="file" name="' + b.name + '" id="' + b.id + '">'), b.onInit && "string" == typeof b.onInit && (b.onInit = b.onInit.toFunc()), b.onCancel && "string" == typeof b.onCancel && (b.onCancel = b.onCancel.toFunc()), b.onSelect && "string" == typeof b.onSelect && (b.onSelect = b.onSelect.toFunc()), b.onUploadSuccess && "string" == typeof b.onUploadSuccess && (b.onUploadSuccess = b.onUploadSuccess.toFunc()), b.onUploadComplete && "string" == typeof b.onUploadComplete && (b.onUploadComplete = b.onUploadComplete.toFunc()), b.onUploadError && "string" == typeof b.onUploadError && (b.onUploadError = b.onUploadError.toFunc()), e.appendTo(c), b.auto || (f = a('<button class="btn btn-orange" data-icon="cloud-upload">开始上传</button>'), f.hide().insertAfter(c).click(function () {
                    e.uploadify("upload", "*"), a(this).hide()
                }), b.onSelect = function () {
                    f.show()
                }), e.uploadify(b)
            }
        }), void 0)
    }

    var d, b = function (b, c) {
        this.$element = a(b), this.options = c, this.tools = this.TOOLS()
    };
    b.DEFAULTS = {
        fileTypeExts: "*.jpg;*.png",
        uploader: "",
        auto: !1,
        method: "POST",
        multi: !1,
        formData: {},
        fileObjName: "file",
        fileSizeLimit: 204800,
        previewImg: !0,
        previewLoadimg: null,
        dragDrop: !1,
        showUploadedPercent: !0,
        showUploadedSize: !0,
        buttonText: "选择上传文件",
        removeTimeout: 1e3,
        itemTemplate: FRAG.uploadTemp,
        breakPoints: !1,
        fileSplitSize: 1048576,
        onUploadStart: null,
        onUploadSuccess: null,
        onUploadComplete: null,
        onUploadError: null,
        onInit: null,
        onCancel: null,
        onSelect: null
    }, b.MIMETYPES = {
        zip: ["application/x-zip-compressed"],
        jpg: ["image/jpeg"],
        png: ["image/png"],
        gif: ["image/gif"],
        swf: ["application/x-shockwave-flash"],
        doc: ["application/msword"],
        xls: ["application/vnd.ms-excel"],
        docx: ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
        xlsx: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
        ppt: ["application/vnd.ms-powerpoint"],
        pptx: ["application/vnd.openxmlformats-officedocument.presentationml.presentation"],
        mp3: ["audio/mpeg"],
        mp4: ["video/mp4"],
        pdf: ["application/pdf"],
        txt: ["text/plain"],
        xml: ["text/xml"]
    }, b.prototype.TOOLS = function () {
        var c = this, d = this.options, e = {
            formatFileSize: function (a, b) {
                return a = a > 1048576 && !b ? (Math.round(100 * a / 1048576) / 100).toString() + "MB" : (Math.round(100 * a / 1024) / 100).toString() + "KB"
            }, getFile: function (a, b) {
                for (var c = 0; c < b.length; c++) if (b[c].index == a) return b[c];
                return !1
            }, getFileTypes: function (a) {
                var d, b = [], c = a.split(";");
                for (d = 0; d < c.length; d++) b.push(c[d].split(".").pop());
                return b
            }, getMimetype: function (a) {
                return b.MIMETYPES[a]
            }, getAcceptString: function (a) {
                var d, e, b = this.getFileTypes(a), c = [];
                for (d = 0; d < b.length; d++) e = this.getMimetype(b[d]), e ? c.push(e) : c.push("." + b[d]);
                return c.join(",")
            }, filter: function (b) {
                var g, h, e = [], f = this.getFileTypes(d.fileTypeExts);
                if (f.length > 0) for (g = 0; g < b.length; g++) h = b[g], parseInt(this.formatFileSize(h.size, !0)) > d.fileSizeLimit ? c.$element.alertmsg("error", '文件"' + h.name + '"大小超出限制！') : a.inArray(h.name.split(".").pop().toLowerCase(), f) >= 0 ? e.push(h) : c.$element.alertmsg("error", '文件"' + h.name + '"类型不允许！');
                return e
            }, getFiles: function (a) {
                var d, b = a.target.files || a.dataTransfer.files;
                for (b = this.filter(b), d = 0; d < b.length; d++) b[d].id = b[d].lastModifiedDate.getTime() + "_" + b[d].size + "_" + (b[d].type || "").replace(/\W/g, ""), this.renderQueueItem(b[d]), c.queueData.files++;
                return b
            }, renderQueueItem: function (b) {
                var g, h, e = 0,
                    f = a(d.itemTemplate.replace("{fileId}", b.id).replace("{fileName}", b.name).replace("#upConfirm#", BJUI.regional.upload.upConfirm).replace("#upPause#", BJUI.regional.upload.upPause).replace("#upCancel#", BJUI.regional.upload.upCancel).replace("{percent}", "0.00%").replace("{uploadedSize}", "0KB").replace("{fileSize}", this.formatFileSize(b.size)));
                d.auto && f.find("> .info > .up_confirm").remove(), f.data("upfile", b), c.$uploadFileList.append(f), d.breakPoints && (e = this.getUploadedSize(b.id), e > b.size && (e = b.size)), this.showProgress(b.id, e, b.size), d.previewImg && -1 != b.type.indexOf("image") ? (g = f.find("> .preview > .img"), d.previewLoadimg && g.html('<img src="' + d.previewLoadimg + '" height="114">'), this.previewImg(b, g)) : f.find("> .preview").remove(), d.showUploadedSize ? (h = f.find("> .filesize"), h.find("> .uploadedsize").html(this.formatFileSize(e)), h.find("> .filesize").html(this.formatFileSize(b.size))) : f.find("> .filesize").remove(), d.showUploadedPercent ? f.find("> .percent").html((100 * (e / b.size)).toFixed(2) + "%") : f.find("> .percent").remove(), d.onSelect && d.onSelect(files), d.auto && c.fileUpload(b, e), f.on("click.bjui.upload.confirm", ".up_confirm", function () {
                    var d = a(this), f = d.closest(".item");
                    d.hide().next().show(), c.fileUpload(f.data("upfile"), e)
                }), f.on("click.bjui.upload.cancel", ".up_cancel", this.removeQueueItem)
            }, successQueueItem: function (b, f) {
                e.showProgress(b.id, b.size, b.size), d.onUploadSuccess && d.onUploadSuccess.toFunc().call(c, b, f.responseText, c.$element), setTimeout(function () {
                    c.$element.find("#" + b.id).fadeOut("normal", function () {
                        a(this).remove();
                        var b = c.$element.find("> .queue > .item:visible").length;
                        0 == b && (c.$element.find("> .queue").hide(), c.$file.val(""))
                    })
                }, d.removeTimeout)
            }, removeQueueItem: function (b, d) {
                d && d.abort(), a(this).closest(".item").fadeOut("normal", function () {
                    a(this).remove();
                    var b = c.$element.find("> .queue > .item:visible").length;
                    0 == b && c.$element.find("> .queue").hide()
                }), b.preventDefault()
            }, previewImg: function (a, b) {
                if (a && b.length) {
                    var c = new FileReader;
                    c.onload = function (a) {
                        b.html('<img src="' + a.target.result + '">')
                    }, c.readAsDataURL(a)
                }
            }, showProgress: function (a, b, d) {
                var e = 100 * (b / d) + "%";
                c.tools.formatFileSize(b), (100 * (b / d)).toFixed(2) + "%", c.$element.find("#" + a + " > .progress > .bar").css("width", e)
            }, getUploadedSize: function (a) {
                return 1 * localStorage.getItem(a)
            }, saveUploadedSize: function (a, b) {
                localStorage.setItem(a, b)
            }, sendBlob: function (a, b, c, e) {
                var g, f = new FormData;
                if (b.open(d.method, a, !0), b.setRequestHeader("X-Requested-With", "XMLHttpRequest"), f.append(d.fileObjName, c), e) for (g in e) f.append(g, e[g]);
                b.send(f)
            }
        };
        return e
    }, b.prototype.init = function () {
        var e, b = this, c = this.$element, d = this.options;
        return d.uploader ? (d.uploader = decodeURI(d.uploader).replacePlh(c.closest(".unitBox")), d.uploader.isFinishedTm() ? (d.uploader = encodeURI(d.uploader), c.hasClass("bjui-upload") || (e = a(FRAG.uploadFrag.replaceAll("#multi#", d.multi ? "multiple" : "").replaceAll("#accept#", b.tools.getAcceptString(d.fileTypeExts)).replaceAll("#btnTxt#", (d.icon ? '<i class="fa fa-' + d.icon + '">&nbsp;&nbsp;' : "") + d.buttonText)), c.addClass("bjui-upload").append(e), this.$file = c.find("> .bjui-upload-select-file"), this.$uploadFileList = c.find("> .queue"), this.queueData = {
            files: 0,
            success: 0,
            error: 0
        }, c.on("change.bjui.upload", ".bjui-upload-select-file", function (a) {
            b.fileSelect(a)
        }).on("click.bjui.upload", ".bjui-upload-select", function () {
            b.$file.trigger("click")
        }), d.onInit && d.onInit(), d.dragDrop && (c[0].ondragover = function (a) {
            return a.preventDefault(), !0
        }, c[0].ondrop = function (a) {
            b.fileSelect(a), a.stopPropagation(), a.preventDefault()
        })), void 0) : (c.alertmsg("error", d.warn || FRAG.alertPlhMsg.replace("#plhmsg#", BJUI.regional.plhmsg)), BJUI.debug("Upload Plugin: The options uploader is incorrect: " + d.uploader), void 0)) : (BJUI.debug("Upload Plugin: The options uploader is undefined!"), void 0)
    }, b.prototype.fileSelect = function (a) {
        this.$uploadFileList.show(), this.tools.getFiles(a)
    }, b.prototype.fileUpload = function (b, c) {
        var d = this, e = d.$element, f = d.options, g = d.tools, h = !1, i = b;
        h = new XMLHttpRequest, f.breakPoints && (b = i.slice(c, c + f.fileSplitSize)), h.upload && (h.upload.onprogress = function (a) {
            d.onProgress(b, a.loaded, i.size)
        }, h.onreadystatechange = function () {
            if (4 == h.readyState && 200 == h.status) {
                var j = (JSON.parse(h.responseText), !1);
                f.breakPoints ? (c += f.fileSplitSize, g.saveUploadedSize(i.id, c), c < i.size ? (b = i.slice(c, c + f.fileSplitSize), g.sendBlob(f.uploader, h, b, f.formData)) : j = !0) : j = !0, j && (d.queueData.success++, g.successQueueItem(i, h), f.onUploadComplete && f.onUploadComplete(i, h.responseText))
            } else d.queueData.error++, f.onUploadError && f.onUploadError(i, h.responseText);
            f.onQueueComplete && (d.queueData.files = d.queueData.success + d.queueData.error) && option.onQueueComplete(d.queueData)
        }, f.onUploadStart && f.onUploadStart(), f.formData.fileName = i.name, f.formData.lastModifiedDate = i.lastModifiedDate.getTime(), g.sendBlob(f.uploader, h, b, f.formData)), e.find("#" + i.id + " > .info > .up_pause").on("click.bjui.upload.pause", function () {
            h.abort(), a(this).hide().prev().show()
        }), e.find("#" + i.id + " > .info > .up_cancel").off("click.bjui.upload.cancel").on("click.bjui.upload.cancel", a.proxy(function (a) {
            this.tools.removeQueueItem(a, h)
        }, this))
    }, b.prototype.onProgress = function (a, b, c) {
        var i, j, k, l, d = this, e = d.options, f = d.$element.find("#" + a.id + " .progress"), g = b,
            h = f.attr("lastLoaded") || 0;
        b -= parseInt(h), b > a.size && (b = a.size), d.$progressBar = f.children(".bar"), i = e.breakPoints ? parseFloat(d.$progressBar.get(0).style.width || 0) : 0, j = (100 * (b / c) + i).toFixed(2), k = j > 100 ? "100%" : j + "%", e.showUploadedSize && (l = f.nextAll(".filesize"), l.find("> .uploadedsize").text(d.tools.formatFileSize(b))), e.showUploadedPercent && f.nextAll(".up_percent").text(k), d.$progressBar.css("width", k), g < e.fileSplitSize ? f.attr("lastLoaded", g) : f.removeAttr("lastLoaded")
    }, b.prototype.destroy = function () {
    }, d = a.fn.upload, a.fn.upload = c, a.fn.upload.Constructor = b, a.fn.upload.noConflict = function () {
        return a.fn.upload = d, this
    }, a(document).on(BJUI.eventType.initUI, function (b) {
        var d = a(b.target).find('[data-toggle="upload"]');
        d.length && c.call(d)
    })
}(jQuery);
/**
 * B-JUI: bjui-theme.js  v1.2
 * @author K'naan (xknaan@163.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-theme.js
 */
+function (a) {
    "use strict";

    function e(b) {
        var c = arguments, e = b;
        return this.each(function () {
            var f = a(this), g = a.extend({}, d.DEFAULTS, f.data(), "object" == typeof b && b),
                h = f.data("bjui.theme");
            h || f.data("bjui.theme", h = new d(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(c), c ? h[e].apply(h, c) : h[e]()) : h.init()
        })
    }

    var b, c, d, f;
    a(function () {
        var d = function () {
            var d, e;
            b = a("#bjui-link-theme"), c = a("#bjui-themes"), a.cookie && (d = a.cookie("bjui_theme") || "blue", e = c.find("a.theme_" + d), e.theme({}))
        };
        d()
    }), d = function (b, c) {
        this.$element = a(b), this.options = c
    }, d.DEFAULTS = {theme: "purple"}, d.prototype.init = function () {
        var a, d, e;
        b.length && (a = b.attr("href"), a = a.substring(0, a.lastIndexOf("/")), a = a.substring(0, a.lastIndexOf("/")), a += "/" + this.options.theme + "/core.css", b.attr("href", a), d = this.$element.closest("ul").prev(), e = d.attr("class"), e = e.replace(/(theme[\s][a-z]*)/g, ""), d.removeClass().addClass(e).addClass("theme").addClass(this.options.theme), c.find("li").removeClass("active"), this.$element.parent().addClass("active"), this.cookie())
    }, d.prototype.setTheme = function (a) {
        c.find("a.theme_" + a).trigger("click")
    }, d.prototype.cookie = function () {
        var b = this.options.theme;
        a.cookie && a.cookie("bjui_theme", b, {path: "/", expires: 30})
    }, f = a.fn.theme, a.fn.theme = e, a.fn.theme.Constructor = d, a.fn.theme.noConflict = function () {
        return a.fn.theme = f, this
    }, a(document).on("click.bjui.theme.data-api", '[data-toggle="theme"]', function (b) {
        e.call(a(this)), b.preventDefault()
    })
}(jQuery);
/**
 * B-JUI: bjui-initui.js  v1.2
 * @author K'naan (xknaan@163.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-initui.js
 */
+function (a) {
    "use strict";

    function c(c) {
        var d = arguments, e = c;
        return this.each(function () {
            var f = a(this), g = a.extend({}, b.DEFAULTS, f.data(), "object" == typeof c && c),
                h = f.data("bjui.initui");
            h || f.data("bjui.initui", h = new b(this, g)), "string" == typeof e && a.isFunction(h[e]) ? ([].shift.apply(d), d ? h[e].apply(h, d) : h[e]()) : h.init()
        })
    }

    var d, e, f, b = function (b, c) {
        this.$element = a(b), this.options = c
    };
    b.DEFAULTS = {}, b.prototype.init = function () {
        var b = this, c = b.$element;
        a.when(b.initUI()).done(function () {
            c.trigger(BJUI.eventType.afterInitUI)
        })
    }, b.prototype.initUI = function () {
        var b = this.$element;
        a.when(b.trigger(BJUI.eventType.beforeInitUI)).done(function () {
            b.trigger(BJUI.eventType.initUI)
        })
    }, d = a.fn.initui, a.fn.initui = c, a.fn.initui.Constructor = b, a.fn.initui.noConflict = function () {
        return a.fn.initui = d, this
    }, a(document).on("click.bjui.initui.data-api", '[data-toggle="initui"]', function (a) {
        c.call($this, $this.data()), a.preventDefault()
    }), a(document).on(BJUI.eventType.beforeInitUI, function (b) {
        var c = a(b.target), d = [], e = c.find("[data-noinit]");
        c.find("> .bjui-maskProgress").find(".progress").stop().animate({width: "85%"}, "fast"), e.each(function () {
            var c = a(this), e = {};
            e.$target = c, e.$next = c.next(), e.$prev = c.prev(), e.$parent = c.parent(), e.visible = c.is(":visible") ? !0 : !1, d.push(e), c.remove()
        }), c.data("bjui.noinit", d)
    }), a(document).on(BJUI.eventType.initUI, function (b) {
        var c = a(b.target);
        c.find("> .bjui-maskProgress").find(".progress").stop().animate({width: "95%"}, "fast")
    }), a(document).on(BJUI.eventType.afterInitUI, function (b) {
        var c = a(b.target), d = c.data("bjui.noinit"), e = c.find("> .bjui-pageContent").find("form");
        d && a.each(d, function (a, b) {
            b.$next.length ? b.$next.before(b.$target) : b.$prev.length ? b.$prev.after(b.$target) : b.$parent.length && b.$parent.append(b.$target), b.visible && b.$target.show(), c.removeData("bjui.noinit")
        }), c.resizePageH(), e.length && c.find("> .bjui-pageFooter").find(":submit").on("click.bjui.submit", function (a) {
            a.preventDefault(), e.submit()
        }), c.find(".bjui-maskProgress").find(".progress").stop().animate({width: "100%"}, "fast", function () {
            c.find(".bjui-ajax-mask").fadeOut("normal", function () {
                a(this).remove()
            })
        })
    }), a(document).one(BJUI.eventType.afterInitUI, function () {
        var c = a("#bjui-hnav-navbar"), d = c.find("> li.active");
        d.length && d.find("> .items").length && d.find("> a").trigger("click")
    }), e = function (b) {
        var f, g, h, c = b, d = c, e = c.css("position");
        return "static" == e && (d = c.offsetParent()), f = parseInt(d.css("zIndex")) || 0, g = c.find("> .bjui-maskBackground"), h = c.find("> .bjui-maskProgress"), g.length || (g = a(FRAG.maskBackground), h = a(FRAG.maskProgress.replace("#msg#", BJUI.regional.progressmsg)), c.prepend(g).prepend(h)), parseInt(g.css("zIndex")) || 0, parseInt(h.css("zIndex")) || 0, g.css("zIndex", f + 1), h.css("zIndex", f + 2), {
            $bg: g,
            $pr: h
        }
    }, a(document).on("bjui.ajaxStart", function (b, c, d) {
        var f = e(a(b.target));
        f.$bg.fadeIn(), f.$pr.fadeIn(), f.$pr.find(".progress").animate({width: "80%"}, c || 500), d && setTimeout(function () {
            d.toFunc().call(this)
        }, 25)
    }).on("bjui.ajaxStop", function (b) {
        var c = e(a(b.target));
        c.$pr.find(".progress").animate({width: "100%"}, "fast", function () {
            c.$bg.remove(), c.$pr.remove()
        })
    }).on("bjui.ajaxError", function (b) {
        var c = e(a(b.target));
        c.$bg.remove(), c.$pr.remove()
    }), a(document).on(BJUI.eventType.ajaxStatus, function (b) {
        var c = a(b.target), d = e(c);
        c.one("ajaxStart", function () {
            d.$bg.fadeIn(), d.$pr.fadeIn(), d.$pr.find(".progress").animate({width: "10%"}, "fast")
        }).one("ajaxStop", function () {
        }).one("ajaxError", function () {
            d.$bg.remove(), d.$pr.remove()
        })
    }), f = function (a) {
        a.find('select[data-toggle="selectpicker"]').selectpicker("destroyMenu"), a.find('[data-toggle="selectztree"]').trigger("destroy.bjui.selectztree")
    }, a(document).on(BJUI.eventType.beforeLoadDialog, function () {
    }).on(BJUI.eventType.beforeAjaxLoad, function (b) {
        f(a(b.target))
    }).on(BJUI.eventType.beforeCloseNavtab, function (b) {
        f(a(b.target))
    }).on(BJUI.eventType.beforeCloseDialog, function (b) {
        f(a(b.target))
    }), a(function () {
        a(document).on("keydown keyup", function (a) {
            a.which === BJUI.keyCode.CTRL && (BJUI.KeyPressed.ctrl = "keydown" == a.type ? !0 : !1), a.which === BJUI.keyCode.SHIFT && (BJUI.KeyPressed.shift = "keydown" == a.type ? !0 : !1)
        })
    })
}(jQuery);
/**
 * B-JUI: bjui-plugins.js  v1.2
 * @author K'naan (xknaan@163.com)
 * http://git.oschina.net/xknaan/B-JUI/blob/master/BJUI/js/bjui-plugins.js
 */
+function (a) {
    "use strict";
    a(document).on(BJUI.eventType.initUI, function (b) {
        var e, f, g, h, i, c = a(b.target), d = c.find('[data-toggle="icheck"]');
        d.each(function () {
            var c = a(this), d = c.attr("id"), e = c.attr("name"), f = c.data("label");
            f && c.after('<label for="' + d + '" class="ilabel">' + f + "</label>"), c.on("ifCreated", function () {
                var c = a(this).closest("div"), f = c.next('[for="' + d + '"]');
                c.attr("data-icheck", e), f.attr("data-icheck", e)
            }).iCheck({
                checkboxClass: "icheckbox_minimal-purple",
                radioClass: "iradio_minimal-purple",
                increaseArea: "20%"
            }).on("ifChanged", function () {
                a(this).trigger("validate")
            }), c.prop("disabled") && c.iCheck("disable")
        }), d.filter(".checkboxCtrl").on("ifChanged", function (b) {
            var d = 1 == b.target.checked ? "check" : "uncheck", e = a(this).data("group");
            c.find(':checkbox[name="' + e + '"]').iCheck(d)
        }), c.find(":text, :password, textarea, :button, a.btn").each(function () {
            var d, f, g, h, i, j, b = a(this), c = b.closest("table.bjui-tabledit");
            if ((b.is(":text") || b.is(":password") || b.isTag("textarea")) && !b.hasClass("form-control") && b.addClass("form-control"), b.is(":button") && (d = b.data("icon"), b.data("large"), f = b.attr("class"), b.hasClass("btn") || b.removeClass().addClass("btn").addClass(f), d && (g = "fa-" + d.replace("fa-", ""), b.data("bjui.icon") || b.html('<i class="fa ' + g + '"></i> ' + b.html()).data("bjui.icon", !0))), b.isTag("a") && (d = b.data("icon"), b.data("large"), d && (g = "fa-" + d.replace("fa-", ""), b.data("bjui.icon") || b.html('<i class="fa ' + g + '"></i> ' + b.html()).data("bjui.icon", !0))), b.isTag("textarea") && (h = b.data("toggle"), h && "autoheight" == h && a.fn.autosize && b.addClass("autosize").autosize()), !c.length) {
                if (i = b.attr("size") || b.attr("cols"), j = 10 * i, !i) return;
                j && b.css("width", j)
            }
        }), c.find('form[data-toggle="validate"]').each(function () {
            var b = a(this), c = "undefined" == typeof b.data("alertmsg") ? !0 : b.data("alertmsg");
            a(this).validator({
                valid: function (b) {
                    a(b).bjuiajax("ajaxForm", a(b).data())
                }, validClass: "ok", theme: "red_right_effect"
            }).on("invalid.form", function (b, d, e) {
                c && a(d).alertmsg("error", FRAG.validateErrorMsg.replace("#validatemsg#", BJUI.regional.validatemsg).replaceMsg(e.length))
            })
        }), c.find('[data-toggle="moresearch"]').each(function () {
            var b = a(this), c = b.closest(".bjui-pageHeader"), d = c && c.find(".bjui-moreSearch"), e = b.data("name");
            b.attr("title") || b.attr("title", "更多查询条件"), b.click(function (f) {
                return d.length ? (d.css("top", c.outerHeight() - 1), d.is(":visible") ? (b.html('<i class="fa fa-angle-double-down"></i>'), e && a("body").data("moresearch." + e, !1)) : (b.html('<i class="fa fa-angle-double-up"></i>'), e && a("body").data("moresearch." + e, !0)), d.fadeToggle("slow", "linear"), f.preventDefault(), void 0) : (BJUI.debug("Not created 'moresearch' box[class=\"bjui-moreSearch\"]!"), void 0)
            }), e && a("body").data("moresearch." + e) && (d.css("top", c.outerHeight() - 1).fadeIn(), b.html('<i class="fa fa-angle-double-up"></i>'))
        }), e = c.find('select[data-toggle="selectpicker"]'), f = function (b, c) {
            var f, g, d = b.data("refurl"), e = function (b) {
                var d, c = a(b.data("nextselect"));
                c && c.length && (d = c.data("emptytxt") || "&nbsp;", c.html("<option>" + d + "</option>").selectpicker("refresh"), e(c))
            };
            c && c.length && d && (f = b.data("val"), g = c.data("val"), "undefined" == typeof f && (f = b.val()), a.ajax({
                type: "POST",
                dataType: "json",
                url: d.replace("{value}", encodeURIComponent(f)),
                cache: !1,
                data: {},
                success: function (d) {
                    if (d) {
                        var f = "", h = "";
                        a.each(d, function (a) {
                            var b, c;
                            d[a] && d[a].length ? (b = d[a][0], c = d[a][1]) : (b = d[a].value, c = d[a].label), "undefined" != typeof g && (h = b == g ? " selected" : ""), f += '<option value="' + b + '"' + h + ">" + c + "</option>"
                        }), b.removeAttr("data-val").removeData("val"), c.removeAttr("data-val").removeData("val"), f || (f = c.data("emptytxt") || "&nbsp;", f = "<option>" + f + "</option>"), c.html(f).selectpicker("refresh"), e(c)
                    }
                },
                error: BJUI.ajaxError
            }))
        }, e.each(function () {
            var b = a(this), c = b.data(), d = a(c.nextselect);
            b.addClass("show-tick"), c.style || b.data("style", "btn-default"), c.width || b.data("width", "auto"), c.container ? 1 == c.container && b.attr("data-container", "false").data("container", !1) : b.data("container", "body"), b.selectpicker(), d && d.length && "undefined" != typeof d.data("val") && f(b, d)
        }), e.change(function () {
            var b = a(this), c = a(b.data("nextselect"));
            f(b, c), b.attr("aria-required") && b.trigger("validate")
        }), c.find('[data-toggle="ztree"]').each(function () {
            function i(b, d, e) {
                if (e.faicon) {
                    var f = a("#" + e.tId + "_a");
                    f.data("faicon") || f.data("faicon", !0).addClass("faicon").find("> span.button").append('<i class="fa fa-' + e.faicon + '"></i>')
                }
                c.onNodeCreated && c.onNodeCreated.toFunc().call(this, b, d, e)
            }

            function j(b, d, e) {
                e.faiconClose && a("#" + e.tId + "_ico").find("> i").attr("class", "fa fa-" + e.faiconClose), console.log("11"), c.onCollapse && c.onCollapse.toFunc().call(this, b, d, e)
            }

            function k(b, d, e) {
                e.faicon && e.faiconClose && a("#" + e.tId + "_ico").find("> i").attr("class", "fa fa-" + e.faicon), c.onExpand && c.onExpand.toFunc().call(this, b, d, e)
            }

            function l(b, d) {
                var e = d.level, f = a("#" + d.tId + g), i = a("#diyBtn_add_" + d.id), j = a("#diyBtn_del_" + d.id);
                i.length || e < c.maxAddLevel && (i = a('<span class="tree_add" id="diyBtn_add_' + d.id + '" title="添加"></span>'), i.appendTo(f), i.on("click", function () {
                    h.addNodes(d, {name: "新增Item"})
                })), j.length || (j = a('<span class="tree_del" id="diyBtn_del_' + d.id + '" title="删除"></span>'), j.appendTo(f).on("click", function (a) {
                    var f, g, e = function () {
                        j.alertmsg("confirm", "确认要删除 " + d.name + " 吗？", {
                            okCall: function () {
                                if (h.removeNode(d), c.onRemove) {
                                    var e = c.onRemove.toFunc();
                                    e && e.call(this, a, b, d)
                                }
                            }, cancelCall: function () {
                            }
                        })
                    };
                    c.beforeRemove ? (f = c.beforeRemove.toFunc(), f && (g = f.call(f, b, d), g && 1 == g && e())) : e()
                }))
            }

            function m(b, c) {
                var d = a("#diyBtn_add_" + c.id), e = a("#diyBtn_del_" + c.id);
                d && d.length && d.off("click").remove(), e && e.length && e.off("click").remove()
            }

            function n(a, b) {
                for (var c = 0; c < b.length; c++) if (b[c].drag === !1) return !1;
                return !0
            }

            function o(a, b, c) {
                return c ? c.drop !== !1 : !0
            }

            var e, f, g, h, b = a(this), c = b.data(), d = c.options;
            d && "string" == typeof d && (d = d.toObj()), d && a.extend(c, "object" == typeof d && d), e = c.setting, c.nodes ? ("string" == typeof c.nodes && (c.nodes = c.nodes.trim().startsWith("[") || c.nodes.trim().startsWith("{") ? c.nodes.toObj() : c.nodes.toFunc()), "function" == typeof c.nodes && (c.nodes = c.nodes.call(this)), b.removeAttr("data-nodes")) : (c.nodes = [], b.find("> li").each(function () {
                var b = a(this), d = b.data();
                d.pid && (d.pId = d.pid), d.name = b.html(), c.nodes.push(d)
            }), b.empty()), c.showRemoveBtn || (c.showRemoveBtn = !1), c.showRenameBtn || (c.showRenameBtn = !1), c.addHoverDom && "function" != typeof c.addHoverDom && (c.addHoverDom = "edit" == c.addHoverDom ? l : c.addHoverDom.toFunc()), c.removeHoverDom && "function" != typeof c.removeHoverDom && (c.removeHoverDom = "edit" == c.removeHoverDom ? m : c.removeHoverDom.toFunc()), c.maxAddLevel || (c.maxAddLevel = 2), f = {
                view: {
                    addHoverDom: c.addHoverDom || null,
                    removeHoverDom: c.removeHoverDom || null,
                    addDiyDom: c.addDiyDom ? c.addDiyDom.toFunc() : null
                },
                edit: {enable: c.editEnable, showRemoveBtn: c.showRemoveBtn, showRenameBtn: c.showRenameBtn},
                check: {enable: c.checkEnable, chkStyle: c.chkStyle, radioType: c.radioType},
                callback: {
                    onClick: c.onClick ? c.onClick.toFunc() : null,
                    beforeDrag: c.beforeDrag ? c.beforeDrag.toFunc() : n,
                    beforeDrop: c.beforeDrop ? c.beforeDrop.toFunc() : o,
                    onDrop: c.onDrop ? c.onDrop.toFunc() : null,
                    onCheck: c.onCheck ? c.onCheck.toFunc() : null,
                    beforeRemove: c.beforeRemove ? c.beforeRemove.toFunc() : null,
                    onRemove: c.onRemove ? c.onRemove.toFunc() : null,
                    onNodeCreated: i,
                    onCollapse: j,
                    onExpand: k
                },
                data: {simpleData: {enable: c.simpleData || !0}, key: {title: c.title || ""}}
            }, e && "string" == typeof e && (e = e.toObj()), e && a.extend(!0, f, "object" == typeof e && e), a.fn.zTree.init(b, f, c.nodes), g = "_a", h = a.fn.zTree.getZTreeObj(b.attr("id")), c.expandAll && h.expandAll(!0)
        }), g = c.find('[data-toggle="selectztree"]'), g.each(function () {
            var g, h, i, j, b = a(this), c = b.data(), d = a(c.tree), f = (parseFloat(b.css("width")), b.outerHeight());
            c.width = c.width || b.outerWidth(), c.height = c.height || "auto", d && d.length && (g = d.attr("id"), h = a("#" + g + "_select_box"), i = function (e) {
                var k, l, g = b.offset().top, h = b.offset().left, i = d.clone().appendTo(a("body")),
                    j = i.outerHeight();
                i.remove(), k = a(window).height() - j - g - f, l = a(window).height() - g - f, "auto" == c.height && 0 > k && (l += k), e.css({
                    top: g + f,
                    left: h,
                    "max-height": l
                })
            }, b.click(function () {
                var e, f;
                return h && h.length ? (i(h), h.show(), void 0) : (e = 2, f = a.CurrentDialog, f && f.length && (e = f.css("zIndex") + 1), h = a('<div id="' + g + '_select_box" class="tree-box"></div>').css({
                    position: "absolute",
                    zIndex: e,
                    "min-width": c.width,
                    height: c.height,
                    overflow: "auto",
                    background: "#FAFAFA",
                    border: "1px #EEE solid"
                }).hide().appendTo(a("body")), d.appendTo(h).css("width", "100%").data("fromObj", b).removeClass("hide").show(), i(h), h.show(), void 0)
            }), a("body").on("mousedown", function (c) {
                var d = a(c.target);
                b[0] == c.target || h && h.length > 0 && d.closest(".tree-box").length > 0 || h.hide()
            }), j = b.closest(".bjui-pageContent"), j && j.length && j.scroll(function () {
                h && h.length && i(h)
            }), b.on("destroy.bjui.selectztree", function () {
                h.remove()
            }))
        }), c.find('[data-toggle="accordion"]').each(function () {
            var b = a(this), c = b.data("heightbox"), d = b.data("height"), e = function (c, d) {
                var e = b.data("offsety") || 0, d = d || a(c).outerHeight() - 1 * e, f = b.find(".panel-heading"),
                    g = f.outerHeight();
                g = (g + 1) * f.length, b.css("height", d), d -= g, b.find(".panel-collapse").find(".panel-body").css("height", d)
            };
            b.find("> .panel").length && (c || d) && (e(c, d), a(window).resize(function () {
                e(c, d)
            }), b.on("hidden.bs.collapse", function () {
                var c = a(this).find("> .panel:last"), d = c.find("> .panel-heading > h4 > a");
                d.hasClass("collapsed") && c.css("border-bottom", "1px #ddd solid")
            }))
        }), c.find('[data-toggle="kindeditor"]').each(function () {
            var d, b = a(this), c = b.data();
            c.items && "string" == typeof c.items && (c.items = c.items.replaceAll("'", "").replaceAll(" ", "").split(",")), c.afterUpload && (c.afterUpload = c.afterUpload.toFunc()), c.afterSelectFile && (c.afterSelectFile = c.afterSelectFile.toFunc()), c.confirmSelect && (c.confirmSelect = c.confirmSelect.toFunc()), d = {
                font: [],
                span: [".color", ".background-color", ".font-size", ".font-family"],
                div: [".margin", ".padding", ".text-align"],
                table: ["align", "width"],
                "td,th": ["align", "valign", "width", "height", "colspan", "rowspan"],
                a: ["href", "target", "name"],
                embed: ["src", "width", "height", "type", "loop", "autostart", "quality", ".width", ".height", "align", "allowscriptaccess"],
                img: ["src", "width", "height", "border", "alt", "title", "align", ".width", ".height", ".border"],
                "p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6": ["class", "align", ".text-align", ".color", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".text-indent", ".margin-left"],
                pre: ["class"],
                hr: ["class", ".page-break-after"],
                "br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del": []
            }, KindEditor.create(b, {
                pasteType: c.pasteType,
                minHeight: c.minHeight || 260,
                autoHeightMode: c.autoHeight || !1,
                items: c.items || KindEditor.options.items,
                uploadJson: c.uploadJson,
                fileManagerJson: c.fileManagerJson,
                allowFileManager: c.allowFileManager || !0,
                fillDescAfterUploadImage: c.fillDescAfterUploadImage || !0,
                afterUpload: c.afterUpload,
                afterSelectFile: c.afterSelectFile,
                X_afterSelect: c.confirmSelect,
                htmlTags: d,
                cssPath: [BJUI.PLUGINPATH + "kindeditor_4.1.10/editor-content.css", BJUI.PLUGINPATH + "kindeditor_4.1.10/plugins/code/prettify.css"],
                afterBlur: function () {
                    this.sync()
                }
            })
        }), c.find('[data-toggle="colorpicker"]').each(function () {
            var b = a(this), c = b.data("bgcolor");
            b.colorpicker(), c && b.on("changeColor", function (a) {
                b.css("background-color", a.color.toHex())
            })
        }), c.find('[data-toggle="clearcolor"]').each(function () {
            var b = a(this), c = b.data("target") ? a(b.data("target")) : null;
            c && c.length && b.click(function () {
                c.val(""), c.data("bgcolor") && c.css("background-color", "")
            })
        }), c.find('[data-toggle="tooltip"]').each(function () {
            a(this).tooltip()
        }), c.find('[data-toggle="dropdown"]').parent().on("show.bs.dropdown", function () {
            var c = a(this), d = c.outerWidth(), e = c.find("> .dropdown-menu"), f = e.outerWidth();
            d > f && e.css("min-width", d)
        }), c.find('form[data-toggle="ajaxform"]').each(function () {
            a(this).validator({ignore: ":input"}), a(this).validator("destroy")
        }), h = c.find('[data-toggle="highcharts"]'), h.each(function () {
            var b = a(this), c = b.data();
            a.get(c.url, function (a) {
                b.highcharts(a)
            }, "json")
        }), i = c.find('[data-toggle="echarts"]'), i.each(function () {
            var b = a(this), c = b.data(), d = c.theme ? c.theme : "default", e = c.type.split(",");
            require.config({paths: {echarts: BJUI.PLUGINPATH + "echarts"}}), require(["echarts", "echarts/theme/" + d, "echarts/chart/" + e[0], e[1] ? "echarts/chart/" + e[1] : "echarts"], function (d, e) {
                var f = d.init(b[0], e);
                a.get(c.url, function (a) {
                    f.setOption(a)
                }, "json")
            })
        })
    })
}(jQuery);

/** zidingyi **/
$(function () {
    $(document).on("click", '.table-hover > tbody > tr', function () {
        $(this).addClass('select').siblings().removeClass('select');
    })
});
