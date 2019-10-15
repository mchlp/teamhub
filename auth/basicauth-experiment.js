var express = require('express');
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;

// Configure the Basic strategy for use by Passport.
//
// The Basic strategy requires a `verify` function which receives the
// credentials (`username` and `password`) contained in the request.  The
// function must verify that the password is correct and then invoke `cb` with
// a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new Strategy(
  function(username, password, done) {
    if (username == "test" && password == "test")
      done(null, username)
    else
      done(null, false)
  }));


// Create a new Express application.
var app = express();
app.use(passport.initialize())

app.get('/',
  passport.authenticate('basic'),
  function(req, res) {
    res.json(req.user);
  });

app.get('/login',
  passport.authenticate('basic'),
  function(req, res) {
    res.json(req.user);
  });

app.get('/logout',
  passport.authenticate('basic'),
  function(req, res) {
    res.json(req.user);
  });

app.listen(3000);
