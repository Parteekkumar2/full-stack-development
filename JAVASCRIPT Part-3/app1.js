let msg="   hello   ";
//msg.trim()

let password=prompt("set your password");
let newpass=password.trim();
console.log(newpass);

//toUppercase and toLowercase
let name="parteek";
console.log(name.toUpperCase());

//indexOf method
let x="ILoveYou";
//x.indexOf("Love")  

//Method chaining

let y="   hello   ";
// let newy=y.trim();
// console.log("after trim:",newy);
// newy=newy.toUpperCase();
// console.log("after upper case:",newy);
//         or
let newy=y.trim().toUpperCase();
console.log(newy);

//Slice method
console.log(x.slice(5));

//Replace and Repeat Method
let z="IHateYou";
console.log(z.replace("Hate","Do"));
console.log(z.repeat(3));

//practice question
let msgs="help";
console.log(msgs.trim().toUpperCase());

//soln -2
let names="ApnaCollege";
console.log(names.slice(4,9));
console.log(names.indexOf("na"));
console.log(names.replace("Apna","Our"));

//sol-3
console.log(names.slice(4).replace("l","t"));
console.log(names.slice(4).replace("l","t").replace("l","t"));