const express = require("express");
const ContatoController = require("../controllers/ContatoController");


const router = express.Router();


router.get("/",ContatoController.recuperarTodas);



 router.post("/",ContatoController.salvar);

module.exports = router;