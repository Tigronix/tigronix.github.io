"use strict"



//owl-slider
function slider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.vert-slider__wrap';
	items = items || 1;
	navContainer = navContainer || '.vert-slider__nav-arrows';
	navText = navText || ['', ''];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			navContainer: navContainer,
			navText: navText,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			URLhashListener: true,
      startPosition: 'URLHash',
			dots: true,
			dotsEach: true,
			dotsContainer: '.vert-slider__dots',
			onInitialized: function(p){
				var arrayItems = $('.vert-slider__nav-item');
				arrayItems.each(function(){
					$('.vert-slider__nav-item:first-child').addClass('active').siblings().removeClass('active');
					var top = $(this).position().top;
					var index = $(this).index();
					arrayPosition[index] = top;
				});
			},
			onChanged: function(p){
				$('.vert-slider__nav').animate({ scrollTop: arrayPosition[p.page.index]}, 300);
				$('.vert-slider__nav-item:eq('+p.page.index+')').addClass('active').siblings().removeClass('active');
			}
		});
		$('.vert-slider__nav-item').on('click', function(){
			var index = $(this).index();

			$(this).addClass('active').siblings().removeClass('active');
			$(elem).trigger('to.owl.carousel', [index]);
		});

	}
}

window.onload = function() {
	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	slider();
};
