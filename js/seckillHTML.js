/**
 * Created by student on 2018/10/15.
 */
window.onload=function () {
    touch();
    var middleNav=document.querySelector(".middle_nav");
    function seckill() {
        var timer=2*60*60;
        var min=0;
        var second=0;
        var spanArr=document.querySelectorAll(".middle_time span");
        var liArr=document.querySelectorAll(".middle_nav li");

        for(var i=0;i<liArr.length;i++){
            liArr[i].onclick=function () {
                for(var j=0;j<liArr.length;j++){
                        liArr[j].style.backgroundColor="#333";
                    }
                this.style.backgroundColor="#f1393a";
            }
        }
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

    }
    seckill();
    window.onscroll=function () {
        console.log(scroll().top);
          if(scroll().top>240){
              middleNav.className="middle_nav fixed";
          }else{
              middleNav.className="middle_nav";
          }
    }
    function  scroll() {
        if(window.pageXOffset!==undefined){
            return{
                "top":window.pageYOffset,
                "left":window.pageXOffset,
            }
        }else if(document.compatMode==="CSS1Compat"){
            return{
                "top":document.documentElement.scrollTop,
                "left":document.documentElement.scrollLeft,
            }
        }else{
            return{
                "top":document.body.scrollTop,
                "left":document.body.scrollLeft,
            }

        }

    }


}
