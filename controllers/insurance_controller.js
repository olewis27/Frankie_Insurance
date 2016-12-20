var express = require("express");
var router = express.Router();
var path = require('path');
var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyA9DyjKvYnf3aLlpol8VSDWk1bhTUf6A9c",
    authDomain: "national-insurance-agency.firebaseapp.com",
    databaseURL: "https://national-insurance-agency.firebaseio.com",
    storageBucket: "national-insurance-agency.appspot.com",
    messagingSenderId: "800620644219"
});



router.get('/login', function(req,res) {
    res.sendFile(path.join(__dirname,'../public/login.html'));
});

router.get('/login', function(req,res) {
    res.sendFile(path.join(__dirname,'../public/login.html'));
});

router.post('/admin', function(req,res) {
    res.sendFile(path.join(__dirname,'../public/admin.html'));
});






module.exports = router;
