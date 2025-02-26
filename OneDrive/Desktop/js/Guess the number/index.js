let submitBtn = document.querySelector("#submit");
let message = document.querySelector("#message");
let form = document.querySelector("form");
let GuesstValue = document.querySelector("#GuesstValue"); 
let start = document.querySelector("#start"); 

let array = [];
let randomNumber = Math.floor(Math.random() * 101);
let chances = 10;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    start.disabled=true
    let inputValue = document.querySelector("#enter").value;
    inputValue = parseInt(inputValue); 
    if (inputValue === "") {
        message.innerText = "Enter a Number 1 to 100";
      
    } else if (inputValue > randomNumber) {
        message.innerText = "Too high";
    } else if (inputValue < randomNumber) {
        message.innerText = "Too low";
       
    } else {
        message.innerText = "Correct Guess!";
        submitBtn.disabled=true
        chances=0
        start.disabled=false
    }
    
    array.push(inputValue);
    GuesstValue.innerText = "Your Guess no - " + array.join(', '); // Corrected typo
    form.reset();
    
    chances--; // Decrementing chances
    
    if (chances === 0) {
        message.innerText = "You've run out of chances! The number was " + randomNumber;
        submitBtn.disabled = true; // Disable the submit button when chances run out
        start.disabled=false
    }
    
});

start.addEventListener("click",()=>{
    array=[]
    message.innerText= ""
    GuesstValue.innerText=""
    chances=10
    randomNumber = Math.floor(Math.random() * 101)
    form.reset()
    submitBtn.disabled=false

}

)
