const express = require('express');
const router = express.Router();
const { arraySinger, Singer, avatarLink, profileLink } = require('../models/Singer');

router.get('/',(req,res)=>{
    res.render('index', {
        arraySinger, avatarLink, profileLink
    });
})
router.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    const index = arraySinger.findIndex(singer => singer._id == id)
    if(index<0){
        return res.send({
            error: 'Cannot find singer'
        })
    }
    arraySinger.splice(index,1)
    res.redirect('/')
})

router.get('/add',(req,res)=>{
    res.render('add');
})
router.post('/add',(req,res)=>{
    const { name, link, avatar } = req.body
    const _id = Math.ceil(Math.random() * 1000)
    const singer = new Singer(_id, name, link, avatar);
    arraySinger.unshift(singer);
    console.log(arraySinger);
    return res.redirect('/');
})

module.exports = router;