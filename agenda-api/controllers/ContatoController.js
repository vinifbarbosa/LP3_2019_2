const contatos = require('../models/Contatos');

let contato = [];

const controller = {
   
    recuperarTodas: (req, res) => res.json(contatos),
    salvar: (req, res) => {
        const nome = req.body.nome;

       
        if (nome) {
            let Contatos= new Contatos(nome);
            contato.push(Contatos);
            res.status(201).json(Contatos);
        } else {
            res.status(400).json({ 
                mensagemErro: "Nenhum contato cadastrado"
             });
        }
    }


};




module.exports = controller;