const verificar = (req, res) => {

    try {

        console.log("ENTRO A VERIFICAR");

        const tokenRV = "RVNODEJSMETA";
        const token = req.query["hub.verify_token"];
        const challenge = req.query["hub.challenge"];

        console.log(req.query);

        if (challenge != null && token != null && token == tokenRV) {

            console.log("TOKEN CORRECTO");

            return res.send(challenge);

        } else {

            console.log("TOKEN INCORRECTO");

            return res.status(400).send();

        }

    } catch (e) {

        console.log("ERROR:", e);

        return res.status(400).send();

    }

}