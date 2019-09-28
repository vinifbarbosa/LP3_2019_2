const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const rotasListas = require('./routes/trabalho');
const app = express();

app.use(logger('dev'));

app.use(cors());

app.use(bodyParser.json());

app.use('/feciaq', rotasListas);

module.exports = app;
