const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const fs= require('fs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname+"/public"));
app.use('/api',require('./api'));
app.use('/',require('./router'));

app.listen(3000,()=>{
    console.log('Server On!');
});