const express = require('express');

const router = express.Router();

const agendamentos = [];

router.post('/', (req, res) => {

    const { cliente, horario } = req.body;

    const data = new Date(horario);

    const diaSemana = data.getDay();

    if(diaSemana === 0){

        return res.status(400).json({
            mensagem: 'Não é permitido agendar aos domingos'
        });
    }

    const horarioExistente = agendamentos.find(
        agendamento => agendamento.horario === horario
    );

    if(horarioExistente){

        return res.status(400).json({
            mensagem: 'Horário já agendado'
        });
    }

    agendamentos.push({
        cliente,
        horario
    });

    res.status(201).json({
        mensagem: 'Agendamento criado com sucesso',
        agendamentos
    });
});

module.exports = router;