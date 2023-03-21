const {Router} = require('express')
const router = Router();

const {googleAuth,getGoogleAuthUrl} = require('../controllers/auth.controller.js')

router.get('/auth/google', googleAuth)
// router.get('/auth/google', getGoogleAuthUrl)

module.exports = router