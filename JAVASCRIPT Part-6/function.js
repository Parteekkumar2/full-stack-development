function hello(){
    console.log("hello");
}

//function calling
hello();

//eg-2
function printname(){
    console.log("Parteek");
}
printname();

//eg-3
function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
print1to5();

//eg-4
function isadult(){
    let age=18;
    if(age>=18){
        console.log("adult")
    }else{
        console.log("not adult");
    }
}

isadult();

//Practice question -1

function printpoem(){
    console.log("Twinkle Twinkle little star");
    console.log("how i wonder what you are");
}
printpoem();

//practice question -2
function rolldice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();

//function with arguments

function printname(name){
    console.log(name);
}
printname("PARTEEK");
printname("keshav");

//eg-2
function printinfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printinfo("parteek",20);
printinfo("keshav",15);

//example -2
function sum(a,b){
    console.log(a+b);
}
sum(2,3);
sum(7,8);

//practice question -3
function calcavg(a,b,c){
    let avg=(a+b+c)/3
    console.log(avg);
}
calcavg(2,4,6);

//practice question -4
console.log("Print table");
function printtable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
printtable(6);

//return keyword

function isadult(age){
    if(age>=18){
        return "adult";
    }else{
        return "not adult";
    }
}

//practice question -5
function getsum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

//Practice question -6

let str=["hi","hello","bye","!"];
function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}

//Lexical scope
function outerfunc(){
    let x=5;
    let y=6;
    function innerfunc(){
        console.log(x);
    }
    innerfunc();
}