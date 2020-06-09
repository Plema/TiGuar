$(document).ready(function(){



    $('.slider_news').slick({
        infinite: false,
        draggable:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:300,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {


            },
            {

                breakpoint: 1400,
                settings: {
                    centerMode:false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1280,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:false,
                    infinite:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    infinite:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.time_slider').slick({
        infinite: false,
        draggable:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed:300,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {


            },
            {

                breakpoint: 1600,
                settings: {
                    centerMode:false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1280,
                settings: {
                    centerMode:false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:false,
                    infinite:true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    infinite:true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.partner_slider').slick({
        infinite: false,
        draggable:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical:true,
        speed:300,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
    });
    $( function() {
        $( "#accordion" ).accordion({
            collapsible: true
        });
    } );
    $( function() {
        $( "#tabs" ).tabs();
    } );
    //$('#tab').change(function() {
    //    value = $(this).find('option:selected').val();
    //
    //    $('div[id^="test_hide"]').hide();
    //    $('#test_hide'+value).show();
    //});
    $(function () {

        var show = true;
        var countbox = ".benefits__inner";
        $(window).on("scroll load resize", function () {
            //if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height(); // Высота окна браузера
            var d_height = $(document).height(); // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $('.benefits__number').css('opacity', '1');
                $('.benefits__number').spincrement({
                    thousandSeparator: "",
                    duration: 1200

                });

                show = false;
                setTimeout(ovalIconInit1(), 1500);
            }
        });

    });
    var timeout1, timeout2, setImeout, current1 = 0,
        textArr1 = document.querySelectorAll('.benefits__inner')

    function ovalIconInit1 () {
        timeout1 = setTimeout(function() {
            textArr1.forEach(function(i) { (i) >= i.classList.remove('active') });
            textArr1[current1].classList.add("active");
            (current1 === 4) ? current1 = 0 : current1++;
            ovalIconInit1();
        }, 2000);
    };



    $(function () {
        //initialize swiper when document ready
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 30,
            slidesPerGroup: 1,
            mousewheel: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            },
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is <= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is <= 640px
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1600: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1800: {
                    slidesPerView: 5,
                    spaceBetween: 30
                },
            }
        });
    });

    $(".section_4 .tabs-button").click(function(e) {
        $("div [data-id]").removeClass("active");
        $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("active");
        e.preventDefault();
    });
    $(".section_4 .tabs-button").click(function(e) {
        e.preventDefault();
        $(".tabs-button").removeClass('active');
        $(this).addClass('active');
    });



    $('.partner_slider .slide').click(function(){

        $('.slick-slide').addClass('h');
        $('.slide').removeClass('active');
        $(this).addClass('active');
    });
    $('.partner_slider .slick-slide').click(function(){
        $('.slick-slide').removeClass('h');
        $(this).addClass('h');
    });

    $(".partners_filter .filter-open").on("click",function(){
        $(this).next().addClass("active")
    });
    $("#pp_offers_list li").on("click",function(){
            $("#pp_offers_list li").removeClass("active"),
            $(this).addClass("active"),
            $(this).parent("#pp_offers_list").removeClass("active"),
            $(".filter-open").find("span b").text($(this).find("a").text())
    });

    $(".map_filter .filter-open").on("click",function(){
        $(this).next().addClass("active")
    });
    $("#pp_offers_list_1 li").on("click",function(){
        $("#pp_offers_list_1 li").removeClass("active"),
            $(this).addClass("active"),
            $(this).parent("#pp_offers_list_1").removeClass("active"),
            $(".filter-open").find("span b").text($(this).find("a").text())
    });

    $(".section_8 .tabs-button a").click(function(e) {
        $("div [data-id]").removeClass("active");
        $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("active");
        e.preventDefault();
    });
    $(".section_8 .tabs-button").click(function(e) {
        e.preventDefault();
        $(".tabs-button").removeClass('active');
        $(this).addClass('active');
    });

    $(".section_10 .tab-button a").click(function(e) {
        $("div [data-id]").removeClass("active");
        $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("active");
        e.preventDefault();
    });
    $(".section_10 .tab-button").click(function(e) {
        e.preventDefault();
        $(".tab-button").removeClass('active');
        $(this).addClass('active');
    });
    var distance = 50,
        box = $('.filter');
    $('button').on('click', function() {
        box.stop().animate({
            scrollTop: '+=' + (distance * $(this).data('factor'))
        });
    });


    $('.scrollto').on('click', function() {
        $('html,body').animate({scrollTop:$('.section_2').offset().top+"px"},{duration:1E3});

    });


    $(".map_filter .filter-open").on("click",function(){
        $(this).next().addClass("active")
    });
    $("#pp_offers_list_1 li").on("click",function(){
        $("#pp_offers_list_1 li").removeClass("active"),
            $(this).addClass("active"),
            $(this).parent("#pp_offers_list_1").removeClass("active"),
            $(".filter-open").find("span b").text($(this).find("a").text())
    });


});

$(document).ready(function() {

    var element = $(".menu_fix");
    var height_el = element.offset().top;
    $(window).scroll(function() {

        if($(window).scrollTop() > height_el) {

            element.addClass("fixed");

        } else {

            element.removeClass("fixed");

        }

    });

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