let btn=document.querySelector("button");
btn.addEventListener("click", async()=>{
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;
});

let urls="https://catfact.ninja/fact";
async function getFacts(){
   try{
    let res=await axios.get(urls);
    return res.data.fact;
   
   }catch (e){
    console.log("error -",e);
    return "No fact found";
   }


}