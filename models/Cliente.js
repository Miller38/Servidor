const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({
    nombre:  {
        type: String,
        required: true
    },
    apellido:  {
        type: String,
        required: true
    },
    direccion:  {
        type: String,
        required: true
    },
    telefono:  {
        type: String,
        required: true
    },
    ciudad:  {
        type: String,
        required: true
    },
    fechaCreacion:  {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);