let input=document.querySelector("input")
let lower =document.querySelector(".LowerCase")
let upper =document.querySelector(".UpperCase")
let camel=document.querySelector("#camelCase")
let pascel =document.querySelector("#pascalCase")
let snake =document.querySelector("#snakeCase")
let info =document.querySelector("#info")

function fullstr(str){
  return str[0].toUpperCase()+str.slice(1,str.length) 
}

function camelCase(str){
   let word = str.toLowerCase()
   let restword = word.split(' ')
     const finalarray=restword.map((word,index)=>{
     if(index===0)return word
     return fullstr(word) 
   })
   return finalarray.join("")
}
function pascelCase(str){
   let word = str.toLowerCase()
   let restword = word.split(' ')
     const finalarray=restword.map((word,index)=>{
       
     return fullstr(word)
   })
   return finalarray.join("")
}
function snakeCase(str){
  let word = str
   let restword = word.split('-')
     const finalarray=restword.map((word,index)=>{
       
     return fullstr(word)
   })
   return finalarray.join("")
}

lower.innerText = input.value.toLowerCase()
upper.innerText = input.value.toUpperCase()
camel.innerText = camelCase(input.value)
pascel.innerText = pascelCase(input.value)
snake.innerText = snakeCase(input.value)




input.addEventListener("input",()=>{
    lower.innerText = input.value.toLowerCase()
    upper.innerText = input.value.toUpperCase()
    camel.innerText = camelCase(input.value)
    snake.innerText = snakeCase(input.value)
    
    
})