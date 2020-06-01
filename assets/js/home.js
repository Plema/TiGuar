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

                breakpoint: 1600,
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
                    slidesToShow: 3,
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
        slidesToShow: 1,
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
    $('#tab').change(function() {
        value = $(this).find('option:selected').val();

        $('div[id^="test_hide"]').hide();
        $('#test_hide'+value).show();
    });
    $(function () {

        var show = true;
        var countbox = ".benefits__inner";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height(); // Высота окна браузера
            var d_height = $(document).height(); // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $('.benefits__number').css('opacity', '1');
                $('.benefits__number').addClass('ac');
                $('.benefits__number').spincrement({
                    thousandSeparator: "",
                    duration: 1200

                });

                show = false;
            }
        });

    });

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
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is <= 640px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 30
                }
            }
        });
    });

    $(".tab_item").not(":first").hide();
    $(".tab").click(function() {
        $(".tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    $(".tab_it").not(":first").hide();
    $(".tabe").click(function() {
        $(".tabe").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_it").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


});
