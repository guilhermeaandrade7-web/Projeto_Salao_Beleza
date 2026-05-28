const express = require('express');

const authRoutes = require('./src/routes/authRoutes');

const clientesRoutes = require('./src/routes/clientesRoutes');

const agendamentosRoutes = require('./src/routes/agendamentosRoutes');

const cepRoutes = require('./src/routes/cepRoutes');

const errorMiddleware = require('./src/middlewares/errorMiddleware');

require('./src/database/database');

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);

app.use('/agendamentos', agendamentosRoutes);

app.use('/clientes', clientesRoutes);

app.use('/cep', cepRoutes);

app.get('/', (req, res) => {

    res.send('API do salão funcionando');
});

app.listen(3000, () => {

    console.log('Servidor rodando na porta 3000');
});