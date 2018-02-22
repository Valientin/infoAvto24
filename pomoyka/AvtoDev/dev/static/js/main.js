$(document).ready(function () {
    svg4everybody({});


    // (function dropDownMenu(){
    	var itemDropDown = $(".main-nav__item--repair");

    	itemDropDown.hover(function(){
    		$(this).find(".repair-nav").toggleClass('is-active');
    	});
});