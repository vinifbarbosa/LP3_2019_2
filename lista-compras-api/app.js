const express = require('express');
const logger = require('morgan'); //ele da logs mais detalhados 
const cors = require('cors');
const bodyParser = require('body-parser');

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

module.exports = app;