const express = require('express');
const router = express.Router();
const classDb = require('./classModel');


//GET all available classes

router.get('/', (req, res) => {
    classDb.find()
        .then( posts =>{
            res.status(200).json(posts);
            console.log(posts);
        })
        .catch( err=>{
            res.status(500).json(err);
            console.log(err);
        })
})

//GET class list by type

router.get('/:type', (req, res)=>{
    const { type } = req.params;

    classDb.findByType(type)
        .then( posts =>{
            res.status(200).json(posts);
            console.log(posts);
        })
        .catch( err=>{
            res.status(500).json(err);
            console.log(err);
        })
})

module.exports = router;
