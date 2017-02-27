$(document).ready(function() {
		$(".constructor__content")[0].reset();
		var summBlock_1 = parseInt($('.block-types_1:checked').val());
		var summBlock_2 = parseInt($('.block-types_2:checked').val());
		var summBlock_3 = parseInt($('.block-types_3:checked').val());
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

	//class-tab
	
	var summBlock_1, summBlock_2, summBlock_3;
	
	$(document).on('click', '[data-class_2]', function () {
			var clas = $(this).attr('data-class_2');
			var taba = $(this).attr('data-taba_2');
			$('[data-id="' + clas + '"]').each(function () {
					if ($(this).attr('data-taba_2') == taba) {
							$(this).addClass('act').siblings().removeClass('act');
					}
			});
			$('.' + clas + ' > [data-taba_2="' + taba + '"]').show().siblings().hide();
	});
	
	//calc	
	$(document).on('change', '.varRadio', function () {		
		var score = 0;
		$(".varRadio:checked").each(function(){
		score += parseInt($(this).val());
		var summ = score += parseInt($(this).val());
		console.log(summ);
		$(".summ").val(summ);	
		});
	});
				
	$(document).on('change', '.block-types_1', function () {
		$(".block-types_1:checked").each(function(){
			var score = 0;
			score += parseInt($(this).val());
			summBlock_1 = parseInt($(this).val());
			console.log(summBlock_1);
			$(".summBlock_1").val(summBlock_1);	
		});
	});
	
	$(document).on('change', '.block-types_2', function () {
		$(".block-types_2:checked").each(function(){
			var score = 0;
			score += parseInt($(this).val());
			summBlock_2 = parseInt($(this).val());
			console.log(summBlock_2);
			$(".summBlock_2").val(summBlock_2);	
		});
	});
	
	$(document).on('change', '.block-types_3', function () {
		var score = 0;
		$(".block-types_3:checked").each(function(){
		score += parseInt($(this).val());
		summBlock_3 = parseInt($(this).val());
		console.log(summBlock_3);
		$(".summBlock_3").val(summBlock_3);	
		});
	});
	
	$(document).on('change', '.varBlocks',  function () {	
		var score = 0;
		var summa = summBlock_1 + summBlock_2 + summBlock_3;
		console.log('====='+summBlock_1);
		console.log('====='+summBlock_2);
		console.log('====='+summBlock_3);
		console.log('summa====='+summa);
	});
	
	
	
	//cover-types
	$(document).on('change', '[name="cover-types"]', function () {
		var coverChange = $(this).val();
		console.log(coverChange);
		if(coverChange == 'combo') {
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
	$('#forzac').click(function(){
		$('.disable-block_forzac').show();
	});
	$('#indForzac').click(function(){
		$('.disable-block_forzac').hide();
	});
	
	$('#nahzac').click(function(){
		$('.disable-block_nahzac').show();
	});
	$('#indNahzac').click(function(){
		$('.disable-block_nahzac').hide();
	});
	
	$('#srez').click(function(){
		$('.disable-block_srez').show();
	});
	$('#indSrez').click(function(){
		$('.disable-block_srez').hide();
	});
	
	$('#eyelet-color').click(function(){
		$('.disable-block_eyelet').toggleClass('active');
		$('.eyelet').toggle();
	});
	
	$('#rubber-color').click(function(){
		$('.disable-block_rubber').removeClass('active');
		$('.rubber').hide();
		$('.color-box__label-rub').addClass('color-box_disabled');
		$('.varRadio[name="rubber"]').prop('disabled', 'disabled');
	});
	
	$('#rub-flat').click(function(){
		$('.disable-block_rubber').addClass('active');
		$('.rubber').show();
	});
	
	
	//firm-around
	$('.firm-around').click(function(){
		$('.constructor__string_firmware').toggleClass('flex');
		$('.thread').toggle();
	});
	
	
	//color-box > item:focus
	$('.color-box .item').click(function(){
		$(this).addClass('act').siblings().removeClass('act');
	});
	$('#rub-flat').on('change', function(){
		var checked = $('#rub-flat').prop('checked');
		console.log(checked);
		if ($(checked == 'true')) {
			$('.varRadio[name="rubber"]').removeAttr('disabled');
			$('.color-box_disabled').removeClass('color-box_disabled');
		}
	});
});
