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
