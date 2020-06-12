const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({

    hospital:{
        type:String,
        required: true,
        min:10,
        max: 255
    },
    date:{
        type:Date,
        required: true,
        min:10,
        max: 255

    },
    numberofPatients:{
        type:Number,
        required: true,
        min:10,
        max: 255

    },
});
module.exports = mongoose.model("Admin",adminSchema);