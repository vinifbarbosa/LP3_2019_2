const express = require("express");
const ListaController = require("../controllers/ListaController");

/**
 * Cria o roteador dos web services
 * relacionados a Lista. Por meio do
 * roteador será possível definir os 
 * nossos web services.
 */
const router = express.Router();

/**
 * Rota para o serviço: /listas
 * Verbo HTTP:GET
 */
router.get("/",ListaController.recuperarTodas);

/**
 * Rota para o servico: /listas
 * Verbo Http:Post
 */

 router.post("/",ListaController.salvar);

module.exports = router;