!function(a){function e(i){if(t[i])return t[i].exports;var n=t[i]={exports:{},id:i,loaded:!1};return a[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var t={};return e.m=a,e.c=t,e.p="./",e(0)}(function(a){for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e))switch(typeof a[e]){case"function":break;case"object":a[e]=function(e){var t=e.slice(1),i=a[e[0]];return function(a,e,n){i.apply(this,[a,e,n].concat(t))}}(a[e]);break;default:a[e]=a[a[e]]}return a}([function(a,e,t){a.exports=t(3)},function(a,e){"use strict";var t={widthClass:"",c_w:$(window).width(),or:$(window).width()};a.exports={zbInit:function(){$("body").addClass("in-live"),$(".live-box").addClass("choose"),this.zbLiveWidth()},hkInit:function(){$("body").addClass("in-hk"),$(".non-live-box").removeClass("hidden"),$(".non-live-box").addClass("choose"),this.hkLiveWidth()},zbLiveWidth:function(){this.widthJudge();var a=(navigator.userAgent.indexOf("MSIE 8")>-1||navigator.userAgent.indexOf("MSIE 7")>-1,this.isIPad(),$(".live-box .section").width());parseInt(9*a/16)+45,$(".live-box .section").height(),$(window).height()},hkLiveWidth:function(){var a=navigator.userAgent.indexOf("MSIE 8")>-1||navigator.userAgent.indexOf("MSIE 7")>-1,e=$(window).width(),t=e-575-30,i=t;parseInt(9*i/16)+45,$(".non-live-box .section").height();a&&this.widthJudge(),$(".listcontrol-pack").hover(function(){$(this).addClass("listcontrol-pack-hover")},function(){$(this).removeClass("listcontrol-pack-hover")}),$(".listcontrol-pack").on("click",function(){$("body").removeClass("play-rc-pack")}),$(".listcontrol-btn").on("click",function(){$("body").addClass("play-rc-pack")})},widthJudgeLive:function(){var a=$(window).width();$("body").removeClass(t.widthClass),t.widthClass="kkpage-1920",a<1920&&(t.widthClass="kkpage-1920"),a<1700&&(t.widthClass="kkpage-1680"),a<1440&&(t.widthClass="kkpage-1440"),a<1180&&(t.widthClass="kkpage-1180"),a<980&&(t.widthClass="kkpage-980"),$("body").addClass(t.widthClass)},widthJudge:function(){var a=$(window).width();a<1920&&(t.widthClass="kkpage-1920"),a<1700&&(t.widthClass="kkpage-1680"),a<1440&&(t.widthClass="kkpage-1440"),a<1180&&(t.widthClass="kkpage-1180"),a<980&&(t.widthClass="kkpage-980"),$("body").addClass(t.widthClass)},share:function(a){var e=a.title,t=a.url,i=a.titlepic;"undefined"==typeof i&&(i="");var n={wb:$('<a class="wb left" target="_blank" href="http://service.t.sina.com.cn/share/share.php?appkey=2579900422&ralateUid=1845864154&title='+e+"&url="+t+"&pic="+i+'"><i></i></a>'),qq:$('<a class="qq left" target="_blank" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+t+"&site=&title="+e+"&pics="+i+'"><i></i></a>'),wx:$('<a class="wx left" target="_blank" dataurl="'+t+'" href="javascript:void(0)"><i></i></a>').bind("click",function(){return $(".weixin-con img").attr("src","http://s.jiathis.com/qrcode.php?url="+$(this).attr("dataurl")),$("#weixin").toggle(),!1}),email:$('<a class="email left" target="_blank" href="mailto:"><i></i></a>'),sprint:$('<a class="print left" target="_blank" href="javascript:void(0)"><i></i></a>').bind("click",function(){$("body").html($("h1").html()+"<br/>"+$(".publish-data").html()+$(".resource").html()+"<br/>"+$(".context").html()),window.print()}),appad:$('<div class="app right clearfix"><p class="right"><a class="btnInstallApp" title="iPhone" href="http://www.kankanews.com/m/jianghu.html" target="_blank">&#x7ACB;&#x5373;&#x4E0B;&#x8F7D;</a></p><img class="left" src="http://skin.kankanews.com/mobile/jh/images/logo_jh180.jpg"><span>&#x4E0B;&#x8F7D;&#x6C5F;&#x6E56;&#x5BA2;&#x6237;&#x7AEF;</span><em>&#x6709;&#x4EBA;&#x7684;&#x5730;&#x65B9;&#x5C31;&#x6709;&#x6C5F;&#x6E56;</em></div>')};return n},isIPad:function(){var a=navigator.userAgent.toLowerCase();return"ipad"==a.match(/iPad/i)},weiXin:function(){var a=$('<div class="weixin-cen" id="weixin"><div class="weixin_close clearfix"><p class="left">&#x4EB2;&#xFF0C;&#x8BF7;&#x626B;&#x63CF;&#x4E0B;&#x65B9;&#x4E8C;&#x7EF4;&#x7801;&#xFF0C;&#x5206;&#x4EAB;&#x7ED9;&#x5FAE;&#x4FE1;&#x7684;&#x5C0F;&#x4F19;&#x4F34;&#x4EEC;&#xFF01;</p><img class="right" src="http://skin.kankanews.com/v5/images/icon_close.gif"></div><div class="weixin-con" id="wxcode"><img src="" width="250" height="250" alt="&#x7F51;&#x5740;URL&#x4E8C;&#x7EF4;&#x7801;&#x751F;&#x6210;"></div><div class="sm">&#x6253;&#x5F00;&#x5FAE;&#x4FE1;&#xFF0C;&#x70B9;&#x51FB;&#x754C;&#x9762;&#x53F3;&#x4E0A;&#x89D2;&#x9B54;&#x672F;&#x68D2;&#xFF0C;&#x9009;&#x62E9;"&#x626B;&#x4E00;&#x626B;"<br>&#x6253;&#x5F00;&#x5FAE;&#x4FE1;&#xFF0C;&#x70B9;&#x51FB;&#x53D1;&#x73B0;&#xFF0C;&#x9009;&#x62E9;"&#x626B;&#x4E00;&#x626B;"&#xFF08;5.0&#x4EE5;&#x4E0A;&#x7248;&#x672C;&#xFF09;</div></div>');a.find(".weixin_close img").bind("click",function(){$("#weixin").hide()}),$("body").append(a)},bar:function(){var a,e=!0,t=function(){e=!0,$("#more").toggleClass("open"),$(".subnav").slideToggle("fast")},i=function(){e=!1,$("#more").toggleClass("open"),$(".subnav").slideToggle("fast")};$("#more").mouseover(function(){e?i():clearTimeout(a)}),$(".subnav").mouseover(function(){clearTimeout(a)}),$("#more").mouseleave(function(){e||(clearTimeout(a),a=setTimeout(function(){t()},1e3))}),$(".subnav").mouseleave(function(){e||(clearTimeout(a),a=setTimeout(function(){t()},1e3))})},weather:function(){$.ajax({url:"http://www.kankanews.com/list/weather?jsoncallback=?",dataType:"json",success:function(a){var e,t="",i="",n="",s="",l="";t="上海"+a.list.weather,i=$('<span class="tempe">'+t+"</span>"),n=$('<span class="tempe">'+a.list.tempe+"</span>"),s=$('<img src="'+a.list.pic+'">');for(var r=0;r<a.yj.length;r++)l+='<img src="http://shanghaicity.openservice.kankanews.com/'+a.yj[r]+'">';if(e=$("<div class='weather right'>"),e.append(l,s,i,n),$(".header-content").append(e),"pad"===device.type){$(".weather").css({height:"40px",overflow:"hidden","margin-top":"20px"}),$(".weather img").css({"float":"left","padding-right":"10px"});$(document).width();$(".weather span").css({height:"20px","line-height":"20px"}),$("span.tempe").width()+50>320?$(".weather span").css("display","inline"):$(".weather span").css({display:"block",width:$("span.tempe").width()+50+"px"}),$(".weather").css("max-width","320px")}}})}}},function(a,e){"use strict";function t(a,e){if(r()||o())return $(".live-box .livediv").css("display","none"),$(".live-box #ipod_player").css("display","block"),void l(e);var t='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="player1" id="player1"> <param name="movie" value="http://player.kksmg.com/data/player_swf/KKPlayer.swf"> <param name="flashvars" value="playerId=2969363206&liveChannelID=800'+e+'"> <param name="allowFullScreen" value="true"> <param name="wmode" value="transparent"> <param name="allowscriptaccess" value="always"> <embed src="http://player.kksmg.com/data/player_swf/KKPlayer.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" name="player2" id="player2" flashvars="playerId=2969363206&liveChannelID=800'+e+'"> </object>';$(".live-box .livediv").append(t)}function i(a,e){var t="";t="live"==a?c.live+c.paras:c.catchup+"&starttime="+e[0]+"&endtime="+e[1]+c.paras,$(".non-live-box .livediv").css("display","none"),$(".non-live-box #ipod_player").css("display","block"),$(".choose #ipod_player").html('<video controls="" poster=""><source src="'+t+'" type="video/mp4" id="ipodurl"></video>')}function n(a,e,t,n){r()||o()?i(a,e):(s().changeChannel(t),"gb"==c.now&&s().slides({slides:[{img:"http://static.statickksmg.com/image/2015/08/21/a275ba1d57da791b9b45d6498e8db01f.jpg"}]},!0))}function s(){return navigator.userAgent.indexOf("MSIE")!=-1?window.player1:document.player2}function l(a){$.getJSON("/phpapp/padvideourl.json.php",function(e){$(".choose #ipod_player").html(e[a])})}function r(){var a=navigator.userAgent.toLowerCase();return"ipad"==a.match(/iPad/i)}function o(){var a=navigator.userAgent.toLowerCase();return"iphone"==a.match(/iphone/i)}var d=[1,0,"k"],c={now:now,live:"",catchup:"",timeObj:[],today:"",year:"",month:"",dayDate:"",dayflag:1,change:!1,hkId:parseInt(hkId)<100?"0"+hkId:hkId,channel:parseInt(hkId)<100?"8000"+hkId:800+hkId,liveInit:function(){var a=this;$.ajax({type:"OPTIONS",url:"/",complete:function(e){a.liveTemple(e)}})},liveTemple:function(a){var e=Date.parse(a.getResponseHeader("Date"));e/=1e3;var i=streams,n="",s="",l=[],r=[],o=[],d=[],c=0;for(var p in i){if(parseInt(i[p].timestamp)<parseInt(e)){l.push(parseInt(i[p].id));var h=i[p].intro.replace("\\\\ ","");n+='<div class="wrapper" timestamp="'+i[p].timestamp+'" status="'+i[p].status+'"  id="'+i[p].id+"\" intro='"+h+'\'><span class="arrow"></span><div class="live-program inner"><a class="link" href="http://live.kankanews.com/zhibo/'+i[p].id+'.html"><div class="videoHuiguImg"><img class="highlights-cover" src="'+i[p].titlepic+'"></div>',n+='<div class="videoHuiguTxt"><dl><dt>'+i[p].title+"</dt><dd><i></i>"+i[p].stime+"</dd><span>直播</span></dl></div></a></div></div>"}else s+='<div class="wrapper yg"  timestamp="'+i[p].timestamp+'"  status="'+i[p].status+'" id="'+i[p].id+'" intro="'+i[p].intro+'"><span class="arrow"></span><div  class="live-program inner foreshow"><a class="link" href="http://live.kankanews.com/zhibo/'+i[p].id+'.html"><div class="videoHuiguImg"><img class="highlights-cover" src="'+i[p].titlepic+'"></div>',s+='<div class="videoHuiguTxt"><dl><dt>'+i[p].title+"</dt><dd><i></i>"+i[p].stime+"</dd><span>预告</span></dl></div></a></div></div>";r.push(parseInt(i[p].id)),o.push(i[p].title),d.push(i[p].stime)}if($(".loading").remove(),$("#zbLiu").append('<div class="program-title inner"><h3 class="zbIcon">正在直播</h3></div>'+n),$("#ygLiu").append('<div class="program-title inner"><h3 class="ygIcon">直播预告</h3></div>'+s),1==parseInt(status)){var m='<div class="imgBox"><img src="http://skin.kankanews.com/v6/2016live/pc/app/images/kkline.png" width="100%" ></div>';$(".live-box .livediv").append(m),$(".imgBox").append('<div class="text">当前直播已取消<p>右侧菜单还有更多精彩内容</p></div>');var v='<i class="end-btn left">已取消</i>';$(".game-head .time span").first().remove(),$(".game-head .time span.end").css("display","inline-block"),$(".thumb-container").html(v)}else if(""!=mid&&$.inArray(parseInt(mid),r)!=-1&&/^[0-9]*$/.test(mid)){$(".wrapper").each(function(a){var i=$(this).attr("id"),n=$(this).attr("timestamp");if(n-e>0)var s=!1;else var s=!0;if(mid==i&&s){var l='<i class="live-btn left">当前播放：</i>';$(".thumb-container").html(l),c=a,t(a,i)}else if(mid==i){var l='<i class="yg-btn left">直播预告：</i>';$(".thumb-container").html(l),c=a,$(this).addClass("now");var r=($(this).find("img").attr("src"),parseInt($(this).attr("timestamp"))),o='<div class="imgBox"><img src="http://skin.kankanews.com/v6/2016live/pc/app/images/kkline.png" ></div>';$(".live-box .livediv").append(o),$(".imgBox").append('<div class="text">离当前直播开始还剩</div><div class="count"><span id="hour"></span><span id="hour"></span>:<span id="mini"></span>:<span id="sec"></span></div>');var d=r-e,p={sec:document.getElementById("sec"),mini:document.getElementById("mini"),hour:document.getElementById("hour"),day:document.getElementById("day")};fnTimeCountDown(d,p)}});var u=$(".wrapper").eq(c).attr("intro"),f='<div class="intro">'+u+"</div>";if($(".wrapper").eq(c).addClass("now").find(".live-program").append(f),""==$(".game-head span.title").html()){var g=$(".wrapper").eq(c).find("dt a").html();$(".game-head span.title").html(g)}var x=$(".wrapper").eq(c).find("dd").html();$(".game-head .time span").html(x)}else{var m='<div class="imgBox"><img src="http://skin.kankanews.com/v6/2016live/pc/app/images/kkline.png" width="100%" ></div>';$(".live-box .livediv").append(m),$(".imgBox").append('<div class="text">当前直播已结束<p>右侧菜单还有更多精彩内容</p></div>');var v='<i class="end-btn left">已结束</i>';$(".game-head .time span").first().remove(),$(".game-head .time span.end").css("display","inline-block"),$(".thumb-container").html(v)}},hkTime:function(){$.ajax({type:"OPTIONS",url:"/",complete:function(a){var e=Date.parse(a.getResponseHeader("Date")),t=new Date(e);c.year=t.getFullYear(),c.month=t.getMonth(),c.dayDate=t.getDate();var i=["01","02","03","04","05","06","07","08","09","10","11","12"];c.dayDate=c.dayDate<10?"0"+c.dayDate:c.dayDate,c.today=c.year+"-"+i[c.month]+"-"+c.dayDate,c.hkInit()}})},hkChannelInit:function(){var a=(channel.tv,channel.fm,""),e="";for(var t in channel.tv)a+='<li id="'+channel.tv[t].id+'" data-time="'+channel.tv[t].date+'"><div class="logo"><img src="'+channel.tv[t].titlepic+'" /></div><p class="name">'+channel.tv[t].catename+"</p></li>";for(var t in channel.fm)e+='<li id="'+channel.fm[t].id+'"><div class="logo"><img src="'+channel.fm[t].titlepic+'" /></div><p class="name">'+channel.fm[t].catename+"</p></li>";$(".channel").append(a),$(".fm").append(e),$(".channel li").first().addClass("cur")},hkInit:function(a){var e=this;$.ajax({url:"http://m.kankanews.com/web/fakeESI?module=catchUP&info="+c.hkId+"_"+c.today+"&jsoncallback=?",dataType:"json",success:function(a){$("p.loadingTip").css("display","none"),e.hkTemple(a,e)}})},hkTemple:function(a,e){var t="",n="db",s=0;c.today.replace(/-/g,".");if(200==a.err_code){var l=a.prolist;c.timeObj=[l[0].starttime,l[0].endtime,"before"];for(var p in l){var h="time-program inner ",m=l[p].date,v=l[p].pid,u=l[p].title,f=l[p].starttime,g=l[p].endtime;1==l[p].play&&0==l[p]["catch"]?("k"==d[2]&&(s=p,d[1]=p,d[2]=""),h+="hk",c.timeObj=[],c.timeObj.push(l[p].starttime,l[p].endtime,"on"),n="live"):h+=0==l[p].play&&0==l[p]["catch"]?"dateout":"hk",t+='<div class="'+h+'" pid="'+v+'" data-time="'+m+'"   data-t="'+u+'"  data-s="'+f+'" data-e="'+g+'" data-play="'+l[p].play+'"> <span class="time">'+m+'</span><em></em><span class="titleName">'+u+"</span></div>"}if($(".non-live-box .bottom1").html(t),e.dateScorllInig(a),c.change);else if(r()||o())i(n,c.timeObj);else{if("gb"==c.now)var x='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="player1" id="player1"> <param name="movie" value="http://player.kksmg.com/data/player_swf/KKPlayer.swf"> <param name="flashvars" value="playerId=2969363206&cover=http://static.statickksmg.com/image/2015/08/21/a275ba1d57da791b9b45d6498e8db01f.jpg&liveChannelID='+c.channel+'"> <param name="allowFullScreen" value="true"> <param name="wmode" value="transparent"> <param name="allowscriptaccess" value="always"> <embed src="http://player.kksmg.com/data/player_swf/KKPlayer.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" name="player2" id="player2" flashvars="playerId=2969363206&cover=http://static.statickksmg.com/image/2015/08/21/a275ba1d57da791b9b45d6498e8db01f.jpg&liveChannelID='+c.channel+'"> </object>';else{var x='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="player1" id="player1"> ';x+='<param name="movie" value="http://player.kksmg.com/data/player_swf/KKPlayer.swf">',x+='<param name="width" value="100%">',x+='<param name="height" value="100%">',x+='<param name="allowFullScreen" value="true">',x+='<param name="allowscriptaccess" value="always">',x+='<param name="hasPriority" value="true">',x+='<param name="wmode" value="transparent">',x+='<param name="quality" value="high">',x+='<param name="allowFullScreenInteractive" value="true">',x+='<param name="name" value="player1">',x+='<param name="flashvars" value="playerId=2969363206&liveChannelID='+c.channel+'">',x+='<embed src="http://player.kksmg.com/data/player_swf/KKPlayer.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="transparent" name="player2" id="player2" flashvars="playerId=2969363206&liveChannelID='+c.channel+'">',x+="</object>"}$(".non-live-box .livediv").html(x)}}},player:function(){},dateScorllInig:function(a){var e=a.available,t="",i=0;for(var n in e){var s=e[n].weekday,l=e[n].day,r=e[n].did,o=e[n].date,p="";c.today==o&&(p="active"),6==i&&(p+=" last"),t+='<div date="'+o+'" class="'+p+'" did="'+r+'"><p class="week">'+s+'</p><p class="date">'+l+"</p></div>",i++}if($(".date-box").html(t),c.live=a.live,c.catchup=a.catchup,c.paras=a.paras,c.dayflag==d[0])if("k"!=d[2]){$(".time-program").eq(d[1]).addClass("on");var h=$(".non-live-box #content-1").height(),m=$(".hk.on").position().top,v=$("#mCSB_1").height()/2;c.change&&m>h/2?$(".non-live-box #content-3").mCustomScrollbar("scrollTo",m-v):!c.change&&m>h/2&&setTimeout(function(){$(".non-live-box #content-3").mCustomScrollbar("scrollTo",m-v)},1e3),$(".head span.title").html($(".time-program").eq(d[1]).attr("data-t")),$(".game-head .time span").html($(".time-program").eq(d[1]).attr("data-time"))}else $(".head span.title").html($(".hk").last().attr("data-t")),$(".game-head .time span").html($(".hk").last().attr("data-time"));else $(".non-live-box #content-3").mCustomScrollbar("scrollTo",0)},changeItem:function(){$(".program_all span").on("click",function(){if(!$(this).hasClass("cur")){$(".program_all span").removeClass("cur"),$(this).addClass("cur");var a=$(this).index();$(".channel_fm .item").removeClass("cur").eq(a).addClass("cur")}})},hkClick:function(){function a(){var a=$(this).attr("id");c.hkId=parseInt(a)<100?"0"+a:a,c.channel=parseInt(a)<100?"8000"+a:800+a,c.hkInit(),d=[1,0,"k"],$(".item li").removeClass("cur"),$(this).addClass("cur")}$(document).on("click",".date-box div",function(){var a=$(this).attr("date");c.today=a,c.dayflag=$(this).attr("did"),c.change=!0,c.hkInit(),$(".date-box div").removeClass("active"),$(this).addClass("active")}),$(document).on("click",".channel li",function(){c.now="hk",c.change=!0,a.apply(this)}),$(document).on("click",".fm li",function(){c.now="gb",c.change=!0,a.apply(this)}),$(document).on("click",".hk",function(){$(".time-program").removeClass("on"),$(this).addClass("on");var a=$(this).attr("data-play"),e=$(this).attr("data-s"),t=$(this).attr("data-e");if(1==parseInt(a))var i="800"+c.hkId;else var s=$(this).attr("pid"),i=c.dayflag+s+c.hkId;$(".head span.title").html($(this).attr("data-t")),$(".game-head .time span").html($(this).attr("data-time")),d=[],d[0]=$(".date-box .active").attr("did"),d[1]=$(this).index(),d[2]="",c.timeObj=[],1==$(this).attr("data-play")?(c.timeObj.push(e,t,"on"),n("live",c.timeObj,i,now)):(c.timeObj.push(e,t,"before"),n("db",c.timeObj,i,now))})}};a.exports=c},function(a,e,t){"use strict";function i(a){return a&&a.__esModule?a:{"default":a}}t(4),t(6),t(5);var n=t(2),s=i(n),l=t(1),r=i(l),o=r["default"].share(info);r["default"].weiXin(),r["default"].bar(),r["default"].weather();var d=navigator.userAgent.indexOf("MSIE 8")>-1||navigator.userAgent.indexOf("MSIE 7")>-1;d&&$(".header .header-content ").css({"margin-right":"10px"}),$(".liveShare").append(o.wb,o.qq,o.wx),r["default"].zbInit(),s["default"].liveInit(),$(".live-box #content-1").mCustomScrollbar({callbacks:{onInit:function(){var a=$(".live-box #content-1").height(),e=$(".wrapper.now").position().top,t=$("#mCSB_1").height()/2;e>a/2&&setTimeout(function(){$(".live-box #content-1").mCustomScrollbar("scrollTo",e-t)},1e3)}}}),r["default"].widthJudgeLive(),$(window).resize(function(){r["default"].widthJudgeLive()})},function(a,e){},4,4]));