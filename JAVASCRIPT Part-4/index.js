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