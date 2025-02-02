let winnerName = document.querySelector("#winnerName")
let boxes=document.querySelectorAll(".box")
let reset=document.querySelectorAll(".reset")

let turn =true
let winnerPatter =[
    [0,1,2],
    [3,4,5],

    
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],

    [2,4,6],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(turn){
        box.innerText= "X"
       box.style.color="black"
        turn=false
       
      }else{
        box.innerText = "O"
        box.style.color="white"
        turn=true
      }
      box.disabled=true
      winner()
     
    })
})
function disable(){
    for(let box of boxes){
      box.disabled=true 
    }}
function enabable(){
    for(let box of boxes){
      box.disabled=false 
      box.innerText=""
    }
}
reset.forEach((button)=>{
    button.addEventListener("click",()=>{
        turn=true
        enabable()
        winnerName.innerText=""
    
})
})


function winner (){
  for(let key of winnerPatter){
let pos1Val = boxes[key[0]].innerText
let pos2Val = boxes[key[1]].innerText
let pos3Val = boxes[key[2]].innerText
if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
    if(pos1Val ==pos2Val && pos2Val==pos3Val && pos1Val==pos3Val){
       winnerName.innerText=`Congraculation ${pos1Val} win`
      disable()
    }
}
}
}



