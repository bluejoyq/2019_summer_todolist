const express=require('express');
const router=express.Router();

router.post('/add',require('./add'));
router.get('/load',require('./load'));
router.post('/del',require('./del'));
router.post('/edit',require('./edit'));

module.exports=router;

//rest ai 