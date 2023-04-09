const jwt = require('jsonwebtoken')
const ogm = require('../neo4j/schema.js')
const User = ogm.model('User')

const auth = async (req,res,next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        console.log(token)
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)
        let userAuth = await User.find({where:{ id:decoded.id , token }})
        console.log(userAuth)
        if(!userAuth.length){
            throw new Error()
        }
        userAuth=userAuth[0]
        delete userAuth.password
        delete userAuth.token
        delete userAuth.id
        req.token = token
        req.user = userAuth
        next()
    }
    catch(error){
        console.log(error)
        res.status(401).send('Unauthorized user')
    }
}

module.exports = auth