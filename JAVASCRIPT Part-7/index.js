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