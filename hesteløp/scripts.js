var canvas;
var context;
let hest_width =50
let hest_height=50
let hest_x_1=200
let hest_y_1=200
let hest_x_2=200
let hest_y_2=275

window.onkeyup=function(event){
    if (hest_x_1>canvas.width)
        document.getElementById("vant").innerHTML="&oslash;verste vant"

    if(hest_x_2>canvas.width)
        document.getElementById("vant").innerHTML="nederste vant"

    if (event.key=="d"){
        hest_x_1+=5
    }
    if (event.key=="l"){
        hest_x_2+=5
    }
}


function draw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle="red"
    hest1 = context.fillRect(hest_x_1,hest_y_1,hest_height,hest_width)
    hest1 = context.fillRect(hest_x_2,hest_y_2,hest_height,hest_width)
}
function gameloop(){
    
    draw()

}

window.onload = function(){
    canvas = document.getElementById("canvas")
    context =canvas.getContext("2d")
    canvas.style.background="#7fd014"
    
    setInterval(gameloop,15)
}