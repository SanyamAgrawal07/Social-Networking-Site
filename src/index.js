const express = require('express')
// const graphql = require('graphql')
// const {graphqlHTTP} = require('express-graphql')
// const { ApolloServer } = require('apollo-server-express')
const socketio = require('socket.io')
const http = require('http')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const { generateMessage,generateLocationMessage } = require('./utils/messages')
const { addUser,removeUser,getUser,getUsersInRoom } = require('./utils/users')
// const neoSchema = require('./neo4j/schema.js')
const ogm = require('./neo4j/schema.js')

// const QueryRoot = new graphql.GraphQLObjectType({
//     name: 'Query',
//     fields: () => ({
//       hello: {
//         type: graphql.GraphQLString,
//         resolve: () => "Hello world!"
//       }
//     })
// })

// const schema = new graphql.GraphQLSchema({ query: QueryRoot });

const app = express()
const authRouter = require('./routes/auth.routes.js')
const userRouter = require('./routes/user.routes.js')
const server = http.createServer(app)
const io = socketio(server)
const port = 3000

const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))
app.use(cors())
app.use(bodyParser.json())
app.use(authRouter)
app.use(userRouter)

// app.use('/api', graphqlHTTP({
//     schema: schema,
//     graphiql: true,
// }));
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

// console.log(neoSchema)
// neoSchema.getSchema((schema)=>{
//     const graphqlServer = new ApolloServer({schema})
//     graphqlServer.applyMiddleware({app})
//     server.listen(port , ()=>{
//         console.log('Port is live on '+port)
//         console.log(`Server is live on ${port}${graphqlServer.graphqlPath}`)
//     })
// })
// let graphqlServer

ogm.init()
.then(()=>{
    server.listen(port , ()=>{
        console.log('Port is live on '+port)
    
        // const schema = await neoSchema.getSchema()
        // graphqlServer = new ApolloServer({schema})
        // await graphqlServer.start()
        // graphqlServer.applyMiddleware({app})
        // console.log(`Server is live on ${port}${graphqlServer.graphqlPath}`)
        // .then((schema)=>{
        //     graphqlServer = new ApolloServer({schema})
        //     graphqlServer.applyMiddleware({app})
        //     console.log(`Server is live on ${port}${graphqlServer.graphqlPath}`)
        // })
    })
})

// neoSchema.getSchema((schema)=>{
//     const server = new ApolloServer({
//         schema,
//     })
//     // app.use('/graphql', bodyParser.json(), graphqlExpress({
//     //     schema,
//     //     context: {},
//     // }));
      
//     // app.use('/graphiql', graphiqlExpress({
//     //     endpointURL: '/graphql'
//     // }));
// })



// server.listen(port , ()=>{
//     console.log('Port is live on '+port)
//     console.log(`Server is live on ${port}${graphqlServer.graphqlPath}`)
// })

// const queryParams = {
//     client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
//     redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URI,
//     scope: [
//       'https://www.googleapis.com/auth/userinfo.email',
//       'https://www.googleapis.com/auth/userinfo.profile',
//     ].join(' '),
//     response_type: 'code',
//     access_type: 'offline',
//     prompt: 'consent',
// }

// const urlString = url.format({
//     pathname: 'https://accounts.google.com/o/oauth2/v2/auth',
//     query: queryParams
// })

// console.log(urlString)