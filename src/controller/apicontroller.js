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

        const entry = req.body.entry[0];
        const changes = entry.changes[0];
        const value = changes.value;

        const contacto = value.contacts[0];
        const mensaje = value.messages[0];

        const nombre = contacto.profile.name;
        const numero = mensaje.from;
        const texto = mensaje.text.body;

        console.log("NOMBRE:", nombre);
        console.log("NUMERO:", numero);
        console.log("MENSAJE:", texto);

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