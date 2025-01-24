let score=1;
let bob =1;
let cost =10;
let autoclick=1;
let cost_auto=10;
if (Event.key=="space")
    scoreFun()
function scoreFun(){
    score=score+bob
    
}
function auto (){
    score+=autoclick
}
function autoClick(){
    if (score>(cost_auto-1)){
        autoclick+=cost_auto/10
        score-=cost_auto
        cost_auto*=2
    }
    
}
function boben(){
    if(score<cost){ 
        alert ("du har ikke nok money")
    }
    if (score>(cost-1)){
        bob=bob+cost/10
        score=score-cost
        cost*=2
        
    }
    
}
function gameLoop(){
    document.getElementById("cost").innerHTML="cost for 2x click power: "+cost
    document.getElementById("score").innerHTML="money: "+score
    document.getElementById("cost_auto").innerHTML="cost for 2x auto click : "+cost_auto
}
setInterval(gameLoop,100)
setInterval(auto,1000)