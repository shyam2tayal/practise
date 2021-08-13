var express = require('express');
var app = express();
var routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send("in get");
})
app.get('/about', (req, res) => {
    res.send("in About");
})
app.get('/con*tact', (req, res) => {
    res.send("kajsdkjansd");
})

app.post('/data', (req, res) => {
    console.log(req.body);
})


var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App is started at %s%s", host, port);
;})