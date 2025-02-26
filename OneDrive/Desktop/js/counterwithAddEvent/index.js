let countValue = document.getElementById("value")
let btns = document.querySelectorAll(".btn")
count = 0;

btns.forEach(function(item){
item.addEventListener("click",function(value){
  const x =value.currentTarget.classList;
  if(x.contains("increase")){
    count++
    countValue.style.color = "green"
  }
  else if(x.contains("decrease")){
    count--
    countValue.style.color = "red"
  }
  else{
    count = 0
    countValue.style.color = "black"
  }
  countValue.textContent = count
})
})