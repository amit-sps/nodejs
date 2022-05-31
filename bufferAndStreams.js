const path = require("path");
const fs = require("fs");
const http = require("http");
console.log("buffer and streams ..................>");

const server = http.createServer();
server.on("request", (req, res) => {
  if (req.url === "/") {
    res.write("Home Page!");
    res.end();
    return
  }
  if (req.url === "/data") {
    // fs.readFile(path.join(__dirname,"/demo.txt"),"utf-8",(err,data)=>{
    //     res.write(data)
    //     res.end()
    //     return
    // })
    let time=0;
    const tmInterval=setInterval(()=>{time++},1)
    const readStream=fs.createReadStream(path.join(__dirname,"/demo.txt"));
    readStream.on("data",(chunkData)=>{
        res.write(chunkData)
        res.write(`data reading ${time}.......`)
        console.log(`data reading ${time}.......`)
        
    })
    readStream.on("end",()=>{
        console.log(` reading end ${time}.......`)
        clearInterval(tmInterval)
        res.end("End")
    })
    readStream.on("error",()=>{
        res.end("Something went wrong!")

    })
    readStream.on("open",()=>{
        console.log(` data ready to read  ${time}.......`)
    })
   
  } else {
    res.end("Invalid path!");
  }
});
server.listen(4040, () => {
  console.log(`server is running on port 4040`);
});
