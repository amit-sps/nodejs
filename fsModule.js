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