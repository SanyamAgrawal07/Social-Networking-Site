const {Router} = require('express')
const router = Router();

const {getAllUsers,addUser,deleteUser,updateUser,getMyInfo} = require('../controllers/user.controller.js')
const authMiddle = require('../middleware/auth.middleware.js')

router.get('/allUsers', getAllUsers)
router.get('/myInfo',authMiddle,getMyInfo)
router.post('/createUser',addUser)
router.delete('/deleteUser/:id',deleteUser)
router.patch('/updateUser/:id',updateUser)
// router.get('/auth/google', getGoogleAuthUrl)

module.exports = router