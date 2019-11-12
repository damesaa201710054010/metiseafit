const { Schema, model } = require('mongoose');

const connectionSchema = new Schema(
    {
        tipoDeActividad: {type: String, required: true},
        semestre: { type: String, required: true},
        fecha: String,
        descripcion: String
    }, {
        timestamps: true
    });

module.exports = model('inscripciones', connectionSchema);