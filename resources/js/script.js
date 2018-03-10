$(function(){
    
    'use strict';
   
    /* Sticky navigation */
   $(window).scroll(function(){
		if ( $(window).scrollTop() >= 500 ){
			$('nav').addClass('sticky');
		}
		else {
			$('nav').removeClass('sticky');	
		}
	});
    
    // Smooth scroll plugin ====================
    smoothScroll.init({
        speed: 900
    });
    
    // mobile navigation
    $('.mobile-nav-icon').click(function(){
       
        var nav = $('.main-nav');
        var icon = $('.mobile-nav-icon i');
        
        nav.slideToggle(200);
        
        if( icon.hasClass('ion-navicon-round') ){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    
});




});


