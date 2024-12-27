const { Router } = require('express');
const router = Router();
const cors = require('cors');
const BibliaController = require('../controllers/biblia.controller');

router.get(
    '/biblia/book',
    cors({
        origins: '*',
        methods: ['GET'],
    }),
    BibliaController.getVersiculo
);

module.exports = router;