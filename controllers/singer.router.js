const express = require('express');
const router = express.Router();
const { arraySinger, Singer, avatarLink, profileLink } = require('../models/Singer');

router.get('/',(req,res)=>{
    
})
router.get('/add',(req,res)=>{
    res.send('add')
})

module.exports = router;