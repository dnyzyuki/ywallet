
function loginOpen(){
	$('.login_pop').fadeIn();
}

function loginClose(){
	$('.login_pop').fadeOut();
}

$(function(){

	

	$('#header .open_sitemap a').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		if(!$(this).hasClass('active')){
			$(this).parent().removeClass('active');
			$('#header .sitemap').animate({right:-300 + '%'},300);
			$('html, body').css({'overflow-y':'auto'});
			$('#gnb_bg').fadeOut();
		} else {
			$(this).addClass('active');
			$(this).parent().addClass('active');
			$('#header .sitemap').animate({right:0},300);
			$('html, body').css({'overflow-y':'hidden'});	
			$('#gnb_bg').fadeIn();
		}
	});

	

	$('.select_box .select_txt').on('click',function(){
		$('.select_box .select_txt').removeClass('active');
		if($(this).next().is(':visible')){
				$(this).next().slideUp(100);
		} else if($(this).next().is(':hidden')){
				$('.select_box .select_txt').next().slideUp(100);
				$(this).addClass('active');
				$(this).next().slideDown();
		}
	});
	$('.select_box').on('mouseleave', function(){
		$('.select_box .select_txt').removeClass('active');
		$(this).find('.select_list').slideUp(100);
	});
	
	$('#top_trigger').click(function(){
		$('html,body').animate({scrollTop:0},1000)
	});

	$(document).ready(function(){
	
	});
	$(window).scroll(function(){
		
	});


	
	$(window).on("resize", function(){
		var headerHeight = $('#header').outerHeight()
		var winWidth = $(window).width();
		//$('#body_wrap').css({'padding-top':headerHeight + 'px'});
		if(winWidth > 720){
			$('#header #gnb').removeClass('sitemap');
			$('.dep2_wrap').stop().hide();
			$('#gnb .dep1_con .dep1').on('mouseenter', function(){
				$(this).next().stop().fadeIn();
			});
			$('#gnb .dep1_con').on('mouseleave', function(){
				$(this).find('.dep2_wrap').stop().fadeOut();
			});
		
		} else {
			$('#header #gnb').addClass('sitemap');
			$('.dep2_wrap').stop().show();
			$('#gnb .dep1_con .dep1').off('mouseenter', function(){
			});
			$('#gnb .dep1_con').off('mouseleave', function(){
			});
		}
	});
	$(window).trigger("resize");  
	
	
	$('.ani_top').scrollex({
		top:'15%',
		bottom:'-100000px',
		enter: function(){
			$(this).addClass('move');
		}
	});
	$('.ani_left').scrollex({
		top:'15%',
		bottom:'-100000px',
		enter: function(){
			$(this).addClass('move');
		}
	});
	$('.ani_right').scrollex({
		top:'15%',
		bottom:'-100000px',
		enter: function(){
			$(this).addClass('move');
		}
	});
});