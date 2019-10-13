const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

if (dev) {
  var passport = require('./auth/local')
  var passportMethod = 'digest'
} else {
  var passport = require('/auth/saml')
  var passportMethod = 'saml'
}

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

app.get('/', function (req, res) {
  if (req.isAuthenticated()) {
    res.send('you are ' + req.user);
  } else {
    res.send('you are no one');
  }
});

app.get('/login',
  passport.authenticate(passportMethod,
    {
      successRedirect: '/api/members/info',
      failureRedirect: '/',
      session: false
    })
);

app.post('/login/callback',
  passport.authenticate(passportMethod,
    {
      failureRedirect: '/',
      failureFlash: true,
      session: false
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


//app.use(passport.authenticate(passportMethod))
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
