$(document).ready(function () {
    svg4everybody({});

	var itemDropDown = $(".main-nav__item--repair");

	itemDropDown.hover(function(){
		$(this).find(".repair-nav").toggleClass('is-active');
	});

	$(".advice-form__inpt--tel").mask('(000) 000-00-00');
});