function hello(){
    console.log("inside hello fix");
    console.log("hello");
}
function demo(){
    console.log("calling hello function");
    hello();
}
console.log("calling demo fix");
demo();
console.log("done,bye");


//visualizing call stack
function one (){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans=two()+one();
    console.log(ans);
}
three();


//javascript is a single threaded //
setTimeout(function(){
    console.log("apna college");
},2000);
console.log("Hello")

//callbackHell 

h1 = document.querySelector("h1");
function changecolor(color,delay,nextcolorchange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolorchange) nextcolorchange();
    },delay);
}

changecolor("red",1000,()=>{
   changecolor("orange",1000,()=>{  
       changecolor("green",1000,()=>{
           changecolor("yellow",1000,()=>{
              changecolor("blue",1000);
            });
        });
    });
});

//Setting up for promises

function savetoDb(data,success,failure){
    let internetspeed=Math.floor(Math.random()*10)+1;
    if(internetspeed>4){
        success();
    }else{
        failure();
    }
}

savetoDb(
    "my name is parteek",
()=>{
    console.log("success:your data was saved");
    savetoDb("helloworld",()=>{
        console.log("success 2:data 2 saved");
    },
    ()=>{
        console.log("failure2:weak connection");
    }
);
},
()=>{
    console.log("failure:weak connection.data not saved")
}
);