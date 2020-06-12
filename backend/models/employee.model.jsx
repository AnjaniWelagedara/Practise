const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    empType: {
        type: String,
        required: true,
    },
    empName: {
        type: String,
        required: true,
    },
    empEmail: {
        type: String,
        required: true,
    },
    empPassword: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("Employee", employeeSchema);