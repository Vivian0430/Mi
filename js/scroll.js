/**
 * Created by student on 2018/10/12.
 */
function goTop(){
    var gotop=document.getElementById("gotop");
    var leftbar=document.querySelector(".leftbar_s");
    window.onscroll=function(){
        scroll().top >0?show(leftbar):hide(leftbar);
        leader=scroll().top;
    }
    var leader=0;var target=0;var time=null;
    gotop.onclick=function(){
        target=0;
        time=setInterval(function(){
            leader=leader+(target-leader)/10;
            window.scrollTo(0,leader);
            if(leader==target){
                clearInterval(time);
            }
        },10);
    }
    function show(obj) { obj.style.display = "block";}
    function hide(obj) { obj.style.display = "none";}
    function scroll() {
        if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
        {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
        // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
        {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return { //  剩下的肯定是怪异模式的
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
}