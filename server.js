var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router()

//tells not to create express server
var app = express();

// sets initial port
var PORT = process.env.PORT || 8080;

var routes = require('./controllers/insurance_controller.js');

app.use('/', routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use('/', express.static(__dirname + '/public'));

// this sets folder where views will live
// app.set('views', path.join(__dirname, 'views'));

// LISTENER
app.listen(PORT, function() {
    console.log("The server is listening: " + PORT);
});
