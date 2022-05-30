// Examples of Local Modules............
const calc=require("./calculator.js");
const fs=require("fs")
let res=calc.add(5,7)
console.log(`5 + 7  : ${res}`)
res=calc.sub(7,5)
console.log(`7 - 5  : ${res}`)
res=calc.mult(7,5)
console.log(`7 *  5  : ${res}`)

// Creating a file and writing something in this.........

fs.writeFile("./demo.js",`console.log("Writing something using fs module")`,(err)=>{
    if(err)
    return console.log(err)
    return console.log("Wring complete!")
})

// Reading data from the file................
fs.readFile("./demo.js","utf-8",(err,data)=>{
    if(err)
    return console.log(err)
    console.log(data)
})

// Deleting File using fs modules............
  fs.unlink("./demo.js",(err)=>{
      if(err)
      return console.log(err)
      console.log("file deleted!")
  })