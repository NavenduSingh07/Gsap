


function breakTheText(){

    // var h1TEXT = document.querySelector("h1").textContent
// var h1TEXT = h1TEXT.textContent

var h1 = document.querySelector("h1");
var h1TEXT = h1.textContent
console.log(h1TEXT)

var splitedText = h1TEXT.split("")
console.log(splitedText)



//console.log(splitedText.length)

//var halfValue = Math.floor(splitedText.length/2)
var halfValue = splitedText.length/2
console.log(halfValue)

var clutter = ""
//for each only for array elements now 13 times loop chalega 
splitedText.forEach(function(elem,idx){
    //  console.log("elem")
   // console.log(idx)

    if(idx<halfValue){
        //console.log(elem)
        clutter += `<span class="a">${elem}</span>`
    }else{
        // console.log("hee",elem)
        clutter += `<span class="b">${elem}</span>`
    }
    // clutter = clutter +"e"
  //  clutter += elem   //same as above short from 
  //  clutter += "hi" 
    //   clutter += `<span class="a">${elem}</span>`
    
})
console.log(clutter)

// h1.innerHTML = e
h1.innerHTML = clutter

}

breakTheText()

// gsap.from("h1 span",{
//     y:50,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
//     stagger:0.15,
//    // stagger:-0.15   //negetive for reverse animation

// })


gsap.from ("h1 .a",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    // stagger:-0.15   //negetive for reverse animation
})

gsap.from ("h1 .b",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    // stagger:-0.15   //negetive for reverse animation
})