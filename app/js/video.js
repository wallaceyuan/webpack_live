module.exports = {
	video:function(){
		$.ajax({
			url: 'http://api.app.kankanews.com/kankan/v5/livePC/stream/live/?jsoncallback=?',
			dataType: "json",
			success: function (data) {
				var str1 = "";
				var str2 = "";
				var liveNew = [];
				var titleObj = [];
				for(var key in data){
					if(data[key].status == "live"){
						liveNew.push(data[key].id);
						titleObj.push(data[key].title);
						str1 += '<div id="' + data[key].id + '" class="live-program inner">'+
							'<div class="videoHuiguImg">'+
								'<img class="highlights-cover" src="http://vpic.video.qq.com/46311901/c0019nxu2p3_160_90_3.jpg">'+
							'</div>'+
							'<div class="videoHuiguTxt">'+
								'<dl>'+
									'<dt><a title="' + data[key].title + '">' + data[key].title + '</a></dt>'+
									'<dd><span class="zixunVico"></span>' + data[key].stime + '</dd>'+
								'</dl>'+
							'</div>'+
						'</div>';
					}else{
						str2 += '<div id="' + data[key].id + '" class="live-program inner foreshow">'+
							'<div class="videoHuiguImg">'+
								'<img class="highlights-cover" src="http://vpic.video.qq.com/46311901/c0019nxu2p3_160_90_3.jpg">'+
							'</div>'+
							'<div class="videoHuiguTxt">'+
								'<dl>'+
								'<dt><a title="' + data[key].title + '">' + data[key].title + '</a></dt>'+
									'<dd><span class="zixunVico"></span>' + data[key].stime + '</dd>'+
								'</dl>'+
							'</div>'+
						'</div>';
					}
				}
				//console.log(liveNew[0]+","+titleObj[0]);
				$(".loading").remove();
				$("#zbLiu").append(str1);
				$("#ygLiu").append(str2);
				$("#zbLiu .inner").eq(0).addClass("now");
				$(".game-head span.title").html(titleObj[0]);
				if (isIPad() || isIPhone()){
					padVideoUrl(liveNew[0]);
					return;
				}
				var palyer = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" name="player1" id="player1"> <param name="movie" value="http://player.kksmg.com/data/player_swf/KKPlayer.swf"> <param name="flashvars" value="playerId=2969363206&liveChannelID='+ data[0].id +'"> <param name="allowFullScreen" value="true"> <param name="wmode" value="transparent"> <param name="allowscriptaccess" value="always"> <embed src="http://player.kksmg.com/data/player_swf/KKPlayer.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" name="player2" id="player2" flashvars="playerId=2969363206&liveChannelID='+ liveNew[0] +'"> </object>';
				$("#livediv").append(palyer);
			}
		});
		$(document).on("click","#zbLiu .inner,#pdLiu .inner",function(){
			if($(this).hasClass("foreshow")){
				return false;
			}else{
				$(".tabcon li").removeClass("now");
				$(this).addClass("now");
				var tit = $(this).find("dt a").html();
				$(".game-head span.title").html(tit);
				var videoId = $(this).attr("id");
				changeChannel(videoId);
			}
		});

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
				$("#ipod_player").html(data[chid]);
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
	}
}


