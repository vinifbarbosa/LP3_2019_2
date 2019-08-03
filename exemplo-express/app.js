//importar express
const express = require("express");

// Constante que controla nosso app
const app = express();

//o que fazer quando ir pra raiz
app.use("/",
(req,res) => res.send("Eu sinto falta da floresta")

);

app.listen(3000, 
    
    () => console.log("Servidor Iniciado")
    );