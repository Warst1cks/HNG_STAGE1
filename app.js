const http = require('http');
const fs = require("fs");
const path = require('path');
const PORT = 8000;
const HOST = 'localhost';
const db = path.join(__dirname,"db","data.json")

const requestListener = function (req, res) {
    if(req.method === 'GET' && req.url === '/home'){
      getData(req,res)
    }
    if(req.method === 'POST' && req.url === "/post"){
        addData(req,res)
    }
};
function getData(req, res) {
    fs.readFile(db, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(400);
            res.end("An error occured");
        }
        
        res.end(data);
    });
}
const server = http.createServer(requestListener)
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
})