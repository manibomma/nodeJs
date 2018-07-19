var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)  // pass in reference to http
var bodyparser = require('body-parser')
var mongoose = require('mongoose')

var dbURL = 'mongodb://maniuser123:maniuser123@ds143971.mlab.com:43971/manidb'

var Message = mongoose.model('Message', {
    name: String,
    message: String
})

var messages = [
    {name:"Cherry", message:"Hi Mamayya"},
    {name:"Ramii", message:"Hello dallng"}
]

app.use(express.static(__dirname))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
    var message = new Message(req.body)
    message.save((err) => {
        if(err)
            sendStatus(500)
    })
    messages.push(req.body)
    io.emit('messageEvent', req.body)
    res.sendStatus(200)
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

mongoose.connect(dbURL, {useNewUrlParser : true},(err) => {
    console.log('mongo db connection ', err)
})

var server = http.listen(3000, () => {
    console.log('Listening to port ', server.address().port)
})