$(document).ready(function() {
	var summBlock_1 = parseInt($('.block-types_1:checked').val());
	var summBlock_2 = parseInt($('.block-types_2:checked').val());
	var summBlock_3 = parseInt($('.block-types_3:checked').val());
	

	//class-tab
	$(document).on('click', '[data-class]', function () {
			var clas = $(this).attr('data-class');
			var taba = $(this).attr('data-taba');
			$('[data-class="' + clas + '"]').each(function () {
					if ($(this).attr('data-taba') == taba) {
							$(this).addClass('act').siblings().removeClass('act');
					}
			});
			$('.' + clas + ' > [data-taba="' + taba + '"]').show().siblings().hide();
	});

	//class-tab
	
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
			$('.constructor__combo-slider').on('init', function () {
				$('.constructor__combo-slider').slick({
					infinite: true,
					slidesToShow: 5,
					slidesToScroll: 1,
					arrows: true
				});
			});
	});
	
	//slick
	$('.constructor__combo-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true
	});
	
	$('.button__to2').click(function(){
		$('.constructor__combo-slider').slick('slickNext');
	});
	//calc	
	$(document).on('change', '.varRadio', function () {		
		var score = 0;
		$(".varRadio:checked").each(function(){
		score += parseInt($(this).val());
		var summ = score += parseInt($(this).val());
		$(".summ").val(summ);	
		});
	});
				
	$(document).on('change', '.block-types_1', function () {
		$(".block-types_1:checked").each(function(){
			var score = 0;
			score += parseInt($(this).val());
			summBlock_1 = parseInt($(this).val());
			$(".summBlock_1").val(summBlock_1);	
		});
	});
	
	$(document).on('change', '.block-types_2', function () {
		$(".block-types_2:checked").each(function(){
			var score = 0;
			score += parseInt($(this).val());
			summBlock_2 = parseInt($(this).val());
			$(".summBlock_2").val(summBlock_2);	
		});
	});
	
	$(document).on('change', '.block-types_3', function () {
		var score = 0;
		$(".block-types_3:checked").each(function(){
		score += parseInt($(this).val());
		summBlock_3 = parseInt($(this).val());
		$(".summBlock_3").val(summBlock_3);	
		});
	});
	
	$(document).on('change', function () {	
		var summ = parseInt($('.summ').val());
		var summa = summBlock_1 + summBlock_2 + summBlock_3 + summ;
		var summa100 = summa * 100;
		console.log('====='+summBlock_1);
		console.log('====='+summBlock_2);
		console.log('====='+summBlock_3);
		console.log('====='+summ);
		console.log('summa====='+summa);
		$(".summBlocks").val(summa);	
		$(".summBlocks100").val(summa100);	
		
	});
	
	
	
	//cover-types
	$(document).on('change', '[name="cover-types"]', function () {
		var coverChange = $(this).val();
		if(coverChange == 'combo') {
			$('.basis-comb-wrap').show();
			$('.firmware').show();
		}
		else {
			$('.basis-comb-wrap').hide();
			$('.firmware').hide();
		}
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
	
	$('#srez-standart').click(function(){
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
		var checked = $(this).prop('checked');
		if ($(checked == 'true')) {
			$('.varRadio[name="rubber"]').removeAttr('disabled');
			$('.color-box_disabled').removeClass('color-box_disabled');
		}
	});
	
	$('#flex').on('change', function(){
		var checked = $(this).prop('checked');
		if ($(checked == 'true')) {
			$('.flex-checked_disabled').prop('disabled', 'disabled');
			$('.button__to2').attr('data-taba', '2');
			var shit = $('.button__to2').attr('data-taba', '2');
			$('.flex-checked').hide();
			$('.tab_imba').addClass('hiderino');
		}
	});
	
	$('#strict').on('change', function(){
		var checked = $(this).prop('checked');
		if ($(checked == 'true')) {
			$('.flex-checked_disabled').prop('disabled', false);
			$('.button__to2').attr('data-taba', '2');
			$('.flex-checked').show();
			$('.tab_imba').removeClass('hiderino');
		}
	});
	
	$('#simple').on('change', function(){
		var checked = $(this).prop('checked');
		if ($(checked == 'true')) {
			$('.flex-checked').hide();
			$('.tab_imba').addClass('hiderino');
		}
	});
	
	$('#combo').on('change', function(){
		var checked = $(this).prop('checked');
		if ($(checked == 'true')) {
			$('.flex-checked').show();
			$('.tab_imba').removeClass('hiderino');
		}
	});
	
	$('.flex-checked').on('change', function(){
		var checked = $(this).prop('checked');
		console.log(checked);
		if ($(checked == 'true')) {
			$('.button__to3').attr('data-taba', '3');
		}
	});
	
	$('.varRadio').on('change', function(){
		var checked = $(this).prop('checked');
		console.log(checked);
		if ($(checked == 'true')) {
			$('.button__to3').attr('data-taba', '3');
		}
	});
	
	//radiolist; Page to 3
	
	var firmware = document.querySelector('#firmware2');
	var stamping = document.querySelectorAll('[name="stamping"]');
	var eyelet = document.querySelector('#eyelet-color');
	var rubber = document.querySelectorAll('[name="rubber-flat"]');
	var button = document.querySelector('.button__to3');
	function checkRadio(radioList) {
		for (var i = 0; i < radioList.length; i++) {
			if (radioList[i].checked) {
				return true;
			}
		}

		return false;
	}

	document.addEventListener('change', function() {
		var isAtLeastOneThingChecked = firmware.checked || eyelet.checked || checkRadio(stamping) || checkRadio(rubber);
		button.disabled = ! isAtLeastOneThingChecked;
	});
	
	//radiolist; Page to 4
	
	var choiceBlock = document.querySelectorAll('[name="choice-block"]');
	var blockColor = document.querySelectorAll('[name="block-color"]');
	var blockType2 = document.querySelectorAll('[name="block-type2"]');
	var blockType3 = document.querySelectorAll('[name="block-type3"]');
	var buttonTo4 = document.querySelector('.button_to4');
	function checkRadio_2(radioList_2) {
		for (var i = 0; i < radioList_2.length; i++) {
			if (radioList_2[i].checked) {
				return true;
			}
		}

		return false;
	}

	document.addEventListener('change', function() {
		var isAtLeastOneThingChecked_2 = checkRadio_2(choiceBlock) || checkRadio_2(blockColor) || checkRadio_2(blockType2) || checkRadio_2(blockType3);
		buttonTo4.disabled = ! isAtLeastOneThingChecked_2;
	});
	
	$(".constructor__content")[0].reset();
});
