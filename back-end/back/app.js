var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');  //KAtsotaan tarviiko
var logger = require('morgan');               //KAtsotaan tarviiko
var cors = require('cors')
const testRouter = require("./routes/testRouter")   //TEST
const mysql = require('mysql')    //Miksi tätä ei ollut aiemmin : D:D: 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dataRouter = require('./routes/data');
var app = express();

let PORT = process.env.PORT || 3001;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/data', dataRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter)      //TEST

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "12345"
})

console.log('db pool created')

db.connect(function(err) {
  if(err) throw err
  console.log("db connected!")
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log("Server running on port 3001");
});

module.exports = app;
