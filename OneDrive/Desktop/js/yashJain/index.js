// gsap.to(".imgUp",{
//     duration:1,
//     y:20,
//     delay:1,
//     repeat:-1,
//     yoyo:"true"

// })

// let path ="M 10 50 Q 500 50 1000 50"
// let final = "M 10 50 Q 500 50 1000 50"

// let svg = document.querySelector("#line")

// svg.addEventListener("mousemove",(dets)=>{
//     path = `M 10 50 Q ${dets.x-100} ${dets.y-400} 1000 50` 
//     // console.log(dets.y)
//     console.log(dets.x)
//       gsap.to("svg path",{
//         attr:{d:path},
      
//         ease:"power3.out"
//       })
//     })


// svg.addEventListener("mouseleave",(dets)=>{
//     console.log("leave")
    
//     gsap.to("svg path",{
//         attr:{d:final},
//         ease: "elastic.out(1,0.3)",
//         duration:2
//     })
// })

let path = "M 10 50 Q 500 50 1000 50";
let final = "M 10 50 Q 500 50 1000 50";

let svg = document.querySelector("#line");
let yOffset = 400; // Initial offset value

svg.addEventListener("mousemove", (dets) => {
    let newY = dets.y - yOffset;
    path = `M 10 50 Q 500 ${newY} 1000 50`;
    
    gsap.to("svg path", {
        attr: { d: path },
        ease: "power3.out"
    });
});

svg.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: final },
        ease: "elastic.out(1,0.3)",
        duration: 2
    });
});
