const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000
app.use(express.static(__dirname + '/dist/'));
app.get('/*',(req,res)=>{
    res.sendFile(path.join('dist/index.html'));
})

app.listen( PORT,()=>{
    console.log("Server is running on "+ PORT)
})