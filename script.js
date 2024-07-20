// intial to final

// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:0.5
// })
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

// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:0.5
// })


// gsap.to("h1",{
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     // stagger:-1,  
//     stagger:0.3        //  one by one h1
    
// })

//yoyo
// gsap.to("#box",{
//         x:1200,
//         duration:2,
//         delay:1,
//         rotate:360,
//         backgroundColor:"blue",
//         borderRadius:"50%",
//         // scale:0.5
//         // repeat:3 , // 4 times 
//         repeat:-1 ,  // infinate
//         yoyo:true     // back bounces 
//     })


// timeline         to mangage delay timeing 

// gsap.to("#box",{
//    x:1200,
//    rotate:360,
//    duration:1.5,
//    delay:1
//  })

//  gsap.to("#box2",{
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:2.5
//   })

// gsap.to("#box3",{
//     x:1200,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })


// var tl = gsap.timeline()


// tl.to("#box",{
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// tl.to("#box2",{
//     x:1200,
//     rotate:360,
//     duration:1.5,
    
// })
// tl.to("#box3",{
//     x:1200,
//     rotate:360,
//     duration:1.5,
    
// })



var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.3
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    // delay:0.3
    scale:0.2
})



