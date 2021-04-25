const mongoose = require("mongoose");

const Agendamento = mongoose.model('Agendamento',
    {
        cliente: {
            type: String,
            required: true,
            trim: true
        },
        imovel_id: {
            type: Number,
            required: true,
            trim: true
        },
        date: {
            type: Date,
            required: true,
            trim: true
        }
    })

module.exports = Agendamento;