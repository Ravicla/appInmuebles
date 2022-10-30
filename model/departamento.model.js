const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departamentoSchema = Schema ( {
    piso: {
        type: Number,
        required: [true, 'Debes introducir el numero de piso'],
        min: [1, 'El primer piso es el 1'],
        max: [15, 'El ultimo piso es el 15']  
    }, 

    letra: {
        type: String,
        required: [true, 'Debes introducir la letra que pertenece al numero del departamento']
    }, 

    extension_m2: {
        type: Number,
        required: [true, 'Debes introducir la extencion en metros cuadrados del departamento']
    }, 

    numero_habitaciones: {
        type: Number,
        required: [true, 'Debes introducir el numero de habitacion que tiene el departamento']
    }, 

    alquilado: {
        type: Boolean,
        required: [true, 'Debes indicar si el departamentop esta alquilado o no']
    },

    nombre_propietario: {
        type: String,
        required: [true, 'Debes indicar el nombre del propietario del departamento']
    },

    mail_contacto:{
        type: String,
        required: [true, 'Debes ingresar el correo de contacto']
    },
});

module.exports = mongoose.model('departamento', departamentoSchema, 'departamentos')