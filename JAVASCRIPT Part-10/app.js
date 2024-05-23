//Mouse / Pointer Events
let btn=document.querySelector("button");
console.dir(btn);
btn.onclick=function(){
    alert("button was clicked")
};

//onclick Events
let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.onclick=sayHello;
}

function sayHello(){
    alert("Hello");
}