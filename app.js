const express = require('express');
const app = express();
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
const $ = jQuery = require('jquery')(window);

let schedule = new Array();

app.use(express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.sendFile('/index.html');
});



app.listen(3000,()=>{
    console.log('Server On!');
});