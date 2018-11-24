/**
 * Created by student on 2018/10/14.
 */
window.onload=function () {
    var body=document.querySelector("body");
    var country=document.querySelector(".country");
    var countryFirst=country.firstElementChild;
    var countrySpan=document.querySelector(".country>div>span");
    var countryLiAll=document.querySelectorAll(".content_code li");
    var countryContent=document.querySelector(".country_content");
    var contentSearch=document.querySelector(".content_search");
    var contentSearchInput=document.querySelector(".content_search input");

    var telphoneSearch=document.querySelector(".telphone_search");

    var telphoneLeft=document.querySelector(".telphone_fl");
    var telphoneSpan=document.querySelector(".telphone_fl>span");

    var telphoneLiAll=document.querySelectorAll(".telphone_code li");

    var Code=document.querySelectorAll(".telphone_code li .fr");
    var telphoneContent=document.querySelector(".telphone_content");

    var waring=document.querySelector(".waring");
    var waringSpan=document.querySelector(".waring span");

    var telphoneInput=document.querySelector(".telphone_fr input");

    telphoneInput.onblur=function () {
        waring.style.display="block";
        this.style.borderColor="red";
        var regExp=new RegExp(/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/);
        if(regExp.test(this.value)){
            waring.style.display="none";
            this.style.borderColor="#e8e8e8";
        }else{
            waringSpan.innerHTML="手机号码格式错误！";
        }
    }
    countryFirst.onclick=function(){
        countryContent.style.display="block";
    }
    contentSearch.onclick=function(){
        countryContent.style.display="block";
    }
    var searchBox=document.querySelector(".search_content");
    var searchContent=document.querySelector(".search_content ul");
    contentSearchInput.onkeyup=function(e){
        searchContent.innerHTML="";
        searchBox.style.display="block";
        console.log(this.value);
        for(var i=0;i<countryLiAll.length;i++){
               for(var j=0;j<5;j++){
                   if(e.keyCode==32 || this.value=="A" || this.value=="B" || this.value=="C" ){
                       if(this.value==countryLiAll[i].innerHTML[j]){
                           console.log(countryLiAll[i]);
                           var searchLi=countryLiAll[i];
                           searchLi.className="search_li";
                           searchContent.appendChild(searchLi);
                           searchBox.style.borderColor="#5f5750";
                       }
                   }

               }
        }

    }

    telphoneLeft.onclick=function(){
        telphoneContent.style.display="block";
    }
    telphoneSearch.onclick=function(){
        telphoneContent.style.display="block";
    }


    for(var i=0;i<countryLiAll.length;i++){
        countryLiAll[i].onmouseover=function(){
           this.style.backgroundColor="#ccc";
        }
        countryLiAll[i].onmouseout=function(){
           this.style.backgroundColor="#fff";
        }
        countryLiAll[i].onclick=function(){
            var val=this.innerHTML;
            countrySpan.innerHTML=val;
            countryContent.style.display="none";
        }
       
    }
    for(var i=0;i<telphoneLiAll.length;i++){
        telphoneLiAll[i].index=i;
        telphoneLiAll[i].onmouseover=function(){
           this.style.backgroundColor="#ccc";
        }
        telphoneLiAll[i].onmouseout=function(){
           this.style.backgroundColor="#fff";
        }
        telphoneLiAll[i].onclick=function(){
            var val=Code[this.index].innerHTML;
            telphoneSpan.innerHTML=val;
            telphoneContent.style.display="none";
        }
    }

    body.addEventListener("click",function(){
        countryContent.style.display="none";
        telphoneContent.style.display="none";
        searchBox.style.display="none";
        searchBox.style.borderColor="#fff";
        contentSearchInput.value="";
    },true);
    var msgI=document.querySelector(".msg i");
    var click=false;
    msgI.onclick=function () {
        if(click==false){
            this.style.color="#ccc";
            click=true;
            return false;
        }else
        {
            this.style.color="#ff6700";
            click=false;
            return false;
        }

    }
}
