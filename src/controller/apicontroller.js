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


}

const recibir = (req, res) => {

    try {

        console.log("META ENVIO:");
        console.log(JSON.stringify(req.body, null, 2));

        res.sendStatus(200);

    } catch (e) {

        console.log(e);

        res.sendStatus(200);

    }

}

module.exports = {
    verificar,
    recibir
}