const mongoose = require("mongoose");

const signSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model("signup",signSchema)