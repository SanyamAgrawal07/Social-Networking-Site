// const {io} = require('socket.io-client')
// console.log(window.location)

const $submitButton = document.querySelector('#submitButton')
const $sendLocationButton = document.querySelector('#sendLocation')
const $messages = document.querySelector('#messages')
const $sidebar = document.querySelector('#sidebar')

const $messageTemplate = document.querySelector('#message-template').innerHTML
const $locationMessageTemplate = document.querySelector('#location-message-template').innerHTML
const $sidebarTemplate = document.querySelector('#sidebar-template').innerHTML

const { username , room } = Qs.parse(location.search,{
    ignoreQueryPrefix: true
})

const socket = io()

socket.on('roomData',({room,users})=>{
    console.log(users)
    const html = Mustache.render($sidebarTemplate,{
        room,
        users
    })
    $sidebar.innerHTML = html
})

socket.on('Message',({message,username})=>{
    console.log(message)
    const html = Mustache.render($messageTemplate,{
        message: message.text,
        username,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('locationMessage',({message,username})=>{
    const html = Mustache.render($locationMessageTemplate,{
        url: message.url,
        createdAt: moment(message.createdAt).format('h:mm a'),
        username
    })
    $messages.insertAdjacentHTML('beforeend', html)
})

$submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    $submitButton.disabled=true
    let $inputMessage = document.querySelector('#message')
    socket.emit('sendMessage',$inputMessage.value,{
        username,
        room
    },(error)=>{
        $inputMessage.value=''
        $inputMessage.focus()
        $submitButton.disabled=false
        if(error){
            console.log(error)
            return
        }
        console.log('Message Delivered')
    })
})

$sendLocationButton.addEventListener('click',()=>{
    if(!navigator.geolocation){
        alert('Feature not supported in your browser')
        return
    }
    $sendLocationButton.disabled=true
    navigator.geolocation.getCurrentPosition((position)=>{
        socket.emit('sendLocation',position.coords.latitude,position.coords.longitude,()=>{
            console.log('Location Sent')
            $sendLocationButton.disabled=false
        })
    })
})

socket.emit('join', { username, room })