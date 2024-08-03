// window.addEventListener("dblclick", function(){
//     console.log("double clicked");
   
// })

// window.addEventListener("wheel", function(){
//     console.log("scrolled");
// })
function marqueAnimation(){
    
window.addEventListener("wheel", function(dets){
    if(dets.deltaY>0){
        //console.log("scrolled down");
        gsap.to(".marque",{
            transform:'translateX(-200%)',
            // delay:1,
            duration:3,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".marque img",{
            rotate:180
        })
    }else{
       // console.log("scrolled up");
       gsap.to(".marque",{
        transform:'translateX(0%)',
        // delay:1,
        duration:3,
        repeat:-1,
        ease:"none"
    })
    gsap.to(".marque img",{
        rotate:0
    })
    }

})
}

marqueAnimation();

