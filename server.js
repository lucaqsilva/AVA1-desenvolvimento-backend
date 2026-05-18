const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API Backend funcionando 🚀',
        status: 'online'
    });
});

app.listen(5000, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 5000');
});
