const Joi = require('joi');
const home = require('../model/home');

//add
exports.addList=async(req,res)=>{
    const homeObj=Joi.object({
        name : Joi.string().required().min(3).alphanum(),
        email : Joi.string().email().required()
    })
    try {
        const homeField = await homeObj.validateAsync(req.body);
        const homes = new home(homeField);
        console.log(homes);
        await homes.save();
        res.status(200).json({
            message:"Homes Added successfully" ,
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

//get
exports.getList = async(req, res)=> {
    try {
        const homes = await home.find();
        if(homes.length!==0){
            console.log(homes)
            res.status(200).json({
                message:"Homes Data fetched successfully",
                Data:homes
            })
        }else{
            res.status(404).json({
                message:"Not found",
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
    
}

//delete
exports.deleteList=async(req, res)=>{
    const name = req.params.name;
    try {
        const deleteName = await home.findOneAndDelete(name);
        if(deleteName==null){
            res.status(400).json({
                message:"Home did'nt deleted  successfully/ID not found"
            })
        }else{
            res.status(200).json({
                message:"Home deleted successfully",
                deleteName:deleteName
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"something went wrong",
            error:err 
        })
    }
}