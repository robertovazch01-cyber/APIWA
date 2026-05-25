const verificar = (req, res) => {

    try {

        console.log("META VERIFICANDO WEBHOOK");
        console.log(req.query);

        var tokenRV = "RVNODEJSMETA";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token == tokenRV) {

            console.log("TOKEN CORRECTO");
            console.log("CHALLENGE:", challenge);

            res.send(challenge);

        } else {

            console.log("TOKEN INCORRECTO");

            res.sendStatus(400);

        }

    } catch (e) {

        console.log("ERROR:");
        console.log(e);

        res.sendStatus(400);

    }

const recibir = (req, res) => {

    console.log("POST RECIBIDO DESDE META");

    res.sendStatus(200);

}


}

module.exports = {
    verificar,
    recibir
}