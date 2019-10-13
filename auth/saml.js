const passport = require('passport')
const SamlStrategy = require('passport-saml').Strategy

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new SamlStrategy(
  {
    path: '/login/callback',
    entryPoint: 'https://accounts.google.com/o/saml2/idp?idpid=C049m7qgz',
    issuer: 'https://hub.waterloop.ca/saml/sp',
    cert: 'GoogleIDPCertificate-waterloop.ca.pem'
  },
  function (profile, done) {
    return done(null,
      {
        id: profile.uid,
        email: profile.email,
        displayName: profile.cn,
        firstName: profile.givenName,
        lastName: profile.sn
      });
  })
);

module.exports = passport;
