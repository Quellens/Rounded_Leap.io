const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
var x;
var y; 
var dx = 2;
var dy = 2;
var backgroundcolors = ["#35AF23","#DDDDDD","#7FDCFF","#A61f0f","#F7EE3D"]
canvas.style.backgroundColor = backgroundcolors[Math.floor(Math.random() * backgroundcolors.length)];
var rightpressed = false;
var leftpressed = false;
var enterpressed = false;

addEventListener('resize', () => {
  init();
})

function keyDownHandler(event){
if (event.keyCode == 39 || event.keyCode == 68)
    rightpressed = true;
if (event.keyCode == 37 || event.keyCode == 65) 
    leftpressed = true;
if (event.keyCode == 32){
    enterpressed = true;
} 
}

function keyUpHandler(event){
    if(event.keyCode == 37 || event.keyCode == 65)
    leftpressed = false;
    if(event.keyCode == 39 || event.keyCode == 68)
    rightpressed = false;
    enterpressed = false 
}

document.addEventListener('keydown',keyDownHandler,false);
document.addEventListener('keyup', keyUpHandler,false);

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

class Player{
  constructor(color,radius){
     this.color = color;
     this.radius = radius;
    }
 draw(){    
 c.beginPath();
 c.arc(x,y,this.radius,0,2*Math.PI);
 c.fillStyle = this.color;
 c.fill();
 c.strokeStyle = "black";
 c.lineWidth = 2;
 c.stroke();
 c.closePath();
}

}

var player;
function init(){
 var color = "white";
 player = new Player(color,15);
 x = randomIntFromRange(player.radius,canvas.width - player.radius  * 3.5);
 y = randomIntFromRange(player.radius,canvas.height - player.radius * 3.5);  
// These 3 if-statements indicate the the direction at the beginning
if(x > canvas.width / 2 && y > canvas.height / 2){
    dx = -dx;
    dy = -dy;
} else
if(x < canvas.width / 2 && y > canvas.height / 2){
    dy = -dy;
} else
if(x > canvas.width / 2 && y < canvas.height / 2){
    dx = -dx;
}
}

function animate(){
c.clearRect(0,0,canvas.width,canvas.height);
requestAnimationFrame(animate);
player.draw();
x += dx ;   
if(rightpressed)
   dx = Math.abs(dy);
if(leftpressed)
   dx=-Math.abs(dy);  
if(enterpressed){
dy= -dy;
enterpressed = false;
}else{
y += dy;
}  
  
if(y  > canvas.height || y  < 0)
  dy = -dy;

if( x  < 0 || x  > canvas.width)  
  dx = -dx;
}

init()
animate()


var helloThere = new Audio();
helloThere.src = "hello there.mp3";
helloThere.loop = true;
helloThere.play();

