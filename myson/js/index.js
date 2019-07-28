
var imglist = document.querySelectorAll('.carousel img');//document.querySelectorAll('.carousel img')
var carousel = document.getElementsByClassName('carousel')[0];
var current = Math.floor(imglist.length/2);
var len = imglist.length;
var count =0;
function init(num){
	var w = window.innerWidth;
	for(var i = 0; i < len; i++){
		imglist[i].style.left = w/2 - 150 - (num-i)*100 +'px';
		if(i < num){
			imglist[i].className = 'left';
		}else if(i == num){
			imglist[i].className = 'num';
		}else{
			imglist[i].className = 'right';
		}
	}
}
function next(){
	current++;
	if(current == len){
		current = 0;
	}
	init(current);
}		
var timer = setInterval(next,3000);
init(current);

// 监听事件变化，清空定时器
carousel.addEventListener('click',function(e){
	imglist.forEach(function(item,i){
		if(e.target ==item){
			clearInterval(timer);
			current = i;
			init(current);
		}
	})
},false);

//当轮播到第五张的时候就回到0 从头开始
window.onmousewheel = function(){
	count++;
	if(count >5){
		next();
		count = 0;
	}
}