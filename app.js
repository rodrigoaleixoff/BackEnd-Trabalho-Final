var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usuarioRouter = require('./controls/UsuarioAPI')
var installRouter = require("./controls/InstallAPI")
var cardapioRouter = require('./controls/CardapioAPI')
var produtoRouter = require('./controls/ProdutosAPI')
var docsRouter = require('./controls/Docs')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/usuario', usuarioRouter)
app.use('/cardapio', cardapioRouter)
app.use('/produto', produtoRouter)
app.use('/install', installRouter)
app.use('/docs', docsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
