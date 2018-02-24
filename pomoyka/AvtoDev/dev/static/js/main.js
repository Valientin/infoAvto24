$(document).ready(function () {
    svg4everybody({});

    (function dropDownMenu($){

		$(".main-nav__item--repair").hover(function(){
			$(this).find(".repair-nav").toggleClass('is-active');
		});
    	
    })(jQuery);

    (function maskInput($){

		$(".advice-form__inpt--tel").mask('(000) 000-00-00');

    })(jQuery);

    (function tabCategories($){
    	$(".categories-nav__item").on("click", function(){
    		$(this).addClass('is-active').siblings().removeClass('is-active')
    		.closest('.container').find(".tab-item").removeClass('is-active').eq($(this).index()).addClass('is-active');
    	});
    })(jQuery);

});