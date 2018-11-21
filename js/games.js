var speed = 10;
demo2.innerHTML = demo1.innerHTML

function Marquee() {
    if (demo2.offsetTop - demo.scrollTop <= 0) {
        demo.scrollTop -= demo1.offsetHeight;
    }
    else {
        demo.scrollTop++;
    }
}
var MyMar = setInterval("Marquee()", speed);
demo1.onmouseover = function () {
    clearInterval(MyMar)
}
demo1.onmouseout = function () {
    MyMar = setInterval("Marquee()", speed)
}




function btn1() {
    document.getElementById('small-dialog').style.display = "block";
    document.getElementById('zdc').style.display = "block";
}

function btn2() {
    document.getElementById('small-dialog2').style.display = "block";
    document.getElementById('zdc').style.display = "block";
}

function btn3() {
    document.getElementById('small-dialog3').style.display = "block";
    document.getElementById('zdc').style.display = "block";
}

function btn4() {
    document.getElementById('small-dialog4').style.display = "block";
    document.getElementById('zdc').style.display = "block";
}

function btn5() {
    document.getElementById('small-dialog5').style.display = "block";
    document.getElementById('zdc').style.display = "block";
}

function btn6() {
    document.getElementById('small-dialog6').style.display = "block";
    document.getElementById('zdc').style.display = "block";
}

function btn7() {
    document.getElementById('small-dialog7').style.display = "block";
    document.getElementById('zdc').style.display = "block";
}

function btn8() {
    document.getElementById('small-dialog8').style.display = "block";
    document.getElementById('zdc').style.display = "block";
}
function reload() {
    document.getElementById('zdc').style.display = "none";
    document.getElementById('small-dialog').style.display = "none";
    document.getElementById('small-dialog2').style.display = "none";
    document.getElementById('small-dialog3').style.display = "none";
    document.getElementById('small-dialog4').style.display = "none";
    document.getElementById('small-dialog5').style.display = "none";
    document.getElementById('small-dialog6').style.display = "none";
    document.getElementById('small-dialog7').style.display = "none";
    document.getElementById('small-dialog8').style.display = "none";
}