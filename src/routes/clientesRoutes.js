const express = require('express');

const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', (req, res) => {

    res.send('Criar cliente');
});

router.get('/', authMiddleware, (req, res) => {

    const { nome, page = 1, limit = 5 } = req.query;

    let clientes = [
        { id: 1, nome: 'Maria' },
        { id: 2, nome: 'João' },
        { id: 3, nome: 'Ana' },
        { id: 4, nome: 'Carlos' },
        { id: 5, nome: 'Pedro' },
        { id: 6, nome: 'Fernanda' }
    ];

    if(nome){

        clientes = clientes.filter(cliente =>
            cliente.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    const inicio = (page - 1) * limit;

    const fim = inicio + Number(limit);

    const clientesPaginados = clientes.slice(inicio, fim);

    res.json(clientesPaginados);
});

router.put('/:id', (req, res) => {

    res.send('Atualizar cliente');
});

router.delete('/:id', (req, res) => {

    res.send('Deletar cliente');
});

module.exports = router;