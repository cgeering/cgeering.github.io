$(document).ready(function() {
	// StickNav
	$('#nav').waypoint(function(direction){
		if (direction == 'down') {
			$('#nav').css({'position':'fixed', 'top': '0px'});
		} else {
			$('#nav').css({'position':'absolute', 'top':'auto'});
		}
	});
	// stickyNav

	// Carousel
	$('#carousel-prev').click(function() {
       var carousel_margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if(carousel_margin >= 0) {
            return false;
        } else {
            $('#carousel').animate({'marginLeft': '+=672px'}, 750, "easeOutCirc");
        }
    });

    $('#carousel-next').click(function() {
       var carousel_margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if(carousel_margin <= -4032) {
            return false;
        } else {
            $('#carousel').animate({'marginLeft': '-=672px'}, 750, "easeOutCirc");
        }
    });
    // end carousel

   
    //buttons
	$("#nav-search").hover(function () {
	    $("#nav-search-icon").attr("src","assets/images/magglass-hover.svg");
	    $('#search-modal-container').slideDown(400);
	},function () {
		$("#nav-search-icon").attr("src","assets/images/magglass.svg");
		$('#search-modal-container').slideUp(100);
	});

	$("#login-container").hover(function () {
	    $("#fan-login-icon").attr("src","assets/images/jersey-hover.svg");
	    $("#fan-login-icon").css({'background': '#003262'});
	},function () {
		$("#fan-login-icon").attr("src","assets/images/jersey.svg");
		$("#fan-login-icon").css({'background': '#ffc72c'});
	});

	$("#cancel-button").click(function() {
		$('#search-modal-container').slideUp(100);
	});

	$("#search-button").click(function() {
		alert("Woopsies, looks like someone forgot the backend... :'(");
		$('#search-modal-container').slideUp(100);
	});
    var modalFadeTime = 200;
    $('#login-container').click(function() {
        $('#login-modal-container').fadeIn(modalFadeTime);
    });
    
    $('#login-cancel-button').click(function() {
        $('#login-modal-container').fadeOut(modalFadeTime);
    });

    $('#submit-button').click(function() {
    	alert("Woopsies, looks like someone forgot the backend... :'(");
        $('#login-modal-container').fadeOut(modalFadeTime);
    });

    $('#login-modal-overlay').click(function() {
        $('#login-modal-container').fadeOut(modalFadeTime);
    });
    //buttons

    var numbers = [2,3,6,7,9,11,13,17,18,19,20,21,23,25,26,27,28,30];
    var count = 0;
	$(".number").each(function(){
    	$(this).text("#"+numbers[count]);
    	count++;
	});

	$('.hover').hover(function(){
      	$(this).addClass('flip');
    },function(){
        $(this).removeClass('flip');
    });

    var $container = $('#post-container');
	// initialize
	$container.masonry({
  		gutter: 0,
  		itemSelector: '.post'
	});
});