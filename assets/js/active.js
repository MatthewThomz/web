(function ($, window, document, undefined) {
    'use strict';

    /*============================================
     Navigation Active Code
     ==============================================*/

         // MOBILE MENU
        $(".nav-toggle").on("click", function () {
            $(".nav-menus-wrapper").addClass("show");
            $(".overlay").addClass("active");
        });

        $(".close-nav").on("click", function () {
            $(".nav-menus-wrapper").removeClass("show");
            $(".overlay").removeClass("active");
        });

        $(".overlay").on("click", function () {
            $(".nav-menus-wrapper").removeClass("show");
            $(".overlay").removeClass("active");
        });


    /* Sticky Header */
    var windows = $(window);
    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > 300) {
            $('.sticky-header').addClass('is-sticky');
        } else {
            $('.sticky-header').removeClass('is-sticky');
        }
    });



 
       // CounterUp
  if ($('.count').length)
    {
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });
    }

  /*============================================
     CURSOR
     ==============================================*/

	var cursor = $(".cursor"),
	follower = $(".cursor-follower");

	var posX = 0,
		posY = 0;

	var mouseX = 0,
		mouseY = 0;

	TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		TweenMax.set(follower, {
			css: {
			left: posX - 12,
			top: posY - 12
			}
		});

		TweenMax.set(cursor, {
			css: {
			left: mouseX,
			top: mouseY
			}
		});
	}
	});

	$(document).on("mousemove", function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
	
	$(".theme-btn, a").on("mouseenter", function() {
		cursor.addClass("active");
		follower.addClass("active");
	});
	$(".theme-btn, a").on("mouseleave", function() {
		cursor.removeClass("active");
		follower.removeClass("active");
	});   
	
    
  var swiper = new Swiper(".swiper-container", {
              slidesPerView: 2,
              spaceBetween: 15,
              slidesPerGroup: 1,
              loop: true,
              autoplay: {
                delay: 4000,
              },
               loopFillGroupWithBlank: true,
              pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                1500: {
                  slidesPerView: 2,
                },
                1199: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 1,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
            

    
    
  var swiper = new Swiper(".swiper-work-slider", {
              slidesPerView: 2.46,
              spaceBetween: 15,
              slidesPerGroup: 1,
              centeredSlides:false,
              loop: true,
              autoplay: {
                delay: 5000,
              },
               loopFillGroupWithBlank: true,
              pagination: {
                el: ".swiper-work-slider-pagination",
                clickable: true,
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                1500: {
                  slidesPerView: 2,
                },
                1199: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 1,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
            });
            

   
        $(".list-blog-slider").owlCarousel({
            dots: true,
            loop: true,
            center: false,
            items:1,
            autoplayTimeout: 3000,
            autoplay: true,
            dotsContainer:'#dots',
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                },
                575: {
                    items: 1,
                    margin: 20,
                },
                767: {
                    items: 1,
                    margin: 20,
                },

                991: {
                    items: 1,
                    margin: 30,
                },

                1300: {
                    items: 1,
                    margin: 30,
                },
            },
        });
        
        
          // BRAND SLIDER
        $(".client-slider").owlCarousel({
            dots: true,
            loop: true,
            center: false,
            items:5,
            autoplayTimeout: 4000,
            autoplay: true,
            dotsContainer:'#dots',
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                },
                575: {
                    items: 2,
                    margin: 20,
                },
                767: {
                    items: 3,
                    margin: 20,
                },

                991: {
                    items: 4,
                    margin: 30,
                },

                1300: {
                    items: 5,
                    margin: 30,
                },
            },
        });
        
        
         /*============================================
     magnificPopup
     ==============================================*/
    try {
        // Example with multiple objects
        $('.video-link').magnificPopup({
            type: 'iframe'
        });
    } catch (err) {

    }
    
})(jQuery, window, document);

