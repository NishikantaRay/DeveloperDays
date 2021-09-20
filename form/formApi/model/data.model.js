const mongoose = require('mongoose');

const dataSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        file:{
            type:String
        },
        demo:{
            type:String,
            required:true
        }
    }
);

module.exports = mongoose.model("data", dataSchema);