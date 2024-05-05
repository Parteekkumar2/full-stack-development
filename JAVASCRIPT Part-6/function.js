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