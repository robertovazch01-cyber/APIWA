const verificar = (req, res) => {
    res.send('Verificado');
    console.log('Verificado en consola');
}

const recibir = (req, res) => {
    res.send('Recibido');
    console.log('Recibido en consola');
}

module.exports = {
    verificar, recibir
}