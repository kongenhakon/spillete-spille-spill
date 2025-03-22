let score=1;
let bob =1;
let cost =10;
let autoclick=1;
let cost_auto=10;
let bitcoin=10;
let bit_amout=10;
if (Event.key=="space")
    scoreFun()
function scoreFun(){
    score=score+bob
    
}
function bitCoin(){
    
    bitcoin=bitcoin+Math.floor(Math.random()*101);
    
    bitcoin=bitcoin-40

    
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
function sell_all(){
    score=score+bit_amout*bitcoin
    bit_amout=0
}
function buy_all(){
    while (score>bitcoin){
        buyBit()
    }
}
function buyBit(){
    if (score>bitcoin){
        score=score-bitcoin
        bit_amout=bit_amout+1
    }
    
}
function sellBit(){
    if (bit_amout>0){
        score=score+bitcoin
        bit_amout=bit_amout-1
    }
}


function boben(){
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
    document.getElementById("bit").innerHTML="bitcoin val : "+bitcoin
    document.getElementById("bit_a").innerHTML="bitcoin amount : "+bit_amout
}
setInterval(gameLoop,100)
setInterval(auto,1000)
setInterval(bitCoin,1000)