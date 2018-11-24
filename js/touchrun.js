var listArr=document.querySelectorAll(".list ul li a");
    var listLiArr=document.querySelectorAll(".list ul li");
    var listContentAll=document.querySelectorAll(".list_content");
    for(var i=0;i<3;i++){
        listArr[i].index=i;
        listArr[i].onmouseover=function () {
            run(this.index);
        }
    }
    function run(index){
        listLiArr[index].onmouseover=function (){
            listContentAll[index].style.display="block";
        }
        listContentAll[index].onmouseover=function () {
            listContentAll[index].style.display="block";
        }
        listLiArr[index].onmouseout=function () {
            listContentAll[index].style.display="none";
        }
        listContentAll[index].onmouseout=function () {
            listContentAll[index].style.display="none";
        }
    }
    
var purchase_display = document.getElementById("purchase_display");
var shoppingcart_menu = document.getElementById("shoppingcart_menu");
purchase_display.onmouseenter = function(){
	shoppingcart_menu.style.display = "block";
}
purchase_display.onmouseleave = function(){
	shoppingcart_menu.style.display = "none";
}
