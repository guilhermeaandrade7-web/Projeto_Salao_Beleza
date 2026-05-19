const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senai2025',
    database: 'salao_db'
});

connection.connect((err) => {
    if(err){
        console.log('Erro ao conectar');
    } else {
        console.log('Conectado ao MySQL');
    }
});

module.exports = connection;