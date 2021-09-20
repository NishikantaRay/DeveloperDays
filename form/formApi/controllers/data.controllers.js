const data = require('../model/data.model');
const joi = require('joi');
const multer = require('multer');
const upload = multer({dest: "uploads/"}).single('file');
const fs = require('fs');


const createData = async(req, res)=>{

    try{
        await upload(req, res, async(err)=>{
            let filename = req.file === undefined ? 'default.pdf' : req.file.filename;
            console.log(filename);
            const dataSchema = joi.object({
                name : joi.string().min(1).required(),
                email : joi.string().email().required(),
                phone : joi.string().length(10).required(),
                file : joi.string(),
                demo: joi.string().required()
            });
            // console.log(dataSchema);
            let dataObj = {
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                file : req.file.filename,
                demo : req.body.demo
            };
            console.log(dataObj);

            try{
                let dataFields = await dataSchema.validateAsync(dataObj); 
                let findData = await data.findOne(
                    {
                        $or:[
                            {phone: dataFields.phone},
                            {email: dataFields.email}
                        ]
                    }
                );
        
                if(!findData){
                    let newData = new data(dataFields);
                    console.log(newData);
                    await newData.save();
                    res.status(201).json({
                        message:"New DATA Saved",
                        data: newData,
                        duplicate:false
                    })
                } else {
                    if(!(req.file === undefined) ){
                        await fs.unlinkSync('./uploads/'+filename);
                    }
                    res.status(200).json({
                        message:"Duplicate DATA",
                        data: findData,
                        duplicate:true
                    })
                }
            } catch(err) {
                console.log(err);
                res.status(500).json({
                    message:"Something went wrong :(",
                    error:true
                })
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message:"Something went wrong",
            error:true
        })
    }
}

module.exports = {
    createData
}