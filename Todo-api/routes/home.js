const express = require('express');
const router =express.Router();
const homeController=require('../controller/home.controller');

router.get('/',homeController.getList);

router.post("/add",homeController.addList);

router.delete('/delete/:name',homeController.deleteList);
module.exports=router;