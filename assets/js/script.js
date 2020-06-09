$(document).ready(function(){
    $('.icon-open-menu').on("click", function () {
        $('.sub_menu').fadeIn();
    });
    $('.icon-close').on("click", function () {
        $('.sub_menu').fadeOut();
    });
    $(window).scroll(function(){
        $('.mobile').toggleClass('fix', $(this).scrollTop() > 0);
    });
    $(function() {
        jcf.replaceAll();


    });

    $('.open-registration').on("click", function () {
        $('.overlay-registration').addClass('active fadeInDown');
        $('.overlay-registration').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-registration .close,.close-popup').on("click", function () {
        $('.overlay-registration').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-registration').removeClass('active');
        }, 500);
    });
    $('.overlay-registration .closeBtn').on("click", function () {
        $('.overlay-registration').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });


    $('.open-call').on("click", function () {
        $('.overlay-call').addClass('active fadeInDown');
        $('.overlay-call').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-call .close,.close-popup').on("click", function () {
        $('.overlay-call').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-call').removeClass('active');
        }, 500);
    });
    $('.overlay-call .closeBtn').on("click", function () {

        $('.valid').addClass('active');

    });



    $('.open-video').on("click", function () {
        $('.overlay-video').addClass('active fadeInDown');
        $('.overlay-video').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-video .close,.close-popup').on("click", function () {
        $('.overlay-video').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-video').removeClass('active');
        }, 500);
    });
    $('.overlay-video .closeBtn').on("click", function () {
        $('.overlay-video').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });

});

