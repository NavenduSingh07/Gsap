// ScrollTrigger cdn   

// gsap.from("#page1 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
 
 
// })
// gsap.from("#page2 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     // scrollTrigger:"#page2 #box"
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
 
 
// })
// gsap.from("#page3 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
 
 
// })


// gsap.from("#page2 h1",{
//     opacity:0,
//     x:500,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })



// gsap.from("#page2 h2",{
//     opacity:0,
//     x:-500,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })



// gsap.from("#page2 #box", {
//     scale:0,
//     delay:1,
//     opacity:0,
//     duration:1,
//     rotate:720,
//     // scrollTrigger:"#page2 #box"
//     scrollTrigger:{
//         trigger:"#page2 #box",    //id 
//         scroller:"body",           //most of the time body
//         markers:true,             //only for mark
//         start:"top 60%",    //scroll start
//         end:"top 30",
//         scrub:2  ,       //t/f 12345  smothee based on scroll
//         pin:true      //for pin the element
//     }
//     })


gsap.to("#page2 h1",{
    Transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",    //   pin too parent 
              scroller:"body",           //most of the time body
           // markers:true, 
           start:"top 0%",
           end:"top -150%",
           scrub:2,
           pin:true




    }

})