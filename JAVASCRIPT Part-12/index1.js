h1=document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected")
            }
            h1.style.color = color;
            resolve("color change!");
        },delay);
    });
}

async function demo(){
    try{
        await changecolor("red",1000);
        await changecolor("orange",1000);
        await changecolor("yellow",1000);
        await changecolor("green",1000);
    }
catch(err){
    console.log("error caught");
    console.log(err);
}

let a=5;
console.log(a);
console.log("new number=",a+3);
}

