const fs = require('fs');

const load=(req,res)=>{
    const ReadJson=()=>{
        return new Promise((resolve,reject)=>{
            fs.readFile('./db.json','utf8',(err,data)=>{
                if(err){
                    throw(err);
                }
                resolve(JSON.parse(data));
            });
        });
    }
    ReadJson()
    .then((json_data)=>{
        res.send(json_data);
        res.status(200).json(json_data);
    });
}

module.exports=load;