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

//soln (this with arrow conceopt console)
// students
// {name: 'parteek', marks: 95, prop: Window, getname: ƒ, getmarks: ƒ, …}
// students.getname()
// index.js:68 {name: 'parteek', marks: 95, prop: Window, getname: ƒ, getmarks: ƒ, …}
// 'parteek'
// students.getmarks()
// index.js:72 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// undefined
// students.getinfo1()
// undefined
// index.js:77 {name: 'parteek', marks: 95, prop: Window, getname: ƒ, getmarks: ƒ, …}
// students.getinfo2()
// undefined
// index.js:82 Window {window: Window, self: Window, document: document, name: '', location: Location, …}




//practice questinon
const square=(n)=>n*n;
console.log(square(8));

//practice question soln -2
let id =setInterval(()=>{
    console.log("Hello World");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);

//Assignment question 
const arrayaverage=(arr)=>{
    let total =0;
    for(let number of arr){
        total +=number;
    }
    return total/arr.length;
};

let arr=[1,2,34,5,6,7,8,9];
console.log(arrayaverage(arr));

//ques-2
let num=4;
const isEven =(num)=>num%2==0;
