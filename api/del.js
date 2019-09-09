const fs = require('fs');

const del=(req,res)=>{
    const index = req.body.index;
    let new_json = {};
    let new_array = [];
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
    const EditJSON=(json_data)=>{
        return new Promise((resolve,reject)=>{
            for(let i = 0; i < json_data.db.length; i++){
                if(json_data.db[i].index == index)
                    (json_data.db).splice(i, 1);
            }
            let json = JSON.stringify(json_data,null,4);
            fs.writeFile('db.json',json,'utf8',function(err) {
                if(err) {
                    return err;
                }
                console.log("File saved successfully!");
            });
            resolve();
        });
    }
    ReadJson()
    .then(EditJSON)
    .then(()=>{
        res.status(200).end();
    });
};

module.exports=del;