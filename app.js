const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 3000;

//native promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/employeedb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Employee = require('./api/models/employeeModel');

var routes = require('./api/routes/employeeRoute');
routes(app);


app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});



app.listen(port);
console.log('employee RESTful API server started on: ' + port);