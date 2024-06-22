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


let jsonRes=`{
    "fact": "Cats only sweat through their paws and nowhere else on their body",
    "length": 65
}`;

let validRes=JSON.parse(jsonRes);
console.log(validRes.fact);


//our first API request

let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("data1=",data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("data2=",data2.fact);
})
.catch((err)=>{
    console.log("ERROR -",err);
})

//using fetch with async-await

let urls="https://catfact.ninja/fact";
async function getFacts(){
   try{
    let res3=await fetch(urls);
    let data3=await res3.json();
    console.log(data3.fact);

   let res4=await fetch(urls);
    let data4=await res4.json();
    console.log(data4.fact);
   }catch (e){
    console.log("error -",e);
   }
   console.log("bye");

}