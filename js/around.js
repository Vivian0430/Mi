/**
 * Created by student on 2018/10/15.
 */

//换菜单
function around() {

    var aroundactive = document.getElementById("around_active");
    var around_active = aroundactive.getElementsByTagName("li");
    var content3_around_right = document.getElementsByClassName("content3_around_right");
    for(var i=0;i<around_active.length;i++){
       
        around_active[i].index = i ;
        content3_around_right[0].style.display = "block" ;
        around_active[i].onmouseenter = function(){
            for(var j=0;j<around_active.length;j++){
                around_active[j].className = "" ;
                content3_around_right[j].style.display = "none";
            }
            content3_around_right[this.index].style.display = "block" ;
            this.className = "around_active" ;
        }
    }

//鼠标移上去效果
    var right = document.getElementById("right");
    var evaluate = right.getElementsByClassName("evaluate");
    var evaluate_li = right.getElementsByTagName("li");
    for(var i=0;i<evaluate_li.length;i++){
        evaluate_li[i].index = i ;
        evaluate_li[i].onmouseenter = function(){
            for(var j=0;j<evaluate.length;j++){
                evaluate[j].style.display = "none";
            }
            //判断打开的是哪个菜单
            var num;
            if(this.index<9){
                num = this.index ;
            } else{
                num = this.index - Math.floor(this.index/9)*2;
            }
            evaluate[num].style.display = "block";
            var moddlenum1 = -94 ; var opacitynum1 = 0;
            //鼠标移动上去，上升动画
            var setint = setInterval(function(){
                if(moddlenum1>=-18){     //达到目标值，清除定时器
                    clearInterval(setint);
                }
                evaluate[num].style.opacity = opacitynum1;
                moddlenum1 += 0.78;
                opacitynum1 += 0.01;
                evaluate[num].style.bottom = moddlenum1 + "px" ;
            },1);
        }
        evaluate_li[i].onmouseleave = function(){
            /*				for(var j=0;j<evaluate.length;j++){
             var that = this;
             evaluate[j].style.display = "none";
             }*/
            var that = this;
            moddlenum2 = -18;var opacitynum2 = 1;
            //鼠标移走，下降动画
            var clearint = setInterval(function(){
                if(moddlenum2<=-94||opacitynum2<=0){   //达到目标值，清除定时器
                    clearInterval(clearint);
                }

                if(that.index<9){
                    num = that.index ;
                }else{
                    num = that.index - Math.floor(that.index/9)*2;
                }
                evaluate[num].style.opacity = opacitynum2;
                opacitynum2 -= 0.01;
                moddlenum2 -= 0.78;
                evaluate[num].style.bottom = moddlenum2 + "px" ;
            },1);
        }
    }


}



