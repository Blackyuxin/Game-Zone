//header变化

	window.onscroll = function(){ 
		var t = document.documentElement.scrollTop || document.body.scrollTop;  
		var headerbg = document.getElementById( "header" ); 
		if( t >= 900 ) {
			headerbg.style.background = "rgba(34,127,187,0.8)"; 
		} else { 
			headerbg.style.background = "rgba(34,127,187,0.3)"; 
		} 
	}

//轮播1	
	
	var imgList=document.getElementById('img').getElementsByTagName('li');
    var list=document.getElementById('banner').getElementsByTagName('li');
    var banner=0;
    var timer;

	function moveImg(list,banner) {
        for(var i=0;i<list.length;i++){
            if(list[i].className=='opa-on'){
                list[i].className='';
            }
        }
        list[banner].className='opa-on';
    }
    function moveIndex(list,num){
        for(var i=0;i<list.length;i++){
            if(list[i].className=='on'){
                list[i].className='';
            }
        }
        list[num].className='on';
    }
	
    for(var i=0;i<list.length;i++){
        list[i].banner=i;
        list[i].onmouseover= function () {
            var clickIndex=parseInt(this.banner);
            banner=clickIndex;

            moveImg(imgList,banner);
            moveIndex(list,banner);
            clearInterval(timer);
        };
        list[i].onmouseout= function () {
            play();
        };
    }
    var nextMove=function(){
        banner+=1;
        if(banner>=3){
            banner=0
        }
        moveImg(imgList,banner);
        moveIndex(list,banner);
    };
    var play=function(){
        timer=setInterval(function(){
            nextMove();
        },5000);
    };
    play();


//轮播2

	window.onload = function(){

		function animate(obj,target){
			// 首先清除掉定时器
			clearInterval(obj.timer);
			// 用来判断 是+ 还是 -  即说明向左走还是向右走
			var speed = obj.offsetLeft < target ? 1 : -1;
			obj.timer = setInterval(function(){
				var result = target - obj.offsetLeft;//它们的差值不会超过speed
				obj.style.left = obj.offsetLeft + speed + "px";
				// 有可能有小数的存在，所以在这里要做个判断
				if (Math.abs(result) <= Math.abs(speed)) {
					clearInterval(obj.timer);
					obj.style.left = target + "px";
				}
			},1);
		}


		//获得元素
		var scroll = document.getElementById("scroll"); // 获得大盒子
		var ul = document.getElementById("ul"); // 获得ul
		var liWidth = ul.children[0].offsetWidth+50;// 获得每个li的宽度

		ul.appendChild(ul.children[0].cloneNode(true));
		ul.appendChild(ul.children[1].cloneNode(true));
		ul.appendChild(ul.children[2].cloneNode(true));
		ul.appendChild(ul.children[3].cloneNode(true));
		

		var timer = null;
		var key = 0;

		timer = setInterval(autoplay,3000);
		function autoplay(){

			key++;
			if(key > 4){

				ul.style.left = 0;
				key = 1;
			}
			animate(ul,-key*liWidth);
		}
		scroll.onmouseover = function(){
			clearInterval(timer);
		}
		scroll.onmouseout = function(){
			timer = setInterval(autoplay,3000);
		}
	
		
//轮播3		
		
		function animate1(obj1,target1){
    		// 首先清除掉定时器
    		clearInterval(obj1.timer1);
    		// 用来判断 是+ 还是 -  即说明向左走还是向右走
    		var speed1 = obj1.offsetLeft < target1 ? 15 : -15;
    		obj1.timer1 = setInterval(function(){
    			var resul1t1 = target1 - obj1.offsetLeft;//它们的差值不会超过speed1
    			obj1.style.left = obj1.offsetLeft + speed1 + "px";
    			// 有可能有小数的存在，所以在这里要做个判断 			
    	        if (Math.abs(resul1t1) <= Math.abs(speed1)) {
    	        	clearInterval(obj1.timer1);
    	        	obj1.style.left = target1 + "px";
    	        }
    		},10);
    	}
    	   	
    	//获得元素
    	var box1 = document.getElementById("box1"); // 获得大盒子
    	var ul1 = document.getElementById("ul1"); // 获得ul1
    	var ul1Lis = ul1.children;// 获得ul1的盒子 以此来生成ol中li的个数
    	var liWidth1 = ul1.children[0].offsetWidth + 300;// 获得每个li的宽度
    	
    	// 操作元素
    	// 因为要做无缝滚动，所以要克隆第一张，放到最后一张后面
    	// 1. 克隆元素
    	ul1.appendChild(ul1.children[0].cloneNode(true));
    	
    	// 2.创建ol 和li
    	var ol = document.createElement("ol");//创建ol元素
    	box1.appendChild(ol);// 把ol放到box1盒子里面去
    	for (var i=0;i<ul1Lis.length-1;i++) {
    		var li = document.createElement("li");// 创建li元素
    		ol.appendChild(li);// 将li元素添加到ol里面
    	}
    	ol.children[0].className = "current";// ol中的第一个li背景色为purple
    	    	
    	// 3. 动画开始  (鼠标经过第几个小圆点，就要展示第几张图片，并且小圆点的颜色也发生变化)
    	var olLis = ol.children;
    	for (var i = 0; i < olLis.length;i++) {
    		// 给ol中的每个li添加一个属性 index  用来获得当前第几个li的索引号
    		olLis[i].index = i;
    		olLis[i].onmouseover = function(){
    			for (var j = 0;j<olLis.length;j++) {
    				// 清空所有的 类名
    				olLis[j].className = "";
    			}
    			// 给当前的li添加一个类名
    			this.className = "current";
    			
    			// 接着调用动画函数 ，根据第几个li 展示第几张图片 第一个参数谁做动画  第二个参数 走多少
    			animate1(ul1,-this.index * liWidth1);
    			// 接着让小圆点和 key1 等于当前的索引号
    			circle1 = key1 = this.index;
    		}
    	}
    	
    	// 4. 添加定时器  让图片自动轮播
    	var timer1 = null; // 轮播图的定时器
    	var key1 = 0;// 控制播放的张数
    	var circle1 = 0;// 控制小圆点
    	
    	timer1 = setInterval(autoplay1,3000);// 自动轮播
    	function autoplay1(){
    		/*自动轮播时,要对播放的张数key1进行一个判断,如果播放的张数超过ul1Lis.length-1,
    		就要重头开始播放.  因为我们克隆了第一张并将其放在最后面,所以我们要从第二张图片开始播放*/
    		key1++; // 先++
    		if(key1 > ul1Lis.length-1){// 后判断
    			
    			ul1.style.left = 0; // 迅速调回
    			key1 = 1; // 因为第6张是第一张，所以播放的时候是从第2张开始播放
    		}
    		// 动画部分
    		animate1(ul1,-key1*liWidth1);
    		// 小圆点circle1   当显示第几张图片是，对应的小圆点的颜色也发生变化 
    		
    		/*同理,对小圆点也要有一个判断*/
    		circle1++;
    		if (circle1 > olLis.length-1) {
    			circle1 = 0;
    		}
    		// 小圆点颜色发生变化
    		for (var i = 0 ; i < olLis.length;i++) {
    			// 先清除掉所用的小圆点类名
    			olLis[i].className = ""; 
    		}
    		// 给当前的小圆点 添加一个类名
    		olLis[circle1].className = "current";
    		
    	}
    	
    	// 最后，鼠标经过大盒子停止定时器
    	box1.onmouseover = function(){
    		clearInterval(timer1);
    	}
    	// 鼠标离开大盒子时 开启定时器
    	box1.onmouseout = function(){
    		timer1 = setInterval(autoplay1,2000);  	
    	}  
	}
