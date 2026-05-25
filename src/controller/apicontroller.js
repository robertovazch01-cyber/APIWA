const verificar = (req, res) => {

    try {

        var tokenRV = "RVNODEJSMETA";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        console.log("GET WEBHOOK");
        console.log(req.query);

        if (challenge != null && token != null && token == tokenRV) {

            res.send(challenge);

        } else {

            res.sendStatus(400);

        }

    } catch (e) {

        console.log(e);
        res.sendStatus(400);

    }

}

const recibir = (req, res) => {

    try {

        console.log("POST DE META");
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

