const express = require('express');
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const SamlStrategy = require('passport-saml').Strategy
const api = require('./backend/index')

const app = express();

app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session(
  {
    resave: true,
    saveUninitialized: true,
    secret: 'ayy lmao'
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));


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

app.post('/', (req, res) => {
  // if not authenticated
  res.send("Log in with Google:")
})

app.get('/', function (req, res) {
  if (req.isAuthenticated()) {
    res.send('you are ' + req.user);
  } else {
    res.send('you are no one');
  }
});

app.get('/login',
  passport.authenticate('saml',
    {
      successRedirect: '/',
      failureRedirect: '/login'
    })
);

app.post('/login/callback',
  passport.authenticate('saml',
    {
      failureRedirect: '/',
      failureFlash: true
    }),
  function (req, res) {
    res.redirect('/');
  }
);

app.get('/logout', function (req, res) {
  req.logout();
  // TODO: invalidate session on IP
  res.redirect('/');
});


//app.use(passport.authenticate('saml'))
//app.use("/login", (req, res) => {
  // you are logged in as
//})
//app.use("/api", api)

const next = require('next')
const nextapp = next({ dev })
nextapp.prepare().then(() => {
  app.all('*', nextapp.getRequestHandler())

  app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
