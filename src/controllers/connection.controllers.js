const connectionCtrl = {};
const Connection = require('../models/Connection');

connectionCtrl.expose = async (req, res) => {
    console.log(req.body.queryResult.intent.displayName);
    if (req.body.queryResult.intent.displayName == "inscripciones") {
        console.log("aca");
        response = "It works!";
        res.json({
            "fulfillmentText": response
        });
    }
};

module.exports = connectionCtrl;