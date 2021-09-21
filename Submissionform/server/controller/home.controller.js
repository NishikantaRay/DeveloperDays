const Joi = require('joi');
const home = require('../model/home.model');

//add
exports.addList=async(req,res)=>{
    const homeObj=Joi.object({
        name : Joi.string().required().min(3),
        email : Joi.string().email().required(),
        phone: Joi.string().required(),
        demolink: Joi.string().required(),
        source: Joi.string().required()

    })
    try {
        const homeField = await homeObj.validateAsync(req.body);
        const homes = new home(homeField);
        console.log(homes);
        await homes.save();
        res.status(200).json({
            message:"Data Added successfully" ,
            Data:homes
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
};
