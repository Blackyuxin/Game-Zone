
		window.onload = function(){

    // 动画函数 第一个参数，代表谁动  第二个参数 动多少
    // 让图片做匀速运动，匀速动画的原理是 当前的位置 + 速度  即 offsetLeft + speed

    function animate(obj,target){
        // 首先清除掉定时器
        clearInterval(obj.timer);
        // 用来判断 是+ 还是 -  即说明向左走还是向右走
        var speed = obj.offsetLeft < target ? 10 : -10;
        obj.timer = setInterval(function(){
            var result = target - obj.offsetLeft;//它们的差值不会超过speed
            obj.style.left = obj.offsetLeft + speed + "px";
            // 有可能有小数的存在，所以在这里要做个判断
            if (Math.abs(result) <= Math.abs(speed)) {
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }
        },20);
    }
	
	function animate1(obj,target){
        // 首先清除掉定时器
        clearInterval(obj.timer);
        // 用来判断 是+ 还是 -  即说明向左走还是向右走
        var speed = obj.offsetLeft < target ? 10 : -10;
        obj.timer = setInterval(function(){
            var result = target - obj.offsetLeft;//它们的差值不会超过speed
            obj.style.left = obj.offsetLeft + speed + "px";
            // 有可能有小数的存在，所以在这里要做个判断
            if (Math.abs(result) <= Math.abs(speed)) {
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }
        },20);
    }


    //获得元素
    var scroll = document.getElementById("pdiv2"); // 获得大盒子
    var ul = document.getElementById("pul"); // 获得ul
	var scroll1 = document.getElementById("pdiv3"); // 获得大盒子
    var ul1 = document.getElementById("pul1");// 获得ul
	

    // 操作元素
    // 因为要做无缝滚动，所以要克隆第一张，放到最后一张后面
    // 1. 克隆元素
	ul1.appendChild(ul1.children[0].cloneNode(true));
    ul1.appendChild(ul1.children[1].cloneNode(true));
    ul1.appendChild(ul1.children[2].cloneNode(true));
    ul.appendChild(ul.children[0].cloneNode(true));
    ul.appendChild(ul.children[1].cloneNode(true));
    ul.appendChild(ul.children[2].cloneNode(true));
    
    var timer = null;
    var key = 0;
    var timer1 = null;
    var key1 = 0;
    timer = setInterval(autoplay,3000);
	timer1 = setInterval(autoplay1,3000);
    function autoplay(){

        key++;
        if(key > 4){

            ul.style.left = 0;
            key = 1;
        }
        animate(ul,-key*422);
    }
    function autoplay1(){

        key1++;
        if(key1 > 4){

            ul1.style.left = 0;
            key1 = 1;
        }
        animate1(ul1,-key1*422);
    }
    scroll.onmouseover = function(){
        clearInterval(timer);
    }
    scroll.onmouseout = function(){
        timer = setInterval(autoplay,3000);
    }
	scroll1.onmouseover = function(){
        clearInterval(timer1);
    }
    scroll1	.onmouseout = function(){
        timer1 = setInterval(autoplay1,3000);
    }

}
