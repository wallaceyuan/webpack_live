var liveBox=[1,0,'k'];
var b = {
    now:now,
	live:"",
	catchup:"",
	timeObj :[],
	today:'',
	year:'',
	month:'',
	dayDate:'',
	dayflag:1,
	change:false,
	paras:"",
    hkId:hkId,
	channel:800+hkId,
	liveInit:function(){
		$.ajax({type:"OPTIONS",url:"/",complete:function(x) {
			var time_stamp = Date.parse(x.getResponseHeader("Date"));
			time_stamp = time_stamp / 1000;
			/*		$.ajax({
			 url: 'http://api.app.kankanews.com/kankan/v5/livePC/stream/live/?jsoncallback=?',
			 dataType: "json",
			 success: function (data) {*/
			var data = streams;
			var str1 = "";
			var str2 = "";
			var liveNew = [];var allNew = [];
			var titleObj = [];var timeObj = [];
			var liveId = [];var index = 0;
			for(var key in data){
				if(parseInt(data[key].timestamp )  < parseInt(time_stamp)){
					liveNew.push(parseInt(data[key].id));
					var introR = data[key].intro.replace( "\\\\ ","");
					str1 += '<div class="wrapper" timestamp="'+data[key].timestamp+'" status="'+ data[key].status +'"  id="' + data[key].id + '" intro=\'' + introR + '\'><a class="link" href="http://live.kankanews.com/zhibo/'+data[key].id +'.html"></a><div class="live-program inner">'+
						'<div class="videoHuiguImg">'+
						'<img class="highlights-cover" src="' + data[key].titlepic + '">'+
						'</div>'+
						'<div class="videoHuiguTxt">'+
						'<dl>'+
						'<dt><a title="' + data[key].title + '">' + data[key].title + '</a></dt>'+
						'<dd>' + data[key].stime + '</dd><span>直播</span>'+
						'</dl>'+
						'</div>'+
						'</div></div>';
				}else{
					str2 += '<div class="wrapper yg"  timestamp="' + data[key].timestamp + '"  status="' + data[key].status + '" id="' + data[key].id + '" intro="' + data[key].intro + '"><a class="link" href="http://live.kankanews.com/zhibo/'+data[key].id +'.html"></a><div  class="live-program inner foreshow">'+
						'<div class="videoHuiguImg">'+
						'<img class="highlights-cover" src="' + data[key].titlepic + '">'+
						'</div>'+
						'<div class="videoHuiguTxt">'+
						'<dl>'+
						'<dt><a title="' + data[key].title + '">' + data[key].title + '</a></dt>'+
						'<dd>' + data[key].stime + '</dd><span>预告</span>'+
						'</dl>'+
						'</div>'+
						'</div></div>';
				}
				allNew.push(parseInt(data[key].id));
				titleObj.push( data[key].title);timeObj.push(data[key].stime);
			}

			$(".loading").remove();
			$("#zbLiu").append(str1);$("#ygLiu").append(str2);
			if(parseInt(status) == 1){
				var imgBox = '<div class="imgBox"><img src="http://skin.kankanews.com/v6/2016live/pc/app/images/kkline.png" width="100%" ></div>';
				$(".live-box .livediv").append(imgBox);
				$(".imgBox").append('<div class="text">当前直播已取消<p>右侧菜单还有更多精彩内容</p></div>');
				var logo = '<i class="end-btn left">已取消</i>';
				$('.game-head .time span').first().remove();
				$('.game-head .time span.end').css('display','inline-block');
				$('.thumb-container').html(logo);
			}else if(mid =='' || $.inArray(parseInt(mid), allNew) == -1 || !/^[0-9]*$/.test(mid)){
				var imgBox = '<div class="imgBox"><img src="http://skin.kankanews.com/v6/2016live/pc/app/images/kkline.png" width="100%" ></div>';
				$(".live-box .livediv").append(imgBox);
				$(".imgBox").append('<div class="text">当前直播已结束<p>右侧菜单还有更多精彩内容</p></div>');
				var logo = '<i class="end-btn left">已结束</i>';
				$('.game-head .time span').first().remove();
				$('.game-head .time span.end').css('display','inline-block');
				$('.thumb-container').html(logo);
				//$('.game-head .time').hide();
			}else{
				//console.log('zbyg');
				$('.wrapper').each(function(i){
					var idFlag = $(this).attr('id');
					//var status = $(this).attr('status');
					var proSitemap = $(this).attr('timestamp');
					if(proSitemap - time_stamp>0){
						var flag = false;
					}else{
						var flag = true;
					}
					//console.log(idFlag, mid,'11   '+  proSitemap);
					if( mid == idFlag && flag){
						var logo = '<i class="live-btn left">直播</i>';
						$('.thumb-container').html(logo);
						index = i;
						zbStream(i,idFlag);
					}else if(mid == idFlag ){
						var logo = '<i class="yg-btn left">预告</i>';
						$('.thumb-container').html(logo);
						index = i;
						$(this).addClass('now');
						var imgSrc = $(this).find('img').attr('src');
						var timestamp = parseInt($(this).attr('timestamp'));
						var imgBox = '<div class="imgBox"><img src="http://skin.kankanews.com/v6/2016live/pc/app/images/kkline.png" ></div>';
						$(".live-box .livediv").append(imgBox);
						$(".imgBox").append('<div class="text">离当前直播开始还剩</div><div class="count"><span id="hour"></span><span id="hour"></span>:<span id="mini"></span>:<span id="sec"></span></div>');
						var d =  timestamp-time_stamp;
						//console.log(time_stamp,timestamp,d)
						var obj = {
							sec: document.getElementById("sec"),
							mini: document.getElementById("mini"),
							hour: document.getElementById("hour"),
							day:document.getElementById("day")
						}
						fnTimeCountDown(d, obj);
					}
				});
				var intro = $('.wrapper').eq(index).attr('intro');
				var block = '<div class="intro">'+intro+'</div>'
				$('.wrapper').eq(index).addClass('now').find('.live-program').append(block);

				if($(".game-head span.title").html() == ''){
					var tit = $('.wrapper').eq(index).find("dt a").html();
					$(".game-head span.title").html(tit);
				}

				var time = $('.wrapper').eq(index).find("dd").html();
				$(".game-head .time span").html(time);
			}
		}
		});
		/*			}
		 });*/
	},
	hkTime:function(){
		$.ajax({type:"OPTIONS",url:"/", complete:function(x) {
			var time_stamp = Date.parse(x.getResponseHeader("Date"));
			var date = new Date(time_stamp);
			b.year = date.getFullYear(),b.month = date.getMonth(),b.dayDate = date.getDate();
			let monthBox = ['01','02','03','04','05','06','07','08','09','10','11','12'];
			b.dayDate = (b.dayDate < 10 ? '0'+(b.dayDate) : b.dayDate)
			b.today = b.year+'-'+monthBox[b.month]+'-'+b.dayDate;
			b.hkInit();
		}});
/*
		$.getJSON("http://api.app.kankanews.com/kankan/v5/livePC/stream/check/?jsoncallback=?",function(data){
			var date = new Date(data.now*1000);
			b.year = date.getFullYear(),b.month = date.getMonth(),b.dayDate = date.getDate(),monthBox = ['01','02','03','04','05','06','07','08','09','10','11','12'];
			b.dayDate = (b.dayDate < 10 ? '0'+(b.dayDate) : b.dayDate)
			b.today = b.year+'-'+monthBox[b.month]+'-'+b.dayDate;
			b.hkInit();
		});*/
	},
    hkChannelInit:function(){
        var tv = channel.tv;
        var fm = channel.fm;
        var str1 = "";
        var str2 = "";
        for(var key in channel['tv']){
            str1+='<li id="' + channel['tv'][key].id + '" data-time="' + channel['tv'][key].date + '"><div class="logo"><img src="'+ channel['tv'][key].titlepic +'" /></div><p class="name">'+ channel['tv'][key].catename +'</p></li>'
        }
        for(var key in channel['fm']){
            str2+='<li id="'+ channel['fm'][key].id +'"><div class="logo"><img src="'+ channel['fm'][key].titlepic +'" /></div><p class="name">'+ channel['fm'][key].catename +'</p></li>'
        }
        $(".channel").append(str1);
        $(".fm").append(str2);
        $(".channel li").first().addClass('cur');
    },
	hkInit:function(list){
		var list = list || '';
		$.ajax({
			//'m.kankanews.com/web/fakeESI?module=catchUP&info=84_2016-03-16&jsoncallback=23'
		url: 'http://m.kankanews.com/web/fakeESI?module=catchUP&info='+b.hkId+'_' + b.today + '&jsoncallback=?',
			dataType: "json",
			success: function (data) {
				//console.log('http://api.app.kankanews.com/kankan/v5/livePC/stream/catchup/info/'+hkId+'_' + b.today + '/?jsoncallback=?');
				var str = "";
				var judge = 'db';
				var index = 0;
				var redSpan = '&#x770B;&#x56DE;&#x770B;';
				var programDate = b.today.replace(/-/g,".");
				if (data.err_code != 200) return;
				var prolist = data.prolist;
				b.timeObj = [prolist[0].starttime, prolist[0].endtime, 'before'];
				for (var key in prolist) {
					var className = 'time-program inner ';
					var time = prolist[key].date, pid = prolist[key].pid,title = prolist[key].title, stime = prolist[key].starttime, etime = prolist[key].endtime;
					if (prolist[key].play == 1 && prolist[key].catch == 0) {
						if(liveBox[2] == 'k'){
							index = key;
							liveBox[1] = key;
							liveBox[2] = '';
						}
						className += 'hk';
						b.timeObj = [];
						b.timeObj.push(prolist[key].starttime, prolist[key].endtime, 'on');
						judge = 'live';//redSpan = '&#x770B;&#x76F4;&#x64AD;';
					} else if (prolist[key].play == 0 && prolist[key].catch == 0) {
						className += 'dateout';
					} else {
						className += 'hk';
					}
					str += '<div class="' + className + '" pid="'+pid+'" data-time="'+time+'"   data-t="' + title + '"  data-s="' + stime + '" data-e="' + etime + '" data-play="' + prolist[key].play + '"> ' +
						'<span class="time">' + time + '</span><em></em><span class="titleName">' + title + '</span>' +
						'</div>';
				}
				//$('.non-live-box .live-Interaction .title').html(topName);
				$('.non-live-box .bottom1').html(str);
				var available = data.available;
				var dateBox = '';
				/*Ñ­»·ÈÕÆÚ*/
				var i = 0;
				for (var key in available) {
					var weekday = available[key].weekday, day = available[key].day,did = available[key].did,date = available[key].date;
					var active = '';
					if (b.today == date) active = 'active';
					if (i == 6) active += ' last';
					dateBox += '<div date="' + date + '" class="' + active + '" did="'+did+'"><p class="week">' + weekday + '</p><p class="date">' + day + '</p></div>';
					i++;
				}
				$('.date-box').html(dateBox);
				b.live = data.live;
				b.catchup = data.catchup;b.paras = data.paras;
				if(b.dayflag == liveBox[0]){
					if(liveBox[2] != 'k'){
						$('.time-program').eq(liveBox[1]).addClass('on');
						var ConHeight = $('.non-live-box #content-1').height();
						var hkHeight = $('.hk.on').position().top;
						var oHeight = $('#mCSB_1').height()/2;
						if (b.change && hkHeight>ConHeight/2) {
							$('.non-live-box #content-3').mCustomScrollbar("scrollTo",hkHeight-oHeight);
						}else if(!b.change && hkHeight>ConHeight/2){
							setTimeout(function(){
								$('.non-live-box #content-3').mCustomScrollbar("scrollTo",hkHeight-oHeight);
							},1000);
						}
						$('.head span.title').html($('.time-program').eq(liveBox[1]).attr('data-t'));
						$('.game-head .time span').html($('.time-program').eq(liveBox[1]).attr('data-time'));
					}else{
						var adTitle = $('.hk').last().attr('data-t');
						var adTime = $('.hk').last().attr('data-time');
						$('.head span.title').html(adTitle);
						$('.game-head .time span').html(adTime);
					}
				}else{
					$('.non-live-box #content-3').mCustomScrollbar("scrollTo", 0);
				}
				if (b.change) {

				}else{
					if(isIPad() || isIPhone()){
						hkpadStream(judge,b.timeObj);
					}else{
						if(b.now == 'gb'){
                            console.log('gbimg');
							var palyer = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="player1" id="player1"> <param name="movie" value="http://player.kksmg.com/data/player_swf/KKPlayer.swf"> <param name="flashvars" value="playerId=2969363206&cover=http://static.statickksmg.com/image/2015/08/21/a275ba1d57da791b9b45d6498e8db01f.jpg&liveChannelID='+b.channel+'"> <param name="allowFullScreen" value="true"> <param name="wmode" value="transparent"> <param name="allowscriptaccess" value="always"> <embed src="http://player.kksmg.com/data/player_swf/KKPlayer.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" name="player2" id="player2" flashvars="playerId=2969363206&cover=http://static.statickksmg.com/image/2015/08/21/a275ba1d57da791b9b45d6498e8db01f.jpg&liveChannelID='+b.channel+'"> </object>';
						}else{
							var palyer = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="player1" id="player1"> <param name="movie" value="http://player.kksmg.com/data/player_swf/KKPlayer.swf"> <param name="flashvars" value="playerId=2969363206&liveChannelID='+b.channel+'"> <param name="allowFullScreen" value="true"> <param name="wmode" value="transparent"> <param name="allowscriptaccess" value="always"> <embed src="http://player.kksmg.com/data/player_swf/KKPlayer.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" name="player2" id="player2" flashvars="playerId=2969363206&liveChannelID='+b.channel+'"> </object>';
						}
						$(".non-live-box .livediv").html(palyer);
					}
				}
			}
		});
	},
	changeItem:function(){
		$('.program_all span').on('click',function(){
			if($(this).hasClass('cur')) return
			else{
				$('.program_all span').removeClass('cur');
				$(this).addClass('cur');
				var eq = $(this).index();
				$('.channel_fm .item').removeClass('cur').eq(eq).addClass('cur');
			}
		});
	},
	hkClick:function(){
		$(document).on("click",".date-box div",function(){
			var divDate = $(this).attr('date');b.today = divDate;
			b.dayflag = $(this).attr('did');
			b.change = true;
			b.hkInit();
			$('.date-box div').removeClass('active');
			$(this).addClass('active');
		});
        $(document).on("click",".channel li",function(){
            b.now = 'hk';
            channelChange.apply(this);
        });
        $(document).on("click",".fm li",function(){
            b.now = 'gb';
            channelChange.apply(this);
        });

        function channelChange(){
            var divDate = $(this).attr('id');
            console.log(divDate);
            b.hkId = divDate;
            b.hkInit();
            liveBox=[1,0,'k'];
            $('.item li').removeClass('cur');
            $(this).addClass('cur');
        }
		/*»Ø¿´µã»÷ÇÐ»»*/
		$(document).on("click",".hk",function(){
			$('.time-program').removeClass('on');
			$(this).addClass('on');
			var dataPlay = $(this).attr('data-play');
			var stime = $(this).attr('data-s');
			var etime = $(this).attr('data-e');
			if(parseInt(dataPlay) == 1){
				var channelid = '800' + b.hkId;
			}else{
				var pid = $(this).attr('pid');
				var channelid = b.dayflag + pid + b.hkId;
			}
			$('.head span.title').html($(this).attr('data-t'));
			$('.game-head .time span').html($(this).attr('data-time'));
			liveBox = [];liveBox[0] = $('.date-box .active').attr('did');liveBox[1] = $(this).index();liveBox[2] = '';
			b.timeObj = [];
			if($(this).attr('data-play') == 1){
				b.timeObj.push(stime,etime,'on');
				hkStream('live',b.timeObj,channelid,now);
			}else{
				b.timeObj.push(stime,etime,'before');
				hkStream('db',b.timeObj,channelid,now);
			}
		});
	}
}

module.exports  = b;

function zbStream(i,idFlag){
	if (isIPad() || isIPhone()){
		$('.live-box .livediv').css('display','none');
		$('.live-box #ipod_player').css('display','block');
		padVideoUrl(idFlag);
		return;
	}
	var palyer = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="player1" id="player1"> <param name="movie" value="http://player.kksmg.com/data/player_swf/KKPlayer.swf"> <param name="flashvars" value="playerId=2969363206&liveChannelID=800'+idFlag +'"> <param name="allowFullScreen" value="true"> <param name="wmode" value="transparent"> <param name="allowscriptaccess" value="always"> <embed src="http://player.kksmg.com/data/player_swf/KKPlayer.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" name="player2" id="player2" flashvars="playerId=2969363206&liveChannelID=800'+ idFlag +'"> </object>';
	$(".live-box .livediv").append(palyer);
}

function hkpadStream(judge,timeObj){
	var streamurl = '';
	if(judge == 'live'){
		streamurl = b.live+b.paras;
	}else{
		streamurl = b.catchup+'&starttime='+timeObj[0]+'&endtime='+timeObj[1]+b.paras;
	}
	$('.non-live-box .livediv').css('display','none');
	$('.non-live-box #ipod_player').css('display','block');
	$(".choose #ipod_player").html('<video controls="" poster=""><source src="'+streamurl+'" type="video/mp4" id="ipodurl"></video>');
}

function hkStream(judge,timeObj,channelid,now){
	if (isIPad() || isIPhone()){
		hkpadStream(judge,timeObj);
	}else{
		//console.log(channelid);
		this.swfOcj = thisMovie();
		this.swfOcj.changeChannel(channelid);
		if(b.now == 'gb'){
            console.log('gbimg');
			this.swfOcj.slides({
					slides: [{
						img: 'http://static.statickksmg.com/image/2015/08/21/a275ba1d57da791b9b45d6498e8db01f.jpg'
					}]
				},
				true
			);
		}
	}
}

function changeChannel(chid){
	if (isIPad() || isIPhone()){
		padVideoUrl(chid);
	}else{
		this.swfOcj = thisMovie();
		this.swfOcj.changeChannel(chid);
	}
}
function padVideoUrl(chid){
	$.getJSON("/phpapp/padvideourl.json.php",function(data){
		$(".choose #ipod_player").html(data[chid]);
	})
}
function thisMovie() {
	if (navigator.userAgent.indexOf("MSIE") != -1) {
		return window["player1"];
	}else {
		return document["player2"];
	}
}
function isIPad(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/iPad/i)=="ipad") {
		return true;
	} else {
		return false;
	}
}
function isIPhone(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/iphone/i) == "iphone") {
		return true;
	} else {
		return false;
	}
}
