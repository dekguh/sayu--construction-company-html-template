(function() {
    'use strict';

    /* preloader */
    $(window).on('load', function() {
        $('.preloader-wrapper').delay(2000).fadeOut(1000);
    });

    /* dropdown navbar */
    $('.nav-link.dropdown-toggle').on('click', function() {
        $('.navbar-nav').find('.dropdown-menu.show').slideUp();
        if($(this).parent().hasClass('show')) {
            $(this).parent().find('.dropdown-menu').slideUp();
        } else {
            $(this).parent().find('.dropdown-menu').slideDown();
        }
    });
    $('html').on('click', function(e) {
        $('.navbar-nav').find('.dropdown-menu.show').slideUp();
    });

    /* navbar slide */
    $('.navbar-toggler').on('click', function() {
        $('.navbar-collapse').animate({
            right: '0'
        }, 1500);
    });
    $('.navbar-close').on('click', function(e) {
        e.preventDefault();
        $('.navbar-collapse').animate({
            right: '-280px'
        }, 1500);
    });

    /* project carousel */
    var projectCarousel = $('#projectCarousel');
    projectCarousel.owlCarousel({
        items: 1,
        margin: 30,
        autoplaySpeed: 1000,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            578: {
                items: 1
            },
            768: {
                items: 2,
                autoplay: false
            },
            992: {
                items: 3,
                autoplay: false
            }
        }
    });
    $('.button-project-left').on('click', function(e) {
        e.preventDefault();
        projectCarousel.trigger('prev.owl.carousel', [1000])
    });
    $('.button-project-right').on('click', function(e) {
        e.preventDefault();
        projectCarousel.trigger('next.owl.carousel', [1000])
    });

    /* project carousel 2 */
    var projectCarousel = $('#projectCarousel2');
    projectCarousel.owlCarousel({
        items: 1,
        margin: 30,
        autoplaySpeed: 1000,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            578: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
    $('.button-project-left').on('click', function(e) {
        e.preventDefault();
        projectCarousel.trigger('prev.owl.carousel', [1000])
    });
    $('.button-project-right').on('click', function(e) {
        e.preventDefault();
        projectCarousel.trigger('next.owl.carousel', [1000])
    });

    /* testimonial Carousel */
    $('#testimonialCarousel').owlCarousel({
        items: 1,
        margin: 30,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        nav: true,
        dots: false
    });

    /* partner carousel */
    $('#partnerCarousel').owlCarousel({
        items: 1,
        margin: 30,
        autoplaySpeed: 1000,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            578: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    /* service detail carousel */
    $('#serviceDetailCarousel').owlCarousel({
        items: 1,
        margin: 30,
        autoplaySpeed: 1000,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            578: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /* project detail carousel */
    $('#projectDetailCarousel').owlCarousel({
        items: 1,
        margin: 30,
        autoplaySpeed: 1000,
        stagePadding: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            578: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /* owl carousel nav */
    $('button.owl-prev span').each(function() {
        $(this).html('<i class="fas fa-arrow-left"></i>');
    });
    $('button.owl-next span').each(function() {
        $(this).html('<i class="fas fa-arrow-right"></i>');
    });

    $('.project-counter').counterUp({
        time: 3000
    });

    /* scroll to top */
    $(window).on('scroll', function() {
        if($(this).scrollTop() >= 200) {
            $('.button-to-top').css('display', 'block');
        } else {
            $('.button-to-top').css('display', 'none');
        }
    });
    $('.button-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: $('html, body').position().top
        }, 2000);
    });

    /* accordion question */
    $('.button-question').on('click', function() {
        if($(this).parent().parent().hasClass('active')) {
            $(this).parent().parent().removeClass('active');
            $(this).parent().parent().find('.block-body').slideUp();
        } else {
            $(this).parent().parent().addClass('active');
            $(this).parent().parent().find('.block-body').slideDown();
        }
    });
})(window.jQuery);