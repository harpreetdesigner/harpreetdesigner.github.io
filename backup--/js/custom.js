// ===== Scroll to Top ==== 
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        jQuery('#return_to_top').fadeIn(200);    // Fade in the arrow
    } else {
        jQuery('#return_to_top').fadeOut(200);   // Else fade out the arrow
    }
});
jQuery('#return_to_top').click(function() {      // When arrow is clicked
    jQuery('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


// ==== match Height Columns ====
jQuery('.match_height_col').matchHeight();
jQuery('.match_height_txt').matchHeight();


// ==== Top hero Slider ====
jQuery('.testimonials_slider .owl-carousel').owlCarousel({
    items: 2,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    dots: true,
    nav: true,
    navText: ['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2,
        },
    }
});



/* ==== search form section ==== */
jQuery('.search_menu_item a').click(function(){
    jQuery('.search_form_section').fadeIn(200);
})
jQuery('.hide_search_section').click(function(){
    jQuery(this).parent('.search_form_section').fadeOut(200);
});
  

// ==== WOW JS ====
new WOW().init();


// Navbar Fixed BG Color
$(function () {
    $(document).scroll(function () {
        var $nav = $(".top_main_header");
        // $nav.toggleClass('fixed_header', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('fixed_header', $(this).scrollTop() > 130);
    });
});



$(document).ready(function(){
	$('#portfolio_sec .nav-item').click(function(){
		// reset active class
		$('#portfolio_sec .nav-item').removeClass("active");
		// add active class to selected
		$(this).addClass("active");
		// return needed to make function work
		return false;
	});
	
	
	$(function() {
		// create an empty variable
		var selectedClass = "";
		// call function when item is clicked
		$("#portfolio_sec .nav-item").click(function(){
			// assigns class to selected item
			selectedClass = $(this).attr("data-rel");
			// fades out all portfolio items
			$(".portfolio_area .project").fadeOut(100);
			// fades in selected category
			$(".portfolio_area .project." + selectedClass).delay(100).fadeIn(100);
		});
	});
  
}); // document ready