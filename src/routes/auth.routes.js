const {Router} = require('express')
const router = Router();
const authMiddle = require('../middleware/auth.middleware.js')

const {googleAuth,getGoogleAuthUrl,handleLogin,handleSignup} = require('../controllers/auth.controller.js')

router.get('/auth/google', googleAuth)
router.post('/login', handleLogin)
router.post('/signup', handleSignup)
router.get('/isAuthorized',authMiddle,(req,res)=>{
    return res.sendStatus(200)
})
// router.get('/auth/google', getGoogleAuthUrl)

module.exports = router