$(".tab_content").hide();
$(".tab_content:first").show();
/* в режиме вкладок */
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_accordion").removeClass("d_active");
    $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
});
$('ul.tabs li').click(function(){
    if($(this).is(':visible')){
        setTimeout(function(){
            $(".slider_action, .slider_new").slick('setPosition');
            $(window).resize();
        },500);
    }
});
/* в режиме аккордеона */
$(".tab_accordion").click(function () {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();
    $(".tab_accordion").removeClass("d_active");
    $(this).addClass("d_active");
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");

});
$('.tab_accordion').click(function(){
    if($(this).is(':visible')){
        setTimeout(function(){
            $(".slider_action, .slider_new").slick('setPosition');
            $(window).resize();
        },500);
    }
});
$('.slider_action').slick({
    infinite: false,
    draggable:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:300,
    nextArrow: '<button class="slick-arrow next"><span></span></button>',
    prevArrow: '<button class="slick-arrow prev"><span></span></button>',
});
$('.slider_new').slick({
    infinite: false,
    draggable:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:300,
    nextArrow: '<button class="slick-arrow next"><span></span></button>',
    prevArrow: '<button class="slick-arrow prev"><span></span></button>',
});
