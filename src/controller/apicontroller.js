const verificar = (req, res) => {

    try {

        const tokenRV = "RVNODEJSMETA";
        const token = req.query["hub.verify_token"];
        const challenge = req.query["hub.challenge"];

        console.log("GET WEBHOOK");

        if (token === tokenRV) {
            return res.status(200).send(challenge);
        }

        return res.sendStatus(403);

    } catch (e) {

        console.log(e);
        return res.sendStatus(500);

    }

}

const recibir = (req, res) => {

    try {

        console.log("POST REAL DE META");
        console.log(JSON.stringify(req.body, null, 2));

        return res.sendStatus(200);

    } catch (e) {

        console.log(e);
        return res.sendStatus(500);

    }

}

module.exports = {
    verificar,
    recibir
}