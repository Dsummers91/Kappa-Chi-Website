fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=pbs_1914&count=1')

jQuery(document).ready(function ($) {

	$('.nav li, .nav li').on({
		mouseenter: function() {
			$(this).children('ul').stop(true, true).slideDown(400);
		},
		mouseleave: function() {
			$(this).children('ul').slideUp(100);
		}
	});
	
	
    /* BX slider 1*/
	var bannerslider = $('#banner_slider');
    if (bannerslider.length) {
        bannerslider.bxSlider({ auto: true, minSlides: 1, maxSlides: 1, slideMargin: 18, speed: 500 });
    }
	var newslider = $('#news_slider');
    if (newslider.length) {
        newslider.bxSlider({ minSlides: 1, maxSlides: 1, slideMargin: 18, speed: 500 });
    }
	var videoslider = $('.video_slider');
    if (videoslider.length) {
        videoslider.bxSlider({ minSlides: 1, maxSlides: 1, slideMargin: 25, speed: 500, });
    }
	var blogslider = $('#blog_slider');
    if (blogslider.length) {
        blogslider.bxSlider({ minSlides: 1, maxSlides: 1 });
    }
	var shopslider = $('#shop_slider');
    if (shopslider.length) {
        shopslider.bxSlider({ slideWidth: 140,minSlides: 1, maxSlides: 3, slideMargin: 28 });
    }
	var officeslider = $('#office_slider');
    if (officeslider.length) {
        officeslider.bxSlider({ slideWidth: 270, minSlides: 1, maxSlides: 4, slideMargin: 28 });
    }
	var productslider = $('#slider_products');
    if (productslider.length) {
       productslider.bxSlider({ slideWidth: 270, minSlides: 1, maxSlides: 1, slideMargin: 10 });
    }

    /* bootstrap Add class to accordion **/
    var sidebar = $('.accordion-heading'); /* cache sidebar to a variable for performance */
    sidebar.delegate('.accordion-toggle', 'click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).addClass('inactive');
            $("#icon_toggle i", this).removeClass('icon-minus').addClass('icon-plus');
        } else {
            sidebar.find('.active').addClass('inactive');
            sidebar.find('.active').removeClass('active');
            $(this).removeClass('inactive');
            $(this).addClass('active');
            $("#icon_toggle i", this).removeClass('icon-plus').addClass('icon-minus');
        }
    });
    /* End of bootstrap Add class to accordion **/

    /* Footer Gallery Pretty Photo Widget **/
    $(".gallery-list:first a[data-rel^='prettyPhoto']").prettyPhoto({ animation_speed: 'normal', theme: 'light_square', slideshow: 3000, autoplay_slideshow: true });
    /* End of Footer Gallery Pretty Photo Widget **/
	
	/* Start of Photo Gallery Pretty Photo **/
	$(".gallery-page:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed: 'normal',theme: 'light_square', slideshow: 3000, autoplay_slideshow: true });
	/* End of Photo Gallery Pretty Photo **/
});
/* End of Counter */

jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});