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
app.use('/cpf/:cpf', (req, res) => { 
    let cpf = req.params.cpf;
    let soma = 0;
    let mod;
    soma = 0;
    //cpf com valores iguais 
  if (cpf == "00000000000") res.send(false);

  for (i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  mod = (soma * 10) % 11;
   
    if ((mod == 10) || (mod == 11))  mod = 0;
    if (mod != parseInt(cpf.substring(9, 10)) ) res.send(false);
   
    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    mod = (soma * 10) % 11;
   
    if ((mod == 10) || (mod == 11))  mod = 0;
    if (mod != parseInt(cpf.substring(10, 11) ) ) res.send(false);
    res.send(true);
});





app.listen(3000,
    () => console.log("Servidor iniciado")
    
    );