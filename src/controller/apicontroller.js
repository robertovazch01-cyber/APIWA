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
        
       var entry = (req.body["entry"])[0];
       var changes = (entry["changes"])[0];
       var value = changes["value"];
       var objetoMensaje = value["messages"][0];

        console.log(objetoMensaje);
        res.send("EVENT_RECEIVED");

    } catch(e) {
        console.log(e);
        res.send("EVENT_RECEIVED");
    }
    console.log(e);
}

module.exports = {
    verificar,
    recibir
}

