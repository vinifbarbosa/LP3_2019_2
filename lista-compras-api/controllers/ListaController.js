/**
 * Este import é um exemplo de 
 * associação por desestruturação
 */
const { Lista } = require("../databases/db");

const controller = {
    // Areow Function => quando tem so uma linha de codigo nao precisa das chaves nem ; no final 
    recuperarTodas: async (req, res) => {
/** Assincrona
 */
        const listas = await Lista.findAll();
        return res.json(listas);

    },

    salvar: (req, res) => {
        const lista = req.body;

            if(!lista.nome) {
                return res
                .status(400)
                .json({mensagem:"Nome não informado"});
            }

        Lista
        .create(lista)
        // erro de validação
        .then(
            listaSalva => res.status(201).json(listaSalva),
            erro => res.status(400).json(erro)      
        )

        //catch apenas exceção
        .catch(erro=> {
            console.log(erro);
            return res
            .status(500)
            .json({mensagem:"Erro ao tentar salvar a lista"});
        });
    }


};


module.exports = controller;