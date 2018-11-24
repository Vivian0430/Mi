/**
 * Created by student on 2018/10/11.
 */
window.onload=function(){
        var play=document.querySelectorAll(".video ul li a i")[0];
        var video=document.querySelector(".play");
        var close=document.querySelector(".play .play_middle h2 i");
        play.onclick=function(){
            video.style.display="block";
        }
        close.onclick=function(){
            video.style.display="none";
        }

    var text=document.querySelector(".container .searchform .search-text");
    var hotwords=document.querySelector(".search-hotwords");
    text.onfocus=function () {
        hotwords.style.display="none";
        btn.style.borderColor="#ff6700";
        this.style.borderColor="#ff6700";
    }
    text.onblur=function () {
        hotwords.style.display="block";
        btn.style.borderColor="#e0e0e0";
        this.style.borderColor="#e0e0e0";
    }
    var btn=document.querySelector(".container .searchform .search-btn");
    var i=document.querySelector(".container .searchform i");
    btn.onmouseover=function () {
        this.style.backgroundColor="#ff6700";
        this.style.borderColor="#ff6700";
        i.style.color="white";
    }
    i.onmouseover=function () {
        btn.style.backgroundColor="#ff6700";
        btn.style.borderColor="#ff6700";
        this.style.color="white";
    }
    btn.onmouseout=function () {
        this.style.backgroundColor="white";
        this.style.borderColor="#e0e0e0";
        i.style.color="#333";
    }
    i.onmouseout=function () {
        btn.style.backgroundColor="white";
        btn.style.borderColor="#e0e0e0";
        this.style.color="#333";
    }

    var left=document.querySelector(".wrap .left");
    var right=document.querySelector(".wrap .right");
    left.onmouseover=function(){
        this.style.backgroundPosition="0 0";
    }
    left.onmouseout=function(){
        this.style.backgroundPosition="83px 0";
    }
    right.onmouseover=function(){
        this.style.backgroundPosition="125px 0";
    }
    right.onmouseout=function(){
        this.style.backgroundPosition="42px 0";
    }

    var tab2=document.querySelector(".tab2");
    var tab4=document.querySelector(".tab4");
     var a2=document.querySelectorAll(".viewport .v_list ul li")[0];
    var a4=document.querySelectorAll(".viewport .v_list ul li")[1];
    a2.onmouseover=function(){
         tab2.style.display="block";
        this.style.backgroundColor="#ff6700";
    }
    tab2.onmouseover=function(){
        this.style.display="block";
        a2.style.backgroundColor="#ff6700";
    }
    a2.onmouseout=function(){
        tab2.style.display="none";
        this.style.backgroundColor="rgba(0,0,0,0)";
    }
    tab2.onmouseout=function(){
        this.style.display="none";
        a2.style.backgroundColor="rgba(0,0,0,0)";
    }
    a4.onmouseover=function(){
        tab4.style.display="block";
        this.style.backgroundColor="#ff6700";
    }
    tab4.onmouseover=function(){
        this.style.display="block";
        a4.style.backgroundColor="#ff6700"
    }
    a4.onmouseout=function(){
        tab4.style.display="none";
        this.style.backgroundColor="rgba(0,0,0,0)";
    }
    tab4.onmouseout=function(){
        this.style.display="none";
        a4.style.backgroundColor="rgba(0,0,0,0)";
    }
    content();
    video2();
    goTop();
    seckill();
    ai();
    around();
    touch()
}
