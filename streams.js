console.log("Learning Streams.......................");
const http = require("http");
const fs = require("fs");
const path = require("path");
http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write(`Home Page!`);
      res.end();
    } else if (req.url === "/data") {
      const readStream = fs.createReadStream(path.join(__dirname, "/demo.txt"));
      const writeStream=fs.createWriteStream(path.join(__dirname, "/writeDemo.txt"))
      writeStream.on("drain",()=>{
        console.log("drain")
    })
    writeStream.on("finish",()=>{
        console.log("finish")
    })
    writeStream.on("close",()=>{
        console.log("writing close!")
    })
    writeStream.on("error",(err)=>{
        console.log("writing error>>>>>>>>>>>>>>>>>")
        console.log(err)
    })
      readStream.on("data",(data)=>{
          console.log("data reading.......")
          writeStream.write(data)
          res.write(data)
      })
      readStream.on("end",()=>{
          console.log("data end!")
          writeStream.end();
          writeStream.close();
          res.end()
          readStream.close()
      })
      readStream.on("error",(err)=>{
          console.log("________ERROR PART___________")
          console.log(err)
      })
      readStream.on("close",()=>{
          console.log("*************File Closed!***********")
      })
    //   readStream.on("readable",()=>{
    //       console.log("readble stream")
    //   })
    } else {
      res.write("Invalid Page!");
      res.end();
    }
  })
  .listen(4050, () => {
    console.log(`server is running on  http://localhost:4050`);
  });