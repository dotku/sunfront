$(function(){
	$('.app').hover(
		function(){
			$('.popover').css('display','block');
		},
		function(){
			$('.popover').css('display','none');
		}
	);
	$('.top-nav-right li:eq(2)').hover(
		function(){
			$(this).css('background','#fff');
			$(this).find('.caret').css({'transform':'rotate(180deg)','WebkitTransform':'rotate(180deg)','MozTransform':'rotate(180deg)','MsTransform':'rotate(180deg)','OTransform':'rotate(180deg)'});
			$(this).find('.drop-menu').css('display','block');
		},
		function(){
			$(this).css('background','transparent');
			$(this).find('.caret').css({'transform':'rotate(0deg)','WebkitTransform':'rotate(0deg)','MozTransform':'rotate(0deg)','MsTransform':'rotate(0deg)','OTransform':'rotate(0deg)'});
			$(this).find('.drop-menu').css('display','none');
		}
	);
	$('.top-nav-right li:eq(4)').hover(
		function(){
			$(this).css('background','#fff');
			$(this).find('.caret').css({'transform':'rotate(180deg)','WebkitTransform':'rotate(180deg)','MozTransform':'rotate(180deg)','MsTransform':'rotate(180deg)','OTransform':'rotate(180deg)'});
			$(this).find('.drop-menu').css('display','block');
		},
		function(){
			$(this).css('background','transparent');
			$(this).find('.caret').css({'transform':'rotate(0deg)','WebkitTransform':'rotate(0deg)','MozTransform':'rotate(0deg)','MsTransform':'rotate(0deg)','OTransform':'rotate(0deg)'});
			$(this).find('.drop-menu').css('display','none');
		}
	);

	$('.top-menu .menu-wrap').delegate('li', 'click', function() {
		$('.top-menu .menu-wrap li').removeClass('active');
		$(this).addClass('active');
	});

 	if($(window).width()<768) {
		$('.fadeOut').find('.hidden-xs').remove();
	}else {
		$('.fadeOut').find('.visible-xs').remove();
	}
	$('.fadeOut').owlCarousel({
	  animateOut: 'fadeOut',
	  lazyEffect: 'true',
	  items:1,
	  loop:true,
	  margin:10,
	  autoplay:true,
	  smartSpeed:450
	});

	$('.brand a').hover(function() {
		$(this).find('.detail-wrap').css('top','-48px');
	}, function() {
		$(this).find('.detail-wrap').css('top','0');
	});

	$('.tab-wrap').find('.tab').click(function() {
		$('.tab-wrap').find('.tab').removeClass('current');
		$('.content-wrap').find('.tab-content').addClass('hidden');
		$(this).addClass('current');
		$('.content-wrap').find('.tab-content').eq($(this).index()).removeClass('hidden');
	});

	new Swiper('.top-menu .row',{
	  freeMode : true,
	  slidesPerView : 'auto',
  	});

	$('.item-bottom button').click(function() {
		$('.order-wrap > .add-wrap').addClass('hidden');
		$('.order-wrap > .sel-wrap').removeClass('hidden');
		$('.order-new').addClass('hide');
		$('.order-sel').removeClass('hide');
	});

	$('.sel-wrap .add-addr').click(function() {
		$('.sel-wrap').addClass('hidden');
		$('.add-wrap').removeClass('hidden');
	});
	
	$('.order-add').click(function() {
		$('.sel-wrap').addClass('hidden');
		$('.add-wrap').removeClass('hidden');
	});

	$('.phone-top h2 .edit').click(function() {
		$('.phone-top h2 .edit').addClass('hidden');
		$('.phone-top h2 .finish').removeClass('hidden');

		$('.cart-wrap .goods .info a').addClass('hidden');
		$('.cart-wrap .goods .info .cart-item-num').removeClass('hidden');

		$('.cart-wrap .goods .text-right').addClass('hidden');
		$('.cart-wrap .goods .remove').removeClass('hidden');
	});

	$('.phone-top h2 .finish').click(function() {
		$('.phone-top h2 .finish').addClass('hidden');
		$('.phone-top h2 .edit').removeClass('hidden');

		$('.cart-wrap .goods .info a').removeClass('hidden');
		$('.cart-wrap .goods .info .cart-item-num').addClass('hidden');

		$('.cart-wrap .goods .text-right').removeClass('hidden');
		$('.cart-wrap .goods .remove').addClass('hidden');
	});

	$('.info-wrap .jqSlide-list').css('height',$('.info-wrap .jqSlide-list li').outerHeight(true) * 4 - 20);

	$('.info-wrap .jqSlide-list').delegate('img', 'click', function() {
		$('img').removeClass('jqSlide-list ul li active');
		$(this).addClass('jqSlide-list ul li active');
	});

	var owl = $('.mall-detail .owl-carousel'); 
	owl.owlCarousel({
	  items:1,
	  center:true,
	  margin:0,
	  URLhashListener:true,
	});

	var num = 0;
	if($('.info-wrap .jqSlide-list ul').height()>=$('.info-wrap .jqSlide').outerHeight(true)) {
		$('.info-wrap .jqSlide .btn').removeClass('disabled');
	}
	$('.info-wrap .jqSlide .prev').click(function() {
		if($('.info-wrap .jqSlide-list li').length > 4){
			var liHeight = $('.info-wrap .jqSlide-list li').outerHeight(true)-5;
			$('.info-wrap .jqSlide .jqSlide-list ul').animate( { top:-(num+1)*liHeight }, 200 );
			$('.info-wrap .jqSlide .next').removeClass('disabled');		
			if((num+1) >= $('.info-wrap .jqSlide-list li').length-4) {
				$('.info-wrap .jqSlide .prev').addClass('disabled');
				return false;
			}
			num++;	
		}
	});
	$('.info-wrap .jqSlide .next').click(function() {
		if($('.info-wrap .jqSlide-list li').length > 4){
			var liHeight = $('.info-wrap .jqSlide-list li').outerHeight(true)-5;
			$('.info-wrap .jqSlide .jqSlide-list ul').animate( { top:-(num-1)*liHeight }, 200 );
			$('.info-wrap .jqSlide .prev').removeClass('disabled');
			if((num-1) == 0) {
				$('.info-wrap .jqSlide .next').addClass('disabled');
				return false;
			}
			num--;
		}	
	});

	$('.mylist .tab').delegate('li', 'mouseover', function() {
		$('.mylist .tab li').removeClass('auto');
		$(this).addClass('auto');
	});
	$('.mylist .tab').delegate('li', 'mouseout', function() {
		$('.mylist .tab li').removeClass('auto');
		$('.mylist .tab .active').addClass('auto');
	});
	$('.mylist .tab').delegate('li', 'click', function() {
		$('.mylist .tab li').removeClass('active');
		$(this).addClass('active auto');
		$('.mylist .tab-content > div').removeClass('show');
		$('.mylist .tab-content > div').eq( $(this).index() ).addClass('show');
	});

	$('.coupon-wrap .tab').delegate('li', 'mouseover', function() {
		$('.coupon-wrap .tab li').removeClass('auto');
		$(this).addClass('auto');
	});
	$('.coupon-wrap .tab').delegate('li', 'mouseout', function() {
		$('.coupon-wrap .tab li').removeClass('auto');
		$('.coupon-wrap .tab .active').addClass('auto');
	});
	$('.coupon-wrap .tab').delegate('li', 'click', function() {
		$('.coupon-wrap .tab li').removeClass('active');
		$(this).addClass('active auto');
		$('.coupon-wrap .tab-content > div').removeClass('show');
		$('.coupon-wrap .tab-content > div').eq( $(this).index() ).addClass('show');
	});

	$('.coupon-wrap .couponlist .body').delegate('.more', 'click', function(event) {
		$(this).parent().parent().parent().parent().css('zIndex',1);
		if($(this).parent().parent().find('.sorts').hasClass('hide')) {
			$(this).find('.glyphicon').css({'transform':'rotate(180deg)','WebkitTransform':'rotate(180deg)','MozTransform':'rotate(180deg)','MsTransform':'rotate(180deg)','OTransform':'rotate(180deg)'});
			$(this).parent().parent().find('.sorts').removeClass('hide');
		} else {
			$(this).find('.glyphicon').css({'transform':'rotate(0deg)','WebkitTransform':'rotate(0deg)','MozTransform':'rotate(0deg)','MsTransform':'rotate(0deg)','OTransform':'rotate(0deg)'});
			$(this).parent().parent().find('.sorts').addClass('hide');
		}
	});

	$('.coupon-wrap .couponlist .box').each(function(index, el) {
		if($(document.body).outerWidth(true)>768) {
			$(el).css('top',$(el).position().top);
			$(el).css('left',$(el).position().left);
		}
	});
	$('.coupon-wrap .couponlist .box').each(function(index, el) {
		if($(document.body).outerWidth(true)>768) {
			$(el).css('position','absolute');
		}
	});

	$('.order-wrap .adr-info').hover(function() {
		$(this).find('.header > b').removeClass('hide');
	}, function() {
		if(!$(this).hasClass('default')) {
			$(this).find('.header > b').addClass('hide');
		}
	});

	$('.order-wrap .item .dropdown-menu').delegate('li', 'click', function() {
		$('.order-wrap .item .dropdown-menu li a').removeClass('active');
		$(this).find('a').addClass('active');
		$(this).parent().parent().find('a').eq(0).html($(this).find('a').text()+"<span class='caret'></span>");
	});

})