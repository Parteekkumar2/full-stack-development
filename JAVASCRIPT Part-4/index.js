for(let i=1;i<=5;i++){
    console.log(i);
}
//ex -2
for(let i=10;i>=1;i--){
    console.log(i);
}
//print all odd number(1to 15)
for(let i=1;i<=15;i=i+2){
    console.log(i);
}

console.log("backwards");
for(let i=15;i>=1;i=i-2){
    console.log(i);
}
//print even number
for(let i=2;i<=10;i=i+2){
console.log(i);
}

//backwasrds
for(let i=10;i>=2;i=i-2){
    console.log(i);
}

console.log("Print the Multiplication table");

for(let i=5;i<50;i=i+5){
    
console.log(i);
}

console.log("Print the Multiplication table");
let n=prompt("Write your number");
n=parseInt(n);
for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}
//nested loop
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}
//while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//or
let k=5;
while(k>=1){
    console.log(k);
    k--;
}

//qs 2
let g=0;
while(g<=20){
    console.log(g);
    g++;
}

//favorite movie
const favmovie="avatar";
let guess=prompt("guess my favorite movie");
while((guess!=favmovie) && (guess!="quit")){
    guess=prompt("wrong guess . please try again");
}
if(guess==favmovie){
    console.log("congrats !!");
}else{
    console.log("you quit");
}

//break keyword
let l=1;
while(l<=5){
    if(l==3){
        break;
    }
    console.log(l);
    l++;
}

//loops with arrays
let fruits=["mango","apple","banana","litchi","orange"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

//reverse loop with array
for(let i=fruits.length-1;i>0;i--){
    console.log(i,fruits[i]);
}

//loops with nested Arrays
let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
for(let i=0;i<heroes.length;i++){
    console.log(`lists #${i}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}

//eg-2
let student=[["aman",95],["parteek",94.4],["karan",100]];
for(let i=0;i<student.length;i++){
    console.log(`info of student #${i}`);
    for(let j=0;j<student[i].length;j++){
        console.log(student[i][j]);
    }
}

//for of loops
let fruit=["mango","apple","banana","litchi","orange"];
for(i of fruit){
    console.log(i);
}

// eg-2
for(char of "full stack development"){
    console.log(char);
}

//Nested for of loop
for(list of heroes){
   //console.log(list);
    for(hero of list){
        console.log(hero);
    }
}