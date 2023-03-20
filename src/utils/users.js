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

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}