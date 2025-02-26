// var form =document.querySelector("form")
// var result = document.querySelector("#result")

// form.addEventListener("submit",function(e){
//    e.preventDefault()
//    var h =parseInt(document.querySelector("#Height").value)
//    var w =parseInt(document.querySelector("#Weight").value)
//    var result = document.querySelector("#result")

//  if(h ===0 || isNaN(h) || h === ''){
//    result.innerHTML = `Please give a valid height ${h}`
//  }if (w ===0 || isNaN(w)||  w === ''){result.innerHTML =
//    `Please give a valid weight ${w}`
//  }
//    else{
//      const bmi =(w / ((h*h)/10000)).toFixed(2)
//      result.innerHTML = `<span>${bmi}</span>`
//      var guide= document.querySelector("#Weight-Guide")
//      if(bmi<18.5){
//       guide.innerHTML="less"
//      }else if (bmi> 30){
//       guide.innerHTML = "Hight"
//      }
//      else (
//    "Medium"
//      )
//    }
// })


// var time= document.querySelector("#timer")

// setInterval(function(){
//    let timer = new Date()
//   time.innerHTML=timer.toLocaleString()
// },1000)



// let submit = document.querySelector("#submit")
// console.log(submit)
// let no = document.querySelector("#no")
// console.log(no)
// let guest = document.querySelector("#guest")
// let remaning = document.querySelector("#remaning")
// let randomNum = parseInt(Math.floor(Math.random()*100)+1)
// let playerNo = true

// if(playerNo== true){
//    submit.addEventListener("click",function(){
//       e.preventDefault();
//       const guess =parseInt(no.value)
//       console.log(guess)
//    })
// }

// function validNum(){
// }

var time= document.querySelector("#timer")
function run (){
  let timer=new Date()
  time.innerTexxt=timer.toString()
  console.log(timer)
}
run()

