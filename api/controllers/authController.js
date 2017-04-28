const passport = require("passport");
require('../config/passport')(passport);


exports.isAuthenticated = passport.authenticate('basic', { session: false });