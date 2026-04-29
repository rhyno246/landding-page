
$( document ).ready(function(){

	// $('a.scroll').on('click', function(e) {
	// 	e.preventDefault()
	// })

	// $('.register').on('click', event => {
	// 	// var $anchor = $(this);
	// 	$('html, body').stop().animate({
	// 		scrollTop: $('.form-container').offset().top - 150
	// 	}, 500);
	// 	event.preventDefault();
	// });


	$(document).on('click', 'a.btn-link-img[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			 scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

	$(document).on('click', 'a.sticky-link[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			 scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

	$('.video-btn-play').on('click', evt => {
		const srcVideo = 'https://www.youtube.com/embed/cwCD0kRbFMY?enablejsapi&autoplay=1"';
		$('.video-container').addClass('play-video');
		$("#video")[0].src = srcVideo;
	});

	$('.collapse-card-xuxi').on('shown.bs.collapse', function () {
		$('.collapse-card-xuxi').addClass('disable-overflow');
	});
});

$('#back-to-top').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
});

$('#redirect-fb').on('click', function(e) {
	window.open('https://www.facebook.com/Xuxifarm');
});

$(function(){
	$('a.link-show-collapse').click(function(event) {
		event.preventDefault();
		$('.collapse-card-xuxi').collapse('hide');
		var currentHref = $(this).attr("href");
		var show = false;
		$(currentHref).on('shown.bs.collapse', function () {
			show = true;
		});
		if (currentHref && show) {
			setTimeout(function() {
				$(currentHref).collapse('toggle');
				$('html, body').animate({
					scrollTop: $(currentHref).offset().top - 100
				}, 500);
			}, 500);
		}
	})



	$(document).scroll(function(){
		if($(this).scrollTop() >= $('#prize').offset().top - 40) {
			$(".sticky-menu").addClass('show');
			$('#back-to-top').addClass('show');
		} else {
			$(".sticky-menu").removeClass('show');
			$('#back-to-top').removeClass('show');
		}
	});
});

$(window).bind('mousewheel', function(event) {
	if (event.originalEvent.wheelDelta >= 0) {
		// console.log('Scroll up');
		$(".sticky-menu").removeClass('hidden-scroll-down');
	} else {
		$(".sticky-menu").addClass('hidden-scroll-down');
	}
});