module.exports = {
	liveWidth:function(){
		if(now =='now'){
			dateHeight = 70,$('.date-box').css('display','none');
			$('.live-tabs h3').eq(0).html('直播列表');
			var logo = '<i class="live-btn left"></i>';
		}else{
			dateHeight=0,$('.date-box').css('display','block');
			$('.live-tabs h3').eq(0).html('电视回看');
			var logo = '<i class="support-btn left"><img src="../app/images/logo.png" width="100%"></i>';
		}

		$('.thumb-container').html(logo);

		var d = navigator.userAgent.indexOf("MSIE 8") > -1 || navigator.userAgent.indexOf("MSIE 7") > -1;
		var p = this.isIPad();

		console.log(p);
		var e = $(".section").width(),
			t = parseInt(9 * e / 16);

		$(".screen embed, .screen object").css({
			width: e,
			height: t
		}), $(".screen").height(t);


		var h = $('.live-box .section').height();
		console.log(h);
		var i = $(window).height();
		!p? $(".live-box .live-Interaction").height(i - 146): $(".live-box .live-Interaction").height(h- 70 + dateHeight),
			/*!p?$('.tabcon').height(i - 160 + dateHeight):$('.tabcon').height(h-38),*/!p? $(".live-box .live-tab-content").height(i - 190):$(".live-box .live-tab-content").height(h- 108 + dateHeight), $("#mod-comment").height(i - 255),d && ($(window).width() < 1180 ? ($(".section").css("margin-right", 0), $(".aside").css("display", "none")) : ($(".section").css("margin-right", "426"), $(".aside").css("display", "block")))
	},
	share:function (shareinfo){
		title=shareinfo.title;
		url=shareinfo.url;
		pic=shareinfo.titlepic;
		if(typeof pic =="undefined"){
			pic="";
		}
		sharebtn={
			wb:$('<a class="wb left" target="_blank" href="http://service.t.sina.com.cn/share/share.php?appkey=2579900422&ralateUid=1845864154&title='+title+'&url='+url+'&pic='+pic+'"><i></i></a>'),
			qq:$('<a class="qq left" target="_blank" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+url+'&site=&title='+title+'&pics='+pic+'"><i></i></a>'),
			wx:$('<a class="wx left" target="_blank" dataurl="'+url+'" href="javascript:void(0)"><i></i></a>').bind("click",function(){
				$(".weixin-con img").attr("src","http://s.jiathis.com/qrcode.php?url="+$(this).attr("dataurl"));
				$("#weixin").toggle();
				return false;
			}),
			email:$('<a class="email left" target="_blank" href="mailto:"><i></i></a>'),
			sprint:$('<a class="print left" target="_blank" href="javascript:void(0)"><i></i></a>').bind("click",function(){$("body").html($("h1").html()+"<br/>"+$(".publish-data").html()+$(".resource").html()+"<br/>"+$('.context').html());window.print();}),
			appad:$('<div class="app right clearfix"><p class="right"><a class="btnInstallApp" title="iPhone" href="http://www.kankanews.com/m/jianghu.html" target="_blank">立即下载</a></p><img class="left" src="http://skin.kankanews.com/mobile/jh/images/logo_jh180.jpg"><span>下载江湖客户端</span><em>有人的地方就有江湖</em></div>')
		};
		return sharebtn;
	},
	isIPad:function(){
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/iPad/i)=="ipad") {
			return true;
		} else {
			return false;
		}
	}
}

