
//换菜单
var jiadianactive = document.getElementById("jiadian_active");
var jiadian_active = jiadianactive.getElementsByTagName("li");
var rightright = document.getElementsByClassName("rightright");
for(var i=0;i<jiadian_active.length;i++){
	jiadian_active[i].index = i ;
	rightright[0].style.display = "block" ;
	jiadian_active[i].onmouseenter = function(){
		for(var j=0;j<jiadian_active.length;j++){
			jiadian_active[j].className = "" ;
			rightright[j].style.display = "none";
		}
		rightright[this.index].style.display = "block" ;
		this.className = "jiadian_active" ;
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



