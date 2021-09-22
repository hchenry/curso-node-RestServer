const { Router } = require('express');
const userController=require('../controllers/user');


const router = Router ();

//get
router.get('/', userController.userGet );
//post
router.post('/', userController.userPost );
//put
router.put('/:id', userController.userPut);

//delete
router.delete('/', userController.userDelete);


module.exports = router;