<?php
    echo $navinfor[title];
    echo $navinfor[newstime];
    echo 'time'.time();
    echo 'type'.$navinfor[type];

?>
<script type="text/javascript">
    var timeFlag = '直播';var status = 0;//正常
    var mid = 144;
</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" href="http://skin.kankanews.com/kankancms/images/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="http://skin.kankanews.com/kankancms/images/favicon.ico" type="image/x-icon" />
    <meta name="Keywords" content="视频直播, 新闻直播, 新闻直播间, 搞笑视频, 明星访谈直播, 电影直播, 电视剧直播, 天气预报" />
    <meta name="Description" content="看看新闻网24小时直播流。视频直播重大事件、直播突发新闻、直播权威发布、直播电影电视剧发布并精选每日国际与国内视频新闻、社会新闻、体育新闻、娱乐 新闻、财经新闻。每天不同时段播出视频资讯、新闻评论节目，搜集论坛热点、汇聚搞笑视频，发布天气预报并可通过视频参与直播。" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo $navinfor[title]?>_看看新闻网</title>
    <script type="text/javascript">
        var now = 'now';var hkId = '';var mid = '<?php echo $navinfor[id]?>';
        if(/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|android|iPod/i.test(navigator.userAgent.toLowerCase())){
            document.location.href = 'http://m.kankanews.com/zhibo/'+mid+'.html';
        }
    </script>
    <script type="text/javascript" src="http://skin.kankanews.com/v6/js/device.js"></script>
    <link href="http://skin.kankanews.com/v6/css/base.css" type="text/css" rel="stylesheet">
    <script type="text/javascript">
        var $winW = screen.width;
    </script>
    <script type="text/javascript">
        document.write('<link href="http://skin.kankanews.com/v6/2016live/pc/app/css/index.css" type="text/css" rel="stylesheet"/>');
        if(device.type === "pad") {
            document.write('<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>');
            document.write('<link rel="stylesheet" href="http://skin.kankanews.com/v6/2016live/pc/app/css/liveP.css" type="text/css" />');
        }else{
            if($winW>1024){
                document.write('<link rel="stylesheet" href="http://skin.kankanews.com/v6/2016live/pc/app/css/liveK.css" type="text/css" />');
            }else{
                document.write('<link rel="stylesheet" href="http://skin.kankanews.com/v6/2016live/pc/app/css/liveZ.css" type="text/css" />');
            }
        }
    </script>
    <script type="text/javascript">
        var info={
            title:"直播",
            titlepic:"http://static.statickksmg.com/image/2015/03/30/08c0539ccf920c4473329195622ee4f7.jpg",
            url:document.URL,
            intro:"看看直播"
        };
    </script>
        <!--# include virtual="http://m.kankanews.com/web/fakeESI?module=liveJson&awasas" -->
    <script type="text/javascript">    var streams = [{"id":"939","title":"\u5341\u4e8c\u5c4a\u5168\u56fd\u4eba\u5927\u56db\u6b21\u4f1a\u8bae\u7b2c\u4e8c\u6b21\u5168\u4f53\u4f1a\u8bae","subtitle":"","titlepic":"http:\/\/static.statickksmg.com\/image\/2016\/03\/03\/8461f2242a010e3f1778eeaeaa3782aa.jpg","appstream":"http:\/\/hls.live.kksmg.com\/live\/mp4:Stream_1\/playlist.m3u8","pcstream":"rtmp:\/\/live.kksmg.com:80\/live\/mp4:Stream_1","stime":"03-09 15:00","etime":"03-09 18:00","intro":"\u5341\u4e8c\u5c4a\u5168\u56fd\u4eba\u5927\u56db\u6b21\u4f1a\u8bae\u7b2c\u4e8c\u6b21\u5168\u4f53\u4f1a\u8bae\u5c06\u4e8e3\u67089\u65e5\u4e0b\u5348\u53ec\u5f00\uff0c\u5f20\u5fb7\u6c5f\u505a\u5168\u56fd\u4eba\u5927\u5e38\u59d4\u4f1a\u5de5\u4f5c\u62a5\u544a\uff0c\u674e\u5efa\u56fd\u505a\u6148\u5584\u6cd5\u8349\u6848\u8bf4\u660e\u3002","isgood":"6","status":"trailer","timestamp":1457506800,"keyboard":[]},{"id":"936","title":"\u4eba\u5de5\u667a\u80fdPK\u4eba\u7c7b\uff1a\u8c37\u6b4cAlphaGo\u4e0e\u674e\u4e16\u77f3\u4e94\u756a\u68cb\uff08\u7b2c\u4e00\u573a\uff09","subtitle":"","titlepic":"http:\/\/static.statickksmg.com\/image\/2016\/03\/07\/dca44f53fd2fdf8223fa6a9be5728bfc.jpg","appstream":"http:\/\/bililive.kksmg.com\/hls\/kkdj\/playlist.m3u8","pcstream":"rtmp:\/\/bililive.kksmg.com\/hls\/kkdj","stime":"03-09 12:01","etime":"03-09 14:00","intro":"3\u67089\u65e5\u81f33\u670815\u65e5\uff0c\u8c37\u6b4cAlphaGo\u5c06\u5728\u97e9\u56fd\u9996\u5c14\u4e0e\u674e\u4e16\u77f3\u8fdb\u884c 5 \u573a\u6311\u6218\u8d5b\u3002\u83b7\u80dc\u8005\u5c06\u5f97\u5230\u4e00\u767e\u4e07\u7f8e\u5143\u5956\u91d1\u3002\u5982\u679cAlphaGo\u83b7\u80dc\uff0c\u5956\u91d1\u5c06\u6350\u8d60\u7ed9\u8054\u5408\u56fd\u513f\u7ae5\u57fa\u91d1\u4f1a\uff08UNICEF\uff09\uff0cSTEM\u6559\u80b2\uff0c\u4ee5\u53ca\u56f4\u68cb\u6148\u5584\u673a\u6784\uff08Go Charity\uff09\u3002\u6bd4\u8d5b\u5c06\u4e8e\u5317\u4eac\u65f6\u95f4\u4e2d\u534812\u70b9\u5728\u9996\u5c14\u56db\u5b63\u9152\u5e97\u4e3e\u884c\u3002","isgood":"5","status":"live","timestamp":1457496060,"keyboard":[]},{"id":"144","title":"\u4e0a\u6d77\u8fd9\u4e00\u523b\uff1a\u5916\u6ee9\u5b9e\u51b5","subtitle":"","titlepic":"http:\/\/static.statickksmg.com\/image\/2016\/02\/04\/1fc543f7fce8d0690cf49f1bab484308.jpg","appstream":"http:\/\/bililive.kksmg.com\/hls\/sdi10\/playlist.m3u8","pcstream":"rtmp:\/\/bililive.kksmg.com\/hls\/sdi10","stime":"02-24 08:52","etime":"02-28 07:42","intro":"\u5bf9\uff0c\u8fd9\u91cc\u5c31\u662f\u4e0a\u6d77\u3002\u9ec4\u6d66\u6c5f\uff0c\u4e1c\u65b9\u660e\u73e0\uff0c\u9646\u5bb6\u5634\uff0c\u5916\u6ee9\uff0c\u5c3d\u6536\u773c\u5e95\u3002\u4e07\u4e00\u4f60\u770b\u5230\u7684\u4e0d\u662f\u8fd9\u4e9b\u666f\u8272\uff0c\u4e5f\u4e0d\u8981\u62c5\u5fc3\uff0c\u53ea\u662f\u5c0f\u7f16\u6ca1\u6765\u5f97\u53ca\u8c03\u800c\u5df2\u3002\u65e0\u8bba\u5982\u4f55\uff0c\u4f60\u770b\u5230\u7684\u5c31\u662f\u73b0\u5728\u7684\u4e0a\u6d77\u3002","isgood":"2","status":"live","timestamp":1456275148,"keyboard":[{"text":"\u5168\u7403\u773c","color":"#0091ea"}]},{"id":"138","title":"\u4e1c\u65b9110","subtitle":"","titlepic":"http:\/\/static.statickksmg.com\/image\/2016\/02\/04\/4414c2d2de6aad943747f9a787ed8a7b.jpg","appstream":"http:\/\/hls.live.kksmg.com\/live\/smgnews\/playlist.m3u8","pcstream":"rtmp:\/\/live.kksmg.com\/live\/smgnews","stime":"03-09 19:13","etime":"03-09 19:45","intro":"\u300a\u4e1c\u65b9110\u300b\u662f\u4e0a\u6d77\u5730\u533a\u6700\u5177\u6709\u7279\u8272\u7684\u516c\u5b89\u4e13\u9898\u8282\u76ee\u4e4b\u4e00\uff0c\u7740\u529b\u62a5\u9053\u91cd\u5927\u5211\u4e8b\u6848\u4ef6\u548c\u5176\u4ed6\u5178\u578b\u6848\u4ef6\uff0c\u53cd\u6620\u8b66\u65b9\u6253\u51fb\u72af\u7f6a\u7684\u884c\u52a8\uff0c\u5ba3\u4f20\u548c\u666e\u53ca\u6cd5\u5f8b\u77e5\u8bc6\u3002\u6539\u53d8\u4ee5\u5f80\u4ee5\u5355\u7eaf\u62a5\u9053\u6848\u4ef6\u4e3a\u4e3b\u7684\u6a21\u5f0f\uff0c\u63a8\u51fa\u4ee5\u7a81\u51fa\u65b0\u95fb\u6027\u3001\u8bb0\u5b9e\u6027\u548c\u6743\u5a01\u6027\u4e3a\u70b9\u7684\u65b0\u95fb\u6742\u5fd7\u6027\u677f\u5757\uff0c\u4ece\u800c\u8fbe\u5230\u589e\u5f3a\u73b0\u573a\u611f\uff0c\u6ce8\u91cd\u53cd\u6620\u5e02\u6c11\u9700\u6c42\u7684\u76ee\u7684\u3002","isgood":"0","status":"trailer","timestamp":1457521980,"keyboard":[]},{"id":"422","title":"\u76f4\u901a990","subtitle":"","titlepic":"http:\/\/static.statickksmg.com\/image\/2016\/02\/04\/e06368ab0c6d5a748be2c07523c96589.jpg","appstream":"http:\/\/hls.live.kksmg.com\/live\/mp4:Stream_1\/playlist.m3u8","pcstream":"rtmp:\/\/live.kksmg.com:80\/live\/mp4:Stream_1","stime":"03-10 09:05","etime":"03-10 09:58","intro":"\u7231\u4e0a\u6d77\uff0c\u4e0d\u7231\u4f24\u5bb3\uff1b\u662f\u5fae\u64ad\uff0c\u4e0d\u662f\u5fae\u535a\uff1b\u6211\u60f3\u8ba9\u4f60\u5f53\u8bf4\u5ba2\u3002 \u7231\u5927\u58f0\u5ba3\u544a\uff0c\u4e0d\u7231\u81ea\u8a00\u81ea\u8bed\uff1b \u662f\u57ce\u5e02\u793e\u4ea4\uff0c\u4e0d\u662f\u4e92\u8bc9\u8877\u80a0 \u6211\u662f\u5e7f\u64ad\uff0c\u6211\u662f\u76f4\u901a990\u3002","isgood":"0","status":"trailer","timestamp":1457571954,"keyboard":[]},{"id":"947","title":"\u8457\u540d\u6b4c\u5531\u5bb6\u5468\u5c0f\u71d5\u5148\u751f\u544a\u522b\u4eea\u5f0f","subtitle":"","titlepic":"http:\/\/static.statickksmg.com\/image\/2016\/03\/07\/87c086bdb795c15e30af108288e41fcd.jpg","appstream":"http:\/\/bililive.kksmg.com\/hls\/4g\/playlist.m3u8","pcstream":"rtmp:\/\/bililive.kksmg.com\/hls\/4g","stime":"03-10 10:30","etime":"03-10 12:30","intro":"3\u67084\u65e50\u70b932\u5206\uff0c\u8457\u540d\u6b4c\u5531\u5bb6\u5468\u5c0f\u71d5\u56e0\u75c5\u53bb\u4e16\uff0c\u4eab\u5e7499\u5c81\u3002\u5468\u5c0f\u71d5\u662f\u4e2d\u56fd\u7f8e\u58f0\u58f0\u4e50\u6559\u80b2\u5927\u5e08\uff0c\u5148\u540e\u8363\u83b7\u4e86\u4e2d\u56fd\u97f3\u4e50\u827a\u672f\u6700\u9ad8\u8363\u8a89\u5956\u201c\u91d1\u949f\u5956\u201d\uff0c\u6cd5\u56fd\u653f\u5e9c\u6388\u4e88\u7684\u201c\u6cd5\u56fd\u56fd\u5bb6\u519b\u5b98\u52cb\u7ae0\u201d\u7b49\u3002\u4f5c\u54c1\u6709\u300a\u957f\u57ce\u8c23\u300b\u3001\u300a\u6700\u540e\u7684\u80dc\u5229\u662f\u6211\u4eec\u7684\u300b\u3001\u300a\u868c\u58f3\u300b\u30023\u670810\u65e5\u4e3e\u884c\u5468\u5c0f\u71d5\u8001\u5e08\u9057\u4f53\u544a\u522b\u4eea\u5f0f\u3002","isgood":"0","status":"trailer","timestamp":1457577000,"keyboard":[]},{"id":"421","title":"\u5e02\u6c11\u4e0e\u793e\u4f1a","subtitle":"","titlepic":"http:\/\/static.statickksmg.com\/image\/2016\/02\/04\/511ce0ab117001a0ec67a24a5f36c868.jpg","appstream":"http:\/\/hls.live.kksmg.com\/live\/mp4:Stream_1\/playlist.m3u8","pcstream":"rtmp:\/\/live.kksmg.com:80\/live\/mp4:Stream_1","stime":"03-10 12:02","etime":"03-10 12:56","intro":"\u300a\u5e02\u6c11\u4e0e\u793e\u4f1a\u300b\u4e8e1992\u5e7410\u670826\u65e5\u5f00\u64ad\uff0c\u662f990\u65b0\u95fb\u5e7f\u64ad\u4e00\u6863\u65b0\u95fb\u7c7b\u76f4\u64ad\u8c08\u8bdd\u8282\u76ee\uff0c\u4e5f\u662f\u4e0a\u6d77\u5e7f\u64ad\u53f2\u4e0a\u7b2c\u4e00\u4e2a\u6709\u542c\u4f17\u53c2\u4e0e\u7684\u5e7f\u64ad\u65b0\u95fb\u8c08\u8bdd\u7c7b\u76f4\u64ad\u8282\u76ee\u3002\u8282\u76ee\u6bcf\u5929\u9080\u8bf7\u5609\u5bbe\u548c\u542c\u4f17\u5c31\u4e00\u4e2a\u65b0\u8fd1\u53d1\u751f\u7684\u65b0\u95fb\u4e8b\u4ef6\u6216\u516c\u5171\u653f\u7b56\u901a\u8fc7\u7535\u8bdd\u548c\u624b\u673a\u77ed\u4fe1\u5c55\u5f00\u8ba8\u8bba\uff0c\u5185\u5bb9\u6d89\u53ca\u793e\u4f1a\u516c\u5171\u4e8b\u52a1\u7684\u65b9\u65b9\u9762\u9762\u3002","isgood":"0","status":"trailer","timestamp":1457582556,"keyboard":[]},{"id":"930","title":"\u7535\u89c6\u5267\u300a\u6211\u548c\u5979\u7684\u4f20\u5947\u60c5\u4ec7\u300b\u53d1\u5e03\u4f1a","subtitle":"","titlepic":"http:\/\/static.statickksmg.com\/image\/2016\/03\/02\/1309406ba30254a7ae9d3e57dd3830f2.jpg","appstream":"http:\/\/bililive.kksmg.com\/hls\/4g\/playlist.m3u8","pcstream":"rtmp:\/\/bililive.kksmg.com\/hls\/4g","stime":"03-11 13:00","etime":"03-11 14:00","intro":"3\u670811\u65e5\uff0c\u7535\u89c6\u5267\u300a\u6211\u548c\u5979\u7684\u4f20\u5947\u60c5\u4ec7\u300b\u53d1\u5e03\u4f1a\u5728\u4e0a\u6d77\u4e3e\u884c\uff0c\u8be5\u5267\u7531\u9676\u79cb\u666e\u6267\u5bfc\uff0c\u674e\u5065\u3001\u989c\u4e39\u6668\u3001\u53f2\u5149\u8f89\u7b49\u4e3b\u6f14\uff0c\u4ee5\u6c11\u56fd\u5e74\u95f4\u7684\u4e71\u4e16\u9752\u5c9b\u4e3a\u80cc\u666f\uff0c\u8bb2\u8ff0\u4e86\u4e00\u6bb5\u8361\u6c14\u56de\u80a0\u7684\u76f8\u7231\u76f8\u6740\u7684\u4f20\u5947\u6545\u4e8b\u3002\u5c4a\u65f6\uff0c\u4e3b\u6f14\u674e\u5065\u3001\u989c\u4e39\u6668\u5c06\u51fa\u5e2d\u3002","isgood":"0","status":"trailer","timestamp":1457672400,"keyboard":[]}];</script>

</head>
<body class="game-page loaded">
<img src="http://skin.kankanews.com/v6/2016live/pc/app/images/live-index.jpg" class="page-bg">

<!-- nav start-->
[!--temp.LiveBarV1--]
<div class="place38"></div>
<div class="live-box hidden clearfix">
    <div class="section">
        <div class="tv-head">
            <div class="live-head-container">
                <div class="game-head">
                    <div class="thumb-container"></div>
                    <div class="left badge pull-left">
                        <p class="head"><span class='title'><?php echo $navinfor[title]?></span></p>
                        <p class="time"><i></i><span></span></p>
                    </div>
                    <div class="liveShare clearfix"></div>
                </div>
            </div>
        </div>
        <div class="living-area" id="livingArea">
            <div class="sectionBox">
                <div class="screen livediv"></div>
                <div class="screen" id="ipod_player" style="display:none;">
                    <video controls="" poster=""><source src="http://hls.kksmg.com/iphone/downloads/ch1/index.m3u8" type="video/mp4" id="ipodurl"></video>
                </div>
            </div>
        </div>
    </div>
    <div class="aside live-Interaction">
        <div class="live-tabs clearfix">
            <h3 class="boss live-tabs-width2 live-tabs-current" data-target="live-program" data-action="直播列表">直播列表</h3>
            <h3 class="boss live-tabs-width2" data-target="live-comment" data-action="弹幕集锦"></h3>
        </div>
        <div class="live-tab-content">
            <div class="tabcon" id="content-1">
                <div class="clearfix bottom1" id="jmyg">
                    <div class="program-title inner">
                        <h3 class="zbIcon">正在直播</h3>
                    </div>
                    <div id="zbLiu"></div>
                    <div class="program-title inner">
                        <h3 class="ygIcon">直播预告</h3>
                    </div>
                    <div id="ygLiu"></div>
                </div>
            </div>
            <div class="tabcon" id="content-2"></div>
        </div>
    </div>
</div>


<script type="text/javascript" src="http://skin.kankanews.com/v6/js/libs/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src='http://skin.kankanews.com/v6/js/libs/jquery.mCustomScrollbar.concat.min.js'></script>
<script type="text/javascript" src="http://skin.kankanews.com/v6/2016live/pc/bulid/timeCountDown.js"></script>
<script type="text/javascript" src="http://skin.kankanews.com/v6/2016live/pc/bulid/zfc.js"></script>
<script type="text/javascript" src="http://skin.kankanews.com/v6/2016live/pc/bulid/init.js"></script>
<script>
    var sharebtn = a.share(info);
    a.weiXin();a.bar();a.weather();
    var d = navigator.userAgent.indexOf("MSIE 8") > -1 || navigator.userAgent.indexOf("MSIE 7") > -1;
    if(d){
        $(".header .header-content ").css({
            "margin-right":'10px'
        })
    }

    $(".liveShare").append(a.wb,a.qq,a.wx);
    if(now =='now'){
        a.zbInit();b.liveInit();
        $(".live-box #content-1").mCustomScrollbar({
            callbacks:{
                onInit: function(){
                    var ConHeight = $('.live-box #content-1').height();
                    var hkHeight = $('.wrapper.now').position().top;
                    var oHeight = $('#mCSB_1').height()/2;
                    if(hkHeight>ConHeight/2){
                        setTimeout(function(){
                            $('.live-box #content-1').mCustomScrollbar("scrollTo",hkHeight-oHeight);
                        },1000);
                    }
                }
            }
        });
        $(window).resize(function() {
            b.zbLiveWidth();
        });
    }else{
        b.hkInit();b.hkTime();
        $(".non-live-box #content-1").mCustomScrollbar({
            callbacks:{
                onInit: function(){

                }
            }
        });

        $(window).resize(function() {
            videoInt.hkLiveWidth();
        });
    }

</script>
</body>
</html>