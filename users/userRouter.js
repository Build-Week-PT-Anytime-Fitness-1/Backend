const express = require('express');
const router = express.Router();
const userDb = require('./userModel');
//const classDb = require('../classes/classModel');
const auth = require('../auth/authenticate');

//GET all users

router.get('/', (req,res)=>{
    userDb.find()
        .then(users =>{
            res.status(200).json({users});
            console.log(users);
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

//GET user by id

router.get('/:id', (req,res)=>{
    const { id } = req.params;
    userDb.findById(id)
        .then(user =>{
            res.status(200).json({user});
            console.log(user);
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

//POST class by instructor

router.post('/:id/post' , auth.authenticate , (req,res) =>{
    const { id } = req.params;
    let newPost = req.body;

    classDb.add({instructor_id:id, ...newPost})
        .then(post =>{
            res.status(201).json(post);
            console.log(`New Fitness event added:`, post)
        })
        .catch(err => {
            res.status(500).json(err);
            console.log(err);
        })
})

// PUT changes to existing class by instructor

router.put('/:instructor_id/post/:id' , auth.authenticate , (req,res) =>{
    const { trainer_id, id } = req.params;
    let changes = req.body;

    classDb.update(id ,{instructor_id:instructor_id, ...changes})
        .then(updated =>{
            res.status(200).json(updated);
            console.log(updated)
        })
        .catch(err => {
            res.status(500).json(err);
            console.log(err);
        })
})

// DELETE class by instructor

router.delete('/:instructor_id/post/:id' , auth.authenticate , (req,res) =>{
    const { instructor_id, id } = req.params;

    classDb.remove(id)
        .then(deleted =>{
            res.status(204).json(deleted);
            console.log(deleted)
        })
        .catch(err => {
            res.status(500).json(err);
            console.log(err);
        })
})



module.exports = router;
