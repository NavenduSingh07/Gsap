// var main = document.querySelector("#main")
// var cursor = document.querySelector("#cursor")



// main.addEventListener("mousemove",function(dets){
//     gsap.to(cursor,{
//         x:dets.X,
//         y:dets.Y,
//         durations:1
        
//     })
// })



// document.addEventListener('DOMContentLoaded', () => {
//     var main = document.querySelector("#main");
//     var cursor = document.querySelector("#cursor");

//     main.addEventListener("mousemove", function(event) {
//         gsap.to(cursor, {
//             x: event.clientX,
//             y: event.clientY,
//             duration: 0.8,
//             // ease: "power1.out"
//             ease: "back.out(1, 0.2)"
//         });
//     });
// });


// var imageDiv = document.querySelector('#image')

// imageDiv.addEventListener('mouseenter', function() {
   
//     gsap.to(cursor, {
//         scale:4
        
//     });
    
// })

// imageDiv.addEventListener('mouseleave', function() {

//     gsap.to(cursor, {
//         scale:1
        
//     });
    
// })


document.addEventListener('DOMContentLoaded', () => {
    var main = document.querySelector("#main");
    var cursor = document.querySelector("#cursor");

    main.addEventListener("mousemove", function(event) {
        gsap.to(cursor, {
            x: event.clientX,
            y: event.clientY,
            duration: 0.8,
            ease: "back.out"
        });
    });

    var imageDiv = document.querySelector('#image');

    imageDiv.addEventListener('mouseenter', function() {
        gsap.to(cursor, {
            scale: 2
        });
    });

    imageDiv.addEventListener('mouseleave', function() {
        gsap.to(cursor, {
            scale: 1
        });
    });
});
