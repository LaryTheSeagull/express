// reference for the developer bootcamp course

// libraries
const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

// set view engine
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// home route
app.get('/', (req, res) => {
    res.render('home');
});

// login route
app.get('/login', (req, res) => {
    res.render('login');
});

// login logic
app.post('/login', (req, res) => {
    res.redirect('/');
});

// error 404
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
});

// error 500
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

// open port 3000 for requests
app.listen(3000, () => {
    console.log('app listening on port 3000');
});