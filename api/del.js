const fs = require('fs');

const del=(req,res)=>{
    const index = req.body.index;
    let new_json = new Object();
    let new_array = new Array();
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
        (json_data.db).splice(index, 1);
        json_data.db_index--;
        let temp_index = 0;
        json_data.db.forEach(db=>{
            db.index = temp_index;
            temp_index++;
        });
        res.status(200);
    });
};

module.exports=del;