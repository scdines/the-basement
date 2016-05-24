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
			setTimeout(function(){
				$('#vendors>ul>li').height($('#vendors li').width());
				$('#marketplace').height(window.innerHeight);
			})
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

			$('#main>h1').click(function() {
				$('html').css('overflow','hidden');
		        $("html, body").animate({scrollTop: 0}, 1500, function(){
					$('html').css('overflow','auto');
		        });
		    });



	    	var iframe = document.getElementById('video');
			var player = $f(iframe);
			$('#film h2').on('click',function(){
		    	$('#videoOverlay').css({
						display: 'inherit',
						opacity: 0
					});
				$('#videoOverlay').animate({opacity:'1'}, function(){
					player.api("play");
				});
		    });
		    $('#videoOverlay .close').on('click', function(){
		    	player.api("pause");
				$('#videoOverlay').fadeOut();
		    });

		    $(document).keyup(function(e) {
			  if (e.keyCode == 27) {
			  	player.api("pause");
				$('#videoOverlay').fadeOut();
			  } 
			});
		};

		function scrollNav(){
			/**
		     * This part handles the highlighting functionality.
		     * We use the scroll functionality again, some array creation and 
		     * manipulation, class adding and class removing, and conditional testing
		     */
		    var aChildren = $("nav li").children(); // find the a children of the list items
		    var aArray = []; // create the empty aArray
		    for (var i=0; i < aChildren.length; i++) {    
		        var aChild = aChildren[i];
		        var ahref = $(aChild).attr('href');
		        console.log(ahref);
		        aArray.push(ahref);
		    } // this for loop fills the aArray with attribute href values

		    $(window).scroll(function(){
		        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
		        var windowHeight = $(window).height(); // get the height of the window
		        var docHeight = $(document).height();

		        for (var i=0; i < aArray.length; i++) {
		            var theID = aArray[i];
		            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
		            var divHeight = $(theID).height(); // get the height of the div in question
		            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
		                $("a[href='" + theID + "']").addClass("nav-active");
		            } else {
		                $("a[href='" + theID + "']").removeClass("nav-active");
		            }
		        }

		        if(windowPos + windowHeight == docHeight) {
		            if (!$("nav li:last-child a").hasClass("nav-active")) {
		                var navActiveCurrent = $(".nav-active").attr("href");
		                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
		                $("nav li:last-child a").addClass("nav-active");
		            }
		        }
		    });
		};
		

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
		sizeGrids();
		userScroll();
		userClicks();
		scrollNav();
	
	});
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		sizeGrids();
	});

})(window.jQuery);