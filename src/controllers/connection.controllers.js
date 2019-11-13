const connectionCtrl = {};
const Connection = require('../models/Connection');

connectionCtrl.expose = async (req, res) => {
    console.log(req.body.queryResulte);
    if (req.body.queryResult.intent.displayName == "fecha de inscripcion") {
        //console.log("aca");
        que = Connection.find({"tipoDeActividad" : "inscripcion"});
        //console.lo(que);
        response = "Para 2020-1 de agosto 6 a Noviembre 22";
        res.json({
            "fulfillmentText": response
        });
    }else if(req.body.queryResult.intent.displayName == "fechas de entrevista"){
        //console.log("aca 2");
        response = "De agosto 12 a noviembre 25";
        res.json({
            "fulfillmentText": response
        });
    }
};

module.exports = connectionCtrl;