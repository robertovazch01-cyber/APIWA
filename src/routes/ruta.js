const express = require('express');
const router = express.Router();
const apicontroller = require('../controller/apicontroller');

router.get('/RV', apicontroller.verificar);
router.post('/RV', apicontroller.recibir);

module.exports = router;  