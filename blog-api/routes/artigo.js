const express = require('express');
const controller = require('../controllers/artigoController');
const router = express.Router();


router.get('/', controller.recuperaArtigos);
router.post('/',controller.salvar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.remover);

module.exports = router;