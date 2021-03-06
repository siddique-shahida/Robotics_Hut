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

//Initializing new routers...
let accountsRouter = require('./routes/main_router');
app.use('/', accountsRouter);
let studentRouter = require('./routes/student_router');
app.use('/student', studentRouter);

//Print on Console...
app.listen(8080, function () {
    console.log("App listening on Port 8080!")
})