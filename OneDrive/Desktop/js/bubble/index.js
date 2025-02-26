var hitrun =0; 
var timer = 60;
 var score=0
function makeBubble(){
    var a="";
    for(let i=0;i<=167;i++){
        var rn=Math.floor(Math.random()*10)
        a += `<div id="bulb">${rn}</div>`
    } 
    document.querySelector("#bottom").innerHTML=a
}
function increase(){
    score += 10;
    document.querySelector("#scoreVal").textContent =score
}
function runtimer(){
  var runInt= setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#time").textContent=timer
    }
    else{clearInterval(runInt)
        document.querySelector("#bottom").innerHTML=`<h1>Game over</h1>`}
    },1000)
}
function click(){
    hitrun= Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrun
}

document.querySelector("#bottom").addEventListener("click",function(details){
   var clickedNum =Number(details.target.textContent)
   if(clickedNum === hitrun){
     increase()
     makeBubble()
     click()
   }
}
)
click()
makeBubble()
runtimer()
