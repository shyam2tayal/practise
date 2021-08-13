var http = require('http');
var fs = require('fs')

var server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/plain'})

   var url = req.url;

   if (url == '/giveme' && req.method == "GET") {
        fs.readFile('data.json', function(err, data) {
              res.end(data);
        })
   }

     else if (url == '/giveme' && req.method == "POST") {
            let body = '';
            req.on("data", chunk => {
                body += chunk.toString();
                fs.writeFile('data.json', body, (err, data) => {
                    res.end("Succefully Added a data");
                });
            })
     }
     else {
             res.write('Hey i am else');
             res.end();
     }

})

server.listen(3000, function() {
    console.log("Succefully started server at PORT 3000")
})