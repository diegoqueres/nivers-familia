const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("nivers-familia-mota application is running =-D");
});

const PORT = process.env.PORT || 8081;
app.listen(PORT);