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


    $('.phone_mask').mask('+7 (900) 000 00 00');
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

        //$('.valid').addClass('active');

    });


    $('.open-confidentiality').on("click", function () {
        $('.overlay-confidentiality').addClass('active fadeInDown');
        $('.overlay-confidentiality').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-confidentiality .close,.close-popup').on("click", function () {
        $('.overlay-confidentiality').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-confidentiality').removeClass('active');
        }, 500);
    });

    $('.open-valid').on("click", function () {
        $('.overlay-valid').addClass('active fadeInDown');
        $('.overlay-valid').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-valid .close,.close-popup').on("click", function () {
        $('.overlay-valid').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-valid').removeClass('active');
        }, 500);
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



    $(".partners_filter .tabs-button a").click(function(e) {
        $("div [data-id]").removeClass("active");
        $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("active");
        e.preventDefault();
    });
    $(".partners_filter .tabs-button").click(function(e) {
        e.preventDefault();
        $(".tabs-button").removeClass('active');
        $(this).addClass('active');
    });

    var distance = 50,
        box = $('.filter');
    $('button').on('click', function() {
        box.stop().animate({
            scrollTop: '+=' + (distance * $(this).data('factor'))
        });
    });

    $(".partners_filter .filter-open").on("click",function(){
        $(this).next().addClass("active")
    });
    $(".partners_filter #pp_offers_list li").on("click",function(){
        $("#pp_offers_list li").removeClass("active"),
            $(this).addClass("active"),
            $(this).parent("#pp_offers_list").removeClass("active"),
            $(".filter-open").find("span b").text($(this).find("a").text())
    });


    $(".lang_filter .filter-open").on("click",function(){
        $(this).next().addClass("active")
    });
    $(".lang_filter #pp_offers_list li").on("click",function(){
        $("#pp_offers_list li").removeClass("active"),
            $(this).addClass("active"),
            $(this).parent("#pp_offers_list").removeClass("active"),
            $(".filter-open").find("span b").text($(this).find("a").text())
    });

    $(".map_filter .tab-button a").click(function(e) {
        $("div [data-id]").removeClass("activ");
        $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("activ");
        e.preventDefault();
        $('.main-addresses__item_1 img').css('display', 'none');

    });
    $(".map_filter .tab-button").click(function(e) {
        e.preventDefault();
        $(".tab-button").removeClass('activ');
        $(this).addClass('activ');
    });

    $(".map_filter .filter-open").on("click",function(){
        $(this).next().addClass("activ")
    });
    $(".map_filter #pp_offers_list_1 li").on("click",function(){
        $("#pp_offers_list_1 li").removeClass("activ"),
            $(this).addClass("activ"),
            $(this).parent("#pp_offers_list_1").removeClass("activ"),
            $(".filter-open").find("span b").text($(this).find("a").text())
    });
    $(document).ready(function() {

        var element = $(".leng_fix");
        var height_el = element.offset().top;
        $(window).scroll(function() {

            if($(window).scrollTop() > height_el) {

                element.addClass("fixed");

            } else {

                element.removeClass("fixed");

            }

        });

    });
});

var Placemark = {};

ymaps.ready(function() {
    console.log('2');
    var myMap = new ymaps.Map('myMap', {
        center: [50.44059299, 30.52149180],
        zoom: 12,

        controls: ['zoomControl']
    }, {
        suppressMapOpenBlock: true,
    });
    console.log('3');
    myMap.behaviors.disable('scrollZoom');

    $('.main-addresses__item_1').each(function() {
        var obj_1 = $('.main-addresses__item_1').attr("data-coord");
        obj_1 = JSON.parse(obj_1); //преобразовываем в объект
        //console.log(obj); //тоже самое, но уже не строка, а объект

        myMap.geoObjects
            .add(new ymaps.Placemark(obj_1, { //тут была неправильная ")" и "[obj]"
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/img/marc_1.png',
                id: 1,
                // Размеры метки.
                iconImageSize: [55, 69],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-80, -254]
            }));

    }); //each

});
var Placemark = {};

ymaps.ready(function() {
    console.log('2');
    var myMap2 = new ymaps.Map('myMap2', {
        center: [50.44059299, 30.52149180],
        zoom: 12,

        controls: ['zoomControl']
    }, {
        suppressMapOpenBlock: true,
    });
    console.log('3');
    myMap2.behaviors.disable('scrollZoom');

    $('.main-addresses__item_2').each(function() {
        var obj_2 = $('.main-addresses__item_2').attr("data-coord");
        obj_2 = JSON.parse(obj_2); //преобразовываем в объект
        //console.log(obj); //тоже самое, но уже не строка, а объект

        myMap2.geoObjects
            .add(new ymaps.Placemark(obj_2, { //тут была неправильная ")" и "[obj]"
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/img/marc_2.png',
                // Размеры метки.
                iconImageSize: [36, 47],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-80, -254]
            }));

    }); //each

});
var Placemark = {};

ymaps.ready(function() {
    console.log('2');
    var myMap3 = new ymaps.Map('myMap3', {
        center: [50.44059299, 30.52149180],
        zoom: 12,

        controls: ['zoomControl']
    }, {
        suppressMapOpenBlock: true,
    });
    console.log('3');
    myMap3.behaviors.disable('scrollZoom');

    $('.main-addresses__item_3').each(function() {
        var obj_3 = $('.main-addresses__item_3').attr("data-coord");
        obj_3 = JSON.parse(obj_3); //преобразовываем в объект
        //console.log(obj); //тоже самое, но уже не строка, а объект

        myMap3.geoObjects
            .add(new ymaps.Placemark(obj_3, { //тут была неправильная ")" и "[obj]"
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/img/marc_3.png',
                // Размеры метки.
                iconImageSize: [22, 27],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-80, -254]
            }));

    }); //each

});





