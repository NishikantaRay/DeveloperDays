const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data.controllers');

router.post('/create', dataController.createData);

module.exports = router;