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
            $('#carousel').animate({'marginLeft': '+=672px'}, 500, "easeOutCirc");
        }
    });

    $('#carousel-next').click(function() {
       var carousel_margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if(carousel_margin <= -4032) {
            return false;
        } else {
            $('#carousel').animate({'marginLeft': '-=672px'}, 500, "easeOutCirc");
        }
    });
    // end carousel

   
    //buttons
	$("#nav-search").hover(function () {
	    $("#nav-search-button").attr("src","assets/images/search-icon-hover.svg");
	    $('#search-modal-container').slideDown(400);
	},function () {
		$("#nav-search-button").attr("src","assets/images/search-icon.svg");
		$('#search-modal-container').slideUp(100);
	});

	$("#fan-login-icon").hover(function () {
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
		alert("Woopsies, looks like some one forgot the backend... :'(");
		$('#search-modal-container').slideUp(100);
	});

    $('#fan-login-icon').click(function() {
        $('#login-modal-container').slideDown(400);
    });
    
    $('.modal-button').click(function() {
        $('#login-modal-container').hide();
    });

    $('#login-modal-overlay').click(function() {
        $('#login-modal-container').hide();
    });
    //buttons

    var count = 1;
	$(".number").each(function(){
    	$(this).text("#"+count);
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