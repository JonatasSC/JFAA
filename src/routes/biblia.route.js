const { Router } = require('express');
const router = Router();
const cors = require('cors');
const BibliaController = require('../controllers/biblia.controller');

router.get(
    '/jfaa/biblia/versiculo/aleatorio',
    cors({
        origins: '*',
        methods: ['GET'],
    }),
    BibliaController.getVersiculoAleatorio
);

router.get(
    '/jfaa/biblia/versiculo/aleatorio/first-testament',
    cors({
        origins: '*',
        methods: ['GET'],
    }),
    BibliaController.getVersiculoAleatorioFirstTestament
);

router.get(
    '/jfaa/biblia/versiculo/aleatorio/second-testament',
    cors({
        origins: '*',
        methods: ['GET'],
    }),
    BibliaController.getVersiculoAleatorioSecondTestament
);

module.exports = router;