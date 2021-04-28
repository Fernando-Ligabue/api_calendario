var express = require('express');
var router = express.Router();
const agendamentoController = require("../controllers/agendamentoController.js");


router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.get("/agendamentos", agendamentoController.index)

router.get("/agendamentos/:id", agendamentoController.show)

router.post("/agendamentos", agendamentoController.store)

router.put("/agendamentos/:_id", agendamentoController.update)

router.delete("/agendamentos/:_id", agendamentoController.destroy)


module.exports = router