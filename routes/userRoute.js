const express = require('express');
const router = express()
const userController = require('./../controller/userController');
const userControllerGet = require('./../controller/userControllerget');
const userControllergetById = require('./../controller/userControllergetById');
const userControllerPut = require('./../controller/userControllerPut');
const userControllerDelete = require('./../controller/userControllerDelete');
const registorPost = require('./../controller/registor');
const loginPost = require('./../controller/login');



router.post('/storeData', userController.userData);
router.get('/get', userControllerGet.getData);
router.get('/getAll', userControllerGet.getAll);

router.get('/getId/:id',userControllergetById.getId);

router.patch('/getId/:id',userControllergetById.dataUpdate);
router.delete('/getId/:id',userControllerDelete.getDelete);
router.post('/registor', registorPost.registor);
router.post('/login', loginPost.login);





module.exports = router;