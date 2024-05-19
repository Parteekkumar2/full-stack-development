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