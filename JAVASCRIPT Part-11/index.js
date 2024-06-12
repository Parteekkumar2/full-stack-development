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
.then(()=>{
    console.log("data 1 saved");
    return savetoDb("helloworld");
})
.then(()=>{
    console.log("data 2 saved");
    return savetoDb("parteekkumar")
})
.then(()=>{
    console.log("data 3 saved");
})
.catch(()=>{
    console.log("promise was rejected");
});