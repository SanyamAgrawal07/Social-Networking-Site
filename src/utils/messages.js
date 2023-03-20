function generateMessage(text){
    const d = new Date()
    return {
        text,
        createdAt: d.getTime()
    }
}

function generateLocationMessage(url){
    const d = new Date()
    return {
        url,
        createdAt: d.getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}