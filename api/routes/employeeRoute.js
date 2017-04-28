'use strict';

const passport = require("passport");
require('../config/passport')(passport);

var employeeCtrl = require('../controllers/employeeController');
var authCtrl = require('../controllers/authController');

module.exports = function(app) {

    // Routes
    app.route('/employees')
        .get(authCtrl.isAuthenticated, employeeCtrl.fetchAllEmployee)
        .post(authCtrl.isAuthenticated, employeeCtrl.createEmployee)
        .delete(authCtrl.isAuthenticated, employeeCtrl.deleteAllEmployee);

    app.route('/employees/:empId')
        .get(authCtrl.isAuthenticated, employeeCtrl.fetchEmployee)
        .put(authCtrl.isAuthenticated, employeeCtrl.updateEmployee)
        .delete(authCtrl.isAuthenticated, employeeCtrl.deleteEmployee);


    /**
     * used for check username and password
     */
    app.get('/auth/basic',
        passport.authenticate('basic', { session: false }),
        function(req, res) {
            res.json(req.user);
        });



    // app.get('/auth/oauth1',
    //     passport.authenticate('token', { session: false }),
    //     function(req, res) {
    //         res.json(req.user);
    //     });

    // app.get('/auth/oauth2',
    //     passport.authenticate('bearer', { session: false }),
    //     function(req, res) {
    //         res.json(req.user);
    //     });
};