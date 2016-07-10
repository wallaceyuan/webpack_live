<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" href="http://skin.kankanews.com/kankancms/images/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="http://skin.kankanews.com/kankancms/images/favicon.ico" type="image/x-icon" />
    <meta name="Keywords" content="直播回看,视频直播, 新闻直播, 新闻直播间, 搞笑视频, 明星访谈直播, 电影直播, 电视剧直播, 天气预报" />
    <meta name="Description" content="直播回看,看看新闻网24小时直播流。视频直播重大事件、直播突发新闻、直播权威发布、直播电影电视剧发布并精选每日国际与国内视频新闻、社会新闻、体育新闻、娱乐 新闻、财经新闻。每天不同时段播出视频资讯、新闻评论节目，搜集论坛热点、汇聚搞笑视频，发布天气预报并可通过视频参与直播。" />
    <title><?php echo $navinfor[title]?>_看看新闻网</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <script type="text/javascript">
        var now = 'nows';var hkId = '<?php echo $navinfor[id]?>';var mid = '';
        if(/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|android|iPod/i.test(navigator.userAgent.toLowerCase())){
            document.location.href = 'http://m.kankanews.com/huikan/'+hkId+'.html';
        }
        hkId = (hkId < 100 ? '0'+(hkId) : hkId)
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
            title:"回看",
            titlepic:"http://static.statickksmg.com/image/2015/03/30/08c0539ccf920c4473329195622ee4f7.jpg",
            url:document.URL,
            intro:"看看回看"
        };
    </script>
</head>
<body class="game-page loaded">
<img src="http://skin.kankanews.com/v6/2016live/pc/app/images/live-index.jpg" class="page-bg">

<!-- nav start-->
[!--temp.LiveBarV1--]
<div class="place38"></div>

<div class="non-live-box hidden clearfix">
    <div class="section">
        <div class="tv-head">
            <div class="live-head-container">
                <div class="game-head">
                    <div class="thumb-container">

                    </div>
                    <div class="left badge pull-left">
                        <p class="head"><span class='title'></span></p>
                        <p class="time">
                            <i></i>
                            <span></span>
                        </p>
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
            <h3 class="boss live-tabs-width2 live-tabs-current" data-target="live-program" data-action="电视回看">电视回看</h3>
            <h3 class="boss live-tabs-width2" data-target="live-comment" data-action="弹幕集锦"></h3>
        </div>
        <div class="title"></div>
        <div class="live-tab-content">
            <div class="tabcon" id="content-1">
                <div class="clearfix bottom1"></div>
            </div>
            <div class="tabcon" id="content-2"></div>
            <div class="boxW">
                <div class="date-box clearfix"></div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="http://skin.kankanews.com/v6/js/libs/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src='http://skin.kankanews.com/v6/js/libs/jquery.mCustomScrollbar.concat.min.js'></script>
<script type="text/javascript" src="http://skin.kankanews.com/v6/2016live/pc/bulid/bundle.js"></script>
<script type="text/javascript">
    playerEvent('init');
    function playerEvent(info) {
        //console.log('playEvent:', info.type);
        if(info.type == 'play_complete'){
            var dom = $('.hk.on').next('.hk');
            dom.trigger('click');
        }
    }
</script>

[!--temp.bottomGa--]

</body>
</html>