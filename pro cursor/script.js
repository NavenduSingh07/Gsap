// var main = document.querySelector("#main");
// var cursor = document.querySelector('#cursor')
// var text = document.querySelector("h1")
// main.addEventListener('mousemove', function(dets){
//     cursor.style.left = dets.x + "px"
//     cursor.style.top = dets.y + "px"
// })
// text.addEventListener('mouseenter' , function(){
//     cursor.style.scale = 2.5;
// })
// text.addEventListener('mouseleave' , function(){
//     cursor.style.scale = 1;
// })

var main = document.querySelector("#main");
var cursor = document.querySelector('#cursor');
var text = document.querySelector("h1");

var mouse = { x: 0, y: 0 };
var pos = { x: 0, y: 0 };
var speed = 0.2; // Lower the value for slower follow effect

main.addEventListener('mousemove', function(dets){
    mouse.x = dets.x;
    mouse.y = dets.y;
});

function animateCursor() {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;

    cursor.style.left = pos.x + "px";
    cursor.style.top = pos.y + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

text.addEventListener('mouseenter', function() {
    cursor.style.transform = "scale(2.5)";
});

text.addEventListener('mouseleave', function() {
    cursor.style.transform = "scale(1)";
});
