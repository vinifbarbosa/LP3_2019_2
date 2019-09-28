

const {Op} = require('sequelize');
const { trabalho, Item } = require('../databases/db');

const controller = {
   
    recuperarTodas: async(req, res) =>  {
      
      const trabalhoo = await trabalho.findAll();
      return res.json(trabalhoo);
    },
    salvar: (req, res) => {
      const trabalho = req.body;

      if(!trabalho.nome){
         return res.status(400).json({mensagem: 'Campo não informado'})
      }
      trabalho
      .create(trabalho)
      .then(
         trabalhoSalva => res.status(201).json(trabalhoSalva), 
         erro => res.status(400).json(erro)

      )
      .catch(
         erro => {console.log(erro);
          res.status(500).json({mensagem: 'Erro ao tentar submeter o trabalho'})
         }
      );
    },

    recuperarItensPorDescricao: async (req,res) => {
       //const consulta = req.body.consulta;
       const {consulta} = req.body;

       //por enquanto realizamos a consulta exata
      let itens = await Item.findAll({
         where:{
            area: {
               [Op.iLike]: `%${consulta}%`
            }
         }
      });
      return res.json(itens)
    }

};

module.exports = controller;
