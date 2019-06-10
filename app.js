require('dotenv').config()

var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coldRouter = require('./routes/cold')
var mildRouter = require('./routes/mild')
var hotRouter = require('./routes/hot')

var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cold', coldRouter)
app.use('/mild', mildRouter)
app.use('/hot', hotRouter)

module.exports = app;
