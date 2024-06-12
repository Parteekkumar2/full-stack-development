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