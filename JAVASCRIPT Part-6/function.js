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

//Practice question
let greet="hello";
function changegreet(){
    let greet="namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet);
    }
}
//function expression
const sums =function(a,b){
 return a+b;
}
sums(2,3);
//Higher order function 
function multiplegreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greets = function(){
 console.log("hello");
}
multiplegreet(greets,10);

//Higher order function returns
function oddeventest(request){
    if (request=="odd"){
        let odd=function(n){
            console.log(!(n%2==-0));
        }
        return odd;
    }else if(request=="even"){
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong request");
    }
}
let request ="odd";

//methods
const calculator ={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};

//methods (shorthand)
const calcul={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
};

//Assignment soln question -1
let arr=[8,9,10,1,2,3,4,5,6,7];
let num=5;

//elements larger than a number num

function getElements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);

//question-2

let strs="abcdabcdefgggh";
//function to get string with all unique elements
function getuniques(strs){
    let ans="";
    for(let i=0;i<strs.length;i++){
        let currchar=strs[i];
        if (ans.indexOf(currchar)==-1){
            ans+=currchar;
        }
    }
    return ans;
}
getuniques(strs);

//solution -3

let country =["Australia","germany","united states of america"];
function longestname(country){
    let ansIdx=0;
    for(let i=0;i<country.length;i++){
        let ansLen=country[ansIdx].length;
        let currLen=country[i].length;
        if (currLen>ansLen){
            ansIdx=i;
        }
    }
    return country[ansIdx];
}
longestname(country);

//solution -4

let stre="Parteek";
function countvowels(stre){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(
            stre.charAt(i)=="a"||
            stre.charAt(i)=="e"||
            stre.charAt(i)=="i"||
            stre.charAt(i)=="o"||
            stre.charAt(i)=="u"
        ) {
            count++;
        }
    }
    return count;
}

//sloution -5
let start =100;
let end =200;
function generateRandom(start,end){
    let diff=end-start;
    return Math.floor(Math.random()*diff)+start;
}