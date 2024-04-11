console.log("Hello World !");
let y=4;
let b=3;
console.log("sum is :", y+b);

//Template literals
let pencilprice=10;
let eraserprice=5;
//let output="The total price:" +(pencilprice+eraserprice)+"Rupees.";
//let output=`The total price is :${pencilprice+eraserprice} Rupees.`;
//console.log(output);

console.log(`The total price is :${pencilprice+eraserprice} Rupees.`);


//operators
let a=10;
let c=5;
console.log(a-c);
console.log(a+c);
console.log(a*c);
console.log(a%c);
console.log(a/c);
console.log(a**c);

//unary
console.log(a++);
console.log(++a);

//Comparision
let age=18;
console.log(age<18);

//conditional(if)
console.log("before my if statements");
let ages=21;
if(ages>=18){
    console.log("you can vote");
}
if(ages>20){
  console.log("you are in your 20s");    
}
console.log("after my if statement");

//Practice question
let color="red";
//Traffic light system
if(color==="red"){
    console.log("stop");
}
if(color==="yellow"){
    console.log("slow down");
}
if(color==="green"){
    console.log("go");
}


//conditional( else if)
let marks=70;
if(marks>=80){
    console.log("A+");
}
else if(marks>=60){
  console.log("A");    
}
else if(marks>=33){
    console.log("B");
}else if(marks<33){
    console.log("F");
}

//else statement
let colors="white";
if (colors==="red"){
    console.log("stop");
}else if (colors==="yellow"){
    console.log("slowdown");
}else if(colors==="green"){
    console.log("go");
}else{
    console.log("Traffic light is broken");
}


//practice question if elseif else 
let size="xl";
if(size==="xl"){
    console.log("Price is Rs.250");
}else if(size==="l"){
    console.log("Price is Rs.200");
}else if(size==="m"){
    console.log("Price is Rs.100");
}else{
    console.log("Price is Rs.50");
}

//Nested if-else statement
let mark=33;
if(mark>=33){
    console.log("Pass");
    if(mark>=80){
        console.log("Grade :0");
    }else{
        console.log("Grade:A");
    }
}else{
    console.log("Better luck next time");
}

//Practice question
let str="apple";
if((str[0]==='a') && (str.length>3)){
    console.log("good")
}else{
    console.log("not a good string");
}

//practice qs

let num=12;
if((num%3===0) && ((num+1==15)||(num-1==11))){
    console.log("safe");
}else{
    console.log("unsafe");
}