function makeBubble(){
    var run = "";
for (var i = 1; i <=180; i++) {
    var r=Math.floor(Math.random()*10)
    run += `<div id="bubble">${r}</div>`;

}

document.querySelector("#pannelBottom").innerHTML=run;
}

var timer = 60;
function runTimer(){
    var time=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#leftTime").textContent=timer;
            
        }else{
            clearInterval(time);
        }
    },1000);
}

var getTarget=0;
function getNewHit(){
    getTarget=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=getTarget;
}

var score=0;
function getScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}

document.querySelector("#pannelBottom").
addEventListener("click",function(details){
    var currNum=Number(details.target.textContent);
    if(currNum === getTarget){
        getScore();
        makeBubble();
        getNewHit();
    }
})
getNewHit();
runTimer();
makeBubble();