/**
 * Created by Nafta on 03.06.2020.
 */

$(".partners_filter .filter-open").on("click",function(){
    $(this).next().addClass("active")
});
$("#pp_offers_list li").on("click",function(){
    $("#pp_offers_list li").removeClass("active"),
        $(this).addClass("active"),
        $(this).parent("#pp_offers_list").removeClass("active"),
        $(".filter-open").find("span b").text($(this).find("a").text())
});
