const express = require('express');

require('./src/database/database');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API do salão funcionando');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    // projeto backend salão
});