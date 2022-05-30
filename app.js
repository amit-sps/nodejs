// Examples of Local Modules............
const calc=require("./calculator.js");
let res=calc.add(5,7)
console.log(`5 + 7  : ${res}`)
res=calc.sub(7,5)
console.log(`7 - 5  : ${res}`)
res=calc.mult(7,5)
console.log(`7 *  5  : ${res}`)