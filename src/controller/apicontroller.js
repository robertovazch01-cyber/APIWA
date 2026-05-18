const verificar = (req, res) => {

    try {
        var tokenRV = "RVNODEJSMETA" ;
        var token = req.query ["hub.verify_token"];
        var challenge = req.query ["hub.challenge"];

        if (challenge != null && token != null && token === tokenRV) {
            re.send (challenge);
        } else {
            res.status(400).send();
        }

        req.send (challenge);

        console.log(req);
       
    }catch (e) {
       
        res.status(400).send();
    }
 
}

const recibir = (req, res) => {
    res.send('Recibido');
    console.log('Recibido en consola');
}

module.exports = {
    verificar, recibir
}