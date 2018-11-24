/**
 * Created by student on 2018/10/12.
 */
// 视频开始
// 视频开
function video2() {
    var play=document.querySelectorAll(".video ul li a i")[0];
    var video=document.querySelector(".play");
    var close=document.querySelector(".play .play_middle h2 i");
    play.onclick=function(){
        video.style.display="block";
    }
    close.onclick=function(){
        video.style.display="none";
    }
    
   }

// 视频结束

// 视频结束