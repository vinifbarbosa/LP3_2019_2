//importar dependencia
const http = require("http");

//define local do servidor
const hostname = "127.0.0.1";

//define porta do servidor
const port = 3000;


//criando servidor
const server = http.createServer(
    //configurar servidor
   
     (req,res) => { //função JS 
         res.statusCode = 200; // 200 significa ok
         res.setHeader("Content-Type","text/plain");
         res.end("Sinto falta da floresta!") 

    }
   
);
//iniciando o serviço
server.listen(port,hostname,
    () => console.log("Servidor iniciado")
    );

