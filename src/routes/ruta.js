const express = require('express');

const router = express.Router();

const apicontroller = require('../controller/apicontroller');


// VERIFICAR WEBHOOK META
router.get('/RV', apicontroller.verificar);


// RECIBIR MENSAJES DE META
router.post('/RV', apicontroller.recibir);


module.exports = router;