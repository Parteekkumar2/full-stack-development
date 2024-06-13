async function greet(){
    // throw "some random error";
    return "hello"
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was : ", result);
})
.catch((err)=>{
    console.log("promise was rejected with err : ",err);
});

//eg 2
let demo=async()=>{
    return 5;
};



//await keyword

//eg-1

function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demot(){
   await getnum();
   await getnum();
    await getnum();
    await getnum();
}

//eg-2
h1=document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`color changed to ${color}!`)
            resolve("color change!");
        },delay);
    });
}

async function demos(){
    await changecolor("red",1000);
    await changecolor("orange",1000);
    await changecolor("blue",1000);
    await changecolor("yellow",1000);
    await changecolor("pink",1000);
    await changecolor("brown",1000);
}





