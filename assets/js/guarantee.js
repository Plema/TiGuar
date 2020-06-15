
$(document).ready(function(){
    var distance = 50,
        box = $('.scroll');
    $(' button').on('click', function() {
        box.stop().animate({
            scrollLeft: '+=' + (distance * $(this).data('factor'))
        });
    });
});


