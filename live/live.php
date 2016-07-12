<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" href="http://skin.kankanews.com/kankancms/images/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="http://skin.kankanews.com/kankancms/images/favicon.ico" type="image/x-icon" />
    <meta name="Keywords" content="视频直播, 新闻直播, 新闻直播间, 搞笑视频, 明星访谈直播, 电影直播, 电视剧直播, 天气预报" />
    <meta name="Description" content="看看新闻网24小时直播流。视频直播重大事件、直播突发新闻、直播权威发布、直播电影电视剧发布并精选每日国际与国内视频新闻、社会新闻、体育新闻、娱乐 新闻、财经新闻。每天不同时段播出视频资讯、新闻评论节目，搜集论坛热点、汇聚搞笑视频，发布天气预报并可通过视频参与直播。" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>联合国特使召开新闻发布会宣布叙利亚和谈重启_看看新闻网</title>
    <script type="text/javascript">
        var now = 'now';var hkId = '84';var mid = '144';var status = '0';
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
        if(device.type === "pad") {
            document.write('<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>');
            //document.write('<link rel="stylesheet" href="../app/css/liveP.css" type="text/css" />');
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
<link href="http://skin.kankanews.com/v6/2016live/pc_v2/live/main.css" rel="stylesheet"></head>
<body class="game-page loaded">
<!-- nav -->
<div class="navBox">
    <div class="navMain clearfix">
        <div class="left logo"><img src="http://skin.kankanews.com/v6/2016live/pc_v2/live/images/logo.png" alt="看看新闻网" /></div>
        <ul class="clearfix left navList">
            <li>
                <a href="#">精选</a>
            </li>
            <li>
                <a href="#">Knews24</a>
            </li>
            <li>
                <a href="#">直播</a>
            </li>
            <li class="cur">
                <a href="#">回看</a>
            </li>
            <li>
                <a href="#">新闻</a>
            </li>
            <li>
                <a href="#">看点</a>
            </li>
        </ul>
        <div class="searchBox right">
            <input type="text" class="left searText" value="" placeholder="请输入查找内容" />
            <input type="submit" class="left searSubmit" value="" />
        </div>
    </div>
</div>

<div class="place38"></div>
<div class="live-box hidden clearfix">
    <div class="section">
        <div class="tv-head">
            <div class="live-head-container">
                <div class="game-head">
                    <div class="thumb-container"></div>
                    <div class="left badge pull-left">
                        <p class="head"><span class='title'>案件聚焦</span></p>
                        <p class="time"><i></i><span></span><span class="end"></span></p>
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

<div class="non-live-box hidden clearfix">
    <div class="section">
        <div class="tv-head">
            <div class="live-head-container">
                <div class="game-head">
                    <div class="left badge pull-left">
                        <p class="head">当前播放：<span class='title'></span></p>
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
        <div class="program_list">
            <div class="boxW">
                <div class="date-box clearfix"></div>
            </div>
            <div class="live-tab-content">
                <div class="tabcon" id="content-3">
                    <div class="clearfix bottom1"></div>
                </div>
            </div>
            <a class="listcontrol-btn" title="收起列表" href="javascript:void(0);" j-delegate="hidePlayList" rseat="收起列表">
                <i class="icn icn_right"></i>
            </a>
        </div>
        <div class="program_all">
            <div class="tab clearfix">
                <span class="cur">电视</span>
                <span>广播</span>
            </div>
            <div class="channel_fm">
                <div class="tabcon" id="content-4">
                    <div class="channel item cur"></div>
                    <div class="fm item"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--# include virtual="http://m.kankanews.com/web/fakeESI?module=liveJson&awasas" -->
</script>
<script type="text/javascript" src="http://114.80.151.109/spa/20160114/vendor/jquery-1.11.1.js"></script>
<script type="text/javascript" src='http://114.80.151.109/spa/20160114/vendor/jquery.mCustomScrollbar.concat.min.js'></script>
<script type="text/javascript" src="http://skin.kankanews.com/v6/2016live/pc/bulid/timeCountDown.js"></script>

<script type="text/javascript" src="http://skin.kankanews.com/v6/2016live/pc_v2/live/main.js"></script></body>
</html>