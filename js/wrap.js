/**
 * Created by student on 2018/10/12.
 */
$(function (){
    var index=0;
    $(".wrap ol li").mouseover(function(){
        $(this).addClass("current");
    })
    $(".wrap ol li").mouseout(function(){
        $(this).removeClass("current");
    })
    $(".wrap ol li").click(function(){
        var index=$(this).index();
        $(".wrap ul li").eq(index).fadeIn().siblings().fadeOut();
        $(this).addClass("current").siblings().removeClass("current");
    })
    $(".wrap .left").click(function(){
        if(index<0){
            index=4;
        }
        index--;
        $(".wrap ul li").eq(index).fadeIn().siblings().fadeOut();
        $(".wrap ol li").eq(index).addClass("current").siblings().removeClass("current");
    })
    $(".wrap .right").click(function(){
        index++;
        if(index>4){
            index=0;
        }
        $(".wrap ul li").eq(index).fadeIn().siblings().fadeOut();
        $(".wrap ol li").eq(index).addClass("current").siblings().removeClass("current");
    })
    function autoplay(){
        index++;
        if(index>4){
            index=0;
        }
        $(".wrap ul li").eq(index).fadeIn().siblings().fadeOut();
        $(".wrap ol li").eq(index).addClass("current").siblings().removeClass("current");
    }
    var timer=setInterval(autoplay,3000);
    $(".wrap").mouseover(function(){
        clearInterval(timer);
    })
    $(".wrap").mouseout(function(){
        timer=setInterval(autoplay,3000);
    })
})