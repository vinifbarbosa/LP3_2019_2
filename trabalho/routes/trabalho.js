const express = require('express');
const listaCtrl = require('../controllers/ListaController');
const router = express.Router();


router.get('/feciaq', listaCtrl.recuperarTodas);
router.post('/feciaq', listaCtrl.salvar);
router.get('/feciaq', listaCtrl.recuperarItensPorDescricao);

module.exports = router;
