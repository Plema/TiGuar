$(".partners_filter .filter-open").on("click",function(){
    $(this).next().addClass("active")
});
$("#pp_offers_list li").on("click",function(){
    $("#pp_offers_list li").removeClass("active"),
        $(this).addClass("active"),
        $(this).parent("#pp_offers_list").removeClass("active"),
        $(".filter-open").find("span b").text($(this).find("a").text())
});

$(".tabs-button a").click(function(e) {
    $("div [data-id]").removeClass("active");
    $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("active");
    e.preventDefault();
});
$(".tabs-button").click(function(e) {
    e.preventDefault();
    $(".tabs-button").removeClass('active');
    $(this).addClass('active');
});
