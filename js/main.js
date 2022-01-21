$(function(){
	$(window).on("resize", function(){
		var headerHeight = $('#header').outerHeight()
		var winWidth = $(window).width();
		//$('#body_wrap').css({'padding-top':headerHeight + 'px'});
		if(winWidth > 720){
			$('.logo img').attr('src', './assets/images/common/logo.png');
		
		
		} else {
			$('.logo img').attr('src', './assets/images/common/m_logo.png');
		
		}
	});
	$(window).trigger("resize"); 
});

<!-- 로딩 이미지 -->
$(window).load(function() { $('#loading').hide(); });