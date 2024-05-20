//Selecting ElementByClassName

let smallImages=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImages.length;i++){
    console.dir(smallImages[i]);
}

let smallImage=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImage.length;i++){
    smallImage[i].src="assets/spiderman_img.png";
console.log(`value of image no.  ${i} is changed.`);
}

//Query selector

console.dir(document.querySelectorAll(`p`));

//Manipulating style

let links=document.querySelectorAll(".box a");
for(let i=0; i<links.length;i++){
    links[i].style.color="purple";
}

//Manipulating style class list
let heading=document.querySelector('h1');
heading.classList;
heading.classList.add("green");

//navigation on page

let h4=document.querySelector('h4');
console.log(h4.parentElement);
//parent child previousElementSibling  nextElementSibling

//Adding element on page 
let btn=document.createElement('button');

btn.innerHTML="new button";

let p=document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn);
