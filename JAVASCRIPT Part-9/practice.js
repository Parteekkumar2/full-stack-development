let para1=document.createElement("p");
para1.innerText="Hey I'am red!";
document.querySelector('body').prepend(para1);
para1.classList.add("red");

//2
let h3=document.createElement("h3");
h3.innerText="I'am a blue h3!";
document.querySelector('body').prepend(h3);
h3.classList.add("blue");


//3

let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("para2");