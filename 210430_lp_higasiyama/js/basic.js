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
	


	/*�N���X�����utrans�v���w��œ���60��*/

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
	/*�|�b�v�A�b�v�^�N���X�����upopup�v���w��*/

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

//*�}�E�X�I�[�o�[ TOP*/
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
	
	
// page Top�t�F�[�h�C���E�A�E�g
$(function(){
	$(window).bind("scroll", function() {
	if ($(this).scrollTop() > 150) { 
		$(".gotop").fadeIn();
	} else {
		$(".gotop").fadeOut();
	}
	// �h�L�������g�̍���
	scrollHeight = $(document).height();
	// �E�B���h�E�̍���+�X�N���[������������ ���݂̃g�b�v����̈ʒu
	scrollPosition = $(window).height() + $(window).scrollTop();
	// �t�b�^�[�̍���
	footHeight = $("footer").height();
	
	// �X�N���[���ʒu���t�b�^�[�܂ŗ�����
	if ( scrollHeight - scrollPosition  <= footHeight ) {
		// �y�[�W�g�b�v�����N���t�b�^�[�ɌŒ�
		$(".gotop a").css({"position":"fixed","bottom": "10px"});
	} else {
		// �y�[�W�g�b�v�����N���E���ɌŒ�
		$(".gotop a").css({"position":"fixed","bottom": "25px"});
		}
	});
});


  
