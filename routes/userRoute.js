const express = require('express');
const router = express()
const userController = require('./../controller/userController');
const userControllerGet = require('./../controller/userControllerget');
const userControllergetById = require('./../controller/userControllergetById');
const userControllerPut = require('./../controller/userControllerPut');
const userControllerDelete = require('./../controller/userControllerDelete');



router.post('/storeData', userController.userData);
router.get('/get', userControllerGet.getData);
router.get('/getId/:id',userControllergetById.getId);
router.patch('/getId/:id',userControllerPut.dataUpdate);
router.delete('/getId/:id',userControllerDelete.getDelete);



module.exports = router;