var b =  {
    widthClass :"",
    c_w:$(window).width(),
    or:$(window).width()
};
module.exports = {
	zbInit:function(){
		$('body').addClass('in-live');
        $('.live-box').addClass('choose');
		this.zbLiveWidth();
	},
	hkInit:function(){
		$('body').addClass('in-hk');
		$('.non-live-box').removeClass('hidden');
        $('.non-live-box').addClass('choose');
		this.hkLiveWidth();
	},
	zbLiveWidth:function(){
    this.widthJudge();
		//console.log('zbLiveWidth');
		var d = navigator.userAgent.indexOf("MSIE 8") > -1 || navigator.userAgent.indexOf("MSIE 7") > -1;
		var p = this.isIPad();
		var e = $(".live-box .section").width(),
			t = parseInt(9 * e / 16)+45;
/*		$(".screen embed, .screen object").css({
			width: e,
			height: t
		}), $(".screen").height(t);*/
		var h = $('.live-box .section').height();
		var i = $(window).height();
        if(p){
            //$(".live-box .live-Interaction").height(h),$(".live-box .live-tab-content").height(h- 38)
        }else{
/*            $(".live-box .live-Interaction").height(i - 78), $(".live-box .live-tab-content").height(i - 110- 38 -10).css('padding-bottom','10px')*/
        }
		$("#mod-comment").height(i - 255),d && ($(window).width() < 1180 ? ($(".section").css("margin-right", 0), $(".aside").css("display", "none")) : ($(".section").css("margin-right", "426"), $(".aside").css("display", "block")))
	},
	hkLiveWidth:function(){
		var dateHeight = 75,itemHeight = 77;
		var d = navigator.userAgent.indexOf("MSIE 8") > -1 || navigator.userAgent.indexOf("MSIE 7") > -1;
		var p = this.isIPad();
		var c_w = $(window).width();
		var video_w = c_w -575-30;
		var e = video_w,
    t = parseInt(9 * e / 16)+45;
		var h = $('.non-live-box .section').height();
    if(p){
        $(".non-live-box .live-Interaction").height(h),$(".non-live-box .live-tab-content").height(h - 38-47)
    }
    if(d){
        $('.non-live-box').width('1319px');
        this.widthJudge();
    }
    $('.listcontrol-btn').on('click',function(){
    	if($('body').hasClass('play-rc-pack')){
    		$('body').removeClass('play-rc-pack');
    	}else{
    		$('body').addClass('play-rc-pack');
    	}
    });
	},
  widthJudgeLive:function(){
      var c_w = $(window).width();
      $('body').removeClass(b.widthClass);
      if(c_w<1920){
          b.widthClass = 'kkpage-1920';
      }
      if(c_w<1680){
          b. widthClass = 'kkpage-1680';
      }
      if(c_w<1440){
          b.widthClass = 'kkpage-1440';
      }
      if(c_w<1180){
          b.widthClass = 'kkpage-1180';
      }
      if(c_w<980){
          b.widthClass = 'kkpage-980';
      }
      $('body').addClass(b.widthClass);
  },
  widthJudge:function(){
      var c_w = $(window).width();
      if(c_w<1920){
          b.widthClass = 'kkpage-1920';
      }
      if(c_w<1680){
          b. widthClass = 'kkpage-1680';
      }
      if(c_w<1440){
          b.widthClass = 'kkpage-1440';
      }
      if(c_w<1180){
          b.widthClass = 'kkpage-1180';
      }
      if(c_w<980){
          b.widthClass = 'kkpage-980';
      }
      $('body').addClass(b.widthClass);
  },
	share:function (shareinfo){
		var title=shareinfo.title;
		var url=shareinfo.url;
		var pic=shareinfo.titlepic;
		if(typeof pic =="undefined"){
			pic="";
		}
		var sharebtn={
			wb:$('<a class="wb left" target="_blank" href="http://service.t.sina.com.cn/share/share.php?appkey=2579900422&ralateUid=1845864154&title='+title+'&url='+url+'&pic='+pic+'"><i></i></a>'),
			qq:$('<a class="qq left" target="_blank" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+url+'&site=&title='+title+'&pics='+pic+'"><i></i></a>'),
			wx:$('<a class="wx left" target="_blank" dataurl="'+url+'" href="javascript:void(0)"><i></i></a>').bind("click",function(){
				$(".weixin-con img").attr("src","http://s.jiathis.com/qrcode.php?url="+$(this).attr("dataurl"));
				$("#weixin").toggle();
				return false;
			}),
			email:$('<a class="email left" target="_blank" href="mailto:"><i></i></a>'),
			sprint:$('<a class="print left" target="_blank" href="javascript:void(0)"><i></i></a>').bind("click",function(){$("body").html($("h1").html()+"<br/>"+$(".publish-data").html()+$(".resource").html()+"<br/>"+$('.context').html());window.print();}),
			appad:$('<div class="app right clearfix"><p class="right"><a class="btnInstallApp" title="iPhone" href="http://www.kankanews.com/m/jianghu.html" target="_blank">&#x7ACB;&#x5373;&#x4E0B;&#x8F7D;</a></p><img class="left" src="http://skin.kankanews.com/mobile/jh/images/logo_jh180.jpg"><span>&#x4E0B;&#x8F7D;&#x6C5F;&#x6E56;&#x5BA2;&#x6237;&#x7AEF;</span><em>&#x6709;&#x4EBA;&#x7684;&#x5730;&#x65B9;&#x5C31;&#x6709;&#x6C5F;&#x6E56;</em></div>')
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
	},
	weiXin:function(){
		var weixin=$('<div class="weixin-cen" id="weixin"><div class="weixin_close clearfix"><p class="left">&#x4EB2;&#xFF0C;&#x8BF7;&#x626B;&#x63CF;&#x4E0B;&#x65B9;&#x4E8C;&#x7EF4;&#x7801;&#xFF0C;&#x5206;&#x4EAB;&#x7ED9;&#x5FAE;&#x4FE1;&#x7684;&#x5C0F;&#x4F19;&#x4F34;&#x4EEC;&#xFF01;</p><img class="right" src="http://skin.kankanews.com/v5/images/icon_close.gif"></div><div class="weixin-con" id="wxcode"><img src="" width="250" height="250" alt="&#x7F51;&#x5740;URL&#x4E8C;&#x7EF4;&#x7801;&#x751F;&#x6210;"></div><div class="sm">&#x6253;&#x5F00;&#x5FAE;&#x4FE1;&#xFF0C;&#x70B9;&#x51FB;&#x754C;&#x9762;&#x53F3;&#x4E0A;&#x89D2;&#x9B54;&#x672F;&#x68D2;&#xFF0C;&#x9009;&#x62E9;"&#x626B;&#x4E00;&#x626B;"<br>&#x6253;&#x5F00;&#x5FAE;&#x4FE1;&#xFF0C;&#x70B9;&#x51FB;&#x53D1;&#x73B0;&#xFF0C;&#x9009;&#x62E9;"&#x626B;&#x4E00;&#x626B;"&#xFF08;5.0&#x4EE5;&#x4E0A;&#x7248;&#x672C;&#xFF09;</div></div>');
		weixin.find(".weixin_close img").bind("click",function(){$("#weixin").hide();});
		$("body").append(weixin);
	},
	bar:function(){
		var isOpen = true;
		var navTimeOut;
		var closeNav = function(){
			isOpen = true;
			$("#more").toggleClass('open');
			$(".subnav").slideToggle("fast");
		};
		var openNav = function(){
			isOpen = false;
			$("#more").toggleClass('open');
			$(".subnav").slideToggle("fast");
		};
		$("#more").mouseover(function(){
			if(isOpen){
				openNav();
			}else{
				clearTimeout(navTimeOut);
			}
		});
		$(".subnav").mouseover(function(){
			clearTimeout(navTimeOut);
		});
		$("#more").mouseleave(function(){
			if(!isOpen){
				clearTimeout(navTimeOut);
				navTimeOut = setTimeout(function(){
					closeNav();
				},1000);
			}
		});
		$(".subnav").mouseleave(function(){
			if(!isOpen){
				clearTimeout(navTimeOut);
				navTimeOut = setTimeout(function(){
					closeNav();
				},1000);
			}
		});
	},
	weather:function(){
		$.ajax({
			url: 'http://www.kankanews.com/list/weather?jsoncallback=?',
			dataType: "json",
			success: function (obj) {
				var weather_str='',weather='',tempe='',pic='',pic2='',w;
				weather_str='上海'+obj.list.weather;
				weather=$('<span class="tempe">'+weather_str+'</span>');
				tempe=$('<span class="tempe">'+obj.list.tempe+'</span>');
				pic=$('<img src="'+obj.list.pic+'">');
				for(var i=0;i<obj.yj.length;i++){
					pic2+='<img src="http://shanghaicity.openservice.kankanews.com/'+obj.yj[i]+'">';
				}
				w=$("<div class='weather right'>");
				w.append(pic2,pic,weather,tempe);
				$(".header-content").append(w);
				if(device.type === "pad") {
					$(".weather").css({"height":'40px','overflow':'hidden', 'margin-top':'20px'});
					$(".weather img").css({"float":'left','padding-right':'10px'});
					var width=$(document).width();
					$(".weather span").css({'height':'20px','line-height':'20px'});
					if($("span.tempe").width()+50>320){
						$(".weather span").css("display","inline");
					}else{
						$(".weather span").css({"display":"block","width":$("span.tempe").width()+50+'px'});
					}
					$(".weather").css("max-width",'320px');
				}
			}
		});

	}
};
