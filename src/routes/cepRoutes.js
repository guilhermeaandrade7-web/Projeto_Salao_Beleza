const express = require('express');

const axios = require('axios');

const router = express.Router();

router.get('/:cep', async (req, res) => {

    const { cep } = req.params;

    try{

        const resposta = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        res.json(resposta.data);

    } catch(error){

        res.status(500).json({
            mensagem: 'Erro ao buscar CEP'
        });
    }
});

module.exports = router;