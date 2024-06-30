let n=5;
for (let i=0; i<n;i++){
    console.log("hello,",i);
}

console.log("bye!");

//process in node

let args=process.argv;
for(let i=2;i<args.length;i++){
    console.log("hello to ",args[i]);
}



//exports in files 

const math=require("./math");
console.log(math.sum(2,2));
console.log(math.PI);