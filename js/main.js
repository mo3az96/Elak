$(document).ready(function () {

    // Mobile Side Menu 
    $('.menu-btn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
        $('html').css("overflow", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
        $('html').css("overflow", "auto");
    });
    $(".nav-links").click(function (e) {
        e.stopPropagation();
    });
    // Mobile Search 
    $('.search-icon').click(function () {
        $('.search-pop').fadeIn(500);
        $('body').css("overflow", "hidden");
        $('html').css("overflow", "hidden");
    });
    $('.search-pop').click(function () {
        $('.search-pop').fadeOut(500);
        $('body').css("overflow", "auto");
        $('html').css("overflow", "auto");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });
    // Main Slider
    if ($(window).width() < 992) {
        $(".header-container").removeClass("container");
    } else {
        $(".header-container").addClass("container");
    }
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: true,
        rtl: true,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 1,
                nav: true,
                dots: true
            },
        }
    });

    // Product Slider
    $('.Product-slider').owlCarousel({
        items: 5,
        autoplay: true,
        margin: 16,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='11px' height='20px'> <path fill-rule='evenodd'  fill='rgb(152, 152, 152)' d='M10.836,9.725 L1.781,0.671 C1.568,0.458 1.226,0.458 1.013,0.671 C0.800,0.884 0.800,1.226 1.013,1.439 L9.682,10.108 L1.013,18.776 C0.800,18.990 0.800,19.332 1.013,19.544 C1.117,19.649 1.258,19.706 1.395,19.706 C1.532,19.706 1.672,19.654 1.777,19.544 L10.832,10.490 C11.045,10.281 11.045,9.935 10.836,9.725 Z'/></svg>",
            "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='11px' height='20px'> <path fill-rule='evenodd'  fill='rgb(152, 152, 152)' d='M0.143,9.616 L9.443,0.549 C9.662,0.336 10.013,0.336 10.233,0.549 C10.451,0.763 10.451,1.105 10.233,1.318 L1.328,9.998 L10.233,18.678 C10.451,18.892 10.451,19.235 10.233,19.448 C10.125,19.553 9.981,19.609 9.840,19.609 C9.699,19.609 9.555,19.557 9.447,19.448 L0.147,10.381 C-0.072,10.172 -0.072,9.825 0.143,9.616 Z'/></svg>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            500: {
                items: 2,
                nav: false,

            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });
    ////////////////////////////////////////////////////////
    if ($(window).width() < 992) {
        $(".linksheading").addClass("moaccordion");
        $(".foot-links").addClass("mopanel");

        $(".newsletter-head").addClass("moaccordion");
        $(".news-body").addClass("mopanel");
    }
    var acc = document.getElementsByClassName("moaccordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    /////////////////////////////////////
    if ($(window).width() < 1200) {
        $(".cats").addClass("owl-carousel");
        $('.cats').owlCarousel({
            items: 1,
            margin: 10,
            autoplay: true,
            rtl: true,
            loop: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                767: {
                    items: 3,
                },
                992: {
                    items: 5,
                },

            }
        });
    } else {
        $(".brands-item").removeClass("owl-carousel");
    }
});