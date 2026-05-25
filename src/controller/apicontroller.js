const verificar = (req, res) => {

    try {
        var tokenRV = "RVNODEJSMETA" ;
        var token = req.query ["hub.verify_token"];
        var challenge = req.query ["hub.challenge"];

       

        if (challenge != null && token != null && token == tokenRV) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }


        console.log(req.body);
       
    }catch (e) {

       console.log(e);
        res.status(400).send();
    }
 
}

const recibir = (req, res) => {
    console.log(req.body);
    res.send('EVENT_RECIEVED');
}

module.exports = {
    verificar, recibir
}