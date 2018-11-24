/**
 * Created by student on 2018/10/12.
 */
function touch(){
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
}
