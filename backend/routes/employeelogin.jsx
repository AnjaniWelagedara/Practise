const router = require("express").Router();
let Employee = require('../models/employee.model');

router.post('/',async(req,res)=>{
    if (!req.body.empEmail || !req.body.empPassword)
        return res.status(400).send("Please fill username and password!");

    const employee = await Employee.findOne({
        empEmail: req.body.empEmail,
        empPassword: req.body.empPassword,
    });

    if (!employee) return res.status(404).send("Email or password is wrong!");
const empobj = {
    empType:employee.empType,
    empName:employee.empName,
    empEmail:employee.empEmail,
    empPassword:employee.empPassword,


}
    res.send(empobj);

});
module.exports = router;