'use Strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    name: String,
    designation: String,
    age: Number,
    email: String
}, { collection: 'employee' });


module.exports = mongoose.model("Employee", EmployeeSchema);