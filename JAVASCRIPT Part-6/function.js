function hello(){
    console.log("hello");
}

//function calling
hello();

//eg-2
function printname(){
    console.log("Parteek");
}
printname();

//eg-3
function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
print1to5();

//eg-4
function isadult(){
    let age=18;
    if(age>=18){
        console.log("adult")
    }else{
        console.log("not adult");
    }
}

isadult();