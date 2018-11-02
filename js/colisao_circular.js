var canvas, ctx, width, height;
var circleA = { x:50, y:50 , radius: 50, color: "#000", colorback: "#fff"};
var circleB;
var FPS = 1000/75;
var colision = false;

window.onload = function (){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;    
    
    circleB = {x: width/2,
               y: height/2,
               radius: 50,
               color: "#00f"};
    
    canvas.addEventListener("mousemove", changepos, true);
    
    setInterval(gameloop, FPS);
    
}


//---------- LOOP ---------------------------
function gameloop (){
    update();
    draw();    
}

function update(){
    colision = detectCollision(circleA, circleB);
//    if(colision) canvas.style.backgroundColor = "#FFF";
//    else canvas.style.backgroundColor = "#7b7b7b";
    
}
function draw(){
    ctx.clearRect(0,0,width,height);
    drawCircle(circleA);
    drawCircle(circleB);    
}

function changepos(event){
    circleA.x = event.clientX - canvas.offsetLeft;
    circleA.y = event.clientY - canvas.offsetTop;
}

function detectCollision (obj1, obj2 ){
    var dx = obj2.x - obj1.x;
    var dy = obj2.y - obj1.y;
    var dist = Math.sqrt(dx*dx + dy*dy);
    
    var resp = false;
    if (dist <= obj1.radius + obj2.radius) resp = true;
    return resp;
}

//-----------DESENHA UM CIRCULO -----------------
function drawCircle ( circle ){
    ctx.beginPath();
   // ctx.fillStyle = circle.colorback;
    if(colision) ctx.strokeStyle = "#F00";
    else ctx.strokeStyle = circle.color
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.stroke();
}
