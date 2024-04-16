//Array data structure

//let student1="aman";
//let student2="Parteek";
//let student3="rajat";

let students=["aman","Parteek","rajat"];
console.log(students);

//visualizing Array
let nums=[2,4,6,8];
console.log(nums[0],
    nums[1],
    nums.length);

    //creating array
    let info=["aman","parteek","nikhil"];
    console.log(info[0]);
    console.log(info[1][0]);

    //Array are mutable
    let fruits=["mango","apple","litchi"];
    console.log(fruits);
    fruits[0]="Banana";
    console.log(fruits);

    //Array method
    let cars=["audi","bmw","xuv","maruti"];
    console.log(cars);
    console.log(cars.push("toyota"));
    console.log(cars);

    //practice question
    let months=["january","july","march","august"];
    console.log(months);
    months.shift();
    months.shift();
    months.unshift("june");
    months.unshift("july");
    console.log(months);

    //indexOf & includes
    console.log(cars.includes("maruti"));
