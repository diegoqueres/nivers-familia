const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("nivers-familia-mota application is running =-D");
});

app.listen(8081);