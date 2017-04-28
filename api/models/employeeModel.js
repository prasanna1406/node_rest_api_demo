'use Strict'

var mongoose = require("mongoose");


var Schema = mongoose.Schema;

//var ObjectId = Schema.ObjectId;

var EmployeeSchema = new Schema({
    name: { type: String },
    designation: { type: String },
    age: { type: Number },
    email: { type: String },
    password: { type: String },
}, { collection: 'employee' });


module.exports = mongoose.model("Employee", EmployeeSchema);