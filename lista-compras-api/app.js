const express = require('express');

// Middlewares 
const logger = require('morgan'); //ele da logs mais detalhados 
const cors = require('cors');
const bodyParser = require('body-parser');// faz o parciamento interpretação do json

const rotasListas = require("./routes/listas");

const app = express();

app.use(logger("dev"));

/**  
 * Ao utilizar a função cors() sem nenhum argumento
*voce estará liberando o acesso a todos os serviços 
*para qualquer outra aplicação que tenha acesso á internet
*/
app.use(cors());


/**
 * Permite que o nosso app Express
 * consiga interpretar dados do frontend
 * em formato JSON 
 */
app.use(bodyParser.json());

/**
 * Registra as rotas relacionadas
 * a listas
 */
app.use(rotasListas);

module.exports = app;