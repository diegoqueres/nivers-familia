var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("nivers-familia-mota application is running =-D");
});