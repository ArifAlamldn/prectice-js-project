let counterVal = document.getElementById("counterValue")
let x=0
function increase (){
    x++
    counterVal.innerText= x
  
}
function reset(){
    x=0
    counterVal.innerText= x
}
let decrease=()=>{
    if(x==0){
        x = 0
    }else{
        --x
        counterVal.innerText = x
    }
  
    
    
}