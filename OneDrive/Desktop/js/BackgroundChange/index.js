function change(){
    const randomNumber = Math.floor(Math.random()*16777215);
  
    const randomCode ="#"+randomNumber.toString(16);
    
    document.getElementById("text").innerHTML= randomCode
    document.body.style.backgroundColor = randomCode
}

document.getElementById("button").addEventListener("click", change)
change()