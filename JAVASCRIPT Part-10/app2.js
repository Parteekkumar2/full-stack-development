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



// Extracting form Data

let forms=document.querySelector("form");
forms.addEventListener("submit", function(event){
    event.preventDefault();

    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});