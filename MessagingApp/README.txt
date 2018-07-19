Express JS : supports Web Applications and APIs
Socket.io : (is Event driven)
    enables real time bi-directional event based communication.
    
Express just allows the client send a request to the server, but the server cannot send request to the client. So Express is not bi-directional. Socket.io solves this, by allowing the Server to send requests to clients.
E.g: with Socket.io, push notification is possible i.e., the clients get updated or informed on happening of any new event at server's end.

Socket.io has 2 components :
1. Client side library that runs on browser
2. Server side library that runs for nodeJS

Serving static content :
    1. app.use() is used to host the static content, i.e., the html created will get served through app.use()
    2. In order to tell express that we will be using static content, use below
        app.use(express.static(__dirname))   // __dirname means passing the entire directory


#  Referred https://getbootstrap.com/ for front end of this app

$() - Shorthand version of "jQuery document ready" event function 
    The document ready function will be called when document finishes loading. This way we can confirm that all the elements on the page are are ready to be used.


GET SERVICE in node, this will allows us to get actual messages from backend to our front end :
    app.get('/messages', (req, res) => {

    })
    param 1 : route
    param 2 : callback, to handle the request. That will take in the request and provides the response.
    
    
jQuery http get request :
    $.get('http://localhost:3000/messages', (data) => {
        console.log(data)
    })  
    param 1 : URL
    param 2 : callback that provides us with data
    
Used Postman to validate POST service endpoint.
 

* Express has no build-in support to parse the body, i.e., when we post a message(from postman or a client) we cannot parse request's body. When we try to work on the request body it returns an UNDEFINED. So, install body-parser package, set it to be used by the app.
 
    var bodyParser = require('body-parser')
    app.use(bodyParser.json())  --> This lets bodyParser know that we are expecting json as our http request
 
 
* What comes in from browser is urlencoded, so we must set our body parser to support that.
    app.use(bodyParser.urlencoded({extended:false}))

** Setting up socket.io is a bit different compared other packages. Socket.io needs to tie in with express. So we need to create a regular HTTP server with node that will then share with express and socket.io.
    var http = require('http').Server(app)
    var io = require('socket.io')(http)  ---> Passing reference with http
The above is setting up socket.io at backend.

We need to set up socket.io at front end as well, i.e., add 
<script scr="/socket.io/socket.io.js"> </script>

After setting up socket.io, we can no more serve our backend with just express we need to use node http server so that both express & socket.io will be running.
    i.e., we need to listen on http instead of app
    
    
var socket = io()  --> Initializing socket.io
This will also make a connection with socket.io server at the same URL that the current page is being hosted on.


We can emit() an event from server to all clients notifying them about the new message that was posted
    io.emit('messageEvent', req.body)   --> 'messageEvent' is the name of the event
We need to listen on the event in the html
    socket.on('messageEvent', actionToBeDone)
    
  
** Install mongoose to access mongoDB in node
