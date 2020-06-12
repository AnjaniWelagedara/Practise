const router = require('express').Router();
let Admin = require('../models/admin.model');
//Retrieve all data
router.get('/',(req,res)=>{
    Admin.find()
        .then(admins=>res.json(admins))
        .catch(err=>res.status(400).json('Error:' + err));
});
//Add the data
router.post('/add',(req,res)=>{

    const hospital = req.body.hospital;
    const date = Date.parse(req.body.date);
    const numberofPatients = Number(req.body.numberofPatients);

    const newAdmin = new Admin({
        hospital,
        date,
        numberofPatients});

    newAdmin.save()
        .then(()=>res.json(' added!'))
        .catch(err=>res.status(400).json('Error: ' + err));
});
//Get data by id
router.get('/:id',(req,res)=>{
Admin.findById(req.params.id)
    .then(admins=>res.json(admins))
    .catch(err=>res.status(400).json('Error:' + err));

});

router.delete('/delete/:id',(req,res)=>{
    Admin.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Exercise deleted!'))
        .catch(err=>res.status(400).json('Error: ' + err));
});
//Update data
router.put('/Update/:id',(req,res)=>{
    Admin.findById(req.params.id)
        .then(admin=>{
            admin.hospital = req.body.hospital;
                admin.date = req.body.date;
                admin.numberofPatients = req.numberofPatients;
                admin.save()
                    .then(()=>res.json('Admin Updated!'))
                    .catch(err=>res.status(400).json('Error: ' + err));
        })
       .catch(err=>res.status(400).json('Error:' + err));

});


module.exports = router;