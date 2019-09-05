const fs = require('fs');

const add=(req,res)=>{
    const memo = req.body.memo;
    const time = req.body.time;
    //time이 date객체임
    console.log(memo);
    console.log(time.toString());
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
        res.status(200).json(json_data);
    });
    

};

module.exports=add; 