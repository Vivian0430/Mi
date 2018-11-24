//购物车
var right_products = document.getElementById("right");
var products_li = right_products.getElementsByTagName("li");
var shoppingcard = document.getElementById("purchase");
var addcart = document.getElementById("addcart");
var storages = window.localStorage;
storages.clear();
if(storages.getItem("count")) {
	shoppingcard.innerText = "购物车(" + parseInt(storages.getItem("count")) + ")";
}
for(var i = 0; i < products_li.length; i++) {
	products_li[i].index = i;
	products_li[i].onclick = function() {

		if((this.index + 1) % 9 != 0) { //点击"浏览更多"时 ， 购物车数量不改变
			//记录当前点击的产品，方便点击加入购物车时，是哪款产品。
			storages.setItem("pruductsnum", this.index);
			window.open("shoppingcart.html"); //点击li跳转，原来是点击a标签跳转；
		}

		//购物车具体内容的数量的缓存函数。
		function setlocalstorages() {
			if(storages.getItem("products_li[" + this.index + "]")) {
				storages.setItem("products_li[" + this.index + "]", 1 + storages.getItem("products_li[" + this.index + "]"));
			} else {
				storages.setItem("products_li[" + this.index + "]", 1);
			}
		}
		setlocalstorages();
		
		//将当前点击的产品存入缓存

		var imgsrc = products_li[this.index].firstElementChild.firstElementChild.src;
		storages.setItem("products_li[" + this.index + "]_imgsrc", imgsrc);
		var productname = products_li[this.index].firstElementChild.nextElementSibling.firstChild.nodeValue;
		storages.setItem("products_li[" + this.index + "]_productname", productname);	
		var productprice = products_li[this.index].firstElementChild.nextElementSibling.lastElementChild.innerHTML;
		storages.setItem("products_li[" + this.index + "]_productprice", productprice);

		//最终计算结果
		
	}
}


for(var i=0;i<35;i++){
	if(storages.getItem("imgsrc"+i)){
		buildcart(i);
	}
}

function freshcounts(){
	shoppingcard.innerText = "购物车(" +shoppingcard.getElementsByTagName("li").length+ ")";
}

function buildcart(pruductsnum){
			var attr_string = 
					"<div class='shoppingcart_menu_img'><img src='"+storages.getItem("imgsrc"+pruductsnum)+"'/></div>"+
					"<a href=''>"+storages.getItem("namevalue"+pruductsnum)+"</a>"+
					"<div class='shoppingcart_menu_span'><span>"+storages.getItem("pricehtml"+pruductsnum)+"</span></div>";
			var li = document.createElement("li");
			li.innerHTML = attr_string;
			if(shoppingcart_menu.firstElementChild.nodeName == "p" && shoppingcart_menu.firstElementChild.nodeType == 1) {
				shoppingcart_menu.removeChild(shoppingcart_menu.firstElementChild);
			}
			shoppingcart_menu.appendChild(li);
}
freshcounts();//立刻刷新购物车