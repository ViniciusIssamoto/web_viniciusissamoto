var canvas, ctx, width, height;
var FPS = 1000/75;
var colision = false;
var recA = {x: 10,
            y: 10,
            width: 50,
            height: 50,
            color: "#00a5ef"
           }
var recB;

window.onload = function (){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;    
    
    recB = {x: width/2,
               y: height/2,
               width: 100,
               height: 100,
               color: "#00f"
              };
    
    canvas.addEventListener("mousemove", changePos, true);
    
    setInterval(gameloop, FPS);
    
}
function gameloop (){
    update();
    draw();
}

function draw(){
    ctx.clearRect(0,0,width,height);
    drawRectangle(recB);
    drawRectangle(recA);
   
}

function update(){
    colision = detectCollision(recA, recB);
}

function changePos(){
    recA.x = event.clientX - canvas.offsetLeft;
    recA.y = event.clientY - canvas.offsetTop;
}

function drawRectangle(rec){
    ctx.beginPath();
    if(!colision) ctx.fillStyle = rec.color;
    else ctx.fillStyle = "#f00";
    ctx.rect(rec.x, rec.y, rec.width, rec.height);
    ctx.fill();
}

function detectCollision ( obj1, obj2 ){
    var vertical = false, horizontal = false;
    
    if (
        (obj1.y+obj1.height >= obj2.y &&
        obj1.y+obj1.height <= obj2.y+obj2.height)
        || 
        (obj1.y >= obj2.y &&
        obj1.y <= obj2.y+obj2.height)
    ) vertical = true;
    
    if (
        (obj1.x+obj1.width >= obj2.x &&
         obj1.x+obj1.width <= obj2.x+obj2.width)
        ||
        (obj1.x >= obj2.x &&
         obj1.x <= obj2.x+obj2.width)
        ) horizontal = true;
    return vertical && horizontal;
}