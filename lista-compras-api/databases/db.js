const mongoose = require("mongoose");

//por padrao nao coloca porta,pois na instalação normal,usará a porta padrao
const dbURI="mongodb://localhost/lista-compras-dev";


mongoose.connect(
dbURI,{useNewUrlParser: true})
.then(() => console.log("Mongoose conectado"))
.catch(erro => console.log(erro));