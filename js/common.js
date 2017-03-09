

$(document).ready(function() {
	var summBlock_1 = parseInt($('.block-types_1:checked').val());
	var summBlock_2 = parseInt($('.block-types_2:checked').val());
	var summBlock_3 = parseInt($('.block-types_3:checked').val());
	
	
$(document).on('change', function () {	
	$('.var7_label').click(function(){
		$(this).addClass('active-cli');
		$('.var8').removeClass('active-cli');
		$('.clishe').show();
	});
	$('.var8').click(function(){
		$(this).addClass('active-cli');
		$('.var7_label').removeClass('active-cli');
		$('.clishe').show();
	});
	
	$('.active-cli').click(function(){
		$(this).removeClass('active-cli');
		$('.clishe').hide();
	});
});	
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
			$('.basis-color__skin').show();
	});

	//class-tab2
	$(document).on('click', '[data-class2]', function () {
			var clas = $(this).attr('data-class2');
			var taba = $(this).attr('data-taba2');
			$('[data-class2="' + clas + '"]').each(function () {
					if ($(this).attr('data-taba2') == taba) {
							$(this).addClass('act').siblings().removeClass('act');
					}
			});
			$('.' + clas + ' > [data-taba2="' + taba + '"]').show().siblings().hide();
			$('.basis-color__skin').show();
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
			$('.basis-color__skin').show();
	});
	
	//slick
	$('.constructor__combo-slider').slick({
    slidesToShow: 5,
		slidesToScroll: 3,
    centerPadding: '0px',
		arrows: true,
    variableWidth: true,
    focusOnSelect: true,
    centerMode: true
	});
  
  //planing-slider
  $('.planing-slider').slick({
    slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: '0px'
	});
	
	$('.slick-slide').on('click', function(){
		$(this).addClass('focus').siblings().removeClass('focus');
	});
	
	$('.button__to2').click(function(){
		$('.constructor__combo-slider').slick('slickNext');
		$('.planing-slider').slick('slickNext');
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
	
	//Block-types
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
	
	//Расчет суммы для ежедневников
	$(document).on('change', function () {
		if (!summBlock_1){
			summBlock_1 = 0;
		}
		if (!summBlock_2){
			summBlock_2 = 0;
		}
		if (!summBlock_3){
			summBlock_3 = 0;
		}
		
		var summ = parseInt($('.summ').val());
		var summa = summBlock_1 + summBlock_2 + summBlock_3 + summ;
		var summa100 = summa * 100;
		$('.summTop').val(summ);
		$(".summBlocks").val(summa);	
		$(".summBlocks100").val(summa100);	
		
		
		var summTop = parseInt($('.summTop').val());
		var edition = parseInt($('.edition').val());
		var countTop = parseInt($('#count').val());
		var editionCount = countTop * summ;
		$('.summCount').val(countTop);
		$('.edition').val(editionCount);
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
	
	//styler- стилизация селектов
	(function ($) {
		$(function () {
			$('.styler').styler();
		});
	})(jQuery);
	
	//color-box
	$('#srez-standart').click(function(){
		$('.disable-block_srez').show();
	});
	
	$('#indSrez').click(function(){
		$('.disable-block_srez').hide();
		$('.varBlock_srez').prop('checked', false);
	});
	
	$('.varBlock_srez').click(function(){
		$('.disable-block_srez').show();
		$('#indSrez').prop('checked', false);
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
			$('.button__to2').attr('disabled', false);
			$('.flex-checked').hide();
			$('.tab_imba').addClass('hiderino');
			$('.spring-on').removeClass('spring-checked');
		}
	});
	
	$('#strict').on('change', function(){
		var checked = $(this).prop('checked');
		if ($(checked == 'true')) {
			$('.flex-checked_disabled').prop('disabled', false);
			$('.button__to2').prop('disabled', false);
			$('.flex-checked').show();
			$('.tab_imba').removeClass('hiderino');
			$('.spring-on').removeClass('spring-checked');
			$('.constructor__combo-slider').addClass('active');
			$('.firmware').removeClass('z-index');
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
		if ($(checked == 'true')) {
			$('.button__to3').attr('data-taba', '3');
		}
	});
	
	$('.varRadio').on('change', function(){
		var checked = $(this).prop('checked');
		if ($(checked == 'true')) {
			$('.button__to3').attr('data-taba', '3');
		}
	});
	
	$('#angle').on('change', function(){
		$('.angle').toggle();
	});
	
	
	//навигация по страницам
	$('.button__to2').click(function(){
		$('.item_lock2').removeClass('item_lock').prop('disabled', false);
	});
	$('.button_to1').click(function(){
		$('.item_lock2').addClass('item_lock').prop('disabled', 'disabled');
	});
	
	$('.button_for2').click(function(){
		$('.item_lock3').addClass('item_lock').prop('disabled', 'disabled');
	});
	$('.button__to3').click(function(){
		$('.item_lock3').removeClass('item_lock').prop('disabled', false);
		$('.button_to4').prop('disabled', false);
	});
	
	$('.button_for3').click(function(){
		$('.item_lock4').addClass('item_lock').prop('disabled', 'disabled');
	});
	$('.button_to4').click(function(){
		$('.item_lock4').removeClass('item_lock').prop('disabled', false);
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
	
	
	//Условия для открытия/скрытия блоков
	$(document).on('change', function () {
		$('.var7').click(function(){
			$('.var8').prop('checked', false);
		});
		$('.var8').click(function(){
			$('.var7').prop('checked', false);
		});
		$('.var12').click(function(){
			$('.var13').prop('checked', false);
		});
		$('.var13').click(function(){
			$('.var12').prop('checked', false);
		});
		$('.var14').click(function(){
			$('.material__select_width1').toggleClass('disabled');
			$('.material__select_width2').toggleClass('disabled');
		});
		$('.nav-left__item1').click (function(){
			$('.nav-left__item2').addClass('item_lock').prop('disabled', true);
			$('.nav-left__item3').addClass('item_lock');
			$('.nav-left__item4').addClass('item_lock');
		});
		$('.nav-left__item2').click (function(){
			$('.nav-left__item3').addClass('item_lock');
			$('.nav-left__item4').addClass('item_lock');
		});
		$('.nav-left__item3').click (function(){
			$('.nav-left__item4').addClass('item_lock');
		});
	});
	
	//Planing
	$('.plan-show').hide();
	$('.actPlaning').click(function(){
		$('.plan-show').show();
		$('.plan-hide').hide();
		$('.planing-slider').addClass('planing-slider_active');
	});
	
	$('.plan-off').click(function(){
		$('.plan-show').hide();
		$('.plan-hide').show();
	});	
	
	$('#spring').on('change', function(){
		var checked = $(this).prop('checked');
		if ($(checked == 'true')) {
        $('.button__to2').prop('disabled', false);
        $('.spring-on').addClass('spring-checked');
        $('#combo').prop('disabled', false);
        $('.basis-comb-wrap').addClass('basis-comb-wrap_z-index');
        $('.planing-slider').show();
        $('.constructor__combo-slider').removeClass('active');
		}
	});
	
	$(document).on('change', '.varRadio', function () {	
		var score = 0;
		$(".varRadio:checked").each(function(){
		var summPlan = score += parseInt($(this).attr('data-plan'));
		console.log(summPlan);
		$(".summPlaning").val(summPlan);	
		});
	
		$('.mod .plan-off').on('click', function(){
			$('.basis-comb_img').hide();
			$('.basis-comb:first-child').show();
			$('.firmware__item:first-child').show();
			$('.planing-slider').removeClass('planing-slider_active');
			$('.basis-comb-wrap_z-index').removeClass('basis-comb-wrap_z-index');
			$('.firmware').removeClass('z-index');
		});

		$('.actPlaning').on('click', function(){
			$('.basis-comb_img').show();
			$('.basis-comb').hide();
			$('.planing-slider').addClass('planing-slider_active');
		});
		
		$('.planing-slider_item').on('click', function(){
			$('.firmware').addClass('z-index');
		});
	});
	
	$(".constructor__content")[0].reset();
	
});