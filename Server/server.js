var express = require('express');
var app = express();

var path = require('path');
const hostname = "localhost";
const port = 3000;

app.get('/', function (req,res){
    res.sendFile(path.join(__dirname,'../public','index.html'));
})

app.listen(port, hostname, function (){
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});


