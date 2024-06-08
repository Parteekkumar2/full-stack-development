function hello(){
    console.log("inside hello fix");
    console.log("hello");
}
function demo(){
    console.log("calling hello function");
    hello();
}
console.log("calling demo fix");
demo();
console.log("done,bye");


//visualizing call stack
function one (){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans=two()+one();
    console.log(ans);
}
three();