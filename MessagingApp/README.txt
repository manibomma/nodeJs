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
 
 Express has no build-in support to parse the body, 
