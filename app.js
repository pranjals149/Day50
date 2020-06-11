const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

const port = process.env.PORT || 3000;

app.use(session({
	secret:'happy dog',
	saveUninitialized: true,
	resave: true
}));

app.use(flash());

app.get('/', (req, res) => {
  req.flash('message', 'Success!!');
  res.redirect('/contact');
});

app.get('/contact', (req, res) => {
  res.send(req.flash('message')); 
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log('Server is up and listening on', port);
});