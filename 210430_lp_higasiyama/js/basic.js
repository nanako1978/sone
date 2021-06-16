// JavaScript Document

function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");
		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}
if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}
	


	/*クラス名を「trans」を指定で透過60％*/

$(function() {
	var nav = $('.trans,#g_nav a img');
	nav.hover(
		function(){
			$(this).fadeTo(200,0.7);
		},
		function () {
			$(this).fadeTo(200,1);
		}
	);
});
	/*ポップアップ／クラス名を「popup」を指定*/

window.onload = function (){
	var node_a = document.getElementsByTagName('a');
		for (var i in node_a) {
			if(node_a[i].className == 'popup'){
				node_a[i].onclick = function() {
					return winOpen(this.href, this.rel)
				};
			}
		}
} ;

function winOpen(url, rel) {
	var split = rel.split(',') ;
	window.open(
	url,'popup',
	'width='+ split[0] +',height='+ split[1] +',toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes');

	return false;
};

//*マウスオーバー TOP*/
  $(function(){
		$('#top_list_01 li').hover(function() {
		$('.bg',this).stop().animate({'opacity':'0.3'}, 400);
		},
	function() {
		$('.bg',this).stop().animate({'opacity':'1'}, 400);
		});
	});
  $(function(){
		$('#top_list_02').hover(function() {
		$('p',this).stop().animate({'opacity':'0.7'}, 400);
		},
	function() {
		$('p',this).stop().animate({'opacity':'1'}, 400);
		});
	});
  $(function(){
		$('#top_list_03').hover(function() {
		$('p',this).stop().animate({'opacity':'0.7'}, 400);
		},
	function() {
		$('p',this).stop().animate({'opacity':'1'}, 400);
		});
	});
	
	
// page Topフェードイン・アウト
$(function(){
	$(window).bind("scroll", function() {
	if ($(this).scrollTop() > 150) { 
		$(".gotop").fadeIn();
	} else {
		$(".gotop").fadeOut();
	}
	// ドキュメントの高さ
	scrollHeight = $(document).height();
	// ウィンドウの高さ+スクロールした高さ→ 現在のトップからの位置
	scrollPosition = $(window).height() + $(window).scrollTop();
	// フッターの高さ
	footHeight = $("footer").height();
	
	// スクロール位置がフッターまで来たら
	if ( scrollHeight - scrollPosition  <= footHeight ) {
		// ページトップリンクをフッターに固定
		$(".gotop a").css({"position":"fixed","bottom": "10px"});
	} else {
		// ページトップリンクを右下に固定
		$(".gotop a").css({"position":"fixed","bottom": "25px"});
		}
	});
});


  
