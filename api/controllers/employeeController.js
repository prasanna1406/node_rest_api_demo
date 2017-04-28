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

exports.fetchEmployee = function(req, res) {
    let empId = req.params.empId;
    console.log(empId);
    Employee.findOne({ '_id': empId }, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
}

exports.updateEmployee = function(req, res) {
    let empId = req.params.empId;
    Employee.findOneAndUpdate({ '_id': empId }, req.body, function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
}

exports.deleteEmployee = function(req, res) {
    let empId = req.params.empId;
    Employee.findOneAndRemove({ '_id': empId }, function(err, responseDoc) {
        if (err)
            res.send(err);
        res.json(responseDoc);
    })
}