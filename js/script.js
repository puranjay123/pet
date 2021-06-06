
$(window).on('load', function () { 
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {

            0: {
                items: 1
            },

            480: {
                items: 2
            }
        }
    });
});

$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

$(window).on('load', function () {

    $("#isotope-container").isotope({});

    $("#isotope-filters").on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');

        $("#isotope-container").isotope({
            filter: filterValue
        });

        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});



$(function () {

    showHideNav();

    $(window).scroll(function () {

        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");

            $("#log").removeClass("clogo");

            $("#back-to-top").fadeIn();

        } else {

            $("nav").removeClass("white-nav-top");

            $("#log").addClass("clogo");

            $("#back-to-top").fadeOut();
        }
    }
});

$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

$(function () {

    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

$(function () {
    new WOW().init();
});

$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});