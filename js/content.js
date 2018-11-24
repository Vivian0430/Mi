/**
 * Created by student on 2018/10/12.
 */
function content(){
    var contentMiddle=document.querySelectorAll(".content_middle")[0];
    var contentUl=document.querySelectorAll(".content_middle ul")[0];
    var contentUlLiArr=contentUl.children;
    var width=contentMiddle.offsetWidth;
    var contentOl=document.querySelectorAll(".content_middle ol")[0];
    var contentOlLiArr=contentOl.children;
    var spanRight=contentMiddle.lastElementChild;
    var spanLeft=spanRight.previousElementSibling;
    for(var i=0;i<4;i++){
        contentMiddle.onmouseover=function(){
            spanLeft.style.display="block";
            spanRight.style.display="block";
        }
        contentMiddle.onmouseout=function(){
            spanLeft.style.display="none";
            spanRight.style.display="none";
        }
        var key=0;
        spanRight.onclick=function(){
            key++;
            if(key>2){
                key=2;
            }
            animate(contentUl,-key*width);
            clearStyle(contentOlLiArr);
            contentOlLiArr[key].style.backgroundColor="#ff6700";
        }
        spanLeft.onclick=function(){
            key--;
            if(key<0){
                key=0;
            }
            animate(contentUl,-key*width);
            clearStyle(contentOlLiArr);
            contentOlLiArr[key].style.backgroundColor="#ff6700";
        }
        for(var i=0;i<contentOlLiArr.length;i++){
            contentOlLiArr[i].index=i;
            contentOlLiArr[i].onmouseover=function(){
                clearStyle(contentOlLiArr);
                this.style.backgroundColor="#ff6700"
                key=this.index;
                animate(contentUl,-this.index*width);
            }
        }

    }
    // 内容部分第二个轮播图
    var contentMiddle2=document.querySelectorAll(".content_middle")[1];
    var contentUl2=document.querySelectorAll(".content_middle ul")[1];
    var contentUlLiArr2=contentUl2.children;
    var width2=contentMiddle2.offsetWidth;
    var contentOl2=document.querySelectorAll(".content_middle ol")[1];
    var contentOlLiArr2=contentOl2.children;
    var spanRight2=contentMiddle2.lastElementChild;
    var spanLeft2=spanRight2.previousElementSibling;
    for(var i=0;i<4;i++) {
        contentMiddle2.onmouseover = function () {
            spanLeft2.style.display = "block";
            spanRight2.style.display = "block";
        }
        contentMiddle2.onmouseout = function () {
            spanLeft2.style.display = "none";
            spanRight2.style.display = "none";
        }
        var key2 = 0;
        spanRight2.onclick = function () {
            key2++;
            if (key2 > 2) {
                key2 = 2;
            }
            animate(contentUl2, -key2 * width2);
            clearStyle(contentOlLiArr2);
            contentOlLiArr2[key2].style.backgroundColor = "#ff6700";
        }
        spanLeft2.onclick = function () {
            key2--;
            if (key2 < 0) {
                key2 = 0;
            }
            animate(contentUl2, -key2 * width2);
            clearStyle(contentOlLiArr2);
            contentOlLiArr2[key2].style.backgroundColor = "#ff6700";
        }
        for (var i = 0; i < contentOlLiArr2.length; i++) {
            contentOlLiArr2[i].index = i;
            contentOlLiArr2[i].onmouseover = function () {
                clearStyle(contentOlLiArr2);
                this.style.backgroundColor = "#ff6700"
                key2 = this.index;
                animate(contentUl2, -this.index * width2);
            }
        }
        // 内容第三部分轮播图
        var contentMiddle3 = document.querySelectorAll(".content_middle")[2];
        var contentUl3 = document.querySelectorAll(".content_middle ul")[2];
        var contentUlLiArr3 = contentUl.children;
        var width3 = contentMiddle3.offsetWidth;
        var contentOl3 = document.querySelectorAll(".content_middle ol")[2];
        var contentOlLiArr3 = contentOl3.children;
        var spanRight3 = contentMiddle3.lastElementChild;
        var spanLeft3 = spanRight3.previousElementSibling;
        for (var i = 0; i < 4; i++) {
            contentMiddle3.onmouseover = function () {
                spanLeft3.style.display = "block";
                spanRight3.style.display = "block";
            }
            contentMiddle3.onmouseout = function () {
                spanLeft3.style.display = "none";
                spanRight3.style.display = "none";
            }
            var key3 = 0;
            spanRight3.onclick = function () {
                key3++;
                if (key3 > 2) {
                    key3 = 2;
                }
                animate(contentUl3, -key3 * width3);
                clearStyle(contentOlLiArr3);
                contentOlLiArr3[key3].style.backgroundColor = "#ff6700";
            }
            spanLeft3.onclick = function () {
                key3--;
                if (key3 < 0) {
                    key3 = 0;
                }
                animate(contentUl3, -key3 * width3);
                clearStyle(contentOlLiArr3);
                contentOlLiArr3[key3].style.backgroundColor = "#ff6700";
            }
            for (var i = 0; i < contentOlLiArr3.length; i++) {
                contentOlLiArr3[i].index = i;
                contentOlLiArr3[i].onmouseover = function () {
                    clearStyle(contentOlLiArr3);
                    this.style.backgroundColor = "#ff6700"
                    key3 = this.index;
                    animate(contentUl3, -this.index * width3);
                }

            }
        }
        // 内容部分第四个轮播图
        var contentMiddle4 = document.querySelectorAll(".content_middle")[3];
        var contentUl4 = document.querySelectorAll(".content_middle ul")[3];
        var contentUlLiArr4 = contentUl4.children;
        var width4 = contentMiddle4.offsetWidth;
        var contentOl4 = document.querySelectorAll(".content_middle ol")[3];
        var contentOlLiArr4 = contentOl4.children;
        var spanRight4 = contentMiddle4.lastElementChild;
        var spanLeft4 = spanRight4.previousElementSibling;
        for (var i = 0; i < 4; i++) {
            contentMiddle4.onmouseover = function () {
                spanLeft4.style.display = "block";
                spanRight4.style.display = "block";
            }
            contentMiddle4.onmouseout = function () {
                spanLeft4.style.display = "none";
                spanRight4.style.display = "none";
            }
            var key4 = 0;
            spanRight4.onclick = function () {
                key4++;
                if (key4 > 2) {
                    key4 = 2;
                }
                animate(contentUl4, -key4 * width4);
                clearStyle(contentOlLiArr4);
                contentOlLiArr4[key4].style.backgroundColor = "#ff6700";
            }
            spanLeft4.onclick = function () {
                key4--;
                if (key4 < 0) {
                    key4 = 0;
                }
                animate(contentUl4, -key4 * width4);
                clearStyle(contentOlLiArr4);
                contentOlLiArr4[key4].style.backgroundColor = "#ff6700";
            }
            for (var i = 0; i < contentOlLiArr4.length; i++) {
                contentOlLiArr4[i].index = i;
                contentOlLiArr4[i].onmouseover = function () {
                    clearStyle(contentOlLiArr4);
                    this.style.backgroundColor = "#ff6700"
                    key4 = this.index;
                    animate(contentUl4, -this.index * width4);
                }
            }
        }
        function clearStyle(ele) {
            for (var j = 0; j < ele.length; j++) {
                ele[j].style.backgroundColor = "#333333";
            }
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
            }, 10);
        }
    }
    //  内容部分结束
}