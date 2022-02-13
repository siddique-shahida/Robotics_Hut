//Importing Libraries...
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Making a new Database with two tables...
let Database = require('./db/database');
Database.connect();

//Accessing forms with our bodyparser for our post APIs...
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

//Creating an HTTP Server and binding it with the web application.
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use((req, res, next) => {
    req.io = io;
    return next();
});


//Implementing our sockets in our student Router

//Broadcasting our chat message to other clients from the FAQ Page...
io.on('connection', (socket) => {
    console.log("Chat Feature Working...");

    socket.on('chat:msg', (msg) => {
        console.log(msg);
        socket.broadcast.emit('chat:broadcast', msg);
    });
});

//Initializing new routers...
let accountsRouter = require('./routes/main_router');
app.use('/', accountsRouter);
let studentRouter = require('./routes/student_router');
app.use('/student', studentRouter);

//Print on Console...
app.listen(8080, function () {
    console.log("App listening on Port 8080!")
})