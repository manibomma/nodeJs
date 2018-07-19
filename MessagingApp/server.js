var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)  // pass in reference to http
var bodyparser = require('body-parser')

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
    messages.push(req.body)
    io.emit('messageEvent', req.body)
    res.sendStatus(200)
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

var server = http.listen(3000, () => {
    console.log('Listening to port ', server.address().port)
})