$(document).ready(function() {

	$('#nav').waypoint(function(direction){
		if (direction == 'down') {
			$('#nav').css({'position':'fixed', 'top': '0px'});
		} else {
			$('#nav').css({'position':'absolute', 'top': 'auto'});
		}
	});
	// $(window).scroll(function() {
	// 	var offset = $(window).scrollTop();
	// 	if(offset >= 100) {
	// 		//alert("offset detected");
	// 		$('#nav').css({'position': 'fixed', 'top': '0px'});
	// 	} else {
	// 		$('#nav').css({'position': 'absolute', 'top': 'auto'});
	// 	}
 //    });

	$('#carousel-prev').click(function() {
       var carousel_margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if(carousel_margin >= 0) {
            return false;
        } else {
            $('#carousel').animate({'marginLeft': '+=960px'}, 500);
        }
    });

	// IMPLEMENT THE "SLIDE TO RIGHT" WHEN "CLICK ON CAROUSEL-PREV" HERE
    $('#carousel-next').click(function() {
       var carousel_margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if(carousel_margin <= -3840) {
            return false;
        } else {
            $('#carousel').animate({'marginLeft': '-=960px'}, 500);
        }
    });

	$("#nav-search").hover(function () {
	    $("#nav-search-button").attr("src","assets/images/search-icon-hover.svg");
	},function () {
		$("#nav-search-button").attr("src","assets/images/search-icon.svg");
	});
});