const verificar = (req, res) => {

    console.log("GET DE META");

    const tokenRV = "RVNODEJSMETA";
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (token === tokenRV) {
        return res.status(200).send(challenge);
    }

    return res.sendStatus(403);

}

const recibir = (req, res) => {

    console.log("POST RECIBIDO");
    console.log("HEADERS:");
    console.log(req.headers);

    console.log("BODY:");
    console.log(JSON.stringify(req.body, null, 2));

    return res.sendStatus(200);

}

module.exports = {
    verificar,
    recibir
}