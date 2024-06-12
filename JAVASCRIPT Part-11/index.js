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