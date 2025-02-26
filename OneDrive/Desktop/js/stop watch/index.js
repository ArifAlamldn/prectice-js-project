let div=document.querySelector("#div")
let start=document.querySelector("#start")
let stop=document.querySelector("#stop") 
let reset=document.querySelector("#reset") 
let min="00";
let sec="00";
let ms="00";
let x;
div.innerText= `${min}.${sec}.${ms}`
start.onclick=()=>{
   x= setInterval(()=>{
        div.innerText= `${min}.${sec}.${ms}`
        if (ms < 99) {
            ms++;
        } else {
            sec++;
            ms = 0;
        }

        if (sec == 60) {
            min++;
            sec = 0;
        }
    },10)
}
   stop.onclick=()=>{
   
    clearInterval(x)
   }

   reset.onclick=()=>{
    clearInterval(x)
     min="00";
     sec="00";
     ms="00";
     div.innerText= `${min}.${sec}.${ms}`
   }
