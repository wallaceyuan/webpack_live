/*! live24 12-07-2016 */

function nowPlayInfo(a, b, c) {
	$(".info .time").html(a.date), $(".info .title").html(a.title), "islive" == b ? ($(".info .nowItem").addClass("live"), $(".miniplayer").html(c), $(".miniplayer").addClass("show")) : ($(".info .nowItem").removeClass("live"), $(".miniplayer").html(""), $(".miniplayer").removeClass("show"))
}
var programList = {
	id: "1132",
	classid: "9418",
	prolistid: "221",
	title: "Knews24正在直播！",
	subtitle: "24小时直播",
	titlepic: "http://static.statickksmg.com/image/2016/05/27/72b01c94c01ad03fdde8806f2db536ba.jpg",
	live: "http://hls.live.kksmg.com/live/live24h/playlist.m3u8?se=kankan&ct=2",
	catchup: "http://hls.live.kksmg.com/live/live24h/playlist.m3u8",
	sharepic: "http://static.statickksmg.com/image/2016/05/27/72b01c94c01ad03fdde8806f2db536ba.jpg",
	intro: "叩击时代！这里是Knews24互联网新闻频道，24小时滚动播出。",
	titleurl: "http://www.kankanews.com",
	updateTime: 1468292785,
	err_code: 200,
	err_message: "Valid Request",
	paras: "&_cp=1&_fk=38FEC6DBF568E9AD218163E280B4EEE6FCDDBEBFB209C33E87786886AAA546E1",
	prolist: [{
		title: "子午线",
		date: "00:00",
		starttime: 1468252880,
		endtime: 1468256480,
		play: 0,
		"catch": 1,
		pid: "01"
	}, {
		title: "自媒体联播",
		date: "01:00",
		starttime: 1468256480,
		endtime: 1468260080,
		play: 0,
		"catch": 1,
		pid: "02"
	}, {
		title: "叩击",
		date: "02:00",
		starttime: 1468260080,
		endtime: 1468261880,
		play: 0,
		"catch": 1,
		pid: "03"
	}, {
		title: "环球交叉点",
		date: "02:30",
		starttime: 1468261880,
		endtime: 1468265480,
		play: 0,
		"catch": 1,
		pid: "04"
	}, {
		title: "子午线",
		date: "03:30",
		starttime: 1468265480,
		endtime: 1468269080,
		play: 0,
		"catch": 1,
		pid: "05"
	}, {
		title: "自媒体联播",
		date: "04:30",
		starttime: 1468269080,
		endtime: 1468272680,
		play: 0,
		"catch": 1,
		pid: "06"
	}, {
		title: "叩击",
		date: "05:30",
		starttime: 1468272680,
		endtime: 1468274480,
		play: 0,
		"catch": 1,
		pid: "07"
	}, {
		title: "环球交叉点",
		date: "06:00",
		starttime: 1468274480,
		endtime: 1468278080,
		play: 0,
		"catch": 1,
		pid: "08"
	}, {
		title: "看东方",
		date: "07:00",
		starttime: 1468278080,
		endtime: 1468285220,
		play: 0,
		"catch": 1,
		pid: "09"
	}, {
		title: "Knews24",
		date: "08:59",
		starttime: 1468285220,
		endtime: 1468296080,
		play: 1,
		"catch": 0,
		pid: "10"
	}, {
		title: "东方大头条",
		date: "12:00",
		starttime: 1468296080,
		endtime: 1468297880,
		play: 0,
		"catch": 0,
		pid: "11"
	}, {
		title: "Knews24",
		date: "12:30",
		starttime: 1468297880,
		endtime: 1468299680,
		play: 0,
		"catch": 0,
		pid: "12"
	}, {
		title: "Knews24",
		date: "13:00",
		starttime: 1468299680,
		endtime: 1468317680,
		play: 0,
		"catch": 0,
		pid: "13"
	}, {
		title: "东方新闻",
		date: "18:00",
		starttime: 1468317680,
		endtime: 1468321280,
		play: 0,
		"catch": 0,
		pid: "14"
	}, {
		title: "环球交叉点",
		date: "19:00",
		starttime: 1468321280,
		endtime: 1468324880,
		play: 0,
		"catch": 0,
		pid: "15"
	}, {
		title: "自媒体联播",
		date: "20:00",
		starttime: 1468324880,
		endtime: 1468328480,
		play: 0,
		"catch": 0,
		pid: "16"
	}, {
		title: "英国范堡罗航展特别报道",
		date: "21:00",
		starttime: 1468328480,
		endtime: 1468335680,
		play: 0,
		"catch": 0,
		pid: "17"
	}, {
		title: "环球交叉点",
		date: "23:00",
		starttime: 1468335680,
		endtime: 1468339279,
		play: 0,
		"catch": 0,
		pid: "18"
	}]
},
	isIPad = function() {
		var a = navigator.userAgent.toLowerCase();
		return "ipad" == a.match(/iPad/i)
	},
	playedItem = function(a) {
		var b = a,
			c = $('<li class="hk"><i>' + b.date + "</i><p>" + b.title + "</p></li>");
		return c.bind("click", function() {
			$(".list .on").removeClass("on"), $(this).addClass("on")
		}), c.echo = function(a, d) {
			c.hasClass("hk") && c.bind("click", function() {
				d(b)
			})
		}, c
	},
	liveItem = function(a) {
		this.config = a;
		var b = '<li class="live"><p>正在播放<p></li>';
		return this.item = $(b), this.item
	},
	playItem = function(a) {
		this.config = a;
		var b = '<li class="preview"><i>即将播出</i><p>' + this.config.title + "<span>" + this.config.date + "</span></p></li>";
		return this.item = $(b), this.item
	},
	player = function(a, b) {
		function c() {
			var c = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="' + a + '" id="' + a + '"> ';
			return c += '<param name="movie" value="http://player.kksmg.com/data/player_swf/KKPlayer.swf">', c += '<param name="width" value="100%">', c += '<param name="height" value="100%">', c += '<param name="allowFullScreen" value="true">', c += '<param name="allowscriptaccess" value="always">', c += '<param name="hasPriority" value="true">', c += '<param name="wmode" value="transparent">', c += '<param name="quality" value="high">', c += '<param name="allowFullScreenInteractive" value="true">', c += '<param name="name" value="' + a + '">', c += '<param name="flashvars" value="playerId=2969363206&liveChannelID=8001288&' + (b ? "volume=-1" : "") + '">', c += '<embed width="100%" height="110%" src="http://player.kksmg.com/data/player_swf/KKPlayer.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="transparent" name="' + a + '2" id="' + a + '2" flashvars="' + (b ? "volume=-1" : "") + '&live=false&playerId=2969363206&liveChannelID=8001288">', c += "</object>"
		}
		function d() {
			var b = '<video controls="" poster=""><source src="http://hls.kksmg.com/iphone/downloads/ch1/index.m3u8" type="video/mp4" id="ipod' + a + '"></video>';
			return b
		}
		function e() {
			var b = -1 != navigator.userAgent.indexOf("MSIE") ? window[a] : document[a + "2"];
			return console.log(b), "undefined" == typeof b && (b = $("#ipod" + a), b.changeChannel = function(a) {
				console.log(a)
			}), b
		}
		function f(a) {
			e().changeChannel(a)
		}
		return this.obj = {}, {
			initPlayer: function(a) {
				return "flash" == a ? c() : d()
			},
			changeChannel: f
		}
	};
$(document).ready(function() {
	var a = new player("player", (!1)),
		b = new player("miniplayer", (!0)),
		c = b.initPlayer(isIPad() ? "video" : "flash"),
		d = (new Date).getDay() + 1,
		e = 1288;
	$(".player").html(a.initPlayer(isIPad() ? "video" : "flash"));
	var f = parseInt((new Date).getTime() / 1e3),
		g = [],
		h = $(".playerWrapper .list");
	h.tinyscrollbar();
	for (var i = h.data("plugin_tinyscrollbar"), j = 0; j < programList.prolist.length; j++) if (f > programList.prolist[j].endtime) {
		var k = playedItem(programList.prolist[j]);
		k.echo("click", function(b) {
			nowPlayInfo(b, "islive", c), a.changeChannel(d + b.pid + e)
		}), g.push(k)
	} else if (f < programList.prolist[j].starttime) {
		var k = playItem(programList.prolist[j]);
		g.push(k)
	} else {
		var k = liveItem(programList.prolist[j], "live");
		nowPlayInfo(programList.prolist[j]), g.push(k)
	}
	$(".playerWrapper .list ul").append(g), i.update("bottom")
});