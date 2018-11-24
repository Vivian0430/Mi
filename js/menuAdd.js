var storagess = window.localStorage;
var setimg = document.getElementById("setimg");
var setname = document.getElementById("setname");
var setprice = document.getElementById("setprice");
var addcart = document.getElementById("addcart");
var shoppingcard = document.getElementById("purchase");
var pruductsnum;
var shoppingcart_menu = document.getElementById("shoppingcart_menu");
//修改购物车页面的页面图片，参数，价格 ; 
var imgsrc = setimg.firstElementChild.src;
var namevalue = setname.firstChild.nodeValue;
var pricehtml = setprice.innerHTML;


pruductsnum = storagess.getItem("pruductsnum");//获得产品的序号
	
setimg.firstElementChild.src = storagess.getItem("products_li[" + pruductsnum + "]_imgsrc");
setname.firstChild.nodeValue = storagess.getItem("products_li[" + pruductsnum + "]_productname");
setprice.innerHTML = storagess.getItem("products_li[" + pruductsnum + "]_productprice");

imgsrc = storagess.getItem("products_li[" + pruductsnum + "]_imgsrc");
namevalue = storagess.getItem("products_li[" + pruductsnum + "]_productname");
pricehtml = storagess.getItem("products_li[" + pruductsnum + "]_productprice");


//storagess.clear();
for(var i=0;i<35;i++){
	if(storagess.getItem("imgsrc"+i)){
		buildcart(i);
	}
}


freshcounts();//立刻刷新购物车


addcart.onclick = function(){


	storagess.setItem("imgsrc"+pruductsnum,imgsrc);
	storagess.setItem("namevalue"+pruductsnum,namevalue);
	storagess.setItem("pricehtml"+pruductsnum,pricehtml);
	
	if(storagess.getItem("imgsrc"+pruductsnum)!=storagess.getItem("havedo"+pruductsnum)){
		buildcart(pruductsnum);
		storagess.setItem("havedo"+pruductsnum,storagess.getItem("imgsrc"+pruductsnum));
	}
	freshcounts();
}

function freshcounts(){
	shoppingcard.innerText = "购物车(" +shoppingcard.getElementsByTagName("ul").length+ ")";
}

function buildcart(pruductsnum){
			var attr_string = 
				"<li>"+
					"<div class='shoppingcart_menu_img'><img src='"+storagess.getItem("imgsrc"+pruductsnum)+"'/></div>"+
					"<a href=''>"+storagess.getItem("namevalue"+pruductsnum)+"</a>"+
					"<div class='shoppingcart_menu_span'><span>"+storagess.getItem("pricehtml"+pruductsnum)+"</span></div>"+
				"</li>";
			var ul = document.createElement("ul");
			ul.innerHTML = attr_string;
			if(shoppingcart_menu.firstElementChild.nodeName == "p" && shoppingcart_menu.firstElementChild.nodeType == 1) {
				shoppingcart_menu.removeChild(shoppingcart_menu.firstElementChild);
			}
			shoppingcart_menu.appendChild(ul);
}
