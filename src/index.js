const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const path = require('path')
const { generateMessage,generateLocationMessage } = require('./utils/messages')
const { addUser,removeUser,getUser,getUsersInRoom } = require('./utils/users')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const port = 3000

const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New Connection!')

    socket.on('join',({ username,room })=>{
        const user = addUser({
            username,
            room,
            id: socket.id
        })
        socket.join(user.room)

        socket.emit('Message',{message: generateMessage('Welcome!'),username:''})
        socket.broadcast.to(user.room).emit('Message',{
            message: generateMessage(`${user.username} has joined`),
            username:''
        })
        
        io.to(user.room).emit('roomData',{
            room: user.room,
            users: getUsersInRoom(user.room)
        })
    })

    socket.on('sendMessage',(message,user,callback)=>{
        const userm = getUser(socket.id)
        io.to(userm.room).emit('Message',{ message:generateMessage(message),username:userm.username })
        // console.log(callback)
        callback()
    })

    socket.on('sendLocation',(latitude,longitude,callback)=>{
        const userm = getUser(socket.id)
        io.to(userm.room).emit('locationMessage',{
            message: generateLocationMessage(`https://google.com/maps?q=${latitude},${longitude}`),
            username: userm.username
        })
        callback();
    })

    socket.on('disconnect',()=>{
        const user = removeUser(socket.id)
        if(user){
            io.to(user.room).emit('Message',{
                message: generateMessage(`${user.username} has left`),
                username:''
            })
            io.to(user.room).emit('roomData',{
                room: user.room,
                users: getUsersInRoom(user.room)
            })
        }
    })
})

server.listen(port , ()=>{
    console.log('Port is live on'+port)
})