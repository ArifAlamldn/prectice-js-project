gsap.to("#page2 #box",{
    
    rotate:360,
    duration:2,
    
    scrollTrigger:{
        trigger:"#page2 #box",
        scroll:"body",
        markers:true,
        start:"top 20%",
        end:"top-30",
        scrub:5,
        
    }

})