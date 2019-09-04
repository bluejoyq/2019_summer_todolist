const fs = require('fs');

const add=(req,res)=>{
    fs.readFile('./db.json','utf8',(err,data)=>{
        if(err){
            throw(err);
        }
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(data);
    });

};

module.exports=add; 