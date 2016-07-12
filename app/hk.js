import './css/hk.css';
import './css/public.css';
import './css/media.scss';
import videofc from './js/videofc.js';
import videoInt from './js/videoInit.js';

var sharebtn = videoInt.share(info);

videoInt.weiXin();videoInt.bar();videoInt.weather();
var d = navigator.userAgent.indexOf("MSIE 8") > -1 || navigator.userAgent.indexOf("MSIE 7") > -1;
/*if(d){
	$(".header .header-content ").css({
		"margin-right":'10px'
	})
}*/

$(".liveShare").append(sharebtn.wb,sharebtn.qq,sharebtn.wx);
videoInt.hkInit();
videofc.hkChannelInit();
videofc.hkTime();videofc.hkClick();videofc.changeItem();
$(".non-live-box #content-3").mCustomScrollbar({
	callbacks:{
		onInit: function(){

		}
	}
});
$(".non-live-box #content-4").mCustomScrollbar({
	callbacks:{
			onInit: function(){

			}
	}
});
$(window).resize(function() {
	//videoInt.hkLiveWidth();
});
