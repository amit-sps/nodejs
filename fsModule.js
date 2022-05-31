const fs = require("fs");
const path = require("path");
console.log("File System Modules!");
// Creating a file and writing something in this.........

// fs.writeFile("./demo.js",`console.log("Writing something using fs module")`,(err)=>{
//     if(err)
//     return console.log(err)
//     return console.log("Wring complete!")
// })

// // Reading data from the file................
// fs.readFile("./demo.js","utf-8",(err,data)=>{
//     if(err)
//     return console.log(err)
//     console.log(data)
// })

// // Deleting File using fs modules............
//   fs.unlink("./demo.js",(err)=>{
//       if(err)
//       return console.log(err)
//       console.log("file deleted!")
//   })

//Fs methods.............

// Making Folder if not Exists
if (!fs.existsSync(path.join(__dirname, "fsModuleDemoFiles"))) {
  // Making directory with async
  fs.mkdir("fsModuleDemoFiles", (err) => {
    if (err) return console.log(err);
    console.log("folder created!");
  });

  // Making directory with sync
  // fs.mkdirSync("fsModuleDemoFiles")
}
if (fs.existsSync(path.join(__dirname, "fsModuleDemoFiles"))) {
  // writing data into the file
  fs.writeFile(
    path.join(__dirname, "fsModuleDemoFiles/demo.txt"),
    "This is sample data to write into the file",
    (err) => {
      if (err) return console.log(err);
      return console.log("data added successfully!");
    }
  );
  // reading data from the file!
  console.log("reading data from the file!");
  fs.readFile(
    path.join(__dirname, "fsModuleDemoFiles/demo.txt"),
    "utf-8",
    (err, data) => {
      if (err) return console.log(err);
      console.log(data);
    }
  );
  // Removing folder from given path!
  fs.rmdir(path.join(__dirname, "fsModuleDemoFiles"), (err) => {
    if (err) return console.log("folder is not empty!");
    console.log("folder deleted!");
  });

  //  deleting file if exists.......
  //    if(fs.existsSync(path.join(__dirname,"fsModuleDemoFiles/demo.txt"))){
  //        fs.unlink(path.join(__dirname,"fsModuleDemoFiles/demo.txt"),(err)=>{
  //            if(err)
  //            return console.log(err)
  //            console.log("file deleted!")
  //        })
  //    }
//   Renaming file name!
//   if (fs.existsSync(path.join(__dirname, "fsModuleDemoFiles/demo.txt"))) {
//     fs.rename(
//       path.join(__dirname, "fsModuleDemoFiles/demo.txt"),
//       path.join(__dirname, "fsModuleDemoFiles/demo1.txt"),
//       (err) => {
//         if (err) return console.log(err);
//         console.log("Renamed!");
//       }
//     );
//   }
// copying fille
// fs.copyFile(path.join(__dirname, "fsModuleDemoFiles/demo.txt"),path.join(__dirname, "fsModuleDemoFiles/demo7.txt"),(err)=>{
//     if(err)
//     return console.log(err)
//     console.log("file copied")
// })
fs.appendFile(path.join(__dirname, "fsModuleDemoFiles/demo.txt"),"\nHello Amit!",(err)=>{
    if(err)
    return console.log(err)
    console.log("data appended!!!")
})

}
