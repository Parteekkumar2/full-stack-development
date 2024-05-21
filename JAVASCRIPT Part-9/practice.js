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

h1.innerText="I'am in a div";
para2.innerText="ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").prepend(div);

//Assignment question

//qs-1

let button=document.createElement("button");
let input=document.createElement("input");

button.innerText="Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//qs-2

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

//qs-3
let btn=document.querySelector("#btn");
btn.classList.add("btnstyle");

//qs-4

let h4=document.createElement("h1");
h4.innerHTML="<u> DOM Practice </u>";
document.querySelector("body").append(h4);

//qs-5

let para5=document.createElement("p");
para5.innerHTML="Apna college <b> Delta </b> Practice";
document.querySelector('body').append(para5);



