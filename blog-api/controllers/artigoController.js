const Artigo = require('../models/Artigo');


const controller = {

   recuperaArtigos: async(req, res) => {
      const artigos = await Artigo.find();
      return res.json(artigos);

   },

    salvar: (req, res) => {
       const { titulo } = req.body;
       const { texto } = req.body;

       if(titulo && texto){  
          const artigo = req.body;
          Artigo
          .create(artigo)
          .then(listaSalva => res.status(201).json(listaSalva))
          .catch(erro =>{
             console.log(erro);
             res.status(500).json({mensagem:'Erro ao tentar salvar Artigo'})
          });

       }else{
         return res.status(400).json({ mensagem:'Titulo ou Texto não Informado' });
       }
    },

    atualizar: (req, res) =>{
        const { id } = req.params;
        const artigo = req.body;

        Artigo
        .findByIdAndUpdate(id, artigo)
        .exec()
        .then(artigoAtualizado => {

          
           if(artigoAtualizado){
              res.json({mensagem: "Artigo Atualizado"})
           }else{
              res.status(404).json({ mensagem: "Artigo não encontrado"})
           }
        }) 
        .catch(erro =>{
           console.log(erro);
           res.status(500).json({mensagem: 'Erro ao tentar atualizar o Artigo'})
        }); 
   },
   remover: (req, res) => {
    const { id } = req.params;

    Artigo
    .findByIdAndRemove( id )
    .exec()
    .then( 
      () => res.status(204).end(),
      erro => {
         console.log(erro)
      }
      )
    .catch(erro => {
       console.log(erro);
       res.status(500).json({mensagem: 'Erro ao tentar remover o artigo'})
    });

 }


};

module.exports = controller;