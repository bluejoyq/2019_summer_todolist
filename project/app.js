const express = require('express');
const app = express();

let schedule = new Array();

app.use(express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.sendFile('/index.html');
});

app.post('/add',(req,res)=>{
    res.send("asdsa");
    // 밑에 추가하는 창 열리게
    // 날짜 설명 알람여부등 추가후
    // submit
    // schedule 어레이에 추가후 일정 목록 갱신
});

app.listen(3000,()=>{
    console.log('Server On!');
});