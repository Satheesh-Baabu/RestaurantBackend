const express=require('express');
const { menulist } = require('../controllers/mobile/MenulistController');

const router=express.router();

router.get('/menulist',menulist)

module.exports=router;