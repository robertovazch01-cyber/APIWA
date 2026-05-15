const express = require('express');

const apiruta = require('./routes/ruta');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', apiruta);

app.listen (port, () => {
   console.log('Hello RV! estas en el puerto: ' + port );
})
