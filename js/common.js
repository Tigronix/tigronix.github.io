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
		
		//class-tab
		$(document).on('click', '[data-class]', function () {
        var clas = $(this).attr('data-class');
        var taba = $(this).attr('data-taba');
        $('[data-id="' + clas + '"]').each(function () {
            if ($(this).attr('data-taba') == taba) {
                $(this).addClass('act').siblings().removeClass('act');
            }
        });
        $('.' + clas + ' > [data-taba="' + taba + '"]').show().siblings().hide();
    });
		
	//combo-main-tab
	/*var tabCheck = $('.combo-main-tab').prop('checked');
	$('.combo-main-tab').click(function(){
		console.log(tabCheck);
		if (tabCheck = true) {
		$('.basis-comb-wrap').show();
		$('.firmware').show();
		}
		else {
			$('.basis-comb-wrap').hide();
			$('.firmware').hide();
		}	
	});
	$('.combo-off').click(function(){
		$('.basis-comb-wrap').hide();
		$('.firmware').hide();
	});
	*/
$(document).on('change', '[name="cover-types"]', function () {
		var xz = $(this).val();
	console.log(xz);
		if(xz == 'combo') {
			$('.basis-comb-wrap').show();
			$('.firmware').show();
		}
		else {
			$('.basis-comb-wrap').hide();
			$('.firmware').hide();
		}
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