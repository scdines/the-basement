// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }
//
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


// remap jQuery to $
(function($){


		function sizeGrids(){
			$('#spaces>ul>li').height($('#spaces li').width());
			$('#plans').height(window.innerHeight)
		};

		

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
		sizeGrids();
	
	});
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		sizeGrids();
	});

})(window.jQuery);