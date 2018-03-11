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
    
    /*var waypoints = $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
    }, {
      offset: '25%'
    });*/
    
    // animations on scroll
    $('.js-wp-1').waypoint(function(direction){
       $('.js-wp-1').addClass('animated fadeIn'); 
    } , {
        offset: '50%'
    });
    
    $('.js-wp-2').waypoint(function(direction){
       $('.js-wp-2').addClass('animated fadeInUp'); 
    } , {
        offset: '50%'
    });
    
    $('.js-wp-3').waypoint(function(direction){
       $('.js-wp-3').addClass('animated fadeIn'); 
    } , {
        offset: '50%'
    });
    
    $('.js-wp-4').waypoint(function(direction){
       $('.js-wp-4').addClass('animated pulse'); 
    } , {
        offset: '50%'
    });
    
    // maps
    var map = new GMaps({
      div: '#map',
      lat: 31.041455, 
      lng: 31.35,
      zoom: 14
    });
    
    map.addMarker({
      lat: 31.041455,
      lng: 31.34782,
      title: 'Mansoura',
      infoWindow: {
      content: '<p>Our Mansoura HQ</p>'
    }
    });

    
    

    // Smooth scroll plugin ====================
    smoothScroll.init({
        speed: 900
    });



});


