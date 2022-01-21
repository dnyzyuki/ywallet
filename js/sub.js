$(function(){
	

	//s_tab
	$(".tab a").on("click", function(e){
		e.preventDefault();
		var ts = $(this);
		var idxNum = $(".tab a").index(ts);
		if(!ts.hasClass("active")){
			$(this).parent().children().filter(".active").removeClass("active");
			ts.addClass("active");
			
		$(this).parent(".tab").next(".tab_con_wrap").find(".tab_con").filter(".active").removeClass("active");
		$(this).parent(".tab").next(".tab_con_wrap").find(".tab_con").eq(idxNum).addClass("active");
		}
	});
	
	
	// 탭 컨텐츠 숨기기
	$(".mytab_con").hide();

	// 첫번째 탭콘텐츠 보이기
	$(".box_body").each(function () {
		$(this).children(".mytab a:first").addClass("active"); //Activate first tab
		$(this).children(".mytab_con_wrap").children(".mytab_con").first().show();
	});
	//탭메뉴 클릭 이벤트
	$(".mytab a").click(function () {
		$(this).parent().children().removeClass("active");
		$(this).addClass("active");
		$(this).parent().parent().find(".mytab_con").hide();
		var activeTab = $(this).attr("rel");
		 $("#" + activeTab).fadeIn();
	});
	/*
	$('.question_tip').on('mouseenter', function(){
		$(this).next('.question_tip_wrap').fadeIn();
	});
	$('.question_tip_wrap').on('mouseleave', function(){
		$(this).fadeOut();
	});
	*/
	$('.question_tip').on('click', function(){
		$(this).next('.question_tip_wrap').fadeIn();
	});
	$('.question_tip_wrap button').on('click', function(){
		$(this).parents('.question_tip_wrap').fadeOut();
	});
	
	

	$(window).on("resize", function(){
		var headerHeight = $('#header').outerHeight()
		var winWidth = $(window).width();
		
		//$('#body_wrap').css({'padding-top':headerHeight + 'px'});
		
		if(winWidth > 720){
			$('.logo img').attr('src', '../../assets/images/common/logo.png');
		
		
		} else {
			$('.logo img').attr('src', '../../assets/images/common/m_logo.png');
		
		}
		$('.link_jump').click(function(e){
			e.preventDefault()
			$('html,body').animate({scrollTop:$(this.hash).offset().top - headerHeight}, 500);
		});
	});
	$(window).trigger("resize");  
	
});