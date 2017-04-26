'use strict';

var mongoose = require('mongoose'),
    Employee = mongoose.model('Employee');



exports.fetchAllEmployee = function(req, res) {
    Employee.find({}, function(err, emplyees) {
        if (err) {
            res.send(err);
        }
        res.json(emplyees);
    });
};


exports.createEmployee = function(req, res) {
    console.log("body " + JSON.stringify(req.body));
    var newEmployee = new Employee(req.body);
    newEmployee.save(function(err, employee) {
        console.log(err);
        if (err) {
            res.status(400);
            res.send(err);
        }
        res.json(employee);
    });
};

exports.deleteAllEmployee = function(req, res) {
    Employee.find().remove(function(err, removedCount) {
        if (err)
            res.send(err);
        res.json(removedCount);
    });
}