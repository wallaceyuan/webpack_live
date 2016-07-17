import './css/live.css';
import './css/live.scss';
import './css/public.css';

import videofc from './js/videofc.js';
import videoInt from './js/videoInit.js';

var sharebtn = videoInt.share(info);

videoInt.weiXin();videoInt.bar();videoInt.weather();
var d = navigator.userAgent.indexOf("MSIE 8") > -1 || navigator.userAgent.indexOf("MSIE 7") > -1;
if(d){
	$(".header .header-content ").css({
		"margin-right":'10px'
	})
}

$(".liveShare").append(sharebtn.wb,sharebtn.qq,sharebtn.wx);
videoInt.zbInit();videofc.liveInit();
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
videoInt.widthJudgeLive();
$(window).resize(function() {
	videoInt.widthJudgeLive();
});
