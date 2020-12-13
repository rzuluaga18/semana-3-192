const router =require('express').Router();
const models = require('../../models')
const userController = require('../../controllers/UserController.js');
const bcrypt = require('bcryptjs');
// const { route } = require('..');


//api/user/
router.get('/', async(req,res)=>{
    const user = await models.user.findAll();
    res.status(200).json(user);
});

//api/user/listar
// router.get('/',userController.listar);
//api/user/register
router.post('/register',userController.register);
//api/user/login
router.post('/signin', userController.signin);



module.exports = router;