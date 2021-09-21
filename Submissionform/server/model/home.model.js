const mongoose= require('mongoose');

const homeSchema = mongoose.Schema({
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
    demolink:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    }
    
},{ timestamps: true });
module.exports=mongoose.model('home',homeSchema);