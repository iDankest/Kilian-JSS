const mongoose = require('mongoose');

const RegistroSchema = mongoose.Schema({
    nick:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Registro', RegistroSchema);