let btn=document.querySelector("button");
let p=document.querySelector("p");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

btn.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);

//keyboard event

let inp=document.querySelector("input");
inp.addEventListener("keydown", function(event){
    console.log("code=",event.code);
    if(event.code =="keyU"){
        console.log("character moves up");
    }else if(event.code =="keyD"){
        console.log("character moves down");
    }else if(event.code =="keyL"){
        console.log("character moves left");
    }else if(event.code =="keyR"){
        console.log("character moves Right");
    }
});

//form Event

let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submitted")
})
