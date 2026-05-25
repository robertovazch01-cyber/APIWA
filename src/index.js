const express = require('express');

const apiruta = require('./routes/ruta');

const app = express();

const port = process.env.PORT || 3000;


// IMPORTANTE PARA META WEBHOOK
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));


// RUTAS
app.use('/api', apiruta);


// SERVIDOR
app.listen(port, () => {

    console.log('Servidor corriendo en puerto: ' + port);

});