const Lista = require('../models/Lista');

let listas = [];

const controller = {
    // Areow Function => quando tem so uma linha de codigo nao precisa das chaves nem ; no final 
    recuperarTodas: (req, res) => res.json(listas),
    salvar: (req, res) => {
        const nome = req.body.nome;

        /**
         * Verifica se foi informado
         * o nome da lista
         */
        if (nome) {
            let lista = new Lista(nome);
            listas.push(lista);
            res.status(201).json(lista);
        } else {
            res.status(400).json({ 
                mensagemErro: "Nome da lista não informado"
             });
        }
    }


};




module.exports = controller;