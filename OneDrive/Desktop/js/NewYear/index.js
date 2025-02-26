const endDate = "31 dec 2023 00:00 PM"
document.getElementById("date").innerHTML = endDate
let color  ="purple"
document.body.style.backgroundColor = color;
const input =document.querySelectorAll("input")

const clock =()=>{
    const end =new Date(endDate)
    const now =new Date()
    const diff =( end - now) /1000
    const month =Math.floor(diff/3600/24)
    const days = Math.floor((diff/3600) % 24)
    const minute= Math.floor((diff/60%60))
    const second= Math.floor((diff%60))
    input[0].value= month
    input[1].value = days
    input[2].value = minute
    input[3].value = second
    if(diff<0)
    return
}
clock()
setInterval(()=>{
    clock()
},1000)