const express = require("express");

const app=express();
//retornando data e hora 
app.use("/data",(req,res) =>{
    let dataAtual= new Date();
    dataAtual=dataAtual.toLocaleDateString();
    res.json(dataAtual);
});

//inversor de String
app.use("/inverter/:string",(req,res) => {
    // recupera a variavel de parametro
   let string = req.params.string;
   //inverte a string
   string=string.split("").reverse().join("");
   res.json(string);
});


//validando cpf
app.use("/cpf/:cpf",(req,res) => {
    let cpf =req.params.cpf;

    // Deixo pra vcs!
    res.send("Validador de CPF");
});





app.listen(3000,
    () => console.log("Servidor iniciado")
    
    );