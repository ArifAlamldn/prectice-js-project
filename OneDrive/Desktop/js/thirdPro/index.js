// const question =[
//     {
//         "que": "Best Captain of India",
//         "a": "Dhoni",
//         "b": "Ganguly",
//         "c": "Sachin",
//         "d": "Dravid",
//         "corect": "a"
//     },
//     {
//         "que": "Best Batsman of India",
//         "a": "Ganguly",
//         "b": "sachin",
//         "c": "Shewag",
//         "d": "Dravid",
//         "corect": "b"
//     },
//     {
//         "que": "Best Bowler of India",
//         "a": "Irfan Pathan",
//         "b": "Bhumra",
//         "c": "Zahir Khan",
//         "d": "Bhuvi",
//         "corect": "c"
//     },
// ]
// let index= 0;
// const qBox=document.getElementById("qBox")
// const optionInputs = document.querySelectorAll(".option")
// const option = document.querySelectorAll(".option")
// const load=()=>{
//     const data= question[index];
//     qBox.innerText= `${index+1}) ${data.que}`
//      optionInputs[0].nextElementSibling.innerText=data.a
//      optionInputs[1].nextElementSibling.innerText=data.b
//      optionInputs[2].nextElementSibling.innerText=data.c
//      optionInputs[3].nextElementSibling.innerText=data.d
// }

// function submitQuiz(){
//    geAanswer()
//    if(answer== data.correct){
   
//    }
// }
//  const getAnswer =()=>{
//    optionInputs.forEach((Input)=>{
//    return(Input.value)
//    })


    
//    }

// load()

let table= [1,2,3,4,5,6,7,8,9,10]
let num= 5
let table5 = table.map((s)=>{
    s * num
})
console.log(table5)

// const table =(value)=>{
//     for (let i =1;i<11;i++){
//         console.log(i* value)
//     }
// }
// table(5)