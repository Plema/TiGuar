/**
 * Created by Nafta on 03.06.2020.
 */
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
});
