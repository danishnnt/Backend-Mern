const http = require("http");

const server = http.createServer((req,res) => {
    if(req.url ==="/home" && req.method === "GET") {
        res.end("Hello Danish from backend server from the deployement")
    }
    if(req.url === "/about" && req.method === "GET") {
        res.end("this is from about")
    }
});


server.listen(4000 , ()=> {
    console.log(`server listining on 4000`)
})
