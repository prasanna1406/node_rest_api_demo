var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

var BasicStrategy = require('passport-http').BasicStrategy;
//var TokenStrategy = require('passport-http-oauth').TokenStrategy;
//var BearerStrategy = require('passport-http-bearer').Strategy;
module.exports = function(passport) {

    passport.use('basic', new BasicStrategy(
        function(username, password, done) {
            console.log(username);
            Employee.findOne({ 'email': username }, function(err, user) {
                console.log(user);
                if (err) { return done(err); }
                if (!user) { return done(null, false); }

                if (!(user.password === password.toString())) {
                    return done(null, false);
                }
                return done(null, user);
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        console.log("in serializeUser : " + user.id);
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        console.log("\n\ndeserializeUser\n\n");
        User.getUserById(id, function(err, user) {
            done(err, user);
        });
    });


}