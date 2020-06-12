const router = require('express').Router();
let User = require('../models/user.model');
//Retrieve data
router.get('/',(req,res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error:' + err));
});
//Add data
router.post('/add',(req,res)=>{
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err=>res.status(400).json('Error: ' + err));
});
//Retrieve data by id
router.get('/:id',(req,res)=>{
    User.findById(req.params.id)
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error:' + err));
});
//Delete data
router.delete('/delete/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id)
        .then(()=>res.json('User Deleted!'))
        .catch(err=>res.status(400).json('Error: ' + err));
});

//Update and further
router.put('/update/:id',(req,res)=>{
    User.findById(req.params.id)
        .then(user=>{
            user.username = req.body.username;
            user.password = req.body.password;
            user.email = req.body.email;
            User.save()
                .then(()=>res.json('Exercise Updated!'))
                .catch(err=>res.status(400).json('Error: ' + err));

        })
        .catch(err=>res.status(400).json('Error:' + err));
});


module.exports = router;