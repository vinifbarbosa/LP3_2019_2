/**
 * Este import é um exemplo de 
 * associação por desestruturação
 */
const { Lista } = require("../models/Lista");

const controller = {
    // Areow Function => quando tem so uma linha de codigo nao precisa das chaves nem ; no final 
    
    salvar: (req, res) => {
        const { nome } = req.body;  
        if(nome) {
            const lista= req.body;
            Lista.create(lista)
            .then(listaSalva => 
                res.status(201).json(listaSalva))
            .catch(erro =>{
                console.log(erro);
                res.status(500).json({
                    mensagem:"Erro ao tentar aslavar a lsita"
                });
            });

        } else {
            return res.status(400).json({
                mensagem:"Nome não informado"
            });

        }


            }
        };


module.exports = controller;