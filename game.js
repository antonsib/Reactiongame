var cvs= document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var crashball=new Image();
var ball=new Image();
var x,y;
var t;
var result=0;
var queue= [];
var img = document.getElementById("photo");

ball.src="img/ball.png";
crashball.src="img/crashball.png";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

ball.onclick=function(event){
alert("ggg");
}

function draw(){
x=getRandomInt(1,600);
y=getRandomInt(1,600);
ctx.drawImage(ball,x,y);
queue.push(x);
queue.push(y);
let timerId1 = setTimeout(() => ctx.clearRect(queue.shift(),queue.shift(),116,102),1000*getRandomInt(1,2));
}

function drawcrash(){
ctx.drawImage(crashball,200,200);
}


button1.onclick = function(event) {
let timerId = setInterval(() => draw(),1000*getRandomInt(1,3));
}


button2.onclick = function(event) {
alert("Результат равен= ");
alert(result);
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

img.onclick = function(event) {
alert("Результат равен= ");
}
