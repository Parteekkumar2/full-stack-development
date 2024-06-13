function savetoDb(data){
    return new Promise((resolve,reject)=>{
    let internetspeed=Math.floor(Math.random()*10)+1;
    if(internetspeed>4){
        resolve("resolve:data was saved");
    }else{
        reject("reject:weak connection");
    }
});
}

savetoDb("parteek")
.then((result)=>{
    console.log("data 1 saved");
    console.log("result of promise:",result);
    return savetoDb("helloworld");
})
.then((result)=>{
    console.log("data 2 saved");
    console.log("result of promise:",result);
    return savetoDb("parteekkumar")
})
.then((result)=>{
    console.log("data 3 saved");
    console.log("result of promise:",result);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("error of promise:",error);
});


//Refactoring old code 

h1=document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color change!");
        },delay);
    });
}

changecolor("red",1000)
.then(()=>{
console.log("red color was completed");
return changecolor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changecolor("green",1000);
    })
    .then(()=>{
        console.log("green color was completed");
        return changecolor("blue",1000);
        })

        .then(()=>{
            console.log("blue color was completed");
            });