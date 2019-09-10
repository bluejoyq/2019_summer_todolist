const fs = require('fs');

const add=(req,res)=>{
    const memo = req.body.memo;
    const time = req.body.time;
    let new_json = {};
    let new_array = [];
    //time이 date객체임
    //console.log(memo);
    //console.log(time.toString());
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
            let temp_json = new Object();
            let db_index = json_data.db_index;
            temp_json.index = db_index;
            temp_json.time = time;
            temp_json.memo = memo;
            db_index++;       
            json_data.db.forEach(db=>{
                new_array.push(db);
            });
            new_array.push(temp_json);
            
            new_json.db_index = db_index;
            new_json.db = new_array;

            let json = JSON.stringify(new_json,null,4);
            fs.writeFile('db.json',json,'utf8',function(err) {
                if(err) {
                    return err;
                }
                console.log("File saved successfully!");
            });
            resolve();
        }     
    )};
    ReadJson()
    .then(EditJSON)
    .then(()=>{
        res.status(200).end();
    });
};

module.exports=add; 