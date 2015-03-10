// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }
//
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


// remap jQuery to $
(function($){

		var dBtn = $('#splash h3');
		var logo = $('#main h1');

		function sizeGrids(){
			$('#vendors>ul>li').height($('#vendors li').width());
			$('#marketplace').height(window.innerHeight)
		};

		function userScroll(){
			$(window).bind('touchmove scroll', function(e) { 
				tDis = $(document).scrollTop();

				if(tDis >= ((window.innerHeight/4)*3) ){
					dBtn.css('opacity',0);
					logo.css('margin-top','9px');
				}else{
					dBtn.css('opacity',1);
					logo.css('margin-top','-100px');
				}
			});
		};

		function userClicks(){
			$('#splash h3').bind('click', function(){
				$('html, body').animate({
			        scrollTop: window.innerHeight
			    }, 500, function(){
			    });
			});

			$('#main ul li a').on('click', function(){
				var click = $(this).attr('href');
				$('html, body').animate({
			        scrollTop: $(""+click+"").offset().top
			    }, 850);
			    return false;
			});

			$('#navBtn').bind('click', function(){
				$(this).toggleClass('active');
				$('#main nav').toggleClass('open');
			});
		};
		

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
		sizeGrids();
		userScroll();
		userClicks();
	
	});
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		sizeGrids();
	});

})(window.jQuery);