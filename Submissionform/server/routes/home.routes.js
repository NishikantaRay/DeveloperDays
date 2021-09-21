const express = require('express');
const router =express.Router();
const homeController=require('../controller/home.controller');

router.post("/add",homeController.addList);

module.exports=router;