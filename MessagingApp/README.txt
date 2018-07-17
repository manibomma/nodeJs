Express JS : supports Web Applications and APIs
Socket.io : (is Event driven)
    enables real time bi-directional event based communication.
    
Express just allows the client send a request to the server, but the server cannot send request to the client. So Express is not bi-directional. Socket.io solves this, by allowing the Server to send requests to clients.
E.g: with Socket.io, push notification is possible i.e., the clients get updated or informed on happening of any new event at server's end.

Socket.io has 2 components :
1. Client side library that runs on browser
2. Server side library that runs for nodeJS
