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