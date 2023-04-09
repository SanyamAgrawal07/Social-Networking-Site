const ogm = require('../neo4j/schema.js')
const User = ogm.model('User')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const users=[]

function addUser({ username,room,id }){
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    users.push({
        username,
        room,
        id
    })
    return { username,room,id }
}

function removeUser(id){
    const ind = users.findIndex((user)=>{
        return user.id === id
    })

    if(ind !== -1)
        return users.splice(ind,1)[0]
}

function getUser(id){
    return users.find((user)=>{
        return user.id === id
    })
}

function getUsersInRoom(room){
    room = room.trim().toLowerCase()
    const arr = users.filter((user)=>{
        return user.room === room
    })
    return arr
}

function isIiitaUser(emailId){
    if(emailId.endsWith('iiita.ac.in')) return true
    return false
}

async function generateAuthToken(createdUser){
    const token = jwt.sign({id: createdUser.id},process.env.JWT_SECRET,{expiresIn:'30m'})
    await User.update({
        where: { id:createdUser.id },
        update: { token },
    });
    // return token
    fs.writeFileSync('../../temp.txt', token)
    // process.env.AUTH_TOKEN=token
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom,
    isIiitaUser,
    generateAuthToken
}