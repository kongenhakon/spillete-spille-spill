var canvas;
var context;
var baat_x = 400;
var baat_y = 250;
const baat_height=50
const baat_width=75
let score=0
let vunnet=false
let count=0
let a = false
let w= false
let d=false
let s=false

window.onkeydown=function(event){
    if (event.key=="d"){
        d=true
        
    }
    if(event.key=="a"){
        a=true
    }
    if(event.key=="s"){
        s=true
    }
    if(event.key=="w"){
        w=true
    }
}
window.onkeyup=function(event){
    if (event.key=="d"){
        d=false
        
    }
    if(event.key=="a"){
        a=false
    }
    if(event.key=="s"){
        s=false
    }
    if(event.key=="w"){
        w=false
    }
}
function right(){
    if (baat_x<canvas.width){
        baat_x+=5
        
    }
}
function Left(){
    if(baat_x>0){
        baat_x-=5
    }
}
function up(){
    if(baat_y>0){
        baat_y-=5
    }
}
function down(){
    if(baat_y<canvas.height){
        baat_y+=5
    }
}

function moveShip(){

    if (d){
        right()
        
    }
    if(a ){
        Left()
    }
    if(s){
        down()
    }
    if(w){
        up()
    }
   
}
function sprekkBobler(){
    for (i=0;i<bubbels.length;i++){ 
        var buble=bubbels[i]
        if (kolisonDetesjon(buble)){
            bubbels.splice(i,1)
            score+=Math.round(Math.random()*49+1)
        }


        
    }
}
function calcDistance(x1,y1,x2,y2){
    const X =Math.abs(x2 -x1)
    const Y=Math.abs(y2 -y1)
    return Math.sqrt(X*X+Y*Y)
}
function kolisonDetesjon(boble){
    return calcDistance (baat_x+baat_width/2,baat_y+baat_height/2,boble.x,boble.y)<boble.radius+baat_width/2
}

window.onload = function(){
    canvas = document.getElementById("canvas")
    context =canvas.getContext("2d")
    canvas.style.background="#1c14d0"
    
    setInterval(gameloop,15)
}

function draw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle="red"
    //baat = context.fillRect(baat_x,baat_y,baat_height,baat_width)
    context.beginPath()
    context.ellipse(baat_x,baat_y,baat_width/2,baat_height/2,0,0,2*Math.PI)
    context.fill()

    for (i=0;i< bubbels.length;i++){
        var buble=bubbels[i]
        context.beginPath()
        context.arc(buble.x,buble.y,buble.radius,0,2*Math.PI)
        context.strokeStyle="white"
        context.stroke()
    

    }
    document.getElementById("score").innerHTML=score
} 

const bubbels = [];
const buble_radius_min=2
const buble_radius_max=50
const buble_min_speed=2
let buble_max_speed=20
function createBub (){
    var bubble = {
        radius: Math.round(Math.random()*(buble_radius_max-buble_radius_min)+buble_radius_min),
        x:-buble_radius_max,
        y: Math.round(Math.random() * context.canvas.height),
        speed:Math.round(Math.random()*(buble_max_speed-buble_min_speed)+buble_min_speed)

    }

    bubbels.push(bubble)

}
function delBubbles (){
    for (i=0;i< bubbels.length;i++){
        var buble=bubbels[i]
        if (buble.x > buble_radius_max+context.canvas.width){
            bubbels.splice(i,1)
        }

    }
}
function moveBubbels(){
    for (i=0;i< bubbels.length;i++){
        var buble=bubbels[i]
        buble.x+=buble.speed
    }
}
function gameloop(){
    if(vunnet) return;
    count++

    buble_max_speed=buble_min_speed+score/250
    delBubbles()
    sprekkBobler()
    if (bubbels.length<20){
        createBub()
    }
    moveBubbels()
    moveShip()
    draw()

    //sjekker om du har vunnet
    if (score>15000 && !vunnet){
         
        vant=prompt("vant du? ja/nei?")
        if (vant=="ja"){ 
            alert ("supert")
        vunnet=true
        }
        else if (vant=="nei"){
            alert ("du er en dårlig spiller")
        }
    }
}




