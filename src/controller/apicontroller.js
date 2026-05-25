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
        var entry = (req.body["entry"])[0];   
        var changes = (entry["changes"])[0];
        console.log(changes);

    } catch (e) {
        console.log(e);  
        res.send("EVENT_RECEIVED");
    }
module.exports = {
    verificar, recibir
}