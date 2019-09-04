const express=require('express');
const router=express.Router();

router.post('/add',require('./add'));

module.exports=router;

//rest ai