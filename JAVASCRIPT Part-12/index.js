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