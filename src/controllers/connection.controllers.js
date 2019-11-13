const connectionCtrl = {};
const Connection = require('../models/Connection');

connectionCtrl.expose = async (req, res) => {
    console.log(req.body.queryResulte);
    if (req.body.queryResult.intent.displayName == "fecha de inscripcion") {
        //console.log("aca");
        que = Connection.find({'tipoDeActividad' : 'inscripcion'});
        console.log(que);
        response = que.semestre;
        res.json({
            "fulfillmentText": response
        });
    }else if(req.body.queryResult.intent.displayName == "fechas de entrevista"){
        //console.log("aca 2");
        response = "It works!";
        res.json({
            "fulfillmentText": response
        });
    }
};

module.exports = connectionCtrl;