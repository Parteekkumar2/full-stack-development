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

    //qs no2
    let lang=["c","c++","html","javascript","python","java","c++","sql"];
    console.log(lang.reverse().indexOf("javascript"));

    //Array reference
    let arr=["a","b"];
    let arrcopy=arr;
    console.log(arrcopy);
    console.log(arrcopy==arr);
    arrcopy.push("c");
    console.log(arr);
    //nested array
    let num=[[2,4],[3,6],[4,8]];
    console.log(num);
    console.log(num.length);
    console.log(num[0].length);
    console.log(num[0]);

    //practice qs
    let game=[["x",null,"O"],[null,"x",null],["o",null,"x"]];
    console.log(game);
    game[0][1]="o";
    console.log(game);

    //Assignment qs 1
    let arra=[7,9,0,-2];
    let n=3;
    let ans=arra.slice(0,n);
    console.log(ans); 
    //soln2
    console.log(arra);
    let answ=arra.slice(arra.length-n);
    console.log(ans);
    //soln 3
    let str=prompt("please enter a string");
    if(str.length==0){
    console.log("stris empty");
    }else{
        console.log("string is not empty");
    }
    //soln 4
    let strs="PArTeEK";
    let idx=3;
    if(strs[idx]==strs[idx].toLowerCase()){
        console.log("CHARACTER IS LOWERCASE");
    }else{
        console.log("CHARACTER IS NOT LOWERCASE");
    }
    //sol 4
    let stre=prompt("please enter a string");
    console.log(`original string=${stre}`);
    console.log(`string without spaces=${stre.trim()}`);

    //soln 6
    let arrs=["hello","a",23,64,99,-6];
    let items=64;
    if(arrs.indexOf(items)!=1){
        console.log("element exists in array");
    }else{
        console.log("elements doesnot exists in array");
    }
    





