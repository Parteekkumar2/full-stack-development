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

    //Concatnation and reverse method
    let primary=["red", "white","blue"];
    let secondary =["oramge","green","violet"];
    console.log(primary.concat(secondary));
    console.log(primary.reverse());

    //slice in arrays
    console.log(primary.slice(1,3));
    console.log(primary.slice(-1));

    //splice in arrays
    let colors=["red","yellow","blue","orange","pink","white"];
    console.log(colors.splice(4));
    console.log(colors);
    console.log(colors.splice(0,1));
    console.log(colors);
    console.log(colors.splice(0,1,"black","grey"));
    console.log(colors.splice(colors));

    //sorts in array
    let days=["monday","sunday","wednesday","tuesday"];
    console.log(days.sort());

    //practice question
    console.log(months.splice(0,2,"july","june"));
    console.log(months);


