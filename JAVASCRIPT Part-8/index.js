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