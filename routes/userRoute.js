const express = require('express');
const router = express()
const userController = require('./../controller/userController');


router.post('/storeData', userController.userData);



module.exports = router;