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

