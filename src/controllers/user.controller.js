const ogm = require('../neo4j/schema.js')
const uuid = require('uuid')

const User=ogm.model('User')

async function getAllUsers(req,res){
    try{
        const users = await User.find()
        return res.status(200).send(users)
    }
    catch(err){
        res.status(500).send(err)
    }
}

async function getMyInfo(req,res){
    try{
        const myUser = req.user
        return res.status(200).send(myUser)
    }
    catch(err){
        res.status(500).send(err)
    }
}

async function addUser({name,username,emailId,password,iiita}){
    try{
        // const {firstname,lastname,emailId} = req.body
        console.log(emailId)
        const curId = uuid.v4()
        console.log(curId)
        const createdUser = await User.create({
            input:[
                {
                    id:curId,
                    name,
                    username,
                    emailId,
                    password,
                    iiita
                }
            ]
        })
        console.log(createdUser)
        return createdUser
        // console.log('redirecting')
        // res.redirect('../../public/index.html')
        // res.status(201).send(createdUser)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

async function updateUser(req,res){
    const id = req.params.id
    try{
        await User.update({
            where: { id },
            update: { name: "Jane" },
        });
        res.status(201).send('User updated')
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

async function deleteUser(req,res){
    const id = req.params.id
    // console.log(id)
    try{
        await User.delete({where:{ id }})
        res.status(200).send('User deleted')
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser,
    getMyInfo
}