
		window.onload = function(){

    // �������� ��һ������������˭��  �ڶ������� ������
    // ��ͼƬ�������˶������ٶ�����ԭ���� ��ǰ��λ�� + �ٶ�  �� offsetLeft + speed

    function animate(obj,target){
        // �����������ʱ��
        clearInterval(obj.timer);
        // �����ж� ��+ ���� -  ��˵�������߻���������
        var speed = obj.offsetLeft < target ? 10 : -10;
        obj.timer = setInterval(function(){
            var result = target - obj.offsetLeft;//���ǵĲ�ֵ���ᳬ��speed
            obj.style.left = obj.offsetLeft + speed + "px";
            // �п�����С���Ĵ��ڣ�����������Ҫ�����ж�
            if (Math.abs(result) <= Math.abs(speed)) {
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }
        },20);
    }
	
	function animate1(obj,target){
        // �����������ʱ��
        clearInterval(obj.timer);
        // �����ж� ��+ ���� -  ��˵�������߻���������
        var speed = obj.offsetLeft < target ? 10 : -10;
        obj.timer = setInterval(function(){
            var result = target - obj.offsetLeft;//���ǵĲ�ֵ���ᳬ��speed
            obj.style.left = obj.offsetLeft + speed + "px";
            // �п�����С���Ĵ��ڣ�����������Ҫ�����ж�
            if (Math.abs(result) <= Math.abs(speed)) {
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }
        },20);
    }


    //���Ԫ��
    var scroll = document.getElementById("pdiv2"); // ��ô����
    var ul = document.getElementById("pul"); // ���ul
	var scroll1 = document.getElementById("pdiv3"); // ��ô����
    var ul1 = document.getElementById("pul1");// ���ul
	

    // ����Ԫ��
    // ��ΪҪ���޷����������Ҫ��¡��һ�ţ��ŵ����һ�ź���
    // 1. ��¡Ԫ��
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
