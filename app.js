require('dotenv').config({path:"/config/.env"});
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const models = require("./models/index.js");

var indexRouter = require('./routes/index');
var testRouter = require('./routes/test.router.js');
var usersRouter = require('./routes/users.router.js');
var boardsRouter = require('./routes/boards.router.js');

var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
const cors = require('cors');

var app = express();

// setting for database
models.sequelize.sync().then( () => {
  console.log(" DB 연결 성공");
}).catch(err => {
  console.log("연결 실패");
  console.log(err);
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("secret_value")); // Set cookie secret value as envionment
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:"secret_value",
  resave:false,
  saveUninitialized:true,
  store:new FileStore(),
  cookie:{
    maxAge:1000
  }
}));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials:true 
}));

// setting for swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/books",
      },
    ],
  },
  apis: ["./routes/books.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/users', usersRouter);
app.use('/boards', boardsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
