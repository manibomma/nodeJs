var express = require('express')

var app = express()

app.use(express.static(__dirname))

app.get('/messages', (req, res) => {
    res.send('hello')
})

var server = app.listen(3000, () => {
    console.log('Listening to port ', server.address().port)
})