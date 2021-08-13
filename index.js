var http = require('http');

var server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/plain'})

   var url = req.url;
   if (url == '/about') {
        res.write("Here i am in about");
        res.end();
   }

     else if (url == '/contact') {
            res.write('Hey i am contact');
            res.end();
     }
     else {
             res.write('Hey i am else');
             res.end();
     }

})

server.listen(3000, function() {
    console.log("Succefully started server at PORT 3000")
})