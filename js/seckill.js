/**
 * Created by student on 2018/10/13.
 */
function seckill() {
    var timer=8*60*60;
    var min=0;
    var second=0;
    var spanArr=document.querySelectorAll(".seckill_time span");
    var leftButton=document.querySelectorAll(".seckill_header_fr i")[0];
    var leftButtonSpan=leftButton.firstElementChild;

    var rightButton=document.querySelectorAll(".seckill_header_fr i")[1];
    var rightButtonSpan=rightButton.firstElementChild;
    var seckillUl=document.querySelector(".seckill_content ul");

    var time=setInterval(function () {
        timer--;
        var hour=Math.floor(timer/60/60);
        var min=Math.floor(timer%3600/60);
        var second=Math.floor(timer%60);
        hour=hour>10?hour:"0"+hour;
        min=min>10?min:"0"+min;
        second=second>10?second:"0"+second;
        spanArr[0].innerHTML=hour;
        spanArr[2].innerHTML=min;
        spanArr[4].innerHTML=second;
    },1000);
    var leftClick=false;
    var rightClick=false;
    leftButton.onclick=function () {
        leftClick=true;
        rightClick=false;
        if(leftClick==true){
            leftButton.style.borderColor="#ccc";
            leftButtonSpan.style.color="#ccc";

        }
        if(rightClick==false){
            rightButton.style.borderColor="#333";
            rightButtonSpan.style.color="#333";
        }
        animate(seckillUl,0);
    }
    rightButton.onclick=function () {

        rightClick=true;
        leftClick=false;
        if(rightClick==true){
            rightButton.style.borderColor="#ccc";
            rightButtonSpan.style.color="#ccc";
        }
        if(leftClick==false){
            leftButton.style.borderColor="#333";
            leftButtonSpan.style.color="#333";
        }
        animate(seckillUl,-750);
    }
    function animate(ele, target) {
        clearInterval(ele.timer);
        var speed = target > ele.offsetLeft ? 10 : -10;
        ele.timer = setInterval(function () {
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + "px";
            if (Math.abs(val) < Math.abs(speed)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 5);
    }

}
