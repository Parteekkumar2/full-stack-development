//Creating Object literals
let student={
    name: "Parteek",
    age:18,
    marks:80,
    city:"Haryana"
};
console.log(student);

//example -2
let delhi={
    latitude: "28.7041",
    longitude:[256.98,7455.87,54665.785]
};
console.log(delhi);

//Creating a Post
const Post={
    username:"@parteek",
    content:"This is my #FirstPost",
    Likes:150,
    reposts:5,
    tags:["Nikhil" ,"Nitin"]
};
console.log(Post);
//get value
console.log(student.name);
console.log(student["name"]);

//Conversion in get value
const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
console.log(obj);

//Add /Update value

student.city="mumbai";
student.gender="Male";
console.log(student);

//nested object
const classinfo={
    aman:{
        grade:"A+",
        city:"Delhi"
    },
    Parteek:{
        grade:"A+",
        city:"Haryana"
    },
    Nitin:{
        grade:"A+",
        city:"Mumbai"
    }
};
console.log(classinfo);

//Array of object
const classinfor=[
    {
        name:"aman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"Parteek",
        grade:"A+",
        City:"Haryana"
    }
];
console.log(classinfor);

//practice question
//Math.floor(Math.random()*100)+1;
//Math.floor(Math.random*5)+1


