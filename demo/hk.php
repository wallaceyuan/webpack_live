<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" href="http://skin.kankanews.com/kankancms/images/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="http://skin.kankanews.com/kankancms/images/favicon.ico" type="image/x-icon" />
    <meta name="Keywords" content="视频直播, 新闻直播, 新闻直播间, 搞笑视频, 明星访谈直播, 电影直播, 电视剧直播, 天气预报" />
    <meta name="Description" content="看看新闻24小时直播流。视频直播重大事件、直播突发新闻、直播权威发布、直播电影电视剧发布并精选每日国际与国内视频新闻、社会新闻、体育新闻、娱乐 新闻、财经新闻。每天不同时段播出视频资讯、新闻评论节目，搜集论坛热点、汇聚搞笑视频，发布天气预报并可通过视频参与直播。" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>新闻直播频道_突发新闻直播_视频直播在线观看_看看新闻</title>
    <script type="text/javascript">
        var now = 'nows';var hkId = '84';var mid = '144';var status = '0';
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
    <link href="http://skin.kankanews.com/v6/2016live/pc_v2/hk/live.css" rel="stylesheet"></head>
<body class="game-page loaded">

<!--start 导航-->
[!--temp.2016TopBar--]
<!--end 导航-->

<div class="place38"></div>

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
                    <div class="channel item cur">
                        [e:loop={"select * from [!db.pre!]ecms_appstream where classid=2680 and checked=1 order by istop desc,isgood desc, newstime desc limit 20",0,24,0}]
                        <li id="<?=$bqr[id]?>" class="
                        <?php if($bqr[id] == 84){echo "cur";} ?>">
                            <div class="logo">
                                <img src="<?=str_replace(".jpg","_320x240.jpg",$bqr[bgpic])?>" class="mCS_img_loaded">
                            </div>
                            <p class="name"><?=$bqr[title]?></p>
                        </li>
                        [/e:loop]
                    </div>
                    <div class="fm item">
                        [e:loop={"select * from [!db.pre!]ecms_appstream where classid=8133 and checked=1 order by istop desc,isgood desc, newstime desc limit 20",0,24,0}]
                        <li id="<?=$bqr[id]?>">
                            <div class="logo">
                                <img src="<?=str_replace(".jpg","_320x240.jpg",$bqr[bgpic])?>" class="mCS_img_loaded">
                            </div>
                            <p class="name"><?=$bqr[title]?></p>
                        </li>
                        [/e:loop]
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="listcontrol-pack" id="jujiPlayListShow">
        <a href="javascript:void(0);" j-delegate="showPlayList" rseat="展开列表">
            <div class="listcontrol-pack-con">
                <i class="icn icn_left"></i>
                <em class="listcontrol-pack-txt">展开列表</em>
            </div>
        </a>
    </div>
</div>
<div class="place38"></div>


<script type="text/javascript" src="http://skin.kankanews.com/v6/js/libs/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="http://skin.kankanews.com/v7/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" src="http://skin.kankanews.com/v6/2016live/pc/bulid/timeCountDown.js"></script>
<script type="text/javascript" src="http://skin.kankanews.com/v6/2016live/pc_v2/hk/main.js"></script>
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

</body>

</html>
