//question -1
let nums=[1,2,3,4,5];
const square=nums.map((nums)=>nums*nums);
console.log(square);
let sum=square.reduce((acc,cur)=>acc+cur,0);
let avg=sum/nums.length;
console.log(avg);

//questio n-2
let number=[2,4,6,8,-2,-4];
console.log(number.map((number)=>number+5));


//question - 3
let string=["adam","bob","catlyn","donald","eve"];
console.log(string.map((string)=>string.toUpperCase()));

//question - 4
const doubleandreturnargs=(arr, ...args)=>[
    ...arr,...args.map((v)=>v*2),
];
console.log(doubleandreturnargs([1,2,3], 4,4));

//question - 5
const mergeobject=(obj1,obj2)=>({...obj1, ...obj2});
console.log(mergeobject({a:1,b:2} , {c:1,d:4}));

