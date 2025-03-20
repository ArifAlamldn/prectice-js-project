let count = 0


const ct = document.querySelector("#count")
const inc = document.querySelector("#inc")
ct.innerHTML = `${count}`

const increase =(inc)=>{
    count += inc
    ct.innerHTML =`${count}`
}
const decrease =()=>{
    count--
    ct.innerHTML =`${count}`
}