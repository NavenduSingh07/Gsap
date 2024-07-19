// intial to final

gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:0.5
})
// gsap.to("#box2",{
//     x:1000,
//     y:500,
//     duration:2,
//     delay:1
// })

// f to I
// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:1
// })

gsap.from("#box2",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:0.5
})


gsap.to("h1",{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:-1,          //  one by one
    
})
