let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayname)
}

function sayHello(){
    alert("Hello");
}
function sayname(){
    alert("Parteek");
}


//Event Listeners for Element
let p=document.querySelector("p");
p.addEventListener("click", function(){
    console.log("para was clicked");
})

let box=document.querySelector(".boxes");
box.addEventListener("mouseenter",function(){
    console.log("mouse inside box");
});