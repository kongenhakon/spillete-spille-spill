let score=1;
let bob =1
function scoreFun(){
    score=score+bob
    document.getElementById("score").innerHTML=score
}
function boben(){
    if (score>10)
        bob=bob+1
        score=score-10
        document.getElementById("score").innerHTML=score
    if(score<10)
        alert ("du har ikke nok money")
        
    
}