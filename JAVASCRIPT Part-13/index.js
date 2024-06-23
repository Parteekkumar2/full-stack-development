// let btn=document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let fact=await getFacts();
//     console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// });

// let urls="https://catfact.ninja/fact";
// async function getFacts(){
//    try{
//     let res=await axios.get(urls);
//     return res.data.fact;
   
//    }catch (e){
//     console.log("error -",e);
//     return "No fact found";
//    }


// }


//Dog picture API

let btn=document.querySelector("button");
let urls2 ="https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", async()=>{
    let link= await getImage();
    let img=document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getImage(){
   try{
    let res=await axios.get(urls2);
    return res.data.message;
   
   }catch (e){
    console.log("error -",e);
    return "/";
   }


}
