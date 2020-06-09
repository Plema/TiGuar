/**
 * Created by Nafta on 09.06.2020.
 */

$(document).ready(function(){
    var distance = 50,
        box = $('.text');
    $('button').on('click', function() {
        box.stop().animate({
            scrollLeft: '+=' + (distance * $(this).data('factor'))
        });
    });
});