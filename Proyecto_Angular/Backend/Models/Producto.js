const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    categoria:{
        type: String,
        require: true
    },
    descripcion:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    imagen:{
        type: String,
        require: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductosSchema);