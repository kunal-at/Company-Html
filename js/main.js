$(document).ready(function () {
    $('.client-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
    });

    // wow-animation 
    new WOW().init();

    // header-fixed-jquery 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header-bg').addClass('fixed');
        } else {
            $('.header-bg').removeClass('fixed');
        }
    });

    // Bottom-to-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#topscroll').fadeIn();
        } else {
            $('#topscroll').fadeOut();
        }
    });
    $('#topscroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    var $btns = $('.nav-link').click(function () {
        if (this.id == 'all') {
            $('#parent > div').fadeIn(450);
        } else {
            var $el = $('.' + this.id).fadeIn(450);
            $('#parent > div').not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active');
    })

    // Page-load
    // $( ".portfolio-section .nav-pills .nav-item .nav-link" ).load( "js/main.js");


    
    // Masonry grid
     // var $grid = $('.portfolio-wrapper').masonry({
     //      temSelector: '.grid-item',
     //      columnWidth: '.grid-sizer',
     //      percentPosition: true,
     //  });

      // Initate imagesLoaded
      // $grid.imagesLoaded().progress( function() {
      //     $grid.masonry('layout');
      // });

      // setInterval(function() {  var $grid = $('.portfolio-wrapper').masonry({
      //     temSelector: '.grid-item',
      //     columnWidth: '.grid-sizer',
      //     percentPosition: true,
      // });

      // Initate imagesLoaded
      // $grid.imagesLoaded().progress( function() {
      //     $grid.masonry('layout');
      // });}, 1000);
     
});