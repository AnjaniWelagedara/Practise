const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username:{
    type:String,
    required:true,
    min:5,
    max:255
},
    password:{
    type:String,
        required: true,
        min:10,
        max: 255
    },

    email:{
        type:String,
        required: true,
        min:10,
        max: 255
    },
});
module.exports = mongoose.model("User",userSchema);