//`this` in JAVASCRIPT (this keyword)
const student ={
    name:"Parteek",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getavg(){
        console.log(this);
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks=${avg}`);
    }
}
console.log(student.getavg());

//try & catch method

console.log("hello");
console.log("hello");
let a=25;
try{
    console.log(a);
}catch{
    console.log("caught an eror .. a is not dfined");
}
console.log("hello2");
console.log("hello2");