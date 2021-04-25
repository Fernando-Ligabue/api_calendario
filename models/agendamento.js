const mongoose = require("mongoose");

const Agendamento = mongoose.model('Agendamento',
    {
        cliente: {
            type: String,
            required: true,
            trim: true
        },
        imovel: {
            type: Number,
            required: true,
            trim: true
        },
        data: {
            type: Date,
            required: true,
            trim: true
        }
    })

module.exports = Agendamento;