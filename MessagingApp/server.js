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

app.use(express.static(__dirname))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
})

app.post('/messages', async (req, res) => {
    try {
        var message = new Message(req.body)
        var savedMessage = await message.save()       
        console.log('saved')
        var censored = await Message.findOne({message: 'badword'})
        if(censored){
            await Message.remove({_id:censored.id})
        } else {
            io.emit('messageEvent', req.body)
        }
            
        res.sendStatus(200)
    } catch(error) {
        res.sendStatus(500)
        return console.error(error)
    }
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