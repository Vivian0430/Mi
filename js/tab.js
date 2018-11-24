
$(function(){
    $(".panel .nav_tabs .link_left").mouseenter(function(){
        $(".box").css("display","none");
        $(".erweima").css("display","block");
        $(this).css("color","#f56600");
        $(".panel .nav_tabs .link_right").css("color","#666");
    })
    $(".panel .nav_tabs .link_right").mouseenter(function(){
        $(".box").css("display","block");
        $(".erweima").css("display","none");
        $(this).css("color","#f56600");
        $(".panel .nav_tabs .link_left").css("color","#666");
    })
})