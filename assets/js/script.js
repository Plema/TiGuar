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

});

