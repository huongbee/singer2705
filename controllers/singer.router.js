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
router.get('/update/:_id',(req, res)=>{
    const _id = req.params._id;
    const singer = arraySinger.find(element => element._id == _id)
    if(!singer) return res.send({error : 'Can not find singer'})
    return res.render('update',{ singer, avatarLink })
})
router.post('/update',(req,res)=>{
    const { _id, name, avatar, link } = req.body
    const singer = arraySinger.find(e=>e._id == _id)
    if(!singer) return res.send({error : 'Can not find singer'})
    singer.name = name;
    singer.link = link;
    singer.avatar = avatar;
    return res.redirect('/');
})

module.exports = router;