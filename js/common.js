$(function() {
		//Universal Tabs
    $(document).on('click', '[data-id]', function () {
        var id = $(this).attr('data-id');
        var taba = $(this).attr('data-taba');
        $('[data-id="' + id + '"]').each(function () {
            if ($(this).attr('data-taba') == taba) {
                $(this).addClass('act').siblings().removeClass('act');
            }
        });
        $('#' + id + ' > [data-taba="' + taba + '"]').show().addClass('flex').siblings().hide().removeClass('flex');
    });
	
		//slick
		$('.constructor__combo-slider').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true
		});
	
	//styler
	(function ($) {
		$(function () {
			$('.styler').styler();
		});
	})(jQuery);
	
	//color-box
	$('.forzac-click').click(function(){
		if ($('#forzac:checked')) {
			$('.color-box_forzac').addClass('disable');
		}
		else {
			$('.color-box_forzac').removeClass('disable');
		}
	});

});