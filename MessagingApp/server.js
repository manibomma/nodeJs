var express = require('express')

var app = express()
var messages = [
    {name:"Cherry", message:"Hi Mamayya"},
    {name:"Ramii", message:"Hello dallng"}
]

app.use(express.static(__dirname))

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})

var server = app.listen(3000, () => {
    console.log('Listening to port ', server.address().port)
})