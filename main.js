(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
	var browser = window.navigator.userAgent.split(" ")
    if(browser[browser.length -1].split("/")[0] === "Firefox"){
	 var elems = document.querySelectorAll(".p-skills-description");
     for (var i = elems.length; i--;) {
        var reg = new RegExp("(?:^|\\s)"+ "p-skills-description" +"(?!\\S)", "gi");
        elems[i].className = elems[i].className.replace(reg, "p-skills-description-browser");
    }
}
  });
 
 
 $('#sendmail').click(function(event){
	 event.currentTarget.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Messaging`
	 console.log(event.currentTarget)
	$.ajax({
        url: 'sendEmail.php',
        type: 'POST',
        dataType: "text",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('textarea#words').val(),
	    subject:$('#subject').val()
        },
	success: function (data) {
		$('#name').val('')
		$('#email').val('')
		$('textarea#words').val('')
		$('#subject').val('')
            $('#successMessage').html(`<div class="alert alert-success"><strong>Success!</strong> Message sent.Thank you!</div>`)
			 event.currentTarget.innerHTML = "Send Message"
		setTimeout(function() {
			 $('#successMessage').html(`<div class="alert alert-danger"><strong>Failed!</strong> Message delivery failed!</div>`)
			
		},10000)
        },
        error: function (error) {
            console.log(error);
			
        }
    })
	
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}
	

})(jQuery);




