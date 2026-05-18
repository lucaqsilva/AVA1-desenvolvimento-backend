const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API Backend funcionando 🚀',
        status: 'online'
    });
});

app.get('/status', (req, res) => {
    res.json({
        servidor: 'ativo',
        porta: 5000
    });
});

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
