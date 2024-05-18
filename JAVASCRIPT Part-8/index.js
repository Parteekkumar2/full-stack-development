//Array Method (foreach,map,filter,some,every,reduce)
//forEach Method
let arr=[1,2,3,4,5];
let print=function(el){
    console.log(el);
}
arr.forEach(print);
//or
arr.forEach(function(el){
    console.log(el);
});
//Array function
arr.forEach((el)=>{
    console.log(el);
});

//eg -2 based on object
let student=[
    {
    name:"keshav",
    marks:95,
    },
    {
        name:"Parteek",
        marks:94.4,
    },
    {
        name:"Akash",
        marks:92,
    },
];
student.forEach((student) =>{
    console.log(student.marks);
});
//map
let num=[1,2,3,4];
let double=num.map((el)=>{
    return el*el;
});
//filter
let nums=[1,2,3,4,5,6,7,8,9];
let ans=nums.filter((el)=>{
    return el%2==0;
});

//every 
[1,2,3,4].every((el)=>(el%2==0));
[2,4].every((el)=>(el%2==0));

//reduce 
let number=[1,2,3,4];
let finalval=number.reduce((res,el)=>res+el);
console.log(finalval);

//Maximum in Array 
let numb=[1,2,3,4,5,6,7,8,9,11,22,33,];
let max=numb.reduce((max, el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(max);

//Practice question
let value=[10,20,30,40,50];
let finals=value.every((el)=>el%10==0);
console.log(finals);

//qus-2
let min=value.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});
console.log(min);

//default parameter
function sum(a,b=2){
    return a+b;
}
console.log(sum(1));

//spread with array literals
let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];

let numbe=[...odd ,...even];
console.log(numbe);

//Spread with Object Literals
let data={
    email:"ironman@gmail.com",
    Password:"abcd"
};
let datacopy={...data, id:123};
console.log(datacopy);

//Rest 
function sum( ...args){
 return args.reduce((sum,el)=>sum+el);
}
console.log(sum(1,2,3,4));

//rest eg -2
function mins(msg, ...args){
    console.log(msg);
    return args.reduce((mins,el)=>{
        if(mins>el){
            return el;
        }else {
            return mins;
        }
    });
}
console.log(mins("hello" , 1,2,3,4,5));

//destructuring

let name=["tony", "bruce" ,"peter" , "steve" , "abc"];
let [winner ,runnerup, ...others]=name;
console.log(winner);
console.log(runnerup);
console.log(...others);

//Destructuring (Object)
const studento={
    name:"abc",
    class:9,
    age:14,
    sub:["hindi","english","math"],
    username:"abc@gmail.com",
    password:1234,
};
const{username:user,password:pass}=studento;
console.log(user ,pass);