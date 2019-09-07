const express=require('express');
const router=express.Router();

router.post('/add',require('./add'));
router.get('/load',require('./load'));

module.exports=router;

//rest ai