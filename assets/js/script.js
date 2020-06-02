$(document).ready(function(){
    $('.icon-open-menu').on("click", function () {
        $('.sub_menu').fadeIn();
    });
    $('.icon-close').on("click", function () {
        $('.sub_menu').fadeOut();
    });

    $(function() {
        jcf.replaceAll();


    });

});

