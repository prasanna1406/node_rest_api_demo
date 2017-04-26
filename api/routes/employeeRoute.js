'use strict';

module.exports = function(app) {
    var employeeCtrl = require('../controllers/employeeController');

    // todoList Routes
    app.route('/employees')
        .get(employeeCtrl.fetchAllEmployee)
        .post(employeeCtrl.createEmployee)
        .delete(employeeCtrl.deleteAllEmployee);
};