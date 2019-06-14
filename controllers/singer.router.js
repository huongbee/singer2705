const express = require('express');
const router = express.Router();
const { arraySinger, Singer, avatarLink, profileLink } = require('../models/Singer');

router.get('/',(req,res)=>{
    res.render('index', {
        arraySinger, avatarLink, profileLink
    });
})
router.get('/add',(req,res)=>{
    res.send('add')
})
router.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    const index = arraySinger.findIndex(singer => singer._id == id)
    if(index<0){
        res.send({
            error: 'Cannot find singer'
        })
    }
    arraySinger.splice(index,1)
    res.redirect('/')
})

module.exports = router;