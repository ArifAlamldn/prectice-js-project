var color = document.querySelectorAll("button")
var body=  document.querySelector("body")


color.forEach(function(button){
   button.addEventListener("click",function(elem){
    body.style.backgroundColor = elem.target.id
   })
})