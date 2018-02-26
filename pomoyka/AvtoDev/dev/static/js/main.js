$(document).ready(function () {
    svg4everybody({});

    (function dropDownMenu($){

		$(".main-nav__item--repair").hover(function(){
			$(this).find(".repair-nav-wrapper").toggleClass('is-active');
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

        setInterval(function(){
            var elemList = $(".categories-nav__item");
            var elemActive = $(".categories-nav__item.is-active");
            let updateClass = (elem) => {
                elem.addClass('is-active').siblings().removeClass('is-active');
            };

            if(elemActive.index() === elemList.eq(3).index()){
                updateClass(elemList.eq(0));
            } else{
                updateClass(elemActive.next());
            }
                elemActive = $(".categories-nav__item.is-active");
                $(".tab-item").removeClass('is-active').eq(elemActive.index()).addClass('is-active');
        }, 10000)
    })(jQuery);

});