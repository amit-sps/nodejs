const http=require("http")
console.log("HTTP Modules.................")

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,"'Content-Type': 'text/html'")
       return res.end("Hello World!")
    }
    if(req.url==="/data"){
        let demoData={name:"Amit",address:"nagar",state:"maharashtra"}
        res.writeHead(200,`'content-type':'text/json'`);
        return res.end(JSON.stringify(demoData))
    }

    else{
        res.writeHead(404,"'content-type':'text/html")
        res.end("Invalid Url!")
    }
})
server.listen(4040,()=>{
    console.log("server is listening on port 4040")
})