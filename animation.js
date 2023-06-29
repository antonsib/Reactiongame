var photoClick=0;
var photoGenerate=0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


photo.onclick=function(event){
photoClick++;
photo.style.opacity=0.5;
}

function draw(){
photoGenerate++;
photo.style.opacity=1.0;
var t1=getRandomInt(1,1000);
var t2=getRandomInt(1,650);
if((t1<=150)&&(t2>=600)){
t1=getRandomInt(1,1000);
t2=getRandomInt(1,650);
}
else{
photo.style.top = t2+'px';
photo.style.left = t1+'px';
}
}

function rand(){ let timerId1 = setInterval(() => draw(),getRandomInt(1,2)*1000);
}


button1.onclick = function(event) {
rand();
}


button2.onclick = function(event) {
alert("Результат равен в %= "+photoClick/(photoGenerate-1)*100);
photoClick=0;
photoGenerate=0;
}