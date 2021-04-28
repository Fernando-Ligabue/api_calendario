const Agendamento = require("../models/agendamento.js")

//métodos para CRUD

const show = (req, res) => {
    Agendamento.findById(req.params.id).then((agendamento) => {
        res.json(agendamento ? agendamento : {})
    }).catch(() => res.status(400).json({ error: "Ocorreu um erro ao executar a sua solicitação." }))
}

const store = (req, res) => {
    const agendamento = new Agendamento({ cliente: req.body.cliente, imovel_id: req.body.imovel_id, date: req.body.date });
    agendamento.save().then(() => {
        console.log('Agendamento efetuado com sucesso!!')
        res.status(201).json({ error: 'Agendamento efetuado com sucesso!!' })
    }).catch((e) => res.status(400).json({ error: 'Ocorreu erro ao efetuar o agendamento!!' }))
}

const update = async (req, res) => {
    try {
        const result = await Agendamento.updateOne(req.params, req.body)
        res.json({ updated: result.nModified == 1 })
    } catch (e) {
        res.status(400).json({ error: "Ocorreu um erro ao atualizar os dados!" })
    }
}

const destroy = (req, res) => {
    Agendamento.deleteOne(req.params).then((result) => {
        res.json({ deleted: result.deletedCount > 0 })
    }).catch(() => res.status(400).json({ error: 'Ocorreu erro ao apagar!' }))
}

module.exports = {
    index: async (req, res) => {
        try {
            const agendamentos = await Agendamento.find({})
            res.json(agendamentos)
        } catch (e) { res.status(400).json({ error: "Ocorreu um erro!" }) }
    },
    show,
    store,
    update,
    destroy
}