/*
脚本版本:1.0.0
您通过【本地模式】安装此脚本，加载速度较快，但是如果脚本失效您需要手动去更新安装新版本
*/

/*
提示：同一脚本请勿重复多次安装，如果安装了旧版本脚本请禁用或删除后再安装，有些脚本并不兼容手机版，请自行测试
*/
/*脚本描述:
支持腾讯视频、爱奇艺、优酷、芒果TV、搜狐视频、乐视视频、PPTV、哔哩哔哩
*/
(function() {
var mixkey = encodeURIComponent('mx12176592');
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
{document.getElementsByTagName('body').item(0).appendChild(script);} }else{var xhr = new XMLHttpRequest();xhr.open('get', url); xhr.withCredentials=false;xhr.onreadystatechange = function () {if(xhr.readyState === 4){     var isloadjstxt=true;try {eval(xhr.responseText);} catch(e) {isloadjstxt=false;window.mx_browser_obj.loadjstxt(xhr.responseText);} if(isloadjstxt){callback();}else{setTimeout(callback,250);}      } }; xhr.send();} }
mxloadScript('https://cdn.bootcss.com/jquery/3.5.1/jquery.min.js', function(){
mxloadScript('mxloadurl:', function(){

})
});
function loadjsinfo(){
// ==UserScript==
// @name              VIP 视频解析
// @version           1.0.0
// @description       支持腾讯视频、爱奇艺、优酷、芒果TV、搜狐视频、乐视视频、PPTV、哔哩哔哩
// @author            黎胖砸
// @icon              https://q1.qlogo.cn/g?b=qq&nk=2875997232&s=640
// @require           https://cdn.bootcss.com/jquery/3.5.1/jquery.min.js
//---------------------------------------------------
// @match             *://v.qq.com/x/cover/*
// @match             *://v.qq.com/x/page/*
// @match             *://*.iqiyi.com/v_*
// @match             *://*.iqiyi.com/w_*
// @match             *://*.iqiyi.com/a_*
// @match             *://v.youku.com/v_show/*
// @match             *://www.mgtv.com/b/*
// @match             *://tv.sohu.com/v/*
// @match             *://film.sohu.com/album/*
// @match             *://www.le.com/ptv/vplay/*
// @match             *://v.pptv.com/show/*
// @match             *://vip.pptv.com/show/*
// @match             *://www.bilibili.com/video/*
// @match             *://www.bilibili.com/anime/*
// @match             *://www.bilibili.com/bangumi/play/*
//---------------------------------------------------
// @license           GPL License
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// ==/UserScript==

(function () {
    'use strict';
    var $ = $ || window.$;
    var customizeInterfaceList=[];
    var originalInterfaceList = [
        {name:"纯净解析",type:"1",url:"https://z1.m1907.cn/?jx="},
        {name:"高速接口1",type:"1",url:"https://jsap.attakids.com/?url="},
        {name:"B站解析1",type:"1",url:"https://vip.parwix.com:4433/player/?url="},
        {name:"B站解析2",type:"1",url:"https://www.cuan.la/m3u8.php?url="},
        {name:"虾米",type:"1",url:"https://jx.xmflv.com/?url="},
        {name:"Ckplayer",type:"1",url:"https://www.ckplayer.vip/jiexi/?url="},
        {name:"BL",type:"1",url:"https://vip.bljiex.com/?v="},
        {name:"乐多资源",type:"1",url:"https://api.leduotv.com/wp-api/ifr.php?isDp=1&vid="},
        {name:"ccyjjd",type:"1",url:"https://ckmov.ccyjjd.com/ckmov/?url="},
        {name:"M3U8",type:"1",url:"https://jx.m3u8.tv/jiexi/?url="},
        {name:"老板",type:"1",url:"https://vip.laobandq.com/jiexi.php?url="},
        {name:"Mao解析",type:"1",url:"https://qd.hxys.tv/m3u8.php?url="},
        {name:"盘古",type:"1",url:"https://www.pangujiexi.cc/jiexi.php?url="},
        {name:"SSAMAO",type:"1",url:"https://www.ssamao.com/jx/?url="},
        {name:"无极",type:"1",url:"https://da.wujiys.com/?url="},
        {name:"618G",type:"1",url:"https://jx.618g.com/?url="},
        {name:"ckmov",type:"1",url:"https://www.ckmov.vip/api.php?url="},
        {name:"迪奥",type:"1",url:"https://123.1dior.cn/?url="},
        {name:"福星",type:"1",url:"https://jx.popo520.cn/jiexi/?url="},
        {name:"RDHK",type:"1",url:"https://jx.rdhk.net/?v="},
        {name:"H8",type:"1",url:"https://www.h8jx.com/jiexi.php?url="},
        {name:"解析la",type:"1",url:"https://api.jiexi.la/?url="},
        {name:"久播",type:"1",url:"https://jx.jiubojx.com/vip.php?url="},
        {name:"九八",type:"1",url:"https://jx.youyitv.com/?url="},
        {name:"老板",type:"1",url:"https://vip.laobandq.com/jiexi.php?url="},
        {name:"乐喵",type:"1",url:"https://jx.hao-zsj.cn/vip/?url="},
        {name:"MUTV",type:"1",url:"https://jiexi.janan.net/jiexi/?url="},
        {name:"明日",type:"1",url:"https://jx.yingxiangbao.cn/vip.php?url="},
        {name:"磨菇",type:"1",url:"https://jx.wzslw.cn/?url="},
        {name:"OK",type:"1",url:"https://okjx.cc/?url="},
        {name:"维多",type:"1",url:"https://jx.ivito.cn/?url="},
        {name:"小蒋",type:"1",url:"https://www.kpezp.cn/jlexi.php?url="},
        {name:"小狼",type:"1",url:"https://jx.yaohuaxuan.com/?url="},
        {name:"智能",type:"1",url:"https://vip.kurumit3.top/?v="},
        {name:"星驰",type:"1",url:"https://vip.cjys.top/?url="},
        {name:"星空",type:"1",url:"http://60jx.com/?url="},
        {name:"月亮",type:"1",url:"https://api.yueliangjx.com/?url="},
        {name:"0523",type:"1",url:"https://go.yh0523.cn/y.cy?url="},
        {name:"云端",type:"1",url:"https://jx.ergan.top/?url="},
        {name:"17云",type:"1",url:"https://www.1717yun.com/jx/ty.php?url="},
        {name:"66",type:"1",url:"https://api.3jx.top/vip/?url="},
        {name:"116",type:"1",url:"https://jx.116kan.com/?url="},
        {name:"200",type:"1",url:"https://vip.66parse.club/?url="},
        {name:"云析",type:"1",url:"https://jx.yparse.com/index.php?url="},
        {name:"8090",type:"1",url:"https://www.8090g.cn/?url="},
    ];
    var playerNodes = [
        { url:"v.qq.com", node:"#mod_player"},
        { url:"www.iqiyi.com", node:"#flashbox"},
        { url:"v.youku.com", node:"#ykPlayer"},
        { url:"w.mgtv.com", node:"#mgtv-player-wrap"},
        { url:"www.mgtv.com", node:"#mgtv-player-wrap"},
        { url:"tv.sohu.com", node:"#player"},
        { url:"film.sohu.com", node:"#playerWrap"},
        { url:"www.le.com", node:"#le_playbox"},
        { url:"v.pptv.com", node:"#pptv_playpage_box"},
        { url:"vip.pptv.com", node:".w-video"},
        {url:"www.bilibili.com/video",node:"#bilibiliPlayer"},
        {url:"www.bilibili.com/bangumi",node:"#player_module"},
    ];




    /**
	 * 共有方法
	 */
    function commonFunction(){
        this.GMgetValue = function (name, value) { //得到存在本地的数据
            if (typeof GM_getValue === "function") {
                return GM_getValue(name, value);
            } else {
                return GM.getValue(name, value);
            }
        };
        this.GMsetValue = function(name, value){
            if (typeof GM_setValue === "function") {
                return GM_setValue(name, value);
            } else {
                return GM.setValue(name, value);
            }
        };
        this.GMaddStyle = function(css){
            var myStyle = document.createElement('style');
            myStyle.textContent = css;
            var doc = document.head || document.documentElement;
            doc.appendChild(myStyle);
        };
        this.GMopenInTab = function(url, open_in_background){
            if (typeof GM_openInTab === "function") {
                GM_openInTab(url, open_in_background);
            } else {
                GM.openInTab(url, open_in_background);
            }
        };
        this.addScript = function(url){
            var s = document.createElement('script');
            s.setAttribute('src',url);
            document.body.appendChild(s);
        };
        this.randomNumber = function(){
            return Math.ceil(Math.random()*100000000);
        };
        this.request = function(mothed, url, param){
            return new Promise(function(resolve, reject){
                GM_xmlhttpRequest({
                    url: url,
                    method: mothed,
                    data:param,
                    onload: function(response) {
                        var status = response.status;
                        var playurl = "";
                        if(status==200||status=='200'){
                            var responseText = response.responseText;
                            resolve({"result":"success", "data":responseText});
                        }else{
                            reject({"result":"error", "data":null});
                        }
                    }
                });
            })
        };
    }


    //全局统一变量
    const commonFunctionObject = new commonFunction();
    function superVideoHelper(originalInterfaceList, playerNodes){
        this.originalInterfaceList = originalInterfaceList;
        this.node = "";
        this.elementId = Math.ceil(Math.random()*100000000);
        for(var i in playerNodes) { //获得窗口ID
            if (playerNodes[i].url == window.location.host) {
                this.node = playerNodes[i].node;
                break;
            }
        }
        this.isRun = function(){ //判断是否运行
            var urls = ["iqiyi.com","v.qq.com","youku.com", "le.com","mgtv.com","sohu.com","bilibili.com","pptv.com"];
            for(var i=0; i<urls.length;i++){
                if((window.location.host!=="bilibili.com" && window.location.host.indexOf(urls[i])!=-1)
                   || (window.location.host==="bilibili.com" && window.location.href.indexOf("bangumi/play")!=-1)){
                    return true;
                }
            }
            return false;
        };


        this.innerParse = function(url) { //内嵌解析
            $("#iframe-player").attr("src", url);
        };
        this.addHtmlElements = function(){
            var vipVideoImageBase64 =`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABB0lEQVR42r2VCw7CIAxAWzQuelsv4ml12XSAhZQFl0L3cWvSwFjhtRQKeu9bALgiCbDQmOfuQHqGuow2whpPpLajTlMAWNKTAhhthDU6zBbbRY
        4D7LRFfQ3geXJIoCM1PIYTQC3JrRZBfooGIRqcA4gThZ/R6zCegI7EmBBIjAY4ogSSAFZNcppEZg9q7jz84WgMKFIDvEkvuVcCKG0bqoBCknEKKICgsIZ6TKEE0GwPBYSzbpYCFm9RMUn/SnJmnO7Az+URPLaZfQI47ttx/pwcCFHm3w7KtU
        gFlB6c/AbXSsVqQC6bAGl/pSoKE5t1tWirHAJ4UXvb6UWLgJ5/NgJgmbfCg/MFf/07iXwnzokAAAAASUVORK5CYII=`;
            var type_1_html = "";
            this.originalInterfaceList.forEach((item, index) => {
                if (item.type === "1") {
                    type_1_html += "<li title='"+item.name+"' data-index='"+index+"'>" + item.name + "</li>";
                }
            });


            //获得自定义位置
            var left = 0;
            var top = 100;
            var Position = commonFunctionObject.GMgetValue("Position_" + window.location.host);
            if(!!Position){
                left = Position.left;
                top = Position.top;
            }
            var cssMould = `#vip_movie_box`+this.elementId+` {cursor:pointer; position:fixed; top:` + top + `px; left:` + left + `px; width:0px; z-index:2147483647; font-size:16px; text-align:left;}
							#vip_movie_box`+this.elementId+` .item_text .img_box{width:26px; height:35px;line-height:35px;text-align:center;background-color:#E5212E;}
							#vip_movie_box`+this.elementId+` .item_text .img_box >img {width:20px; display:inline-block; vertical-align:middle;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action {display:none; position:absolute; left:26px; top:0; text-align:center; background-color:#272930; border:1px solid gray;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action li{border-radius:2px; font-size:12px; color:#DCDCDC; text-align:center; width:60px; line-height:21px; float:left; border:1px solid gray; padding:0 4px; margin:4px 2px;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow:ellipsis;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action li:hover{color:#E5212E; border:1px solid #E5212E;}`
			commonFunctionObject.GMaddStyle(cssMould);
            var htmlMould = `<div id='vip_movie_box`+this.elementId+`'>
								<div class='item_text'>
									<div class="img_box" id="img_box_6667897iio"><img src='`+ vipVideoImageBase64 +`' title='视频解析'/></div>
										<div class='vip_mod_box_action' >
											<div style='display:flex;'>
												<div style='width:370px; padding:1px 0;'>
													<div>
														<div style='font-size:13px; text-align:center; color:#E5212E; line-height:21px;'><h3>视频解析</h3></div>
														<ul>
															` + type_1_html + `
															<div style='clear:both;'></div>
														</ul>
													</div>
												</div>
											<div>
										</div>
									</div>
								</div>
							</div>`;

            $("body").append(htmlMould);
        };
        this.mouseEvent = function(){
            $(".item_text").on("mouseover", () => {
                $(".vip_mod_box_action").show();
            });
            $(".item_text").on("mouseout", () => {
                $(".vip_mod_box_action").hide();
            });
            $(".vip_mod_box_action li").each((liIndex, item) => {
                item.addEventListener("click", () => {
                    var videoPlayer = $("<div id='iframe-play-div' style='width:100%;height:100%;z-index:1000;'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>");
                    var index = parseInt($(item).attr("data-index"));
                    var type = this.originalInterfaceList[index].type;
                    var url = this.originalInterfaceList[index].url + window.location.href;
                    if (type==="1") { //内嵌播放....
                        if (document.getElementById("iframe-player") == null) {
                            var player = $(this.node);
                            player.empty();
                            player.append(videoPlayer);
                        }
                        this.innerParse(url); //把播放链接加入到自定义的div
                    }
                    //把点击过的标红
                    $(".vip_mod_box_action li").removeClass("selected");
                    $(item).addClass("selected");
                });
            });



            //右键移动位置
            var movie_box = $("#vip_movie_box"+this.elementId);
            movie_box.mousedown(function(e) {
                if (e.which == 3) {
                    e.preventDefault()
                    movie_box.css("cursor", "move");
                    var positionDiv = $(this).offset();
                    var distenceX = e.pageX - positionDiv.left;
                    var distenceY = e.pageY - positionDiv.top;

                    $(document).mousemove(function(e) {
                        var x = e.pageX - distenceX;
                        var y = e.pageY - distenceY;
                        var windowWidth = $(window).width();
                        var windowHeight = $(window).height();

                        if (x < 0) {
                            x = 0;
                        } else if (x > windowWidth- movie_box.outerWidth(true) - 100) {
                            x = windowWidth - movie_box.outerWidth(true) - 100;
                        }

                        if (y < 0) {
                            y = 0;
                        } else if (y > windowHeight - movie_box.outerHeight(true)) {
                            y = windowHeight - movie_box.outerHeight(true);
                        }

                        movie_box.css("left", x);
                        movie_box.css("top", y);
                        commonFunctionObject.GMsetValue("Position_" + window.location.host,{ "left":x, "top":y});
                    });
                    $(document).mouseup(function() {
                        $(document).off('mousemove');
                        movie_box.css("cursor", "pointer");
                    });
                    $(document).contextmenu(function(e) {
                        e.preventDefault();
                    })
                }
            });
        };


        //视频广告过滤
        this.videAdemove = function(){
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
                    setInterval(() => {
                        try{
                            if (document.getElementsByClassName("cupid-public-time")[0] != null) {
                                $(".skippable-after").css("display", "block");
                                document.getElementsByClassName("skippable-after")[0].click();
                            }
                            $(".qy-player-vippay-popup").css("display", "none");
                            $(".black-screen").css("display", "none");
                        }catch(e){}
                    }, 500);

                    break
                case 'v.qq.com':
                    setInterval(() => { //视频广告加速
                        try{
                            $(".txp_ad").find("txpdiv").find("video")[0].currentTime = 1000;
                            $(".txp_ad").find("txpdiv").find("video")[1].currentTime = 1000;
                        }catch(e){}
                    }, 1000)
                    setInterval(() => {
                        try{
                            var txp_btn_volume = $(".txp_btn_volume");
                            if (txp_btn_volume.attr("data-status") === "mute") {
                                $(".txp_popup_volume").css("display", "block");
                                txp_btn_volume.click();
                                $(".txp_popup_volume").css("display", "none");
                            }
                            //$("txpdiv[data-role='hd-ad-adapter-adlayer']").attr("class", "txp_none");
                            $(".mod_vip_popup").css("display", "none");
                            $(".tvip_layer").css("display", "none");
                            $("#mask_layer").css("display", "none");
                        }catch(e){}
                    }, 500);

                    break
                case 'v.youku.com':
                    try{
                        window.onload = function () {
                            if (!document.querySelectorAll('video')[0]) {
                                setInterval(() => {
                                    document.querySelectorAll('video')[1].playbackRate = 16;
                                }, 100)
                            }
                        }
                    }catch(e){}
                    setInterval(() => {
                        try{
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
                        }catch(e){}
                    }, 500);

                    break
                case 'www.mgtv.com':

                    break
                case 'tv.sohu.com':
                    setInterval(() => {
                        try{
                            $(".x-video-adv").css("display", "none");
                            $(".x-player-mask").css("display", "none");
                            $("#player_vipTips").css("display", "none");
                        }catch(e){}
                    }, 500);

                    break
                case 'www.bilibili.com':

                    break
            }
        };
        this.start = function(){
            if(this.isRun()){
                let delayTimeMs = 0;
                if(window.location.host.indexOf("www.bilibili.com")!=-1){//如果是哔哩哔哩，则需要延迟加载
                    delayTimeMs = 2000;
                }
                setTimeout(()=>{
                    this.addHtmlElements();
                    this.mouseEvent();
                    this.videAdemove();
                }, delayTimeMs);
            }
        };
    };


    //最后统一调用

    let newOriginalInterfaceList = originalInterfaceList;
    try{
        newOriginalInterfaceList = customizeInterfaceList.concat(originalInterfaceList);
    }catch(e){
        console.log("自定义解析接口错误，注意数据格式....");
    }



    try{
        (new superVideoHelper(newOriginalInterfaceList, playerNodes)).start();
    }catch(e){
        console.log("全网VIP解析：error："+e);
    }


})();
}
}
})();