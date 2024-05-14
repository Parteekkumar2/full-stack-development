//`this` in JAVASCRIPT (this keyword)
const student ={
    name:"Parteek",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getavg(){
        console.log(this);
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks=${avg}`);
    }
}
console.log(student.getavg());

//try & catch method

console.log("hello");
console.log("hello");
// let a=25;(error)
try{
    console.log(a);
}catch{
    console.log("caught an eror .. a is not dfined");
}
console.log("hello2");
console.log("hello2");

//Arrow function
const sum=(a,b)=>{
    console.log(a+b);
};
console.log(sum(2,6));
//ex-2
const cube=(n)=>{
    return n*n*n;
};
console.log(cube(8));
//ex-3
const pow=(a,b)=>{
    return a**b;
};
console.log(pow(2,3));

//Implicit return in arrow function
const mul=(a,b)=>(a*b);
console.log(mul(2,6));

//set timeout function
console.log("hi there!");
setTimeout( ()=>{
    console.log("full stack developer")
},4000);
console.log("welcome to");

//det interval function
//   let id =setInterval( ()=>{
//       console.log("front end developer");
//   },2000);

//this with arrow function

const students={
name:"parteek",
marks:95,
prop:this, //global scope
getname:function(){
    console.log(this);
    return this.name;
},
getmarks:()=>{
    console.log(this); //parents scope
    return this.marks;
},
getinfo1:function(){
    setTimeout(() =>{
        console.log(this); //student object
 },2000);
},
getinfo2:function(){
    setTimeout (function(){
        console.log(this); //window object
    },2000);
},
};


