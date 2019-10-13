const passport = require('passport')
const DigestStrategy = require('passport-http').DigestStrategy

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new DigestStrategy({ qop: 'auth' },
  function(userid, password, done) {
    if (userid == "test" && password == "test")
      done(null, user)
    else
      done("Invalid user")
  }
))

module.exports = passport;
