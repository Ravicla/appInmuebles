const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departamentoSchema = Schema ( {
    piso: Number,
    letra: String,
    extension_m2: Number,
    numero_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    mail_contacto: String
});

module.exports = mongoose.model('departamento', departamentoSchema, 'departamentos')