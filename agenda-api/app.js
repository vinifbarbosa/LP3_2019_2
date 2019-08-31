const express = require('express');


const logger = require('morgan'); 
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasContatos= require("./routes/contato");

const app = express();

app.use(logger("dev"));


app.use(cors());



app.use(bodyParser.json());


app.use('/contato', rotasContatos);

module.exports = app;