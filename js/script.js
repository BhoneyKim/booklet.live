function initNavbar() {

    var SCROLL_SPEED = 750;
    var SCROLL_OFFSET = 50;
    var EASING = "swing";

    var $navTop = $("#navbar-top");
    var $navBar = $(".navbar");
    var $navExternal = $(".nav-external");
    var $OI_section = $("#_BOOK_Observation_interview");
    $navBar.onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollSpeed: SCROLL_SPEED,
        scrollOffset: SCROLL_OFFSET,
        scrollThreshold: 0.5,
        filter: ":not(.external)",
        easing: EASING
    });

    $(window).on("scroll", function (event) {

        var scroll = $(window).scrollTop();

        if (scroll >= $("#main").height()) {
            $navBar.addClass("fixed");
            $OI_section.addClass("margintop70");
        } else {
            $navBar.removeClass("fixed");
            $OI_section.removeClass("margintop70");
        }
    }).trigger("scroll");

    $navExternal.click(function (e) {
        e.preventDefault();

        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - SCROLL_OFFSET
        }, SCROLL_SPEED, EASING);
    });
}

function initPortfolio() {

    var $portfolio = $("#portfolio");
    var $items = $portfolio.find(".items");
    var $filters = $portfolio.find(".filters li a");

    $items.imagesLoaded(function () {

        $items.isotope({
            itemSelector: ".item",
            layoutMode: "fitRows",
            transitionDuration: "0.7s"
        });
    });

    $filters.click(function () {

        var $el = $(this);

        $filters.removeClass("active");

        $el.addClass("active");

        var selector = $el.attr("data-filter");

        $items.isotope({
            filter: selector
        });

        return false;
    });

    $items.find(".item a").venobox({
        border: "2rem",
        closeBackground: "transparent"
    });
}

function initAnimations() {
    var $animated = $(".animated");

    $animated.appear({
        force_process: true
    });

    $animated.on("appear", function () {

        var $el = $(this);

        var animation = $el.data("animation");
        var delay = $el.data("delay");

        // Mofile fix
        if ($(window).width() < 768) {
            delay = 0;
        }

        if (delay) {

            setTimeout(function () {
                $el.addClass(animation);
                $el.addClass("showing");
                $el.removeClass("hiding");
            }, delay);
        } else {

            $el.addClass(animation);
            $el.addClass("showing");
            $el.removeClass("hiding");
        }
    });

    // Service hover animation
    // $("._BOOK_Observation_interview").hover(function() {
    //     $("i", this).addClass("animated tada");
    // }, function() {
    //     $("i", this).removeClass("animated tada");
    // });

    $(".service").hover(function () {
        $("i", this).addClass("animated tada");
    }, function () {
        $("i", this).removeClass("animated tada");
    });

    $("#UserStory").hover(function () {
        $(".centerSlick").slick('slickGoTo',0,false);
    });

    $("#UserStory_Carousel").click(function () {
        $(".centerSlick").slick('slickGoTo',0,false);
    })
}

$(document).ready(function () {
    initNavbar();
    initPortfolio();
    initAnimations();

    $(".centerSlick").slick({
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        infinite: false,
    }); 
});

$(window).on("load", function () {

    var $loader = $(".loader");

    $loader.find(".loading").fadeOut();
    $loader.fadeOut("slow");
});

