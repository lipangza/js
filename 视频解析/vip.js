/*
脚本版本:1.0.0
您通过【本地模式】安装此脚本，加载速度较快，但是如果脚本失效您需要手动去更新安装新版本
*/

/*
提示：同一脚本请勿重复多次安装，如果安装了旧版本脚本请禁用或删除后再安装，有些脚本并不兼容手机版，请自行测试
*/
/*脚本描述: 支持腾讯视频、爱奇艺、优酷、芒果TV、搜狐视频、乐视视频、PPTV、哔哩哔哩
*/
(function() {
var mixkey = encodeURIComponent('mx68031195');
if(window[mixkey]){return;} window[mixkey]=true; var url=location.href;
if(url.match(/(.*?):\/\/(.*?).youku.com\/v_(.*?)/)||url.match(/(.*?):\/\/(.*?).iqiyi.com\/v_(.*?)/)||url.match(/(.*?):\/\/(.*?).iqiyi.com\/w_(.*?)/)||url.match(/(.*?):\/\/(.*?).iqiyi.com\/a_(.*?)/)||url.match(/(.*?):\/\/(.*?).le.com\/vplay_(.*?)/)||url.match(/(.*?):\/\/v.qq.com\/x\/cover\/(.*?)/)||url.match(/(.*?):\/\/v.qq.com\/x\/page\/(.*?)/)||url.match(/(.*?):\/\/(.*?).tudou.com\/listplay\/(.*?)/)||url.match(/(.*?):\/\/(.*?).tudou.com\/albumplay\/(.*?)/)||url.match(/(.*?):\/\/(.*?).tudou.com\/programs\/view\/(.*?)/)||url.match(/(.*?):\/\/(.*?).mgtv.com\/b\/(.*?)/)||url.match(/(.*?):\/\/film.sohu.com\/album\/(.*?)/)||url.match(/(.*?):\/\/tv.sohu.com\/v\/(.*?)/)||url.match(/(.*?):\/\/(.*?).acfun.cn\/v\/(.*?)/)||url.match(/(.*?):\/\/(.*?).bilibili.com\/video\/(.*?)/)||url.match(/(.*?):\/\/(.*?).bilibili.com\/anime\/(.*?)/)||url.match(/(.*?):\/\/(.*?).bilibili.com\/bangumi\/play\/(.*?)/)||url.match(/(.*?):\/\/(.*?).baofeng.com\/play\/(.*?)/)||url.match(/(.*?):\/\/vip.pptv.com\/show\/(.*?)/)||url.match(/(.*?):\/\/v.pptv.com\/show\/(.*?)/)){


var isloadjs=false;try { isloadjs=window.mx_browser_obj.getisloadjs(); } catch(e) {}function mxloadScript(url, callback){if(url.indexOf('mxloadurl:')>-1) {loadjsinfo();callback();return;}if(isloadjs){
 var script = document.createElement('script');
 script.type = 'text/javascript';
script.onload = function(){ callback();}
script.src = url;
var heads=document.getElementsByTagName('head');
if(heads.length>0){heads[0].appendChild(script);}
else
{document.getElementsByTagName('body').item(0).appendChild(script);} }else{var xhr = new XMLHttpRequest();xhr.open('get', url); xhr.withCredentials=false;xhr.onreadystatechange = function () {if(xhr.readyState === 4){ var isloadjstxt=true;try {eval(xhr.responseText);} catch(e) {isloadjstxt=false;window.mx_browser_obj.loadjstxt(xhr.responseText);} if(isloadjstxt){callback();}else{setTimeout(callback,250);}} }; xhr.send();} }
mxloadScript('https://cdn.jsdelivr.net/npm/jquery-tamperv@3.2.1/jquery.min.js', function(){
mxloadScript('mxloadurl:', function(){

})
});
function loadjsinfo(){
// ==UserScript==
// @name         VIP视频解析
// @version      1.0.0
// @description  支持腾讯视频、爱奇艺、优酷、芒果TV、搜狐视频、乐视视频、PPTV、哔哩哔哩
// @icon         https://pic.rmb.bdstatic.com/bjh/344e0cbee6932f2060304ed72dc3269d.png
// @author       黎胖砸
// @include      *://wenku.baidu.com/*
//---------------------------------------------------
// @include      *://*.youku.com/v_*
// @include      *://*.iqiyi.com/v_*
// @include      *://*.iqiyi.com/w_*
// @include      *://*.iqiyi.com/a_*
// @include      *://*.le.com/ptv/vplay/*
// @include      *://v.qq.com/x/cover/*
// @include      *://v.qq.com/x/page/*
// @include      *://*.tudou.com/listplay/*
// @include      *://*.tudou.com/albumplay/*
// @include      *://*.tudou.com/programs/view/*
// @include      *://*.mgtv.com/b/*
// @include      *://film.sohu.com/album/*
// @include      *://tv.sohu.com/v/*
// @include      *://*.acfun.cn/v/*
// @include      *://*.bilibili.com/video/*
// @include      *://*.bilibili.com/anime/*
// @include      *://*.bilibili.com/bangumi/play/*
// @include      *://*.baofeng.com/play/*
// @include      *://vip.pptv.com/show/*
// @include      *://v.pptv.com/show/*
//---------------------------------------------------
// @require      https://cdn.jsdelivr.net/npm/jquery-tamperv@3.2.1/jquery.min.js
// @grant        GM_info
// @grant        GM_download
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @run-at       document-idle
// @license      AGPL License
// ==/UserScript==

(function() {
    'use strict';
    const isOpenVideoVipModule = true; //是否开启视频解析模块
    var $ = $ || window.$; //获得jquery的$标识符
    const window_url = window.location.href;
    const window_host = window.location.host;

    //自定义视频解析接口
    var customizeMovieInterface=[
        //{"name":"此处填接口名称","url":"此处填接口url"}
    ];


    /**
	 * VIP视频破解开始
	 */
    const movievipHelper={};
    movievipHelper.customizeSourceArray=customizeMovieInterface;
    movievipHelper.defaultSourceArray=[
        {"name":"纯净解析","url":"https://z1.m1907.cn/?jx="},
        {"name":"高速接口1","url":"https://jsap.attakids.com/?url="},
        {"name":"B站解析1","url":"https://vip.parwix.com:4433/player/?url="},
        {"name":"B站解析2","url":"https://www.cuan.la/m3u8.php?url="},
        {"name":"乐多资源","url":"https://api.leduotv.com/wp-api/ifr.php?isDp=1&vid="},
        {"name":"BL","url":"https://vip.bljiex.com/?v="},
        {"name":"ccyjjd","url":"https://ckmov.ccyjjd.com/ckmov/?url="},
        {"name":"M3U8","url":"https://jx.m3u8.tv/jiexi/?url="},
        {"name":"老板","url":"https://vip.laobandq.com/jiexi.php?url="},
        {"name":"盘古","url":"https://www.pangujiexi.cc/jiexi.php?url="},
        {"name":"大白","url":"https://api.myzch.cn/?url="},
        {"name":"云点播","url":"https://api.iopenyun.com:88/vip/?url="},
        {"name":"虾米","url":"https://jx.xmflv.com/?url="},
        {"name":"无极","url":"https://da.wujiys.com/?url="},
        {"name":"618G","url":"https://jx.618g.com/?url="},
        {"name":"ckmov","url":"https://www.ckmov.vip/api.php?url="},
        {"name":"迪奥","url":"https://123.1dior.cn/?url="},
        {"name":"福星","url":"https://jx.popo520.cn/jiexi/?url="},
        {"name":"RDHK","url":"https://jx.rdhk.net/?v="},
        {"name":"H8","url":"https://www.h8jx.com/jiexi.php?url="},
        {"name":"解析la","url":"https://api.jiexi.la/?url="},
        {"name":"久播","url":"https://jx.jiubojx.com/vip.php?url="},
        {"name":"九八","url":"https://jx.youyitv.com/?url="},
        {"name":"老板","url":"https://vip.laobandq.com/jiexi.php?url="},
        {"name":"乐喵","url":"https://jx.hao-zsj.cn/vip/?url="},
        {"name":"MUTV","url":"https://jiexi.janan.net/jiexi/?url="},
        {"name":"明日","url":"https://jx.yingxiangbao.cn/vip.php?url="},
        {"name":"磨菇","url":"https://jx.wzslw.cn/?url="},
        {"name":"OK","url":"https://okjx.cc/?url="},
        {"name":"维多","url":"https://jx.ivito.cn/?url="},
        {"name":"小蒋","url":"https://www.kpezp.cn/jlexi.php?url="},
        {"name":"小狼","url":"https://jx.yaohuaxuan.com/?url="},
        {"name":"智能","url":"https://vip.kurumit3.top/?v="},
        {"name":"星驰","url":"https://vip.cjys.top/?url="},
        {"name":"星空","url":"http://60jx.com/?url="},
        {"name":"月亮","url":"https://api.yueliangjx.com/?url="},
        {"name":"0523","url":"https://go.yh0523.cn/y.cy?url="},
        {"name":"云端","url":"https://jx.ergan.top/?url="},
        {"name":"17云","url":"https://www.1717yun.com/jx/ty.php?url="},
        {"name":"66","url":"https://api.3jx.top/vip/?url="},
        {"name":"116","url":"https://jx.116kan.com/?url="},
        {"name":"200","url":"https://vip.66parse.club/?url="},
        {"name":"云析","url":"https://jx.yparse.com/index.php?url="},
        {"name":"8090","url":"https://www.8090g.cn/?url="}
    ];
    movievipHelper.getServerSource=function(){
        //合并自定义接口和默认接口
        try{
            movievipHelper.defaultSourceArray = movievipHelper.customizeSourceArray.concat(movievipHelper.defaultSourceArray);
        }catch(e){
            console.log("合并出现异常，请检查自定义接口");
        }
        //执行操作
        movievipHelper.addStyle();
        movievipHelper.generateHtml();
        movievipHelper.operation();
        console.log("onload................");
    };
    movievipHelper.eleId = Math.ceil(Math.random()*100000000);
    movievipHelper.isRun = function(){
        var isVip = false;
        var host = window.location.host;
        var vipWebsites = ["iqiyi.com","v.qq.com","youku.com", "le.com","tudou.com","mgtv.com","sohu.com",
                           "acfun.cn","bilibili.com","baofeng.com","pptv.com"];
        for(var b=0; b<vipWebsites.length; b++){
            if(host.indexOf(vipWebsites[b]) != -1){
                isVip = true;
                break;
            }
        }
        return isVip;
    };
    movievipHelper.addStyle=function(){
        var themeColor = "#DD001B";
        var innnerCss =
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" {position:fixed;top:200px; left:0px; padding:5px 0px; width:28px;}"+
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item{cursor:pointer; width:100%; text-align:center;}"+
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.jump_analysis_website{padding:10px 0px;background-color:"+themeColor+";}"+
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.open_page_inner_source{margin-top:6px; padding:5px 0px;background-color:"+themeColor+";}"+
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item >img{width:19px; display:inline-block; vertical-align:middle;}"+
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box{display:none;width:310px;height:400px;position:absolute;left:25px;overflow:hidden;}"+
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box> .inner_table_box{width:330px;height:100%;padding-left:10px;overflow-y:scroll;overflow-x:hidden;}"+
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box> .inner_table_box> table{width:300px;border-spacing:5px;border-collapse:separate;line-height:20px;}"+
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box> .inner_table_box> table td{border-bottom:3px solid "+themeColor+";border-top:3px solid "+themeColor+";width:33%;color:#FFF;font-size:11px;text-align:center;cursor:pointer;background-color:"+themeColor+";box-shadow:0px 0px 5px #fff;border-radius:3px;}"+
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box> .inner_table_box> table td:hover{border-bottom:3px solid #FEF2A6;border-top:3px solid #FEF2A6;}"+
            "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box> .inner_table_box> table .td_hover{border-bottom:3px solid #FEF2A6;border-top:3px solid #FEF2A6;}";
        $("body").prepend("<style>"+innnerCss+"</style>");
    };
    movievipHelper.generateHtml=function(){
        var html="";
        var openBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAADBklEQVR4Xu2cz6tNURTHP7tI5iRlID9CJFMlkYGSRPGklBRKiCSSxJMBkYGSgWQq/gBT/gMDUzMzf8RX6959nuO9e+75sff54d69B+/W23evvdbnrLX32j/OdfgiaStwGzgBvHfOPc7qln9KsrpHRfU9/n+xgt6ngW/AK+fcT9PV2R9JZ4A3wHpvQBVh/yuETO/fwDXn3GfnAXxa9vTmAUJm8oJBMADmCfkyTxC+GAT1GMOD6DpBsIExeUKCMArH5AkJwnhcTp4wBcI85QmFnpAgAAlCgjAeMJMnJAjJE5YWdSkcIq5vvwP7IsprRVSrGaNzzuSfAz4Aa1qxIILQ1iHkNnKfAA8j6BxdRGcQ/IbuOuAtYDu+gymdQsh5xX7gHbB7CCR6gZCDccGPF6Ot/75KrxB8iKwCngL35hZCzit2Ac/8CVinPIo8YRH4OkWTQ1WO4WyKrGuNJDsGfAlsr9vW0v0mehdCqHCmV3oM1wRCzjPuAC9qgmiU6Q4Wgh8vNgJ2+HulIozZg5DzioMexuESGLMLIQfjkh+LNhXAmH0IPkTueq9YOwHEbEOQdMobv3dKSMwmBEl7fAhUWW/EhTCBdnaEn839bU+RtvS2PmyqXF11dmiid+9p8yTjJF0ELPZ3VjQ+6GuDgiDpAHAfOBZkVc3Gg4AgaQPwALieXSaraUfQ13uHIOmmN35bkCUBjXuDIOm4N/5ogP5RmnYOQdIOwJ7+1SgWRBDSGQRJNrXajVmL+80RdI8mYtp+QlknlfMESSe98UfKhAbW235CWVmhd6tLacBS3BvA5TLNItXHzRhjbKoAv4CiFV8ku/8RM0gIbRg6TWaC0PRKQdtjQvKErgkkTxgTjzsmNNm/7+HJL+8y6rnDAOzpToVW0+buzAjrKUFIF7zHHpQ8IUFInrA0mqZw8OHwY8IFqkaZV9hEFaV1E71HL4c+9wcdeS2aCItiRaCQJnovZC+MfwTO5hRoIixQ/yjN6+j994XxrGtJt4DzwBbgdaSdpSiW1RBSBcKKnw74AzEYpoku7zbwAAAAAElFTkSuQmCC";
        html+= "<div id='plugin_analysis_vip_movie_box_"+movievipHelper.eleId+"' style='z-index:999999999999999999999;'>";
        html+= "<div class='plugin_item open_page_inner_source'><img src='"+openBase64+"'>";
        html+= "<div class='play_source_box'>";
        html+= "<div class='inner_table_box'>";
        html+= "<table style=''><tr>";
        for(var playLineIndex=0; playLineIndex<this.defaultSourceArray.length; playLineIndex++){
            if(playLineIndex%3==0){
                html +="<tr>";
                html += "<td data-url='"+this.defaultSourceArray[playLineIndex].url+"'>"+this.defaultSourceArray[playLineIndex]['name']+"</td>";
                continue;
            }
            html += "<td data-url='"+this.defaultSourceArray[playLineIndex].url+"'>"+this.defaultSourceArray[playLineIndex]['name']+"</td>";
            if((playLineIndex+1)%3==0){
                html +="</tr>";
            }
        }
        html+= "</tr></table>";
        html+= "</div></div>";
        html+= "</div>";
        html+= "</div>";
        $("body").append(html);
        var $vipMovieBox = $("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+"");
        var $playSourceBox = $("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+">.plugin_item>.play_source_box");
        var btnHeight = $vipMovieBox.height();
        var playSourceBoxHeight = $playSourceBox.height();
        var playSourceBoxTop = (playSourceBoxHeight-btnHeight)*0.4;
        $playSourceBox.css("top","-"+playSourceBoxTop+"px");
    };
    movievipHelper.operation=function(){
        $("body").on("click", "#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" .jump_analysis_website", function(){
            movievipHelper.comprehensiveAnalysis(window.location.href, true);
        });
        var $vipMovieBox = $("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+">.open_page_inner_source");
        var $playSourceBox = $("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+">.plugin_item>.play_source_box");
        $vipMovieBox.on("mouseover", () => {
            $playSourceBox.show();
        });
        $vipMovieBox.on("mouseout", () => {
            $playSourceBox.hide();
        });
        var player_nodes = [
            { url:"v.qq.com", node:"#mod_player"},
            { url:"www.iqiyi.com", node:"#flashbox"},
            { url:"v.youku.com", node:"#player"},
            { url:"w.mgtv.com", node:"#mgtv-player-wrap"},
            { url:"www.mgtv.com", node:"#mgtv-player-wrap"},
            { url:"tv.sohu.com", node:"#player"},
            { url:"film.sohu.com", node:"#playerWrap"},
            { url:"www.le.com", node:"#le_playbox"},
            { url:"video.tudou.com", node:".td-playbox"},
            { url:"v.pptv.com", node:"#pptv_playpage_box"},
            { url:"vip.pptv.com", node:".w-video"},
            { url:"www.wasu.cn", node:"#flashContent"},
            { url:"www.acfun.cn", node:"#ACPlayer"},
            { url:"vip.1905.com", node:"#player"},
            {url:"play.tudou.com",node:"#player"},
            {url:"www.bilibili.com/video",node:"#bilibiliPlayer"},
            {url:"www.bilibili.com/bangumi",node:"#player_module"},
        ];
        var node = "";
        for(var m in player_nodes) {
            var playUrl = window.location.href;
            if(playUrl.indexOf(player_nodes[m].url)!= -1){
                node = player_nodes[m].node;
            }
        }
        $("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box>.inner_table_box> table td").on("click", function(){
            $("#play-iframe-outer-7788op").remove();

            $("#plugin_analysis_vip_movie_box_"+movievipHelper.eleId+" >.plugin_item>.play_source_box>.inner_table_box> table td").removeClass("td_hover");
            $(this).addClass("td_hover");

            var playUrl = window.location.href;
            var playHtml = "<div id='play-iframe-outer-7788op' style='width:100%;height:100%;'><iframe allowtransparency=true frameborder='0' scrolling='no' allowfullscreen=true allowtransparency=true name='jx_play' style='height:100%;width:100%' id='play-iframe-6677i-7788'></iframe></div>";
            $(node).html(playHtml);
            var iframeSrc= $(this).attr("data-url")+playUrl;
            $("#play-iframe-6677i-7788").attr("src", iframeSrc);
        })
    };




    //视频广告过滤相关代码借鉴自其它脚本，该部分代码版权归原作者所有！在此感谢
    //借鉴脚本作者：sign
    //地址：https://greasyfork.org/zh-CN/scripts/406849
    //修改：优化了该段代码的逻辑，使可读性更高！
    movievipHelper.adAccelerate=function(){//视频广告加速
        switch (window.location.host) {
            case 'www.iqiyi.com':
                try{
                    unsafeWindow.rate = 0;
                    unsafeWindow.Date.now = () => {
                        return new unsafeWindow.Date().getTime() + (unsafeWindow.rate += 1000);
                    }
                    setInterval(() => {
                        unsafeWindow.rate = 0;
                    }, 600000);
                }catch(e){}
                try{
                    setInterval(() => {
                        if (document.getElementsByClassName("cupid-public-time")[0] != null) {
                            $(".skippable-after").css("display", "block");
                            document.getElementsByClassName("skippable-after")[0].click();
                        }
                        $(".qy-player-vippay-popup").css("display", "none");
                        $(".black-screen").css("display", "none");
                    }, 500);
                }catch(e){}
                break;
            case 'v.qq.com':
                try{
                    setInterval(() => { //视频广告加速
                        $(".txp_ad").find("txpdiv").find("video")[0].currentTime = 1000;
                        $(".txp_ad").find("txpdiv").find("video")[1].currentTime = 1000;
                    }, 1000)
                    setInterval(() => {
                        var txp_btn_volume = $(".txp_btn_volume");
                        if (txp_btn_volume.attr("data-status") === "mute") {
                            $(".txp_popup_volume").css("display", "block");
                            txp_btn_volume.click();
                            $(".txp_popup_volume").css("display", "none");
                        }
                        $(".mod_vip_popup").css("display", "none");
                        $(".tvip_layer").css("display", "none");
                        $("#mask_layer").css("display", "none");
                    }, 500);
                }catch(e){}
                break;
            case 'v.youku.com':
                try{
                    window.onload = function () {
                        if (!document.querySelectorAll('video')[0]) {
                            setInterval(() => {
                                document.querySelectorAll('video')[1].playbackRate = 16;
                            }, 100)
                        }
                    }
                    setInterval(() => {
                        var H5 = $(".h5-ext-layer").find("div")
                        if(H5.length != 0){
                            $(".h5-ext-layer div").remove();
                            var control_btn_play = $(".control-left-grid .control-play-icon");
                            if (control_btn_play.attr("data-tip") === "播放") {
                                $(".h5player-dashboard").css("display", "block");
                                control_btn_play.click();
                                $(".h5player-dashboard").css("display", "none");
                            }
                        }
                        $(".information-tips").css("display", "none");
                    }, 500);
                }catch(e){}
                break;
            case 'tv.sohu.com':
                try{
                    setInterval(() => {
                        $(".x-video-adv").css("display", "none");
                        $(".x-player-mask").css("display", "none");
                        $("#player_vipTips").css("display", "none");
                    }, 500);
                }catch(e){}
                break
        }
    };
    movievipHelper.paramsSelectedInit=function(){
        var episodeList=[];
        var episodeObj = {
            "websiteTitle":"",
            "episodeList":episodeList,
            "originVideoUrl":""
        };
        GM_setValue("episodeObj",episodeObj);
        return episodeObj;
    };
    movievipHelper.getSelected=function(){
        if(window_host==="v.qq.com"){
            setInterval(function(){ //每100ms,检测一次集数的变化
                var episodeObj = movievipHelper.paramsSelectedInit();
                var episodeList = episodeObj.episodeList;
                var $mod_episode = $(".mod_episode");
                try{
                    if($mod_episode.attr("data-tpl")=="episode"){
                        $mod_episode.find(".item").each(function(){
                            var $a = $(this).find("a");
                            var href = $a.attr("href");
                            if(!!href){
                                href = "https://v.qq.com"+href;
                                var aText = $a.text();
                                aText = aText.replace(/\s/g,"");
                                episodeList.push({"aText":aText, "href":href, "description":""});
                            }
                        });
                    }
                }catch(e){}
                //加入油猴缓存
                episodeObj.websiteTitle="qq";
                episodeObj.originVideoUrl=window_url;
                if(episodeList.length!=0){
                    episodeObj.episodeList=episodeList;
                }
                GM_setValue("episodeObj",episodeObj);
            },100);
        };
        if(window_host==="www.iqiyi.com"){
            var episodeObj = movievipHelper.paramsSelectedInit();
            var episodeList = episodeObj.episodeList;
            var $i71playpagesdramalist = $("div[is='i71-play-ab']");
            if($i71playpagesdramalist.length!=0){
                var data =  $i71playpagesdramalist.attr(":page-info");
                if(!!data){
                    var dataJson = JSON.parse(data);
                    var barTotal = 1;
                    var albumId = dataJson.albumId;
                    console.log("albumId=",albumId);
                    try{
                        var $barlis = $(".qy-episode-tab").find(".bar-li");
                        barTotal = $barlis.length;
                        if(barTotal==0) barTotal=1;
                    }catch(e){}
                    //获取具体数据
                    for(var page=1; page<=barTotal;  page++){
                        try{
                            GM_xmlhttpRequest({
                                url: "https://pcw-api.iqiyi.com/albums/album/avlistinfo?aid="+albumId+"&page="+page+"&size=30",
                                method: "GET",
                                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                                onload: function(response) {
                                    var status = response.status;
                                    if(status==200||status=='200'){
                                        var serverResponseJson = JSON.parse(response.responseText);
                                        var code = serverResponseJson.code;
                                        if(code=="A00000"){
                                            var serverEpsodelist = serverResponseJson.data.epsodelist;
                                            //console.log(serverEpsodelist)
                                            for(var i=0; i<serverEpsodelist.length; i++){
                                                var aText = serverEpsodelist[i].order;
                                                var href = serverEpsodelist[i].playUrl;
                                                var description = serverEpsodelist[i].subtitle;
                                                episodeList.push({"aText":aText, "href":href, "description":description});
                                            }
                                            //加入油猴缓存
                                            if(episodeList.length!=0){
                                                episodeObj.episodeList=episodeList;
                                            }
                                            episodeObj.websiteTitle="iqiyi";
                                            episodeObj.originVideoUrl=window_url;
                                            GM_setValue("episodeObj",episodeObj);
                                        }
                                    }
                                }
                            });
                        }catch(err){}
                        setTimeout(function(){}, 500);
                    }
                    episodeObj.websiteTitle="iqiyi";
                    episodeObj.originVideoUrl=window_url;
                    GM_setValue("episodeObj",episodeObj);
                }
            }
        };
        if(window_host==="www.mgtv.com"){
            var episodeObj = movievipHelper.paramsSelectedInit();
            var episodeList = episodeObj.episodeList;
            setTimeout(function(){
                $("body").find(".aside-tabbox").each(function(){
                    $(this).find("li").each(function(){
                        var $a = $(this).find("a");
                        var href = $a.attr("href");
                        var aText = $(this).text();
                        if(!!href && aText.indexOf("预告")==-1){
                            href = "https://www.mgtv.com"+href;
                            aText = aText.replace("VIP","");
                            episodeList.push({"aText":aText, "href":href, "description":""});
                        }
                    });
                });
                //加入油猴缓存
                episodeObj.websiteTitle="mgtv";
                episodeObj.originVideoUrl=window_url;
                if(episodeList.length!=0){
                    episodeObj.episodeList=episodeList;
                }
                GM_setValue("episodeObj",episodeObj);
            },1000);
        };
        if(window_host==="v.youku.com"){
            function youku_select(){
                var episodeObj = movievipHelper.paramsSelectedInit();
                var episodeList = episodeObj.episodeList;
                $(".anthology-content-scroll").find(".anthology-content").find(".box-item").each(function(){
                    var title = $(this).attr("title");
                    var href = $(this).attr("href");

                    var $markText = $(this).find(".mark-text");
                    if($markText.length==0 || "预告".indexOf($markText.text)==-1){
                        if(!!href){
                            var aText = title;
                            var arr = aText.split(" ");
                            if(arr.length>=2) aText = arr[arr.length-1];
                            aText = aText.replace(/[^0-9]/ig,"");

                            if(!!aText){
                                episodeList.push({"aText":aText, "href":href, "description":title});
                                //console.log({"aText":aText, "href":href, "description":title})
                            }
                        }
                    }
                });
                //加入油猴缓存
                episodeObj.websiteTitle="youku";
                episodeObj.originVideoUrl=window_url;
                if(episodeList.length!=0){
                    episodeObj.episodeList=episodeList;
                }
                GM_setValue("episodeObj",episodeObj);
            }
            youku_select();
            setInterval(function(){
                youku_select();
            }, 600);
        };
        if(window_host==="tv.sohu.com"){
            var episodeObj = movievipHelper.paramsSelectedInit();
            var episodeList = episodeObj.episodeList;
            setTimeout(function(){
                var $jlistwrap = $(".j-list-wrap");
                if(!!$jlistwrap){
                    $jlistwrap.find("li").each(function(){
                        var $a = $(this).find("a");
                        if(!!$a){
                            var aText = $(this).attr("data-order");
                            var href = $a.attr("href");
                            var title = $a.attr("data-title");
                            if(!!aText && !!href){
                                href = "https"+href;
                                episodeList.push({"aText":aText, "href":href, "description":title});
                                //console.log({"aText":aText, "href":href, "description":title});
                            }
                        }
                    });
                }
                //加入油猴缓存
                episodeObj.websiteTitle="sohu";
                episodeObj.originVideoUrl=window_url;
                if(episodeList.length!=0){
                    episodeObj.episodeList=episodeList;
                }
                GM_setValue("episodeObj",episodeObj);
            },1000);
        };
    };
    movievipHelper.movieWebsitesPlayersSelected=function(){//支持电视剧选集
        if(window_url.indexOf("showxi.xyz")!=-1){
            var innerCss=
                `
				#plugin_congcongguoke_episode_box{overflow:auto;font-size:14px!important;text-align:left!important;}
				#plugin_congcongguoke_episode_box .tip{padding:5px;}
				#plugin_congcongguoke_episode_box .episode-items> a{display:inline-block;width:25px;height:25px;text-align:center;line-height:25px;border:1px dashed #000;color:#000;margin:5px;text-decoration:none;cursor:pointer;}
				#plugin_congcongguoke_episode_box .episode-items> a:hover{border:1px dashed #FF5302;color:#FF5302;}
				#plugin_congcongguoke_episode_box .episode-items> .active{border:1px dashed #FF5302;color:#FF5302;}
				`;
            $("body").prepend("<style>"+innerCss+"</style>");
            var episodeObj = GM_getValue("episodeObj");
            if(!!episodeObj){
                var episodeList = episodeObj.episodeList;
                if(!!episodeList && episodeList.length!=0){
                    episodeList.sort((d1, d2)=>{  //排序
                        var aText1 = d1.aText;
                        var aText2 = d2.aText;
                        var aText1Value = parseInt(aText1);
                        var aText2Value = parseInt(aText2);
                        if(isNaN(aText1Value) || isNaN(aText2Value)){
                            return 0;
                        }else{
                            return aText1Value-aText2Value;
                        }
                    });

                    var websiteTitle = episodeObj.websiteTitle;
                    var currentvideourl = GM_getValue("currentvideourl");
                    var originVideoUrl=episodeObj.originVideoUrl;
                    var waiturl="";
                    var aclass="";

                    var html = "<div id='plugin_congcongguoke_episode_box'>";
                    html += "<div class='tip'><b>电视剧点击集数，可自由选集，<a href='"+originVideoUrl+"'>点我返回原视频</a></b></div>";
                    html += "<div class='episode-items'>";
                    for(var i=0; i<episodeList.length; i++){
                        waiturl=episodeList[i].href;
                        aclass="plugin-episode";
                        if(window_url.indexOf(waiturl)!=-1 || (currentvideourl==waiturl && websiteTitle=="iqiyi")){
                            aclass = aclass +" "+"active";
                        }
                        html+= "<a class='"+aclass+"' data-href='"+waiturl+"' title='"+episodeList[i].description+"'>"+episodeList[i].aText+"</a>";
                    }
                    html += "</div>";
                    html += "</div>";

                    let insertHtmlInterval = setInterval(function(){
                        var $selectContainer = $("#palyer-iframe");
                        if($selectContainer.length!=0){
                            $selectContainer.after(html);
                            clearInterval(insertHtmlInterval)
                        }
                    }, 100);

                }
            }
            $("body").on("click", ".plugin-episode", function(){
                var href=$(this).data("href");
                if(!!href){
                    movievipHelper.comprehensiveAnalysis(href, false);
                }
            });
        }
    };
    movievipHelper.start=function(){
        $.domScanningElementj();
        if(movievipHelper.isRun() && window.top==window.self){
            movievipHelper.getServerSource();
            movievipHelper.adAccelerate();
            movievipHelper.getSelected();
        }
        movievipHelper.movieWebsitesPlayersSelected();
    };
    if(isOpenVideoVipModule){
        movievipHelper.start();
    }






})();





}
}
})();