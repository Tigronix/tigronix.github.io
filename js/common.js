

$(document).ready(function() {
	var summBlock_1 = parseInt($('.block-types_1:checked').val());
	var summBlock_2 = parseInt($('.block-types_2:checked').val());
	var summBlock_3 = parseInt($('.block-types_3:checked').val());

	//calc
	$('.varRadio').on('change', function () {
		var score = 0;
		$(".varRadio:checked").each(function(){
			var summ = score += parseInt($(this).val());
			$(".summ").val(summ);
		});
	});
	
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
    centerMode: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					centerMode: false,
					variableWidth: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					centerMode: false,
					variableWidth: false,
    			centerPadding: '0px',
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false,
					variableWidth: false,
    			centerPadding: '0px',
				}
			},
			{
				breakpoint: 370,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					variableWidth: false,
    			centerPadding: '0px',
				}
			},
			
  	]
	});

  //planing-slider
  $('.planing-slider').slick({
    slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: '0px',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			
  	]
	});

	$('.slick-slide').on('click', function(){
		$(this).addClass('focus').siblings().removeClass('focus');
	});

	$('.button__to2').click(function(){
		$('.constructor__combo-slider').slick('slickNext');
		$('.planing-slider').slick('slickNext');
		$('#simple').prop('checked', true);
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
		}else {
			$('.basis-comb-wrap').hide();
			$('.firmware').hide();
		}
	});
  $('#combo').on('click', function(){
    if ($(this).prop('checked', true)) {
      $('.constructor__combo-slider').slick('slickNext');
		  $('.planing-slider').slick('slickNext');
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
			$('.nav-left__item3').addClass('item_lock').prop('disabled', 'disabled');
			$('.nav-left__item4').addClass('item_lock').prop('disabled', 'disabled');
		});
		$('.nav-left__item2').click (function(){
			$('.nav-left__item3').addClass('item_lock').prop('disabled', 'disabled');;
			$('.nav-left__item4').addClass('item_lock').prop('disabled', 'disabled');
		});
		
		$('.nav-left__item3').click (function(){
			$('.nav-left__item4').addClass('item_lock').prop('disabled', 'disabled');
		});
	});

	//Planing
	$('.plan-show').hide();
	$('.actPlaning').click(function(){
		$('.plan-show').show();
		$('.plan-hide').hide();
		$('.basis-comb').hide();
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
		$('.mod .plan-off').on('click', function(){
			$('.basis-comb_img').hide();
			$('.basis-comb:first-child').show();
			$('.firmware__item:first-child').show();
			$('.basis-comb-wrap_z-index').removeClass('basis-comb-wrap_z-index');
			$('.firmware').removeClass('z-index');
		});

		$('.actPlaning').on('click', function(){
			$('.basis-comb_img').show();
			$('.basis-comb').hide();
		});

		$('.planing-slider_item').on('click', function(){
			$('.firmware').addClass('z-index');
		});
	});

  $('.mod__item').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#simple').prop('checked', true);
    $('[name=cover-type]').prop('checked', false).prop('disabled', false);
    $('.button__to2').prop('disabled', 'disabled');
    $('.basis-material').hide().first().show();
    $('.flex-checked').hide();
    $('.book-model__name').hide();
    if ($('.mod__item_1').hasClass('active')) {
      $('.combo-slider').addClass('hides');
      $('.combo-slider_a4').removeClass('hides');
      $('.book-model__name_a4').show();
    }
    if ($('.mod__item_2').hasClass('active')) {
      $('.combo-slider').addClass('hides');
      $('.combo-slider_a5').removeClass('hides');
      $('.book-model__name_a5').show();
    }
    if ($('.mod__item_3').hasClass('active')) {
      $('.combo-slider').addClass('hides');
      $('.combo-slider_a6').removeClass('hides');
      $('.book-model__name_a6').show();
    }
    if ($('.mod__item_4').hasClass('active')) {
      $('.combo-slider').addClass('hides');
      $('.planing-slider').removeClass('hides');
      $('.firmware').addClass('z-index');
      $('.firmware__item_switch').show().siblings().hide();
      $('.book-model__name_planing').show();
    }
  });

  //Переменные для подставноки текста
  var label_strict = $('.strict-label').html();
  var label_flex = $('.flex-label').html();
  var label_spring = $('.spring-label').html();
  var label_textA4 = $('.text-a4').html();
  var label_textA5 = $('.text-a5').html();
  var label_textA6 = $('.text-a6').html();
  var label_textPlaning = $('.text-planing').html();
  var label_firmwareAround = $('.label-firmwareAround').html();
  var label_blint = $('.label-blint').html();
  var label_folg = $('.label-folg').html();
  var label_eyelet = $('.label-eyelet').html();
  var label_rubber = $('.label-rubber').html();
  var label_angle = $('.label-angle').html();
  var labelChoice_1 = $('.labelChoice_1').html();
  var labelChoice_2 = $('.labelChoice_2').html();
  var labelChoice_3 = $('.labelChoice_3').html();
  var choiceColor1 = $('.choiceColor1').html();
  var choiceColor2 = $('.choiceColor2').html();
  var label_forzac = $('.label_forzac').html();
  var label_nahzac = $('.label_nahzac').html();
  var label_srez = $('.label_srez').html();
  //переменные селектов
  $('.select1').on('change', function(){
    var select1 = $('.select1 .jq-selectbox__select-text').html();
  });
  $('.select1_comb').on('change', function(){
    var select1_comb = $('.select1_comb .jq-selectbox__select-text').html();
  });
  $('.select2_comb').on('change', function(){
    var select2_comb = $('.select2_comb .jq-selectbox__select-text').html();
  });
  $('.select_pages').on('change', function(){
    var select_pages = $('.select_pages .jq-selectbox__select-text').html();
  });
  $('.select_position').on('change', function(){
    var select_position = $('.select_position .jq-selectbox__select-text').html();
  });

	//Подстановка текста
	//Подмена для одного варианта из нескольких radio
  $('[name="cover-type"]').on('change', function(){
    $('.desc-last_coverType').hide();
  });
  $('#strict').on('change', function(){
    if($('#strict').prop('checked', true)){
      $('.desc-last_strict').show().html(label_strict+', ')
    }
	});
	$('#flex').on('change', function(){
		if($('#flex').prop('checked', true)){
			$('.desc-last_flex').show().html(label_flex+', ')
		}
	});
	$('#spring').on('change', function(){
		if($('#spring').prop('checked', true)){
			$('.desc-last_spring').show().html(label_spring+', ');
		}
	});
	//cover-type--END

	$('#blint').on('change', function(){
		var checkedBlint = $(this).prop('checked');
		console.log(checkedBlint);
		if(checkedBlint){
			$('.desc-last_tisnenie').show().html(label_blint+', ');
		}else{
			$('.desc-last_tisnenie').hide().html(' ');
		}
	});
	$('#folg').on('change', function(){
		var checkedFolg = $(this).prop('checked');
		console.log(checkedFolg);
		if(checkedFolg){
			$('.desc-last_tisnenie').show().html(label_folg+', ');
		}else{
			$('.desc-last_tisnenie').hide().html(' ');
		}
	});
	$('#eyelet-color').on('change', function(){
		var eyeletColor = $(this).prop('checked');
		console.log(eyeletColor);
		if(eyeletColor){
			$('.desc-last_eyelet').show().html(label_eyelet+', ');
		}else{
			$('.desc-last_eyelet').hide().html(' ');
		}
	});
	$('#rubber-color').on('change', function(){
		var rubberColor = $(this).prop('checked');
		console.log(rubberColor);
		if(rubberColor){
			$('.desc-last_rubber').hide();
		}else{
			$('.desc-last_rubber').hide().html(' ');
		}
	});
	$('#rub-flat').on('change', function(){
		var rubFlat = $(this).prop('checked');
		console.log(rubFlat);
		if(rubFlat){
			$('.desc-last_rubber').show().html(label_rubber+', ');
		}else{
			$('.desc-last_rubber').hide().html(' ');
		}
	});
	
	$('#angle').on('change', function(){
		var angle = $(this).prop('checked');
		console.log(angle);
		if(angle){
			$('.desc-last_angle').show().html(label_angle+', ');
		}else{
			$('.desc-last_angle').hide().html(' ');
		}
	});

	$('[name="choice-block"]').on('change', function(){
    $('.desc-last_choice-block').hide();
		$(this).prop('checked', false);
  });
	$('#choice1').on('change', function(){
		var choice1 = $(this).prop('checked');
		$(this).prop('checked', true);
		$('#choice2').prop('checked', false);
		$('#choice3').prop('checked', false);
		console.log(choice1);
		if(choice1){
			$('.desc-last_choice-block').show().html(labelChoice_1+', ');
		}else{
			$('.desc-last_choice-block').hide().html(' ');
		}
	});
	$('#choice2').on('change', function(){
		$(this).prop('checked', true);
		$('#choice1').prop('checked', false);
		$('#choice3').prop('checked', false);
		var choice2 = $(this).prop('checked');
		console.log(choice2);
		if(choice2){
			$('.desc-last_choice-block').show().html(labelChoice_2+', ');
		}else{
			$('.desc-last_choice-block').hide().html(' ');
		}
	});
	$('#choice3').on('change', function(){
		var choice3 = $(this).prop('checked');
		$(this).prop('checked', true);
		$('#choice1').prop('checked', false);
		$('#choice2').prop('checked', false);
		console.log(choice3);
		if(choice3){
			$('.desc-last_choice-block').show().html(labelChoice_3+', ');
		}else{
			$('.desc-last_choice-block').hide().html(' ');
		}
	});

	$('[name="block-color"]').on('change', function(){
    $('.desc-last_block-color').hide();
  });
	$('#choice-color1').on('change', function(){
		var blockColor1 = $(this).prop('checked');
		console.log(blockColor1);
		if(blockColor1){
			$('.desc-last_choice-block').show().html(choiceColor1+', ');
		}else{
			$('.desc-last_choice-block').hide().html(' ');
		}
	});
	$('#choice-color2').on('change', function(){
		var blockColor2 = $(this).prop('checked');
		console.log(blockColor2);
		if(blockColor2){
			$('.desc-last_choice-block').show().html(choiceColor2+', ');
		}else{
			$('.desc-last_choice-block').hide().html(' ');
		}
	});
	
	$('#forzac').on('change', function(){
		$(this).prop('checked');
		var forzac = $(this).prop('checked');
		console.log(forzac);
		if(forzac){
			$('.desc-last_forzac').show().html(label_forzac+', ');
		}else{
			$('.desc-last_forzac').hide().html(' ');
		}
	});
	$('#nahzac').on('change', function(){
		$(this).prop('checked');
		var nahzac = $(this).prop('checked');
		console.log(nahzac);
		if(nahzac){
			$('.desc-last_nahzac').show().html(label_nahzac+', ');
		}else{
			$('.desc-last_nahzac').hide().html(' ');
		}
	});
	$('#nahzac').on('change', function(){
		$(this).prop('checked');
		var nahzac = $(this).prop('checked');
		console.log(nahzac);
		if(nahzac){
			$('.desc-last_nahzac').show().html(label_nahzac+', ');
		}else{
			$('.desc-last_nahzac').hide().html(' ');
		}
	});
	

	//Подмена из нескольких элементов, которые не относятся к элементам формы
  $('.mod__item').on('click', function(){
		$('.desc-last_book-model').hide();
		$('.firmware__item').hide();
		$('.A4-hide').show();
		$(".constructor__content")[0].reset();
		$(".top-nav")[0].reset();
	});
	$('.mod__item_1').on('click', function(){
		if($(this).hasClass('active')){
				$('.desc-last_textA4').show().html(label_textA4+', ');
				$('.A4-hide').hide();
			}
	});
	$('.mod__item_2').on('click', function(){
		if($(this).hasClass('active')){
				$('.desc-last_textA5').show().html(label_textA5+', ')
			}
	});
	$('.mod__item_3').on('click', function(){
		if($(this).hasClass('active')){
				$('.desc-last_textA6').show().html(label_textA6+', ')
			}
	});
	$('.mod__item_4').on('click', function(){
		if($(this).hasClass('active')){
				$('.desc-last_textPlaning').show().html(label_textPlaning+', ');
				$('.A4-hide').hide();
			}
	});

	//Подмена для одного варианта, который может быть и активным и скрытым
	$('#firmware2').on('change', function(){
			$('.desc-last_firmwareAround').toggleClass('show-string').html(label_firmwareAround+', ');
	});
	
	$("img").lazyload();

	$(".constructor__content")[0].reset();
});
