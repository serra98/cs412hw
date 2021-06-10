const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('ps3', {'string': req.query.string});
        console.log(req.query.string);
    })
    .post((req, res, next) => {
        res.render('ps3', {'string': req.body.string, 'length': req.body.string.length})
    })

router.get('/bob',(((req, res, next) => {
    //res.dudesName = 'Bob';
    // res.json({name:res.dudesName});
    //const anArray = ['red','white','black'];
    //res.render('index',{title:req.params.whatever});
    res.render('ps3',{title: req.query.name});
})))

module.exports = router;