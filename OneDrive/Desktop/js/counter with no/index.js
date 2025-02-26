let counterValue= document.querySelector("#counterValue")
let increase= document.querySelector("#increase")
let decrease= document.querySelector("#decrease")
let input = document.querySelector("input")
let reset = document.querySelector("#reset")

increase.addEventListener("click",()=>{
    let inputValue = parseInt(input.value)
 let count = parseInt(counterValue.innerText)
 counterValue.innerText= count +inputValue
})
decrease.addEventListener("click",()=>{
    let inputValue = parseInt(input.value)
    let count = parseInt(counterValue.innerText)
    counterValue.innerText= count -inputValue
})
reset.addEventListener("click",()=>{
    counterValue.innerText=0
    input.value=1
    
})


